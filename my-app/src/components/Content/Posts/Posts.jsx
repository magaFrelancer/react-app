import React from 'react';
import './Posts.css';
import MyPosts from "./MyPosts/MyPosts";
import {addPostActionCreate, updateNewPosText} from "../../../redux/state";



export default function Posts(props) {
    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreate())
    };
    const onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPosText(text);
        props.dispatch(action)
    };
    return (
        <div>
            <div className="section__inputs">
                <div className="section__inputs-title" >My posts</div>
                <textarea onChange={onPostChange} ref={newPostElement} className="section__inputs-textarea" placeholder="Текст..." value={props.newPostsText}/>
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