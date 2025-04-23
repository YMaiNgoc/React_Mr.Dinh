import React, { useState } from 'react'

export default function Dientich_hcn() {
    const [length, setLenght] = useState(0);
    const [width, setWidth] = useState(0);
    const[area, setArea]= useState(0);
    const CaculateArea = () => {
        setArea(length*width);
    }
  return (
    <div >
        <h2>Tính diện tích hình chữ nhật:</h2>
        <div>
            <p>Chiều dài:</p>
            <input type ="number" value={length} onChange={(e)=>setLenght(Number(e.target.value))}></input>
        </div>
        <div>
            <p>Chiều rộng:</p>
            <input type ="number" value={width} onChange={(e)=>setWidth(Number(e.target.value))}></input>
        </div>
        <div>
            <button onClick={CaculateArea}>Tính diện tích:</button>
            <h3>Diện tích:{area}</h3>
        </div>
      
    </div>
  )
}
