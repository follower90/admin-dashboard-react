import React, { Component } from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {clicked: false}
  }

  toggleClick = (state) => {
    let clicked = !this.state.clicked
    this.setState({clicked: clicked})
    store.dispatch({type: 'FOOTER_CLICK', clicked: clicked})
  }

  render() {
    let clicked = this.state.clicked ? '#c3c3c3' : 'white'
    return (
        <div className="footer" onClick={this.toggleClick}>
          <nav className="panel panel-default" style={{ backgroundColor: clicked }}>
            <div className="panel-body">
              {new Date().getFullYear()}
            </div>
          </nav>
        </div>
    )
  }
}
