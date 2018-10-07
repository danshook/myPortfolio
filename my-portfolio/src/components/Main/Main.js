import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Home from '../LandingPage/LandingPage';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component = { Home } />
        <Route exact path="/" component = { LandingPage } />
        <Route exact path="/About" component = { About } />
        <Route exact path="/Contact" component = { Contact } />
        <Route exact path="/Projects" component = { Projects } />
        <Route exact path="/Resume" component = { Resume } />
    </Switch>
)

export default Main;