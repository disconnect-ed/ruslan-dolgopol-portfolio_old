import React from "react";
import './LinkButton.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const LinkButton = (props) => {
    return (
        <a target='_blank' className={`nav__button nav__button_${props.color} ${props.active}`} href={props.href} >
            <span className={`button__line button__line-top button__line-top_${props.color}`}></span>
            <span className={`button__line button__line-right button__line-right_${props.color}`}></span>
            <span className={`button__line button__line-bottom button__line-bottom_${props.color}`}></span>
            <span className={`button__line button__line-left button__line-left_${props.color}`}></span>
            {props.icon && <FontAwesomeIcon icon={props.icon} />}
            {props.icon && ' '}
            {props.title}
        </a>
    )
}

export default LinkButton;