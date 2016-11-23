import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import App from './components/App.jsx'
import NutsList from './components/NutsList.jsx'
import NutsListContainer from './containers/NutsListContainer.jsx'
import NutsAddContainer from './containers/NutsAddContainer.jsx'
import NutsAdd from './containers/NutsAddContainer.jsx'
import reducers from './reducers'
import { getAllNuts } from './actions'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const middleware = [ thunk ];

const store = createStore(
  combineReducers({
    reducers,
    form: formReducer,
    routing: routerReducer
  }),
  applyMiddleware(...middleware)
);

store.dispatch(getAllNuts())

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <MuiThemeProvider>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/nutsList" component={NutsListContainer} />
        <Route path="/nutsAdd" component={NutsAddContainer} />
      </Route>
    </Router>
  </Provider>
  </MuiThemeProvider>
), document.getElementById('root'));
