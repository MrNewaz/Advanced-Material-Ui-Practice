import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  page: {
    background: '#f9f9f9',
    width: '100%',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      {/* App Bar */}

      {/* Side Drawer */}

      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
