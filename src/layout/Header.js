import React, { Component } from 'react'

const Header = ({clicked}) => (
      <div>
        <nav className="navbar navbar-default"  style={{ backgroundColor: clicked ? 'green' : 'white' }}>
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

export default Header
