import React from 'react';
import { Route } from 'react-router';
import App from 'components/App';
import NotFound from 'components/NotFound';

const addQueryParams = (prevState, nextState, replace) => {
  if (prevState.location.search && !nextState.location.search) {
    replace(`${nextState.location.pathname}${prevState.location.search}`);
  }
};

export default (
  <Route path="/" component={App} onChange={addQueryParams}>
    <Route path="*" component={NotFound} />
  </Route>
);
