import React, { useState } from 'react';

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
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Menu</h2>
      {menu.map(item => (
        <div key={item.id}>
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

      <div style={{ marginTop: '20px' }}>
        <input
          type="number"
          placeholder="Nhập số tiền hiện có"
          value={money}
          onChange={(e) => setMoney(Number(e.target.value))}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <button onClick={handleOrder} style={{ width: '100%', padding: '10px' }}>
          Đặt hàng
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Kết quả:</h3>
        <p><strong>Tổng tiền món đã chọn:</strong> {total.toLocaleString()}đ</p>
        <p><strong>Tiền dư còn lại:</strong> {remaining.toLocaleString()}đ</p>
      </div>
    </div>
  );
};

export default FoodOrderApp;