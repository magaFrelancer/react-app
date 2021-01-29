import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {addPost} from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App state={state} addPost={addPost}/>
            </Router>

        </React.StrictMode>,
        document.getElementById('root')
    );
};
export default rerenderEntireTree;


