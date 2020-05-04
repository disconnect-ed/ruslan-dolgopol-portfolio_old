import React from "react";
import ContainerForParticles from "../../common/Particles/Particles";
import './Contacts.sass'
import SectionTitle from "../../common/SectionHeaderTitle/SectionTitle";
import {faAddressCard} from '@fortawesome/free-regular-svg-icons'
import NavBar from "../NavBar/NavBar";

const Contacts = () => {
    return (
        <section className='contacts' >
            <NavBar color={'yellow'} />
            <SectionTitle title={'Контакты'} subtitle={'Портфолио Руслана Долгопола'} icon={faAddressCard} />
            <ContainerForParticles color={'yellow'}/>
        </section>
    )
}

export default Contacts;