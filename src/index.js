import css from 'bootstrap-css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Provider } from 'react-redux'

import App from './App'
import NotFound from './pages/NotFound'

import Main from './pages/Main'
import Menu from './pages/Menu'
import MenuForm from './pages/MenuForm'
import User from './pages/User'

import thunk from 'redux-thunk';

import reducers from './Reducers'
import menuReducer from './reducers/MenuReducer'
import usersReducer from './reducers/UsersReducer'

const store = createStore(
  combineReducers({...reducers, menuReducer, usersReducer, routing: routerReducer}),
  applyMiddleware(thunk)
);

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route component={App}>
          <Route path="/admin" component={Main}/>

          <Route path="/admin/menu" component={Menu} />
          <Route path="/admin/menu/edit/:id" component={MenuForm} />

          <Route path="/admin/user" component={User}/>
          <Route path="*" component={NotFound}/>
        </Route>
      </Router>
    </Provider>
), document.getElementById('app'))
