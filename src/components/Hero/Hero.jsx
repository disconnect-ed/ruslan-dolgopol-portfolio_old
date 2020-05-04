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

const Hero = () => {

    const [color, setColor] = useState(null);
    return (
        <section className='hero'>

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
                            typeSpeed={40}
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
                    <div onMouseOver={() => setColor('pink')}
                         onMouseOut={() => setColor('transparent')}>
                        <MainButton
                            color={'pink'}   href={'about'} title={'О себе'} />
                    </div>
                    <div onMouseOver={() => setColor('lime')}
                         onMouseOut={() => setColor('transparent')}>
                        <MainButton
                            color={'lime'}   href={'#'} title={'Навыки'} />
                    </div>
                    <div onMouseOver={() => setColor('red')}
                         onMouseOut={() => setColor('transparent')}>
                        <MainButton
                            color={'red'}   href={'#'} title={'Работы'} />
                    </div>
                    <div onMouseOver={() => setColor('yellow')}
                         onMouseOut={() => setColor('transparent')}>
                        <MainButton
                            color={'yellow'}   href={'contacts'} title={'Контакты'} />
                    </div>
                </div>
            </div>
           <ContainerForParticles color={color}/>

        </section>
    )
}

export default Hero;