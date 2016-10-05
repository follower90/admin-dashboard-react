import React, { Component } from 'react'
import { connect } from 'react-redux';

import Header from './layout/Header'
import Footer from './layout/Footer'
import * as actions from './Actions'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { clicked: false }
  }

  render() {
    return (
        <div>
          <Header clicked={this.state.clicked} />
          <main>
            {this.props.children}
          </main>
          <Footer clicked={this.state.clicked} />
        </div>
    )
  }
}

connect((state, ownProps) => ({data: state.clicked}), actions)(App)
