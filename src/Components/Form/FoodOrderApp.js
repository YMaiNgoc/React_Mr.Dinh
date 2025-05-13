import React, { useState } from 'react';
import './FoodOrderApp.css'; // nhớ import file CSS này

const FoodOrderApp = () => {
  const [menu] = useState([
    { id: 1, name: 'Phở bò', price: 40000 },
    { id: 2, name: 'Bánh mì', price: 20000 },
    { id: 3, name: 'Cơm tấm', price: 50000 },
    { id: 4, name: 'Hủ tiếu', price: 35000 },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [money, setMoney] = useState('');
  const [total, setTotal] = useState(0);
  const [remaining, setRemaining] = useState(0);

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleOrder = () => {
    const selectedFoods = menu.filter(item => selectedItems.includes(item.id));
    const totalPrice = selectedFoods.reduce((sum, item) => sum + item.price, 0);
    setTotal(totalPrice);
    setRemaining(money - totalPrice);
  };

  return (
    <div className="container">
      <h2>Menu</h2>
      {menu.map(item => (
        <div key={item.id} className="menu-item">
          <label>
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleSelectItem(item.id)}
            />
            {item.name} - {item.price.toLocaleString()}đ
          </label>
        </div>
      ))}

      <input
        type="number"
        placeholder="Nhập số tiền hiện có"
        value={money}
        onChange={(e) => setMoney(Number(e.target.value))}
        className="input-money"
      />
      <button onClick={handleOrder} className="order-button">
        Đặt hàng
      </button>

      <div className="result">
        <h3>Kết quả:</h3>
        <p><strong>Tổng tiền món đã chọn:</strong> {total.toLocaleString()}đ</p>
        <p><strong>Tiền dư còn lại:</strong> {remaining.toLocaleString()}đ</p>
      </div>
    </div>
  );
};

export default FoodOrderApp;
