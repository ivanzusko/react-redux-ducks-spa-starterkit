import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './rootReducer';

const logger = createLogger();

const vanillaPromise = store => next => action => {
  if (typeof action.then !== 'function') {
    return next(action);
  }

  return Promise.resolve(action).then(store.dispatch);
};

const createStoreWithMiddleware = applyMiddleware(
    vanillaPromise,
    reduxThunk,
    logger,
)(createStore);

const configureStore = (initialState) => {
  return createStoreWithMiddleware(rootReducer, initialState);
};

export default configureStore;
