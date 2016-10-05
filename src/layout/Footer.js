import React, { Component } from 'react';
import * as actions from './../Actions'

export default class Footer extends Component {

  render() {
    let color = this.props.clicked ? 'green' : 'white'
    return (
        <div className="footer" onClick={this.props.toggleFooterClick}>
          <nav className="panel panel-default" style={{ backgroundColor: color }}>
            <div className="panel-body">
              {new Date().getFullYear()}
            </div>
          </nav>
        </div>
    )
  }
}
