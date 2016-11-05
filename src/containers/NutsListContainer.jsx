import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import NutsList from '../components/NutsList.jsx'

const NutsListContainer = ({ nutsList }) => (
  <div>
    <NutsList nutsList={nutsList} />
  </div>
)

const mapStateToProps = store => ({
  nutsList: store
})

export default connect(mapStateToProps)(NutsListContainer)
