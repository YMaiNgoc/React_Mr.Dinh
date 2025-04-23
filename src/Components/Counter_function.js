import React, { useState } from 'react'

export default function Counter_function() {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Gía trị: {count}</h1>
      <button onClick={() => setCount(count+1)}>Tăng</button>
      <button onClick={() => setCount(count-1)}>Gỉam</button>
    </div>
  )
}
