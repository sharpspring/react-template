import React from 'react';

import styles from './BasicFooter.styles';

const AuthFooter = () =>
  <div style={styles}>
    <ul style={styles.list}>
      <li style={styles.list.listItem}>
        <a href="http://sharpspring.com/legal/terms" style={styles.list.listItem.link}>Terms of Service</a>
      </li>
      <li style={styles.list.listItem}>
        <a href="http://sharpspring.com/legal/privacy" style={styles.list.listItem.link}>Privacy Policy</a>
      </li>
    </ul>

    <p style={styles.copyright}>Copyright © 2012 - 2016</p>
  </div>;

export default AuthFooter;
