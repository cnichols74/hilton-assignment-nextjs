import { shallow } from 'enzyme'

import App from '../pages/index.js'

describe('Tests for main entry point.', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<App/>)

    expect(component).toMatchSnapshot()
  })
  it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two']
    const component = shallow(<App list={strings}/>)
    expect(component).toMatchSnapshot()
  })
})
