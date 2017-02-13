import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import NutsList from '../components/NutsList.jsx'
import { getNutsFromState } from '../actions/NutsActions'

const mapStateToProps = store => ({
  nutsList: getNutsFromState(store)
})

export default connect(mapStateToProps)(NutsList)
