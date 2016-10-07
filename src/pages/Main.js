import React, { Component } from 'react'
import List from './../components/List'
import Jumbotron from './../components/Jumbotron'

const Main = () => (
    <div>
      <Jumbotron title="Hello React!" text="Sample Jumbotron for React website"/>
      <h1>Main</h1>
      <p>You will learn</p>
      <List items={[ "How to use React", "Redux", "Components Composition", "Basic routing" ]}/>
    </div>
)

export default Main
