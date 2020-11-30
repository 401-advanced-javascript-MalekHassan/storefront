import React from 'react';
import Cart from '../../components/cart/cart';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  cart: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

const Headers = (props) => {
  console.log(props.add.cart);
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography className={classes.cart} variant="h5">
          My Cart ({props.add.cart.length})
        </Typography>
        <Typography variant="h6">Store</Typography>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Headers);
