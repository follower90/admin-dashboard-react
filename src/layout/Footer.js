import React, { Component } from 'react'
import actionCreators from './../actionCreators'
import { connect } from 'react-redux'

const Footer = ({clicked, toggleFooterClick}) => (
    <div className="footer" onClick={toggleFooterClick}>
      <nav className="panel panel-default" style={{ backgroundColor: clicked ? 'green' : 'white' }}>
        <div className="panel-body">
          {new Date().getFullYear()}
        </div>
      </nav>
    </div>
)

export default Footer
