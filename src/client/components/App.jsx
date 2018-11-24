import React, { Component } from 'react';
import SimpleAppBar from './SimpleAppBar';
import Board from './kodenames/Board';
import '../static/css/app.css';
import 'typeface-roboto';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    return (
      <div>
      <SimpleAppBar />
      <Board />
      </div>
    );
  }
}
