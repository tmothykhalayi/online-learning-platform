// store.js
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer, // Reducers
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // DevTools Extension
);

export default store;
