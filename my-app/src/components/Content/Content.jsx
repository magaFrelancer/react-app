import React from 'react';
import './Content.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Content(props) {
    return (
        <section className="section">
            <ProfileInfo/>
            <Posts store={props.store}
                   dispatch={props.dispatch}
            />
        </section>
    )
}