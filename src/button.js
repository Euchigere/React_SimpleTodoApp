import React, { useState } from 'react'

const Button = () => {
    const [text, setText] = useState(0)

    let val = 1;
    const getValue = (e) => {
        val = e.target.value
    }
    const increment = () => {
        setText(text => text + Number(val))
    }

    return (
        <div>
        <input type="number" min="0" onChange={getValue}></input>
        <button onClick={increment}>Click</button>
        <div>{text}</div>
        </div>
    )
}

export default Button