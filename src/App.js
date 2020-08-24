import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*Páginas*/
import Login from './view/login/index';
import Register from './view/register/index';
import Home from './view/home';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
    </Router>
  );
}

export default App;
