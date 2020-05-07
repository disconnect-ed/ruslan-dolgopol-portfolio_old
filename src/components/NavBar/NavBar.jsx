import React from "react";
import SmallButton from "../../common/Buttons/SmallButton/SmallButton";
import './NavBar.sass'
import '../../common/Buttons/SmallButton/SmallButtonColors.sass'
import {NavLink} from "react-router-dom";
import NavBarMenu from "./NavBarMenu/NavBarMenu";
import { useState } from 'react';

const NavBar = (props) => {

    const [state, setState] = useState(false);

    return (
        <nav className='navbar'>
            <div className="container">
                <div className="navbar-wrap">
                    <div className="navbar-logo">
                        <NavLink to='/' ><img src="img/logo-white.png" alt="Ruslan Dolgopol"/></NavLink>
                    </div>
                    <div className="navbar-links">
                        <SmallButton active={''} color={props.color} href={'/main'} title={'Главная'} />
                        <SmallButton active={''} color={props.color} href={'/about'} title={'О себе'} />
                        <SmallButton active={''} color={props.color} href={'/skills'} title={'Навыки'} />
                        <SmallButton active={''} color={props.color} href={'/works'} title={'Работы'} />
                        <SmallButton active={''} color={props.color} href={'/contacts'} title={'Контакты'} />
                    </div>
                    <div className='navbar-burger-menu' onClick={() => setState(!state)}>
                        <NavBarMenu color={props.color}  active={state} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;