import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Footer from './Footer';

StyleSheetTestUtils.suppressStyleInjection();

describe('Footer component', () => {
  it('renders without crashing (shallow)', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Copyright text', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().includes('Copyright')).toBe(true);
  });
});
