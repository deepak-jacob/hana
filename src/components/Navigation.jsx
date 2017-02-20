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

const Navigation = () => (
  <div>
    <List>
      <ListItem leftIcon={<HomeIcon />}>
        <Link key="navHome" style={styleLink} to="/">Home</Link>
      </ListItem>
      <ListItem leftIcon={<ViewListIcon />}>
        <Link key="navNutsList" style={styleLink} to="/nutsList">Nuts List</Link>
      </ListItem>
      <ListItem leftIcon={<NoteAdd />}>
        <Link key="navNutsAdd" style={styleLink} to="/nutsAdd">Nuts Add</Link>
      </ListItem>
    </List>
  </div>
);

export default Navigation;
