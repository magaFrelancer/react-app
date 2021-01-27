import React from 'react';
import './Navbar.css';
import {NavLink as Link} from "react-router-dom";

export default function Navbar() {
    return (
        <aside className="navbar">
                <ul className="navbar__menu">
                    <li className="navbar__menu-item"><Link to="/content" className="navbar__menu-link">Profile</Link></li>
                    <li className="navbar__menu-item"><Link to="/dialogs" className="navbar__menu-link">Messages</Link></li>
                    <li className="navbar__menu-item"><Link to="/news" className="navbar__menu-link">News</Link></li>
                    <li className="navbar__menu-item"><Link to="/music" className="navbar__menu-link">Music</Link></li>
                    <li className="navbar__menu-item"><Link to="/settings" className="navbar__menu-link">Settings</Link></li>
                </ul>
        </aside>
    )
}