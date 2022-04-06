import React from "react";
import './DateTitle.component.css';


const DateTitle = () => {
 
    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuerday'];
// set today date
    return (
        <div>
            <div className="row1">
                <h2 className="day-date">{days[today.getDay()] + ', '}</h2>
                <h2 className="date">{today.getDate() >= 10 ? today.getDate() : '0' + today.getDate()}</h2>
            </div>
            <div className="year-month">
                {today.getMonth() >= 10 ? today.getMonth() : '0' + today.getMonth()}
                /
                {today.getFullYear()}</div>
        </div>
    )
}

export default DateTitle;