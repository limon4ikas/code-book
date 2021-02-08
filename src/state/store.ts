import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import _ from 'lodash';
import { loadState, saveState } from './local-storage';

const persistedState = loadState();

export const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(
  _.throttle(() => {
    saveState(store.getState());
  }, 5000)
);
