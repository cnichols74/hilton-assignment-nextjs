import React from 'react'
import { shallow } from 'enzyme'
import Room from '../components/room'
import data from '../data/data'

test('should render a Room Component', () => {
  const wrapper = shallow(<Room room={data.rooms[0]}/>)
  expect(wrapper).toMatchSnapshot()
})
