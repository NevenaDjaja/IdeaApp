import React from 'react';
import styles from './Layout.css';
import Navigation from 'Navigation';

const Layout = ({
  ...props
}) => {
  return (
    <div className={styles.layout}>
      <Navigation/>
      {props.children}
    </div>
  );
}

module.exports = Layout;
