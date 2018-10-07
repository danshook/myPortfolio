import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main/Main';
import { Link } from 'react-router-dom';
import  './App.css';

class App extends Component {
  render() {
    return (
<div className="demo-big-content">
    <Layout>
        <Header className="header-color__override" title="Daniel Shook" scroll>
            <Navigation>
                <Link to="/About">About</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Daniel Shook">
            <Navigation>
                <Link to="/About">About</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>    );
  }
}

export default App;
