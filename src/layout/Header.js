import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    let color = this.props.clicked ? 'green' : 'white'
    return (
      <div>
        <nav className="navbar navbar-default" style={{ backgroundColor: color }}>
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
