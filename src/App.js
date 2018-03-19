import React from 'react';
import './styles/css/App.css';
import { Switch, Route } from 'react-router-dom';
import DashboardContainer from './containers/DashboardContainer';
import LoginContainer from './containers/LoginContainer';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={DashboardContainer} />
        <Route exact path='/login' component={LoginContainer} />
      </Switch>
    </div>
  );
}

export default App;
