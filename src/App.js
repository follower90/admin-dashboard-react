import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from './actionCreators'

import Header from './layout/Header'
import Footer from './layout/Footer'

const App = ({children, data, actions}) => (
  <div>
    <Header clicked={data.clicked} />
      <main>{children}</main>
    <Footer clicked={data.clicked} toggleFooterClick={actions.toggleFooterClick} />
  </div>
)

const mapStateToProps = (state, ownProps) => ({ data: { clicked: state.clickReducer.clicked }})
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actionCreators, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(App)
