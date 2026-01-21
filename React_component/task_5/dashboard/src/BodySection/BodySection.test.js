import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <BodySection title="test">
        <p>test</p>
      </BodySection>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('has correct className', () => {
    const wrapper = shallow(
      <BodySection title="test">
        <p>test</p>
      </BodySection>
    );
    expect(wrapper.find('div').hasClass('bodySection')).toBe(true);
  });

  it('renders h2 with title prop', () => {
    const wrapper = shallow(
      <BodySection title="Test Title">
        <p>test</p>
      </BodySection>
    );
    expect(wrapper.find('h2').text()).toBe('Test Title');
  });

  it('renders children under h2', () => {
    const wrapper = shallow(
      <BodySection title="test">
        <p>test content</p>
      </BodySection>
    );
    expect(wrapper.find('p').text()).toBe('test content');
  });

  it('renders multiple children', () => {
    const wrapper = shallow(
      <BodySection title="test">
        <p>paragraph 1</p>
        <p>paragraph 2</p>
      </BodySection>
    );
    expect(wrapper.find('p').length).toBe(2);
  });

  it('renders correctly with title and children', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    
    // Check that there is one h2 element with correct text
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('h2').text()).toBe('test title');
    
    // Check that there is one p element with correct text
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').text()).toBe('test children node');
  });
});
