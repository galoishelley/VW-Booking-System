import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Alerts from './components/layout/Alerts';
import Appoint from './components/appoint/Appoint';
import Comfirm from './components/comfirm/Comfirm';
import Info from './components/info/Info';

import AppointState from './context/appoint/AppointState';
import AlertState from './context/alert/AlertState';

// import setAuthToken from './utils/setAuthToken';

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

const App = () => {
  return (
    <AppointState>
      <AlertState>
      <Router>
        <Fragment>
          <div className="container">
          <Navbar />
            <Alerts />
            <Switch>
              <Route exact path='/' component={Appoint} />
              <Route exact path='/info' component={Info} />
              <Route exact path='/comfirm' component={Comfirm} />
            </Switch>
          </div>
        </Fragment>
      </Router>
      </AlertState>
    </AppointState>
  );
}

export default App;
