import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {clicked: false}
  }

  componentWillMount() {
    store.subscribe(() => {
      let a = store.getState()
      this.setState({clicked: a.clicked})
    });
  }

  render() {
    let clicked = this.state.clicked ? '#c3c3c3' : 'white'
    return (
      <div>
        <nav className="navbar navbar-default" style={{ backgroundColor: clicked }}>
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Brand</a>
            </div>
            <ul className="nav navbar-nav">
              <li><a href="/">Main</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
