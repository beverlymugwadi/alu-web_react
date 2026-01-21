import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseList from './CourseList';

StyleSheetTestUtils.suppressStyleInjection();

describe('CourseList component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a list of courses', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('li').length).toBeGreaterThan(0);
  });

  it('renders all expected courses', () => {
    const wrapper = shallow(<CourseList />);
    const courses = ['ES6', 'Webpack', 'React', 'Redux', 'React Router', 'Jest', 'Immutable JS', 'NormalizeJS'];
    courses.forEach(course => {
      expect(wrapper.text()).toContain(course);
    });
  });
});
