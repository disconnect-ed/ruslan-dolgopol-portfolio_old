import React from "react";
import ContainerForParticles from "../../common/Particles/Particles";
import './Main.sass'
import HeaderTitle from "../../common/HeaderTitle/HeaderTitle";
import {faHouseUser} from '@fortawesome/free-solid-svg-icons'
import NavBar from "../NavBar/NavBar";
import {Animated} from "react-animated-css";

const Main = () => {
    return (
        <section className='main'>
            <header className="main-header">
                <NavBar color={'blue'}/>
            </header>
            <div className="main-content content">
                <Animated animationIn="zoomIn" isVisible={true}>
                    <div className="container">
                        <HeaderTitle title={'Главная'} subtitle={'Портфолио Руслана Долгопола'} icon={faHouseUser}/>
                        <div className="main-content-message">
                            <h3>Привет!</h3>
                            <h3>Данный сайт-портфолио создан исключительно для демонстрации моих скромных умений и более
                                быстрого поиска работодателя. Если вы заинтересованы в сотрудничестве, то прошу
                                связаться со мной! Спасибо за внимимание :)</h3>
                        </div>
                    </div>
                </Animated>
            </div>

            <ContainerForParticles/>
            <div className={'background blue'}></div>
        </section>
    )
}

export default Main;