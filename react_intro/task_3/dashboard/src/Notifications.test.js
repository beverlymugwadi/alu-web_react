import React from 'react';
// ensure polyfills and Enzyme adapter are configured before using Enzyme
require('./setupTests');
const shallow = global.shallow;
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.exists()).toBe(true);
});

test('Notifications renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('li')).toHaveLength(3);
});

test('Notifications renders the text Here is the list of notifications', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
});
