import React from "react";
import './Message.css';

export default function Message({from, message, date}){
    return (
        <div className={`message-block__window-message ${from}`}>
            {message}
            <div className="message-block__message-date">{date}</div>
        </div>
    )
};