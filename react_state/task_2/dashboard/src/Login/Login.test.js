import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login logIn={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('has initial state with email and password set to empty strings', () => {
    const wrapper = shallow(<Login logIn={() => {}} />);
    const instance = wrapper.instance();
    expect(instance.state.email).toBe('');
    expect(instance.state.password).toBe('');
  });

  it('has initial state with enableSubmit set to false', () => {
    const wrapper = shallow(<Login logIn={() => {}} />);
    const instance = wrapper.instance();
    expect(instance.state.enableSubmit).toBe(false);
  });

  it('the submit button is disabled by default', () => {
    const wrapper = shallow(<Login logIn={() => {}} />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('updates email state when email input changes', () => {
    const wrapper = shallow(<Login logIn={() => {}} />);
    const emailInput = wrapper.find('input[id="email"]');
    
    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    
    expect(wrapper.state('email')).toBe('test@example.com');
  });

  it('updates password state when password input changes', () => {
    const wrapper = shallow(<Login logIn={() => {}} />);
    const passwordInput = wrapper.find('input[id="password"]');
    
    passwordInput.simulate('change', { target: { value: 'password123' } });
    
    expect(wrapper.state('password')).toBe('password123');
  });

  it('enables the submit button when both email and password are not empty', () => {
    const wrapper = shallow(<Login logIn={() => {}} />);
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
    const wrapper = shallow(<Login logIn={() => {}} />);
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
    const wrapper = shallow(<Login logIn={() => {}} />);
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

  it('calls logIn function with email and password on form submit', () => {
    const logInMock = jest.fn();
    const wrapper = shallow(<Login logIn={logInMock} />);
    const emailInput = wrapper.find('input[id="email"]');
    const passwordInput = wrapper.find('input[id="password"]');
    
    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    wrapper.update();
    
    passwordInput.simulate('change', { target: { value: 'password123' } });
    wrapper.update();
    
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: () => {} });
    
    expect(logInMock).toHaveBeenCalledWith('test@example.com', 'password123');
  });

  it('prevents page reload on form submit', () => {
    const logInMock = jest.fn();
    const wrapper = shallow(<Login logIn={logInMock} />);
    const instance = wrapper.instance();
    const mockEvent = { preventDefault: jest.fn() };
    
    instance.handleLoginSubmit(mockEvent);
    
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });

  it('input values are controlled by state', () => {
    const wrapper = shallow(<Login logIn={() => {}} />);
    const instance = wrapper.instance();
    
    instance.setState({ email: 'user@test.com', password: 'pass123' });
    wrapper.update();
    
    const emailInput = wrapper.find('input[id="email"]');
    const passwordInput = wrapper.find('input[id="password"]');
    
    expect(emailInput.prop('value')).toBe('user@test.com');
    expect(passwordInput.prop('value')).toBe('pass123');
  });

  it('has logIn as required prop', () => {
    expect(Login.propTypes.logIn.isRequired).toBe(true);
  });
});
