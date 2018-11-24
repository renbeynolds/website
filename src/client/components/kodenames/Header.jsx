import React, { Component } from 'react';

export default class Header extends Component {
  state = { };

  componentDidMount() {
    console.log('Header loaded');
  }

  render() {
    return (
      <div id='header'>
        <h1>KodeNames</h1>
      </div>
    );
  }
}
