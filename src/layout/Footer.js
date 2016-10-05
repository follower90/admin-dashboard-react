import React, { Component } from 'react';
import * as actions from './../Actions'

export default class Footer extends Component {
  toggleClick = () => {
    actions.toggleFooterClick(!this.props.clicked)
  }

  render() {
    let color = this.props.clicked ? 'green' : 'white'
    return (
        <div className="footer" onClick={this.toggleClick}>
          <nav className="panel panel-default" style={{ backgroundColor: color }}>
            <div className="panel-body">
              {new Date().getFullYear()}
            </div>
          </nav>
        </div>
    )
  }
}
