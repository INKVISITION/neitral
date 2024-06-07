import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import TaskList from './components/TaskList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/tasks" component={TaskList} />
          <Route path="/" component={Register} /> {/* Redirect to Register as default */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
