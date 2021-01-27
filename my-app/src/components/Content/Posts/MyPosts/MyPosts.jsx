import React from 'react';
import './MyPosts.css'

export default function MyPosts({message, date}) {
    return (
        <div className="section__posts-item">
            <div className="section__posts-user">
                <div className="section__posts-img">
                    <img src="https://images.wallpaperscraft.ru/image/kot_geterohromiia_chernyj_kot_128354_1280x1024.jpg" alt="userImg"/>
                </div>
                <div className="section__posts-description">
                    <div className="section__posts-name">El Magomed</div>
                </div>
            </div>
            <div className="section__posts-value">
                <div className="section__posts-text">
                    {message}
                </div>
                <div className="section__posts-date">{date}</div>
            </div>
        </div>
    )
}