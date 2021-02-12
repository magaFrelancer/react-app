import React from 'react';
import './Posts.css';
import MyPosts from "./MyPosts/MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/content-reducer";




export default function Posts(props) {
    const state = props.store.getState().profilePage;
    const newPostText = state.newPostText;
    const addPost = () => {
        props.dispatch(addPostActionCreator())
    };
    const onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };
    return (
        <div>
            <div className="section__inputs">
                <div className="section__inputs-title" >My posts</div>
                <textarea onChange={onPostChange}  className="section__inputs-textarea" placeholder="Текст..." value={newPostText}/>
                <button className="section__inputs-button" onClick={addPost}>Send Post</button>
            </div>
            <div className="section__posts">
                {
                    state.posts.map((item, index) => (<MyPosts message={item.message} date={item.date} key={index}/>))
                }
            </div>
        </div>
    )
}