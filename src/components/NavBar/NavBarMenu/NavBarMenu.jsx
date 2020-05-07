import React from "react"
import './NavBarMenu.sass'
import {NavLink} from "react-router-dom";
import {Animated} from "react-animated-css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faHouseUser} from '@fortawesome/free-solid-svg-icons'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faAddressCard} from '@fortawesome/free-regular-svg-icons'

const NavBarMenu = (props) => {
    return (
        <div className='navbar-menu'>
            <button className={`navbar-menu__button ${props.active && 'navbar-menu__button_active'} navbar-menu_active_${props.active && props.color}`}>
                <span className="navbar-menu__button__cross"></span>
            </button>

                <ul className={`navbar-menu-inner ${props.active && 'navbar-menu-inner_active'}`}>
                    <Animated animationIn="fadeInLeft" isVisible={true}>
                    <li className="navbar-menu-inner__point">
                        <NavLink to="/main"><FontAwesomeIcon icon={faHouseUser}/>  Главная</NavLink>
                    </li>
                    <li className="navbar-menu-inner__point">
                        <NavLink to="/about"><FontAwesomeIcon icon={faUser}/>  О себе</NavLink>
                    </li>
                    <li className="navbar-menu-inner__point">
                        <NavLink to="/skills"><FontAwesomeIcon icon={faCheck}/>  Навыки</NavLink>
                    </li>
                    <li className="navbar-menu-inner__point">
                        <NavLink to="/works"><FontAwesomeIcon icon={faGithub}/>  Работы</NavLink>
                    </li>
                    <li className="navbar-menu-inner__point">
                        <NavLink to="/contacts"><FontAwesomeIcon icon={faAddressCard}/>  Контакты</NavLink>
                    </li>
                    </Animated>
                </ul>

        </div>
    )
}

export default NavBarMenu;