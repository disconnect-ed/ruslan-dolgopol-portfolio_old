import React from "react";
import ContainerForParticles from "../../common/Particles/Particles";
import './Works.sass'
import SectionTitle from "../../common/SectionHeaderTitle/SectionTitle";
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'
import NavBar from "../NavBar/NavBar";

const Works = () => {
    return (
        <section className='works' >
            <NavBar color={'red'} />
            <SectionTitle title={'Работы'} subtitle={'Портфолио Руслана Долгопола'} icon={faBriefcase} />
            <ContainerForParticles color={'red'}/>
        </section>
    )
}

export default Works;