import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SectionTitle.sass'

const SectionTitle = (props) => {
    return (
        <div className='section-title'>
            <div className="section-title__icon">
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <h2 className="section-title__title">{props.title}</h2>
            <h4 className="section-title__subtitle">{props.subtitle}</h4>
        </div>
    )
}

export default  SectionTitle