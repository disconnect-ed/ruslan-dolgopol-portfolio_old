import React from "react";
import './Flipper.css'

const SkillsCard = (props) => {
    return (
        <div className="skills-content__card">
            <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                        <div className="skills-content__card-img">
                            <img src={`img/skills/${props.img}`} alt="React"/>
                        </div>
                    </div>
                    <div className="back">
                        <div className="skills-content__card-descr">
                            <h3 className="skills-content__card-descr__title">{props.title}</h3>
                            <p className="skills-content__card-descr__text">{props.descr}</p>
                            <h4 className="skills-content__card-descr__subtitle">Уровень:</h4>
                            <p className="skills-content__card-descr__text">{props.level}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsCard;