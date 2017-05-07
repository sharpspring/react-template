import React from 'react';
import BasicLayout from 'components/BasicLayout';
import styles from './styles';

const NotFound = () =>
  <BasicLayout>
    <div style={styles}>
      <h2 style={styles.header}>404 Page - Not Found</h2>
      <p>The page you requested was not found.</p>
    </div>
  </BasicLayout>;

export default NotFound;
