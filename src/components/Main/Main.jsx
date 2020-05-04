import React from "react";
import ContainerForParticles from "../../common/Particles/Particles";
import './Main.sass'
import SectionTitle from "../../common/SectionHeaderTitle/SectionTitle";
import {faHouseUser} from '@fortawesome/free-solid-svg-icons'
import NavBar from "../NavBar/NavBar";

const Main = () => {
    return (
        <section className='contacts' >
            <NavBar color={'blue'} />
            <SectionTitle title={'Главная'} subtitle={'Портфолио Руслана Долгопола'} icon={faHouseUser} />
            <ContainerForParticles color={'blue'}/>
        </section>
    )
}

export default Main;