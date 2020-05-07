import React from "react";
import './SectionTitle.sass'

const SectionTitle = (props) => {
    return (
        <div className='section-title' >
            <h3 className="section-title__title">{props.title}</h3>
        </div>
    )
}

export default SectionTitle;