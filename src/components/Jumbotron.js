import React, { Component } from 'react'

const Jumbotron = ({title, text}) => (
    <div className="jumbotron">
      <h1>{title}</h1>
      <p>{text}</p>
      <p><a className="btn btn-primary btn-lg" href="/about" role="button">About</a></p>
    </div>
)

export default Jumbotron
