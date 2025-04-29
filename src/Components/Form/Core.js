import React, { useState } from 'react'

function Core() {
  const [coreToan, setCoreToan] = useState('');
  const [coreLy, setCoreLy] = useState('');
  const [average, setAverage] = useState(null);
  const [evaluation, setEvaluation] = useState('');
  const calculateAverage = () => {
    const total = (Number(coreToan) + Number(coreLy))/ 2;
    // const avg = total / 2;
    setAverage(total );
    if (total  >= 9) {
      setEvaluation('Xuất sắc');
    } else if (total >= 7) {
      setEvaluation('Khá');
    } else if (total  >= 5) {
      setEvaluation('Trung bình');
    } else {
      setEvaluation('Kém');
    }
  };

  return (
    <div className='container'>
      <h1>Tính điểm của học sinh</h1>
      
      <div>
        <p>Điểm toán</p>
        <input 
          type="number" 
          value={coreToan} 
          onChange={(e) => setCoreToan(e.target.value)} 
        />
      </div>
      
      <div>
        <p>Điểm lý</p>
        <input 
          type="number" 
          value={coreLy} 
          onChange={(e) => setCoreLy(e.target.value)} 
        />
      </div>
      
      <div>
        <button onClick={calculateAverage}>Tính điểm trung bình</button>
      </div>
      
      {average !== null && (
        <div>
          <h3>Điểm trung bình: {average}</h3>
          <h3>Đánh giá: {evaluation}</h3>
        </div>
      )}
    </div>
  );
}

export default Core;
