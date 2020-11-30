import { connect } from 'react-redux';
import React from 'react';
import './cart.css';
import { makeStyles } from '@material-ui/core/styles';
import { AddToCart } from '../../store/cartstate';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 200,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));
function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Cart = (props) => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  console.log(props.add, 'adddd');

  return (
    <>
      <aside>
        {props.add.map((product) => {
          return (
            <Grid item xs={6} md={6}>
              <div className={product.name}>
                <List dense={dense}>
                  {generate(
                    <ListItem style={{ width: '50%' }}>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={product.name}
                        secondary={secondary ? 'Secondary text' : null}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )}
                </List>
              </div>
            </Grid>
          );
        })}
      </aside>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    product: state.product,
    add: state.add.cart,
  };
};
const mapDispatchToProps = { AddToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
