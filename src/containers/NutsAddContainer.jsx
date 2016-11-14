import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import NutsList from '../components/NutsAdd.jsx'
import { getnuts } from '../reducers/nuts'

const mapStateToProps = store => ({
  nutsList: getnuts(store)
})

export default connect(mapStateToProps)(NutsList)
