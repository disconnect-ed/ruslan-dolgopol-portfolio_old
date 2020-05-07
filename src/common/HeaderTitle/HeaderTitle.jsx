import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './HeaderTitle.sass'

const HeaderTitle = (props) => {
    return (
        <div className='header-title'>
            <div className="header-title__icon">
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <h2 className="header-title__title">{props.title}</h2>
            {/*<h4 className="header-title__subtitle">{props.subtitle}</h4>*/}
        </div>
    )
}

export default  HeaderTitle