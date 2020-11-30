import categoryReducer from './categorystate';
import productReducer from './productstate';
import AddToCart from './cartstate';

const { createStore, combineReducers } = require('redux');
const { composeWithDevTools } = require('redux-devtools-extension');

const reducers = combineReducers({
  product: productReducer,
  category: categoryReducer,
  add: AddToCart,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
