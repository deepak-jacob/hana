import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Navigation from './Navigation.jsx';

export const App = ({appDrawerOpen, handleToggle, children}) => (
  <div>

    <AppBar
     title="HANA EXPORTS"
     iconClassNameRight="muidocs-icon-navigation-expand-more"
     onLeftIconButtonTouchTap={handleToggle}
    />

    <Drawer
      docked={false}
      open={appDrawerOpen}
      onRequestChange={handleToggle}
    >
      <Navigation />
    </Drawer>

    {children}

  </div>
);

module.exports = App;
