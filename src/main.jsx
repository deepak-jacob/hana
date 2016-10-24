import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App.jsx';
import NutsList from './components/NutsList.jsx';
import NutsAdd from './components/NutsAdd.jsx';

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/nutsList" component={NutsList} />
        <Route path="/nutsAdd" component={NutsAdd} />
      </Route>
    </Router>
), document.getElementById('root'));
