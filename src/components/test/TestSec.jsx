import React, { useState, useEffect } from 'react'
import './testSec.css'
import Fade from 'react-reveal/Fade';

const TestSec = () => {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    let myDate = (date.getUTCFullYear()) + "/" + (date.getMonth() + 1) + "/" + (date.getUTCDate());
    return (
        <div className='clock'>
            <Fade right>
                <h1 >  {date.toLocaleTimeString()}</h1>
                <h2 className='text-center'>{myDate}</h2>
            </Fade>
        </div>
    )
}

export default TestSec