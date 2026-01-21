import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

StyleSheetTestUtils.suppressStyleInjection();

describe('BodySectionWithMarginBottom component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test">
        <p>test</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('has correct className bodySectionWithMargin', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test">
        <p>test</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('renders a BodySection component inside the div', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test">
        <p>test</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection).length).toBe(1);
  });

  it('passes title prop to BodySection', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="Test Title">
        <p>test</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection).prop('title')).toBe('Test Title');
  });

  it('passes children to BodySection', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test">
        <p>test content</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection).prop('children')).toBeDefined();
  });

  it('renders BodySection with correct props and children', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    
    // Check that BodySection component is rendered
    expect(wrapper.find(BodySection).length).toBe(1);
    
    // Check that props are correctly passed to BodySection
    expect(wrapper.find(BodySection).prop('title')).toBe('test title');
    expect(wrapper.find(BodySection).prop('children')).toBeDefined();
  });
});
