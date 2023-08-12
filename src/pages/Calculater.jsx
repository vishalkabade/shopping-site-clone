import React, { useState } from 'react'
import "../styles/cal.css"
function Calculater() {
    const [first, setfirst] = useState(0)
    const [second, setsecond] = useState(0)
    const [total, settotal] = useState(0)
    const addition = () => {
        const totalAdd = first + second
        settotal(totalAdd)

    }
    const sub = () => {
        const totalSub = first - second
        settotal(totalSub)
    }
    const mul = () => {
        const totalMul = first * second
        settotal(totalMul)
    }
    const div = () => {
        const totalDiv = first / second
        settotal(totalDiv)
    }

    return <>
    <div ><h1>Calculator</h1></div>
        <div className='papa'>
            <div className='main'>
                <input value={first} type="number" onChange={(e) => setfirst(+e.target.value)} />
                <br />
                <input value={second} type="number" onChange={(e) => setsecond(+e.target.value)} />
                <br />
                {/* <input value={total} type="text" /> */}
                <h1>Output : {total}</h1>

            </div>
            <div className='buttonall'>
                <button onClick={addition}>Add</button>
                <button onClick={sub} >Sub</button>
                <button onClick={mul}>mul</button>
                <button onClick={div}>Div</button>
            </div>

        </div>
    </>
}

export default Calculater