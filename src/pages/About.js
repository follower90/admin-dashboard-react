import React, { Component } from 'react'
import axios from 'axios'

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {about: 'Loading...' }
  }

  componentDidMount() {
    axios.get('about.json')
         .then(data => this.setState({about: data.data.about}))
  }

  render() {
    return (
        <div>
          <h1>About</h1>
          <p>{this.state.about}</p>
        </div>
    )
  }
}
