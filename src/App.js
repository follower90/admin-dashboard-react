import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from './layout/Header';
import Footer from './layout/Footer';
import actionCreators from './actionCreators';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Header clicked={this.state.clicked} />
          <main>
            {this.props.children}
          </main>
          <Footer clicked={this.props.data.clicked} toggleFooterClick={this.props.actions.toggleFooterClick} />
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({data: { clicked: state.clicked }});

const mapDispatchToProps = ({dispatch}) => {
  // creating dispatchers by binding action creators to dispatch function
  return { actions: bindActionCreators(actionCreators, dispatch) };
};

connect(mapStateToProps, mapDispatchToProps)(App);
