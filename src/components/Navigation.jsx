import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ViewListIcon from 'material-ui/svg-icons/action/view-list';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import { Link } from 'react-router';

const styleLink = {
  color: 'rgba(0, 0, 0, 0.85)',
  textDecoration: 'none'
};

export const Navigation = () => (
  <div>
    <List>
      <ListItem leftIcon={<HomeIcon />} children={<Link key="navHome" style={styleLink} to="/">Home</Link>} />
      <ListItem leftIcon={<ViewListIcon />} children={<Link key="navNutsList" style={styleLink} to="/nutsList">Nuts List</Link>} />
      <ListItem leftIcon={<NoteAdd />} children={<Link key="navNutsAdd" style={styleLink} to="/nutsAdd">Nuts Add</Link>} />
    </List>
  </div>
);

module.exports = Navigation;
