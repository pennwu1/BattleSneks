// We need to carefully figure out how we'll be architecting our reducers
// This is very similar to modeling a relational db
// see http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html

import { combineReducers } from 'redux';

// Reducers
import snekReducer from './snekReducer';

// Combine reducers
const reducers = combineReducers({
  snek: snekReducer,
});

export default reducers;
