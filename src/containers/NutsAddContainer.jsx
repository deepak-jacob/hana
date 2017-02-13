import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import NutsAdd from '../components/NutsAdd.jsx'
import { saveNut } from '../actions/NutsActions'

const mapStateToProps = store => ({})

export default connect(mapStateToProps, { saveNut })(NutsAdd)
