import React, { Component } from 'react';
import Game from './kodenames/Game';
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
      <Game />
      </div>
    );
  }
}
