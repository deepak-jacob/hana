import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Navigation from './Navigation';

const App = ({ appDrawerOpen, handleToggle, children }) => (
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

App.propTypes = {
  appDrawerOpen: React.PropTypes.bool.isRequired,
  handleToggle: React.PropTypes.func.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default App;
