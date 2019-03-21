import React from 'react'
import { shallow } from 'enzyme'
import Rooms from '../components/rooms'
import data from '../data/data'

test('should render Rooms Component with rooms', () => {
  const wrapper = shallow(<Rooms rooms={data.rooms}/>)
  expect(wrapper).toMatchSnapshot()
})
test('should render Rooms with No Available Rooms message', () => {
  const wrapper = shallow(<Rooms rooms={[]}/>)
  expect(wrapper).toMatchSnapshot()
})
