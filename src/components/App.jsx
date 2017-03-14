import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import Navigation from './Navigation';

const App = ({ appDrawerOpen, handleToggle, children }) => (
  <div>

    <AppBar
      title="HANA EXPORTS"
      onLeftIconButtonTouchTap={handleToggle}
      iconElementRight={<FlatButton
        label="Login"
        containerElement={<Link key="navNutsAdd" to="/login" />}
      />}
    />

    <Drawer
      docked={false}
      open={appDrawerOpen}
      onRequestChange={handleToggle}
    >
      <Navigation handleToggle={handleToggle} />
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
