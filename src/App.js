import React, {useContext} from 'react';
import './styles/App.sass';
import Hero from "./components/Hero/Hero";
import {Route, Switch, __RouterContext} from "react-router-dom";
import HeroContainer from "./components/Hero/HeroContainer";
import { animated, useTransition } from 'react-spring'
import Contacts from "./components/Contacts/Contacts";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";

function useRouter() {
    return useContext(__RouterContext)
}

function App() {
    const { location } = useRouter()

    const transitions = useTransition(location, location => location.key, {
        from: {
            opacity: 0,
            position: 'absolute',
            width: '100%',

        },
        enter: { opacity: 1,  },
        leave: {
            opacity: 0,

        }
    })
  return ( transitions.map(({ item, props: transition, key }) => (
        <animated.div className={'App'} key={key} style={transition}>
            <Switch location={item}>
            <Route exact path='/main' render={() => <Main/>} />
            <Route exact path='/about' render={() => <About/>} />
            <Route exact path='/skills' render={() => <Skills/>} />
            <Route exact path='/contacts' render={() => <Contacts/>} />
            <Route exact path='/works' render={() => <Works/>} />
            <Route exact path='/' render={() => <Hero/>} />
        </Switch>
        </animated.div>
  )));
}

export default App;
