import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store/';
import { Provider } from 'react-redux';

/*Páginas*/
import Login from './view/login/index';
import Register from './view/register/index';
import Home from './view/home';
import Recovery from './view/recovery';
import NewEvent from './view/newevent';
import EventsDetail from './view/eventsdetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/events/:param' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/recovery' component={Recovery} />
        <Route exact path='/newevent' component={NewEvent} />
        <Route exact path='/eventsdetail' component={EventsDetail} />
      </Router>
    </Provider>
  );
}

export default App;
