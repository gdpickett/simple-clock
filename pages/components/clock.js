import { useEffect, useState } from "react";

let time = new Date();
const date = time.toDateString();
const dayNum = time.getDate();
const today = time.getDay();
const month = time.getMonth();
const year = time.getFullYear();

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

function Clock() {
    const [realTime, setTime] = useState(0);
    
    useEffect(() => {
        let current = new Date();
        var currentT = current.toLocaleTimeString();
        const interval = setInterval(() => setTime(currentT), 1000);
        return () => {
            clearInterval(interval);
        };
    }, [realTime]);
    
    return (
        <div>
            <div><h1>{days[today]} {dayNum} {months[month]} {year}</h1></div>
            <div><h3>{realTime}</h3></div>
        </div>
    )}

export default Clock
