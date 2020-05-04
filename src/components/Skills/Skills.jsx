import React from "react";
import ContainerForParticles from "../../common/Particles/Particles";
import './Skills.sass'
import SectionTitle from "../../common/SectionHeaderTitle/SectionTitle";
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import NavBar from "../NavBar/NavBar";

const Skills = () => {
    return (
        <section className='skills' >
            <NavBar color={'lime'} />
            <SectionTitle title={'Навыки'} subtitle={'Портфолио Руслана Долгопола'} icon={faCheck} />
            <ContainerForParticles color={'lime'}/>
        </section>
    )
}

export default Skills;