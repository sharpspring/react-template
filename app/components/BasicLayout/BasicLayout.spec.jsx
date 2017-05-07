import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import BasicLayout from './BasicLayout';

jest.mock('styleguide');
jest.mock('./BasicLayout.styles');
jest.mock('./BasicFooter', () => 'BasicFooter');

let wrapper;
const child = <div id="child">Child Content</div>;
const component = (<BasicLayout>
  {child}
</BasicLayout>);

describe('<BasicLayout />', () => {
  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('displays the child node passed', () => {
    expect(wrapper.find('#child').length).toBe(1);
  });

  it('has a img (for logo)', () => {
    expect(wrapper.find('img').length).toBe(1);
  });

  it('has a BasicFooter component', () => {
    expect(wrapper.find('BasicFooter').length).toBe(1);
  });

  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(component);
    const tree = renderedComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
