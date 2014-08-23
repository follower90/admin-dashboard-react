import React, { Component } from 'react'
import List from './../components/List'
import Jumbotron from './../components/Jumbotron'

export default class Main extends Component {
  render() {
    return (
        <div>
          <Jumbotron title="Hello React!" text="Sample Jumbotron for React website"/>
          <h1>Main</h1>
          <p>You will learn</p>
          <List items={[ "How to use React", "Components Composition", "Basic routing" ]}/>
        </div>
    )
  }
}
