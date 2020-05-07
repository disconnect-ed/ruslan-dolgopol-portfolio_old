import React from "react";
import ContainerForParticles from "../../common/Particles/Particles";
import './About.sass'
import HeaderTitle from "../../common/HeaderTitle/HeaderTitle";
import {faUser} from '@fortawesome/free-solid-svg-icons'
import NavBar from "../NavBar/NavBar";
import {Animated} from "react-animated-css";

const About = () => {
    return (
        <section className='about'>
            <header className="about-header">
                <NavBar color={'pink'}/>
            </header>
            <div className="about-content content">
                <Animated animationIn="zoomIn" isVisible={true}>
                <div className="container">
                    <HeaderTitle title={'Немного о себе'} subtitle={'Портфолио Руслана Долгопола'} icon={faUser}/>
                    <div className="about-content-descr">
                        <div className="about-content-descr__photo">
                            <img src="./img/avatar.jpg" alt="Я"/>
                        </div>
                        <div className="about-content-descr-info">
                            <div className="about-content-descr-info-me">
                                <h4 className="about-content-descr-info__title">Персональные данные</h4>
                                <p className="about-content-descr-info__text">Полное имя: Долгопол Руслан Викторович</p>
                                <p className="about-content-descr-info__text">День рождения: 12 декабря 1998</p>
                                <p className="about-content-descr-info__text">Город: Борисов (Минская область)</p>
                            </div>
                            <div className="about-content-descr-info-education">
                                <h4 className="about-content-descr-info__title">Образование</h4>
                                <p className="about-content-descr-info__text">1) Борисовский Государственный Политехнический
                                    Колледж</p>
                                <p className="about-content-descr-info__text">Специальность: Производство и техническая эксплуатация приборов и аппаратов</p>
                                <p className="about-content-descr-info__text">2) Белорусский Национальный Технический Университет
                                </p>
                                <p className="about-content-descr-info__text">Специальность: Механические и электромеханические приборы и аппараты</p>
                                <p className="about-content-descr-info__text">Студент <b>ЗАОЧНОЙ</b> формы обучения, 3 курс</p>
                            </div>


                        </div>
                    </div>
                </div>
                </Animated>
            </div>

            <ContainerForParticles/>
            <div className={'background pink'}></div>
        </section>
    )
}

{/*<p className="about-content-descr-info__text">Мои качества:</p>*/}
{/*<ul className='about-content-descr-info__list'>*/}
{/*    <li><span><FontAwesomeIcon icon={faCheck}/></span>1*/}
{/*</li>*/}
{/*<li><span><FontAwesomeIcon icon={faCheck}/></span>2*/}
{/*</li>*/}
{/*<li><span><FontAwesomeIcon icon={faCheck}/></span>3*/}
{/*</li>*/}
{/*<li><span><FontAwesomeIcon icon={faCheck}/></span>4*/}
{/*</li>*/}
{/*<li><span><FontAwesomeIcon icon={faCheck}/></span>5*/}
{/*</li>*/}
{/*</ul>*/}

export default About;