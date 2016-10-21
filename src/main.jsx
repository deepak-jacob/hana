import React from 'react';
import ReactDOM from 'react-dom';
import NutsList from './components/NutsList.jsx';
import NutsAdd from './components/NutsAdd.jsx';

ReactDOM.render(
  <NutsList />,
  document.getElementById('root')
);

ReactDOM.render(
  <NutsAdd />,
  document.getElementById('addn')
);
