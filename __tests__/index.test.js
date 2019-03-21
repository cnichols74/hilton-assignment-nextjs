import { shallow } from 'enzyme'
import Index from '../pages/index.js'

describe('Index Component Tests', () => {
  it('should render Index correctly.', () => {
    const wrapper = shallow(<Index/>)
    expect(wrapper).toMatchSnapshot()
  })
})
