import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from './layout/Header';
import Footer from './layout/Footer';
import actionCreators from './actionCreators';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    return (
        <div>
          <Header clicked={this.state.clicked} />
          <main>
            {this.props.children}
          </main>
          <Footer clicked={this.state.clicked} />
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({data: state.clicked});

const mapDispatchToProps = ({dispatch}) => {
  return { actions: bindActionCreators(actionCreators, dispatch) };
};

connect(mapStateToProps, mapDispatchToProps)(App)
