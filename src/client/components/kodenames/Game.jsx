import React, { Component } from 'react';
import SimpleAppBar from './SimpleAppBar';
import Board from './Board';
import '../../static/css/app.css';
import all_words from '../../static/words.json';
var seedrandom = require('seedrandom');

const RED = '#ED2536';
const BLUE = '#7093FF'
const YELLOW = '#FBFF6B'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.handleBoardChange = this.handleBoardChange.bind(this);
    this.generateCards = this.generateCards.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSpymaster = this.handleSpymaster.bind(this);

    this.state = {'boardNumber': 1, 'cards': this.generateCards(1)};
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  generateCards(seed) {
    let words = JSON.parse(JSON.stringify(all_words));
    var colors = [
      RED, RED, RED, RED, RED, RED, RED, RED,
      BLUE, BLUE, BLUE, BLUE, BLUE, BLUE, BLUE, BLUE,
      YELLOW, YELLOW, YELLOW, YELLOW, YELLOW, YELLOW, YELLOW,
      'gray'
    ];
    
    var rng = seedrandom(seed);
    if(rng() > 0.5) {
      colors.push(RED);
    } else {
      colors.push(BLUE);
    }

    var cards = [];
    for(var i=0; i<25; i++) {
      var word_idx = Math.floor(rng()*words.length);
      var word = words[word_idx];
      words.splice(word_idx, 1);
      var color_idx = Math.floor(rng()*colors.length);
      var color = colors[color_idx];
      colors.splice(color_idx, 1);
      cards.push({
        word: word,
        color: color,
        active: false
      });
    }

    return cards;
  }

  handleBoardChange(seed) {
    this.setState({'boardNumber': seed, 'cards': this.generateCards(seed)});
  }

  handleCardClick(idx) {
    let new_cards = JSON.parse(JSON.stringify(this.state.cards));
    new_cards[idx].active = true;
    this.setState({
      cards: new_cards
    });
  }

  handleReset() {
    this.setState({'cards': this.generateCards(this.state.boardNumber)});
  }

  handleSpymaster() {
    const new_cards = this.state.cards.map(x => ({word: x.word, color: x.color, active: true}));
    this.setState({'cards': new_cards});
  }

  render() {
    return (
      <div>
      <SimpleAppBar
        onBoardChange={this.handleBoardChange}
        onReset={this.handleReset}
        onSpymaster={this.handleSpymaster}
      />
      <Board
        cards = {this.state.cards}
        onCardClick = {this.handleCardClick}
      />
      </div>
    );
  }
}
