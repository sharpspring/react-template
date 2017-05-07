import React, { PropTypes } from 'react';

import { Images } from 'styleguide';

import BasicFooter from './BasicFooter';
import styles from './BasicLayout.styles';

const propTypes = {
  children: PropTypes.element.isRequired,
};

const BasicLayout = ({ children }) =>
  <div style={styles}>
    <img src={Images.logo} alt="logo" style={styles.logo} />
    <div style={styles.content}>
      {children}
    </div>
    <BasicFooter />
  </div>;

BasicLayout.propTypes = propTypes;

export default BasicLayout;
