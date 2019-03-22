import React from 'react'
import { shallow } from 'enzyme'
import Index from '../pages/index.js'

test('should render Index correctly.', () => {
  const wrapper = shallow(<Index/>)
  expect(wrapper).toMatchSnapshot()
})

