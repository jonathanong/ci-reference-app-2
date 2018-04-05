
import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import '../ui/index.css'
import SubmitShaForm from '../components/SubmitShaForm/View'

class Container extends PureComponent {
  static propTypes = {
    shas: PropTypes.array,
    children: PropTypes.any
  }

  constructor (props) {
    super(props)

    this.state = {
      shas: props.shas
    }
  }

  createSha = (sha) => {
    this.setState({
      shas: this.state.shas.concat(sha)
    })
  }

  render () {
    return React.cloneElement(this.props.children, {
      shas: this.state.shas,
      createSha: this.createSha
    })
  }
}

storiesOf('SubmitShaForm', module)
  .add('0 shas', () => (
    <Container shas={[]}>
      <SubmitShaForm />
    </Container>
  ))
  .add('1 shas', () => (
    <Container shas={['1']}>
      <SubmitShaForm />
    </Container>
  ))
  .add('2 shas', () => (
    <Container shas={['1', '2']}>
      <SubmitShaForm />
    </Container>
  ))
