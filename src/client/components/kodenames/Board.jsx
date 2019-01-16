import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
var classNames = require('classnames');

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
            active={card['active']}
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

  var flipperClass = classNames({
    flipper: true,
    flipped: props.active
  });

  var faceFrontClass = classNames({
    face: true,
    front: true
  })

  var faceBackClass = classNames({
    face: true,
    back: true
  })

  return (
    <td className='card'>
      <div className='flip-container' onClick={props.onclick}
      style={{backgroundColor: props.color}}> 
        <div className={flipperClass}> 
          <div className={faceFrontClass}> 
            <Typography variant="h6" color="inherit">
              {props.word}
            </Typography>
          </div> 
          {/* <div className={faceBackClass}> 
              Back
          </div>  */}
        </div> 
      </div>
    </td>
  );

}
