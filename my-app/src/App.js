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
                        <Route path='/content' render={() => <Content dispatch={props.dispatch} store={props.store} />}/>
                        <Route path="/dialogs" render={() => <Dialogs dispatch={props.dispatch} store={props.store}/>}/>
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
