import React from 'react';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

const App = ({ children }) => children;

App.propTypes = propTypes;

export default App;
