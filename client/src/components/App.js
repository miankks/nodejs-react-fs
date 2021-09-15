import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './Surveys/SurveyNew';


class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }
    render () {
        return (
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route path='/' component={Landing} exact/>
                        <Route path='/surveys' component={Dashboard} exact/>
                        <Route path='/surveys/new' component={SurveyNew}/>
                    </div>
                </BrowserRouter>
        );
    };
}

export default connect(null, actions)(App);