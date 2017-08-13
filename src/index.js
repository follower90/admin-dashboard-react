import css from 'bootstrap-css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducers from './Reducers'
import menuReducer from './reducers/MenuReducer'
import usersReducer from './reducers/UsersReducer'

import App from './App'
import routes from './routes'

const store = createStore(
  combineReducers({...reducers, menuReducer, usersReducer, routing: routerReducer}),
  applyMiddleware(thunk)
);

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route component={App}>
          {routes.map((route, i) => <Route key={i} {...route} />)}
        </Route>
      </Router>
    </Provider>
), document.getElementById('app'))
