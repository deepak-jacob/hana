import React from 'react';
import { List, ListItem } from 'material-ui/List';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ViewListIcon from 'material-ui/svg-icons/action/view-list';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import { Link } from 'react-router';

const styleLink = {
  color: 'rgba(0, 0, 0, 0.85)',
  textDecoration: 'none',
};

const Navigation = ({ handleToggle }) => (
  <div>
    <List>
      <ListItem
        leftIcon={<HomeIcon />}
        primaryText="Home"
        onTouchTap={handleToggle}
        containerElement={<Link key="navHome" style={styleLink} to="/" />}
      />
      <ListItem
        leftIcon={<ViewListIcon />}
        primaryText="Nuts List"
        onTouchTap={handleToggle}
        containerElement={<Link key="navNutsList" style={styleLink} to="/nutsList" />}
      />
      <ListItem
        leftIcon={<NoteAdd />}
        primaryText="Nuts Add"
        onTouchTap={handleToggle}
        containerElement={<Link key="navNutsAdd" style={styleLink} to="/nutsAdd" />}
      />
    </List>
  </div>
);

Navigation.propTypes = {
  handleToggle: React.PropTypes.func.isRequired,
};

export default Navigation;
