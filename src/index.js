import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import Main from './pages/Main'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { TOGGLE_FOOTER_CLICK } from './actionCreators'

function clickReducer(state = { clicked: false }, action) {
  switch (action.type) {
    case TOGGLE_FOOTER_CLICK:
      return {...state, clicked: !state.clicked}
    default:
      return state
  }
}

let store = createStore(combineReducers({clickReducer}))

ReactDOM.render((
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/" component={Main}/>
          <Route path="about" component={About} />
          <Route path="*" component={NotFound}/>
        </Route>
      </Router>
    </Provider>
), document.getElementById('app'))
