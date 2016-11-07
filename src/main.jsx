import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import App from './components/App.jsx';
import NutsList from './components/NutsList.jsx'
import NutsListContainer from './containers/NutsListContainer.jsx'
import NutsAdd from './components/NutsAdd.jsx'
import reducers from './reducers'
import { getAllNuts } from './actions'


console.log(reducers);

const middleware = [ thunk ];

const store = createStore(
  combineReducers({
    reducers,
    routing: routerReducer
  }),
  applyMiddleware(...middleware)
);

store.dispatch(getAllNuts())

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      <Route path="/nutsList" component={NutsListContainer} />

      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
