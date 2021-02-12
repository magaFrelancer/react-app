import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import './Dialogs.css';
import img from './imgs/new-user.jpg';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";



export default function Dialogs(props) {
    const state = props.store.getState().messagesPage;
    const newMessageBody = state.newMessageBody;


    function onSendMessageClick() {
        props.dispatch(sendMessageCreator());
    }
    function onNewMessageChange(e) {
        const body = e.target.value;
        props.dispatch(updateNewMessageTextCreator(body));
    }
    return (
        <section className="dialogs">
            <div className="dialogs__dialogs-block">
                <h1 className="dialogs__menu-title">Dialogs</h1>
                <ul className="dialogs__menu">
                    {state.dialogs.map((item, index) => (
                        <DialogItem name={item.name} id={item.id} key={index}/>
                    ))}
                </ul>
            </div>
            <div className="dialogs__message-block">
                <div className="message-block__info">
                    <div className="message-block__img-block">
                        <img src={img} alt="userImage" className="message-block__img"/>
                    </div>
                    <div className="message-block__info-block">
                        <div className="message-block__info-name">New User</div>
                    </div>
                </div>
                <div className="message-block__window">
                    {state.messages.map((item, index) => (
                        <Message from={item.from}
                                 message={item.message}
                                 date={item.date}
                                 key={index}
                        />
                    ))}
                </div>
                <div className="message-block__inputs">
                    <textarea onChange={onNewMessageChange}  className="message-block__new-message"
                              placeholder="Message..." value={newMessageBody}/>
                    <button onClick={onSendMessageClick} className="message-block__add-new-message">Send</button>
                </div>

            </div>
        </section>
    )
}