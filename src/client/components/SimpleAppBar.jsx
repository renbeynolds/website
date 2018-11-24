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

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            KodeNames
          </Typography>
          <TextField
            id="board-number-input"
            label="Board Number"
            type="number"
            defaultValue="1"
            margin="dense"
            variant="outlined"
            className={classes.textField}
          />
          <Button variant="outlined" color="primary" className={classes.menuButton}>
            Reset
          </Button>
          <Button variant="outlined" color="primary" className={classes.menuButton}>
            Spy Master
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
