import React from 'react';
// ensure polyfills and Enzyme adapter are configured before using Enzyme
require('./setupTests');
const shallow = global.shallow;
import App from './App';

test('App renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

test('App renders a div with class App-header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-header').length).toBe(1);
});

test('App renders a div with class App-body', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-body').length).toBe(1);
});

test('App renders a div with class App-footer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-footer').length).toBe(1);
});
