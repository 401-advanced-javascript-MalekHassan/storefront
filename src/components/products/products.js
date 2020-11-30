import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AddToCart } from '../../store/cartstate';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },

  grid: {
    flexGrow: 1,
  },
  title: {
    marginBottom: '50px',
    textAlign: 'center',
  },
});

const Products = (props) => {
  console.log(props.product.products, 'kjhgd');
  const classes = useStyles();
  let activated = props.category.categories.filter(
    (category) => category.name === props.category.ChosenCategory
  );
  console.log('activated', activated);
  return (
    <section className={classes.grid}>
      <div className={classes.title}>
        <Typography variant="h3">{activated[0].displayName}</Typography>
        <Typography variant="body1">{activated[0].description}</Typography>
      </div>
      <Grid container spacing={3}>
        {props.product.products.map((product) => {
          if (product.category === props.category.ChosenCategory) {
            return (
              <Grid item xs={3}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={product.image}
                      title={product.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.inStock}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      key={product.name}
                      onClick={() => props.AddToCart(product.name)}
                    >
                      Add To Cart
                    </Button>
                    <Button size="small" color="primary">
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          }
        })}
      </Grid>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { category: state.category, product: state.product };
};
const mapDispatchToProps = { AddToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
