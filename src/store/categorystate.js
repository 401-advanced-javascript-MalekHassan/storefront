const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics', description: 'Iphone' },
    { name: 'food', displayName: 'Food', description: 'eat' },
    { name: 'clothing', displayName: 'Clothing', description: 'wear' },
  ],
  ChosenCategory: 'electronics',
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ChosenCategory':
      return {
        categories: state.categories,
        ChosenCategory: payload,
      };
    default:
      return state;
  }
};

export const activate = (name) => {
  return {
    type: 'ChosenCategory',
    payload: name,
  };
};
