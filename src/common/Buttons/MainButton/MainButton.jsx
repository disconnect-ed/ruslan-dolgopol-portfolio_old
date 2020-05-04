import React from "react";
import {NavLink} from "react-router-dom";
import './MainButton.sass'

const MainButton = (props) => {
    return (
        <NavLink className={`main__button main__button_${props.color}`} to={props.href} >
            <span className={`button__line button__line-top button__line-top_${props.color}`}></span>
            <span className={`button__line button__line-right button__line-right_${props.color}`}></span>
            <span className={`button__line button__line-bottom button__line-bottom_${props.color}`}></span>
            <span className={`button__line button__line-left button__line-left_${props.color}`}></span>
            {props.title}
        </NavLink>
    )
}

export default MainButton;