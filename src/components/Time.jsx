import { useState } from 'react';
import { useStopwatch } from "react-timer-hook";

function Time() {
    const [date, setDate] = useState(new Date());
    function refreshClock() {
        setDate(new Date())
    }
    setInterval(refreshClock, 1000);
    const stopwatchOffset = new Date();
    stopwatchOffset.setSeconds(stopwatchOffset.getSeconds());
    const {
        seconds,
        minutes,
        start,
        pause,
        reset
    } = useStopwatch({ offsetTimestamp: stopwatchOffset });
    const second = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const minute = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return (
        <div className="container bg-light rounded time-container">
            <div className="flex-row bd-highlight mb-3 d-flex">
                <div className=" bd-highlight">
                    <span style={{ fontWeight: 600, marginRight: '5px' }}>Started at:</span>
                    <span id="clock d-flex align-items-center" style={{ marginRight: '50px' }}>{date.toLocaleTimeString()}</span>
                </div>
                <div className=" bd-highlight">
                    <span style={{ fontWeight: 600, marginRight: '5px' }}>Timer:</span>
                    <span style={{ marginRight: '50px' }}>{minute}:{second}</span>
                </div>
            </div>
            <div>
                <label for="inputDescription5" className="form-label text-left">Task Description:</label>
                <input type="text" id="inputDescription5" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Went for a run" />
                <div id="passwordHelpBlock" className="d-flex flex-row-reverse bd-highlight my-3">
                    <button type='button' onClick={reset} className="btn btn-outline-primary mx-2">Stop</button>
                    <button type='button' onClick={pause} className="btn btn-outline-primary mx-2">Pause</button>
                    <button type='button' onClick={start} className="btn btn-primary mx-2">Start</button>
                </div>
            </div>
        </div>
    )
}

export default Time;