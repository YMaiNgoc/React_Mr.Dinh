import { useState } from "react";


export default function Infor_student() {
    const [name, setName] = useState('');
    return (
        <>
            <h1>Hello tôi là:  {name}</h1>
            <input type="text" onChange={(e) => (setName(e.target.value))}/>
        </>
    )

}
