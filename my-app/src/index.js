import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}
                     store={store}
                     // updateNewPostText={store.updateNewPostText.bind(store)}
                     // updateNewMessageText={store.updateNewMessageText.bind(store)}
                     // addMessage={store.addMessage.bind(store)}
                 />
            </Router>

        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
