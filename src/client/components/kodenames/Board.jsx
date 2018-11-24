import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import words from '../../static/words.json';

export default class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {words: words};
  }

  componentDidMount() {
    console.log(this.state.words);
  }

  render() {
    return (
      <div className='board'>
        <table>
          <tbody>
            <tr>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </tr>
            <tr>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </tr>
            <tr>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </tr>
            <tr>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </tr>
            <tr>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function Card() {
  return (
    <td className='card'>
      <Typography variant="h6" color="inherit">
        Word
      </Typography>
    </td>
  );
}
