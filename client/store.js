import { createStore } from 'redux';

// import the root reducer
import reducers from './reducers/index.js';

const store = createStore(reducers, {});

export default store;
