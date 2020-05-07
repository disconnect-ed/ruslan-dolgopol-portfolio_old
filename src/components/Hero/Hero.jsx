import React, {useState} from "react";

import Typed from 'react-typed';
import './Hero.sass'
import MainButton from "../../common/Buttons/MainButton/MainButton"
import '../../common/Buttons/MainButton/MainButtonStyles/Pink.sass'
import '../../common/Buttons/MainButton/MainButtonStyles/Blue.sass'
import '../../common/Buttons/MainButton/MainButtonStyles/Lime.sass'
import '../../common/Buttons/MainButton/MainButtonStyles/Red.sass'
import '../../common/Buttons/MainButton/MainButtonStyles/Yellow.sass'
import ContainerForParticles from "../../common/Particles/Particles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVk, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import {Animated} from "react-animated-css";

const Hero = () => {

    const [color, setColor] = useState(null);
    return (
        <section className='hero'>

            <div className={"hero-wrapper"}>
                <Animated animationIn="zoomIn" isVisible={true}>
                    <div className="container">
                        <div className="hero-wrapper-header">
                            <div className="hero-wrapper-header__logo">
                                <img src="./img/logo-white.png" alt="RD"/>
                            </div>
                            <h1 className="hero-wrapper-header__title">Ruslan Dolgopol</h1>
                            <h4 className="hero-wrapper-header__subtitle">

                                <Typed
                                    strings={['Junior Web Developer',
                                        'Junior React Developer',
                                        'Junior Front-End Developer']}
                                    typeSpeed={40}
                                    loop
                                />
                            </h4>
                        </div>
                        <div className="hero-wrapper__buttons">
                            <div onMouseOver={() => setColor('blue')}
                                 onMouseOut={() => setColor('transparent')}>
                                <MainButton
                                    color={'blue'} href={'main'} title={'Главная'}/>
                            </div>
                            <div onMouseOver={() => setColor('pink')}
                                 onMouseOut={() => setColor('transparent')}>
                                <MainButton
                                    color={'pink'} href={'about'} title={'О себе'}/>
                            </div>
                            <div onMouseOver={() => setColor('lime')}
                                 onMouseOut={() => setColor('transparent')}>
                                <MainButton
                                    color={'lime'} href={'skills'} title={'Навыки'}/>
                            </div>
                            <div onMouseOver={() => setColor('red')}
                                 onMouseOut={() => setColor('transparent')}>
                                <MainButton
                                    color={'red'} href={'works'} title={'Работы'}/>
                            </div>
                            <div onMouseOver={() => setColor('yellow')}
                                 onMouseOut={() => setColor('transparent')}>
                                <MainButton
                                    color={'yellow'} href={'contacts'} title={'Контакты'}/>
                            </div>
                        </div>
                        <div className="hero-wrapper__links">
                            <a href="https://vk.com/r.dolgopol" target='_blank' className="hero-wrapper__link">
                                <FontAwesomeIcon icon={faVk}/>
                            </a>
                            <a href="https://www.linkedin.com/in/ruslan-dolgopol/" target='_blank'
                               className="hero-wrapper__link">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a href="https://github.com/disconnect-ed" target='_blank' className="hero-wrapper__link">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                        <p className="hero-wrapper-copyright">
                            © 2020 by Ruslan Dolgopol
                        </p>
                    </div>
                </Animated>
            </div>
            <ContainerForParticles color={color}/>
            <div className={'background ' + color}></div>
        </section>
    )
}

export default Hero;