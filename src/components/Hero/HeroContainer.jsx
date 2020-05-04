import React, {useState} from "react";
import Typed from 'react-typed';
import './Hero.sass'
import MainButton from "../../common/Buttons/MainButton/MainButton"
import '../../common/Buttons/MainButton/MainButtonStyles/Pink.sass'
import '../../common/Buttons/MainButton/MainButtonStyles/Blue.sass'
import '../../common/Buttons/MainButton/MainButtonStyles/Lime.sass'
import '../../common/Buttons/MainButton/MainButtonStyles/Red.sass'
import '../../common/Buttons/MainButton/MainButtonStyles/Yellow.sass'
import {CSSTransition} from "react-transition-group";
import ContainerForParticles from "../../common/Particles/Particles";

const HeroContainer = (props) => {

    const [color, setColor] = useState(null);
    return (

        <div className='hero'>
            <div className={"hero-wrapper"}>
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

                            loop
                        />
                    </h4>
                </div>
                <div className="hero-wrapper__buttons">
                    <div onMouseOver={() => setColor('blue')}
                         onMouseOut={() => setColor('transparent')}>
                        <MainButton
                            color={'blue'}   href={'main'} title={'Главная'} />
                    </div>

                </div>
            </div>
            <ContainerForParticles color={color} />

        </div>

    )
}

export default HeroContainer;