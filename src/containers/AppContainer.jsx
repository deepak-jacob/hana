import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import App from '../components/App.jsx'
import { getAppDrawerOpenState, handleToggle } from '../actions/EnvActions'

const mapStateToProps = store => ({
  appDrawerOpen: getAppDrawerOpenState(store)
})

export default connect(mapStateToProps, { handleToggle })(App)
