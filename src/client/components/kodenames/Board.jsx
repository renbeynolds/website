import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export default class Board extends Component {

  constructor(props) {
    super(props);
  }

  handleCardClick(idx) {
    this.props.onCardClick(idx); 
  }

  createTable = () => {
    let table = [];


    for(let row=0; row<5; row++) {
      let children = [];
      for(let col=0; col<5; col++) {
        let idx = row*5 + col;
        let card = this.props.cards[idx];
        children.push(
          <Card
            onclick={() => this.handleCardClick(idx)}
            word={card['word']}
            color={card['active']? card['color']:'#F4F4F4' }
            key={idx}
          />
        );
      }
      table.push(<tr>{children}</tr>);
    }

    return table;
  }

  render() {
    return (
      <div className='board'>
        <table>
          <tbody>
            {this.createTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

function Card(props) {
  return (
    <td className='card' onClick={props.onclick}
    style={{backgroundColor: props.color}}>
      <Typography variant="h6" color="inherit">
        {props.word}
      </Typography>
    </td>
  );
}
