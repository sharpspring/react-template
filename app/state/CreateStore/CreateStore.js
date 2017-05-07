import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from 'containers/DevTools';
import thunk from 'redux-thunk';

export default (rootReducer) => {
  const middleware = [thunk];
  const enhancers = [];

  enhancers.push(applyMiddleware(...middleware));

  if (process.env.NODE_ENV === 'development') {
    enhancers.push(DevTools.instrument());
  }

  return createStore(rootReducer, compose(...enhancers));
};
