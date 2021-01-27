import React from "react";
import {NavLink} from "react-router-dom";
import img from "../imgs/new-user.jpg";
import './DialogItem.css'

export default function DialogItem({name, id}) {

    let path = '/dialogs/' + id;
    return (
        <NavLink to={path} className="dialogs__menu-item">
            <div className="dialogs-menu__img-block">
                <img className="dialogs-menu__img" src={img} alt="new-user"/>
            </div>
            <div className="dialogs-menu__info-block">
                <div className="dialogs-menu__name">{name}</div>
            </div>
        </NavLink>
    )
};