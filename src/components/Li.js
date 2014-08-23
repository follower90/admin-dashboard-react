import React, { Component } from 'react'

export default class Li extends Component {
  render() {
    return <li className="list-group-item">{this.props.data}</li>
  }
}
