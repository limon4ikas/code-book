import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState') || '{}')
  : {};

export const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
