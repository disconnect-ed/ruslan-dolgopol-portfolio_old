import React from "react";
import ContainerForParticles from "../../common/Particles/Particles";
import './Works.sass'
import HeaderTitle from "../../common/HeaderTitle/HeaderTitle";
import NavBar from "../NavBar/NavBar";
import {faEye} from '@fortawesome/free-regular-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {Animated} from "react-animated-css";
import LinkButton from "../../common/Buttons/LinkButton/LinkButton";

const Works = () => {
    return (
        <section className='works'>
            <header className="works-header">
                <NavBar color={'red'}/>
            </header>
            <div className="works-content content">
                <Animated animationIn="zoomIn" isVisible={true}>
                    <div className="container">
                        <HeaderTitle title={'Мои работы'} subtitle={'Портфолио Руслана Долгопола'} icon={faGithub}/>
                        <div className="works-content__cards">
                            <div className="works-content__card">
                                <img src="./img/works/work.png" alt="work"/>
                                <div className="works-content__card__descr">
                                    <div>
                                        <h3 className="works-content__card__descr__title">Верстка сайта по PSD
                                            макету</h3>
                                        <LinkButton icon={faEye} color={'red'} title={'Смотреть'} href={'https://vk.com/r.dolgopol'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="works-content-all">
                            <LinkButton icon={faGithub} color={'red'} title={'Все работы'} href={'#'}/>
                        </div>
                    </div>
                </Animated>
            </div>

            <ContainerForParticles/>
            <div className={'background red'}></div>
        </section>
    )
}

export default Works;