import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import Main from './pages/Main';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { TOOGLE_FOOTER_CLICK } from './actionCreators';

function footerReducer(state = {}, action) {
  switch (action.type) {
    case TOOGLE_FOOTER_CLICK:
      return {
        ...state,
        clicked: !state.clicked // inverse current state
      }
    default:
      return state
  }
}

let store = createStore(combineReducers({footerReducer}))


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
