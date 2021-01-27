import React from 'react';
import './ProfileInfo.css';
export default function ProfileInfo() {
    return (
        <div>
            <div className="section__header">
            </div>
            <div className="section__profile">
                <div className="section__profile-img">
                    <img
                        src="https://images.wallpaperscraft.ru/image/kot_geterohromiia_chernyj_kot_128354_1280x1024.jpg"
                        alt="userImg"/>
                </div>
                <div className="section__profile-description">
                    <div className="section__profile-name">El Magomed</div>
                    <div className="section__profile-city">City: Турция</div>
                    <div className="section__profile-age">Age: 18</div>
                    <div className="section__profile-website">WebSite: <a href="https://github.com" target="_blank" rel="noreferrer" >https://github.com</a></div>
                </div>
            </div>
        </div>
    )
}