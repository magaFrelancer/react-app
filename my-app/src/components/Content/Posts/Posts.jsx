import React from 'react';
import './Posts.css';
import MyPosts from "./MyPosts/MyPosts";

export default function Posts(props) {
    const newPostElement = React.createRef();
    const addPost = () => {
        const text = newPostElement.current.value;
        props.addPost(text)
    };
    return (
        <div>
            <div className="section__inputs">
                <div className="section__inputs-title">My posts</div>
                <textarea ref={newPostElement} className="section__inputs-textarea" placeholder="Текст..."/>
                <button className="section__inputs-button" onClick={addPost}>Send Post</button>
            </div>
            <div className="section__posts">
                {
                    props.posts.map((item, index) => (<MyPosts message={item.message} date={item.date} key={index}/>))
                }
            </div>
        </div>
    )
}