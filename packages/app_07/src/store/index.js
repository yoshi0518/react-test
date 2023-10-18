import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import countReducer from './count';
import postsReducer from './post';

const reducer = combineReducers({
  countReducer,
  postsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk) && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

console.log({ store: store.getState() });

export default store;
