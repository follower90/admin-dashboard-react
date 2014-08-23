import React, { Component } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'

export default class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <main>
            {this.props.children}
          </main>
          <Footer />
        </div>
    )
  }
}
