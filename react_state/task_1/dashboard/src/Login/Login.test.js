import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it('has initial state with isLoggedIn set to false', () => {
    const wrapper = shallow(<Login />);
    const instance = wrapper.instance();
    expect(instance.state.isLoggedIn).toBe(false);
  });

  it('has initial state with email and password set to empty strings', () => {
    const wrapper = shallow(<Login />);
    const instance = wrapper.instance();
    expect(instance.state.email).toBe('');
    expect(instance.state.password).toBe('');
  });

  it('has initial state with enableSubmit set to false', () => {
    const wrapper = shallow(<Login />);
    const instance = wrapper.instance();
    expect(instance.state.enableSubmit).toBe(false);
  });

  it('the submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('updates email state when email input changes', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[id="email"]');
    
    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    
    expect(wrapper.state('email')).toBe('test@example.com');
  });

  it('updates password state when password input changes', () => {
    const wrapper = shallow(<Login />);
    const passwordInput = wrapper.find('input[id="password"]');
    
    passwordInput.simulate('change', { target: { value: 'password123' } });
    
    expect(wrapper.state('password')).toBe('password123');
  });

  it('enables the submit button when both email and password are not empty', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[id="email"]');
    const passwordInput = wrapper.find('input[id="password"]');
    
    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    wrapper.update();
    
    passwordInput.simulate('change', { target: { value: 'password123' } });
    wrapper.update();
    
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(false);
  });

  it('disables the submit button when email is empty', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[id="email"]');
    const passwordInput = wrapper.find('input[id="password"]');
    
    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    wrapper.update();
    
    passwordInput.simulate('change', { target: { value: 'password123' } });
    wrapper.update();
    
    let submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(false);
    
    emailInput.simulate('change', { target: { value: '' } });
    wrapper.update();
    
    submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('disables the submit button when password is empty', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[id="email"]');
    const passwordInput = wrapper.find('input[id="password"]');
    
    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    wrapper.update();
    
    passwordInput.simulate('change', { target: { value: 'password123' } });
    wrapper.update();
    
    let submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(false);
    
    passwordInput.simulate('change', { target: { value: '' } });
    wrapper.update();
    
    submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('calls handleLoginSubmit when form is submitted', () => {
    const wrapper = shallow(<Login />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'handleLoginSubmit');
    
    wrapper.update();
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: () => {} });
    
    expect(spy).toHaveBeenCalled();
  });

  it('updates isLoggedIn to true when form is submitted', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[id="email"]');
    const passwordInput = wrapper.find('input[id="password"]');
    
    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    wrapper.update();
    
    passwordInput.simulate('change', { target: { value: 'password123' } });
    wrapper.update();
    
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: () => {} });
    
    expect(wrapper.state('isLoggedIn')).toBe(true);
  });

  it('prevents page reload on form submit', () => {
    const wrapper = shallow(<Login />);
    const instance = wrapper.instance();
    const mockEvent = { preventDefault: jest.fn() };
    
    instance.handleLoginSubmit(mockEvent);
    
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });

  it('input values are controlled by state', () => {
    const wrapper = shallow(<Login />);
    const instance = wrapper.instance();
    
    instance.setState({ email: 'user@test.com', password: 'pass123' });
    wrapper.update();
    
    const emailInput = wrapper.find('input[id="email"]');
    const passwordInput = wrapper.find('input[id="password"]');
    
    expect(emailInput.prop('value')).toBe('user@test.com');
    expect(passwordInput.prop('value')).toBe('pass123');
  });
});
