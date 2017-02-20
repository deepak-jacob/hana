import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/AppContainer';
import Home from './components/Home';
import NutsListContainer from './containers/NutsListContainer';
import NutsAddContainer from './containers/NutsAddContainer';
import hanaReducers from './reducers';
import { fetchAllNuts } from './actions/NutsActions';

const middleware = [thunk];
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
/* eslint-enable */

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const store = createStore(
  combineReducers({
    hanaReducers,
    form: formReducer,
    routing: routerReducer,
  }), enhancer,
);

store.dispatch(fetchAllNuts());
injectTapEventPlugin();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history}>
        <Route component={App}>
          <Route path="/" component={Home} />
          <Route path="/nutsList" component={NutsListContainer} />
          <Route path="/nutsAdd" component={NutsAddContainer} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
), document.getElementById('root'));
