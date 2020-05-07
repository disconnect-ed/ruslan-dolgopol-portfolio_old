import React from "react";
import ContainerForParticles from "../../common/Particles/Particles";
import './Contacts.sass'
import HeaderTitle from "../../common/HeaderTitle/HeaderTitle";
import {faAddressCard} from '@fortawesome/free-regular-svg-icons'
import {faVk} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faComment} from '@fortawesome/free-regular-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import NavBar from "../NavBar/NavBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Animated} from "react-animated-css";

const Contacts = () => {
    return (

        <section className='contacts'>
            <header className="contacts-header">
                <NavBar color={'yellow'}/>
            </header>
            <div className="contacts-content content">
                <Animated animationIn="zoomIn" isVisible={true}>
                    <div className="container">
                        <HeaderTitle title={'Свяжитесь со мной'} subtitle={'Портфолио Руслана Долгопола'}
                                     icon={faAddressCard}/>
                        <div className="contacts-content__cards">
                            <div className="contacts-content__card">
                                <div className="contacts-content__card__icon">
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </div>
                                <h5 className='contacts-content__card__title'>E-mail адрес:</h5>
                                <p className="contacts-content__card__text">
                                    ruslan199812@gmail.com
                                </p>
                            </div>
                            <div className="contacts-content__card">
                                <div className="contacts-content__card__icon">
                                    <FontAwesomeIcon icon={faPhone}/>
                                </div>
                                <h5 className='contacts-content__card__title'>Телефон:</h5>
                                <p className="contacts-content__card__text">
                                    A1: +375 (25) 695-26-10
                                </p>
                            </div>
                            <div className="contacts-content__card">
                                <div className="contacts-content__card__icon">
                                    <FontAwesomeIcon icon={faComment}/>
                                </div>
                                <h5 className='contacts-content__card__title'>Социальные сети:</h5>
                                <div className="contacts-content__card__links">
                                    <a target='_blank' href="https://vk.com/r.dolgopol"><FontAwesomeIcon
                                        icon={faVk}/> Вконтакте</a>
                                    <a target='_blank'
                                       href="https://www.linkedin.com/in/ruslan-dolgopol"><FontAwesomeIcon
                                        icon={faLinkedin}/> Linkedin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animated>
            </div>

            <ContainerForParticles/>
            <div className={'background yellow'}></div>
        </section>
    )
}

export default Contacts;