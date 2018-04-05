import React from 'react'
import SubmitShaForm from '../View'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<SubmitShaForm shas={['1', '2']} createSha={() => {}} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
