import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, Link, browserHistory } from 'react-router'
import App from './App'

import Main from './pages/Main'
import About from './pages/About'
import NotFound from './pages/NotFound'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

function footerReducer(state = {}, action) {
  switch (action.type) {
    case 'FOOTER_CLICK':
      return {
        ...state,
        clicked: action.clicked
      }
    default:
      return state
  }
}

window.store = createStore(footerReducer)


ReactDOM.render((
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/" component={Main}/>
          <Route path="about" component={About}/>
          <Route path="*" component={NotFound}/>
        </Route>
      </Router>
    </Provider>
), document.getElementById('app'))
