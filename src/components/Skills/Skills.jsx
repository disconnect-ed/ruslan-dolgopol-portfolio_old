import React from "react";
import ContainerForParticles from "../../common/Particles/Particles";
import './Skills.sass'
import HeaderTitle from "../../common/HeaderTitle/HeaderTitle";
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import NavBar from "../NavBar/NavBar";
import SkillsCard from "./SkillsCard";
import {Animated} from "react-animated-css";


const Skills = () => {

    const react = 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов';
    const js = 'Язык программирования высокого уровня, использующийся для придания интерактивности веб-страницам';
    const wp = 'Самая популярная система управления контентом для веб-сайтов';
    const php = 'Наиболее часто применяемый язык программирования для разработки серверной части веб-сайтов и веб-приложений';
    const html = 'Стандартизированный язык разметки документов в интернете';
    const css = 'Язык описания внешнего вида документа';
    const sass = 'Метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS кода и упрощения файлов каскадных таблиц стилей.';
    const bootstrap = 'Библиотека, содержащая значительное количество готовых решений для визуального оформления элементов веб-страницы и создания интерактивности';

    return (
        <section className='skills'>
            <header className="skills-header">
                <NavBar color={'lime'}/>
            </header>
            <div className="skills-content content">
                <Animated animationIn="zoomIn" isVisible={true}>
                    <div className="container">
                        <HeaderTitle title={'Мои навыки'} subtitle={'Портфолио Руслана Долгопола'} icon={faCheck}/>
                        <div className="skills-content__cards">
                            <SkillsCard img={'react.svg'} title={'React'} descr={react} level={'junior'}/>
                            <SkillsCard img={'js.svg'} title={'JavaScript'} descr={js} level={'junior'}/>
                            <SkillsCard img={'wp.svg'} title={'Wordpress'} descr={wp} level={'junior'}/>
                            <SkillsCard img={'php.svg'} title={'PHP'} descr={php} level={'junior'}/>
                            <SkillsCard img={'html.svg'} title={'HTML5'} descr={html} level={'middle'}/>
                            <SkillsCard img={'css.svg'} title={'CSS3'} descr={css} level={'middle'}/>
                            <SkillsCard img={'sass.svg'} title={'Sass'} descr={sass} level={'junior'}/>
                            <SkillsCard img={'bootstrap.svg'} title={'Bootstrap 4'} descr={bootstrap} level={'junior'}/>
                        </div>
                    </div>
                </Animated>
            </div>


            <ContainerForParticles/>
            <div className={'background lime'}></div>
        </section>
    )
}

export default Skills;