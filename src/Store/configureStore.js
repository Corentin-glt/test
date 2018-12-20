import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../Reducers';

function configureStore() {
  const middlewares = [thunkMiddleware];
  return createStore(rootReducer, compose(
    applyMiddleware(
      ...middlewares,
      logger
    )
  ));
};

export default configureStore;