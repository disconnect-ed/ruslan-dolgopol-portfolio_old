import React from "react";
import {NavLink} from "react-router-dom";
import './NavButton.sass'


const NavButton = (props) => {
    return (
        <NavLink className={`nav__button nav__button_${props.color} ${props.active}`} to={props.href} >
            <span className={`button__line button__line-top button__line-top_${props.color}`}></span>
            <span className={`button__line button__line-right button__line-right_${props.color}`}></span>
            <span className={`button__line button__line-bottom button__line-bottom_${props.color}`}></span>
            <span className={`button__line button__line-left button__line-left_${props.color}`}></span>
            {props.title}
        </NavLink>
    )
}

export default NavButton;