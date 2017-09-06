const snekReducer = (state = 'initial snek state', action) => {
  switch(action.type) {
    case 'DO_SOMETHING':
      return action.payload;
      break;
    default:
      return state;
  }
};

export default snekReducer;
