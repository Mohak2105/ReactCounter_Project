import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const Increament = () => {
        setCount(count + 1)
    }

    const Decrement = () => {
        setCount(count - 1)
    }

    const Reset = () => {
        setCount(0)
    }

    return (
        <>
            <div className='Main'>
                <div className='Row'>
                    <li className='Dec'><span className="material-symbols-outlined" onClick={Decrement}>do_not_disturb_on</span></li>
                    <h1 className='Count'>{count}</h1>
                    <li className='Inc'><span className="material-symbols-outlined" onClick={Increament}>add_circle</span></li>
                </div>

                <li className='Res'><span className="material-symbols-outlined" onClick={Reset}>refresh</span></li>

                <div  className="modal">
                   
                    <div className="modal-content">
                        <span class="material-symbols-outlined close">cancel</span>
                        <div className='message'>
                            <p className='reset'>Reset?</p>
                            <button className='button'>Yes</button>
                            <button className='button'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter