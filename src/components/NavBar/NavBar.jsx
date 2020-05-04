import React from "react";
import NavButton from "./NavBarButton/NavButton";
import './NavBar.sass'
import './NavBarButton/NavColors.sass'

const NavBar = (props) => {
    return (
        <nav className='navbar'>
            <div className="container">
                <div className="navbar-wrap">
                    <div className="navbar-logo">
                        <img src="img/logo-white.png" alt="Ruslan Dolgopol"/>
                    </div>
                    <div className="navbar-links">
                        <NavButton active={''} color={props.color} href={'/main'} title={'Главная'} />
                        <NavButton active={''} color={props.color} href={'/about'} title={'О себе'} />
                        <NavButton active={''} color={props.color} href={'/skills'} title={'Навыки'} />
                        <NavButton active={''} color={props.color} href={'/works'} title={'Работы'} />
                        <NavButton active={''} color={props.color} href={'/contacts'} title={'Контакты'} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;