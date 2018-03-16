import React from 'react';
import './styles/css/App.css';
import Cookies from 'universal-cookie';
import { Switch, Route } from 'react-router-dom';
import DashboardContainer from './containers/DashboardContainer';
import LoginContainer from './containers/LoginContainer';

const cookies = new Cookies();
cookies.set('userId', '5aaa4da1978b9429fffe0579');

const App = () => {
  return (
    <div className="App">
      <h2>Mason Chan</h2>
      <Switch>
        <Route exact path='/' component={DashboardContainer} />
        <Route exact path='/login' component={LoginContainer} />
      </Switch>
    </div>
  );
}

export default App;
