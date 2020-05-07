import React from 'react';
import './styles/App.sass';
import Hero from "./components/Hero/Hero";
import {Route, Switch} from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";

function App() {
  return (
        <div className={'App'} >
            <Switch >
            <Route exact path='/main' render={() => <Main/>} />
            <Route exact path='/about' render={() => <About/>} />
            <Route exact path='/skills' render={() => <Skills/>} />
            <Route exact path='/contacts' render={() => <Contacts/>} />
            <Route exact path='/works' render={() => <Works/>} />
            <Route exact path='/' render={() => <Hero/>} />
        </Switch>
        </div>
  );
}

export default App;
