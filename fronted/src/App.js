import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import ProtectedPage from './ProtectedPage';
import WelcomePage from './WelcomePage';



const App = () => (
  <div>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/protected" component={ProtectedPage} />
    </Switch>
  </div>
);

export default App;
