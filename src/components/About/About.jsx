import React from "react";
import ContainerForParticles from "../../common/Particles/Particles";
import './About.sass'
import SectionTitle from "../../common/SectionHeaderTitle/SectionTitle";
import {faUser} from '@fortawesome/free-solid-svg-icons'
import NavBar from "../NavBar/NavBar";

const About = () => {
    return (
        <section className='about' >
            <NavBar color={'pink'} />
            <SectionTitle title={'О себе'} subtitle={'Портфолио Руслана Долгопола'} icon={faUser} />
            <ContainerForParticles color={'pink'}/>
        </section>
    )
}

export default About;