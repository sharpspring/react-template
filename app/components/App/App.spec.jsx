import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from './App';

let wrapper;
const Component = (
  <App>
    <h1>Child of App</h1>
  </App>
);

describe('<App />', () => {
  beforeEach(() => {
    wrapper = shallow(Component);
  });

  it('should be a function', () => {
    expect(typeof wrapper.type()).toBe('function');
  });

  it('should display the child node', () => {
    expect(wrapper.children.length).toBe(1);
  });

  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(Component);
    const tree = renderedComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
