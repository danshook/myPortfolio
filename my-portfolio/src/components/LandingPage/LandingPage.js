import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import  './LandingPage.css';


class LandingPage extends Component {
    render () {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="Landing-Grid">
                <Cell col={12}>

                </Cell>

            </Grid>
            </div>
        )
    }
}

export default LandingPage;