import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LogInPage from './components/login/LogInPage';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" />
        <Route exact path="/login" component={LogInPage} />
      </Switch>
    );
  }
}
