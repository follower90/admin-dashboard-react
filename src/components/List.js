import React, { Component } from 'react'
import Li from './Li'

export default class List extends Component {
  render() {
    return (
        <ul className="list-group">
          {this.props.items.map(function (result) {
            return <Li key={result} data={result}/>
          })}
        </ul>
    )
  }
}
