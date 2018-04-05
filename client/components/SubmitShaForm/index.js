
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { createSha } from '../../store/shas'
import SubmitShaForm from './View.js'

class SubmitShaFormContainer extends PureComponent {
  static propTypes = {
    shas: PropTypes.array,
    createSha: PropTypes.func
  }

  render () {
    return <SubmitShaForm shas={this.props.shas} createSha={this.props.createSha} />
  }
}

const mapStateToProps = ({
  shas
}) => ({
  shas
})

const mapDispatchToProps = (dispatch) => ({
  createSha: createSha(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: true
})(SubmitShaFormContainer)
