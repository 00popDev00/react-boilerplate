import React, { Component } from 'react';
import { connect } from 'react-redux';
import Action from '../redux/actions';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './login'
import Register from './register'
import Dashboard from './dashboard'
class Main extends Component {


    render() {

        return (
            <BrowserRouter>
            <Switch>
                <Route exact strict path='/' component={Login} />
                <Route  path='/New/Register' component={Register} />
                <Route path='/Dashboard' component={Dashboard} />

            </Switch>
            </BrowserRouter>

        );
    }
}

export default Main;
