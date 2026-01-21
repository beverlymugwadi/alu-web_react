import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseListRow from './CourseListRow';

StyleSheetTestUtils.suppressStyleInjection();

describe('CourseListRow component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="First" textSecondCell="Second" />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a tr element', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="First" textSecondCell="Second" />
    );
    expect(wrapper.find('tr').length).toBe(1);
  });

  it('renders td elements when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />
    );
    expect(wrapper.find('td').length).toBe(2);
    expect(wrapper.find('th').length).toBe(0);
  });

  it('renders th elements when isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />
    );
    expect(wrapper.find('th').length).toBe(2);
    expect(wrapper.find('td').length).toBe(0);
  });

  it('renders correct text in cells', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
    );
    expect(wrapper.find('td').at(0).text()).toBe('ES6');
    expect(wrapper.find('td').at(1).text()).toBe('60');
  });

  it('applies row style when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />
    );
    const trElement = wrapper.find('tr');
    expect(trElement.prop('className')).toBeDefined();
  });

  it('applies header style when isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />
    );
    const trElement = wrapper.find('tr');
    expect(trElement.prop('className')).toBeDefined();
  });

  it('renders only textFirstCell when textSecondCell is not provided', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="First" />
    );
    expect(wrapper.find('td').length).toBe(2);
    expect(wrapper.find('td').at(0).text()).toBe('First');
    expect(wrapper.find('td').at(1).text()).toBe('');
  });
});
