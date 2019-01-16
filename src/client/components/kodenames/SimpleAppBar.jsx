import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flex: 1,
  },
  textField: {
    marginBottom: 5.5,
  },
  menuButton: {
    marginLeft: 5,
  },
};

class SimpleAppBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes
    };

    this.handleBoardChange = this.handleBoardChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSpymaster = this.handleSpymaster.bind(this);
  }

  handleBoardChange(event) {
    const val = event.target.value;
    this.props.onBoardChange(val);
  }

  handleReset() {
    this.props.onReset();
  }

  handleSpymaster() {
    this.props.onSpymaster();
  }

  render() {
    return (
      <div className={root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={this.state.classes.grow}>
              KodeNames
            </Typography>
            <TextField
              id="board-number-input"
              label="Board Number"
              type="number"
              defaultValue="1"
              margin="dense"
              variant="outlined"
              className={this.state.classes.textField}
              onChange={this.handleBoardChange}
            />
            <Button variant="outlined" color="primary" className={this.state.classes.menuButton} onClick={this.handleReset}>
              Reset
            </Button>
            <Button variant="outlined" color="primary" className={this.state.classes.menuButton} onClick={this.handleSpymaster}>
              Spy Master
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
