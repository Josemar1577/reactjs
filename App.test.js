import React from 'react'
import { shallow, mount, render } from 'enzyme'
import App from './App'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.length).toBe(1)
  })
  it('should have .container  class', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.is('.container')).toBe(true)
  })
})