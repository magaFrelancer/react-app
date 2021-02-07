import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {Route} from "react-router-dom";


const App = (props) => {
    return (
        <div className="app">
            <Header/>
            <main className="main">
                <div className="container">
                    <div className="main__inner">
                        <Navbar/>
                        <Route path="/dialogs" render={() => <Dialogs state={props.state.messagesPage} dispatch={props.dispatch}/>}/>
                        <Route path='/content' render={() => <Content profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
