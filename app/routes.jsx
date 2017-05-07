import React from 'react';
import { Route } from 'react-router';
import App from 'components/App';
import NotFound from 'components/NotFound';
import Users from 'containers/Users';
import Fields from 'containers/Fields';
import WorkflowListContainer from 'workflow/containers/WorkflowList';
import VisualWorkflowEditor from 'workflow/containers/VisualWorkflowEditor';
import MacroTrafficReports from 'containers/MacroTrafficReports';
import featureToggles from 'components/FeatureToggles';

const addQueryParams = (prevState, nextState, replace) => {
  if (prevState.location.search && !nextState.location.search) {
    replace(`${nextState.location.pathname}${prevState.location.search}`);
  }
};

export default (
  <Route path="/" component={App} onChange={addQueryParams}>
    <Route path="settings/users" component={Users} />
    <Route path="settings/fields" component={Fields} />
    {featureToggles.active('MacroTrafficReports') &&
      <Route path="traffic/report" component={MacroTrafficReports} />
    }
    {featureToggles.active('VisualWorkflowEditor') &&
      <Route>
        <Route path="workflows" component={WorkflowListContainer} />
        <Route path="workflows/:id" component={VisualWorkflowEditor} />
      </Route>
    }
    <Route path="*" component={NotFound} />
  </Route>
);
