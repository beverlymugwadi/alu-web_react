import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import AppContext, { defaultUser } from './AppContext';

describe('App component', () => {
  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('contains the Login component when user is not logged in', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('initializes state with displayDrawer set to false', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.displayDrawer).toBe(false);
  });

  it('initializes state with user isLoggedIn set to false', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.value.user.isLoggedIn).toBe(false);
  });

  it('initializes state with empty email and password', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.value.user.email).toBe('');
    expect(instance.state.value.user.password).toBe('');
  });

  it('updates displayDrawer to true after calling handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    instance.handleDisplayDrawer();
    
    expect(instance.state.displayDrawer).toBe(true);
  });

  it('updates displayDrawer to false after calling handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    instance.setState({ displayDrawer: true });
    
    instance.handleHideDrawer();
    
    expect(instance.state.displayDrawer).toBe(false);
  });

  it('passes displayDrawer state to Notifications component', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    instance.setState({ displayDrawer: true });
    wrapper.update();
    
    const notificationsComponent = wrapper.find(Notifications);
    expect(notificationsComponent.prop('displayDrawer')).toBe(true);
  });

  it('passes handleDisplayDrawer and handleHideDrawer to Notifications component', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    const notificationsComponent = wrapper.find(Notifications);
    expect(notificationsComponent.prop('handleDisplayDrawer')).toBe(instance.handleDisplayDrawer);
    expect(notificationsComponent.prop('handleHideDrawer')).toBe(instance.handleHideDrawer);
  });

  it('logIn function updates state correctly', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    instance.logIn('test@example.com', 'password123');
    
    expect(instance.state.value.user.email).toBe('test@example.com');
    expect(instance.state.value.user.password).toBe('password123');
    expect(instance.state.value.user.isLoggedIn).toBe(true);
  });

  it('logOut function updates state correctly', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    // First login
    instance.logIn('test@example.com', 'password123');
    expect(instance.state.value.user.isLoggedIn).toBe(true);
    
    // Then logout
    instance.logOut();
    
    expect(instance.state.value.user.email).toBe('');
    expect(instance.state.value.user.password).toBe('');
    expect(instance.state.value.user.isLoggedIn).toBe(false);
  });

  it('renders CourseList when user is logged in', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    instance.logIn('test@example.com', 'password123');
    wrapper.update();
    
    expect(wrapper.find(CourseList).length).toBe(1);
    expect(wrapper.find(Login).length).toBe(0);
  });

  it('renders Login when user is not logged in', () => {
    const wrapper = shallow(<App />);
    
    expect(wrapper.find(Login).length).toBe(1);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  it('passes logIn function to Login component', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    const loginComponent = wrapper.find(Login);
    expect(loginComponent.prop('logIn')).toBe(instance.logIn);
  });

  it('wraps app with AppContext.Provider', () => {
    const wrapper = mount(<App />);
    
    expect(wrapper.find(AppContext.Provider).length).toBe(1);
  });

  it('passes user and logOut through context', () => {
    const wrapper = mount(<App />);
    const instance = wrapper.find(App).instance();
    
    const provider = wrapper.find(AppContext.Provider);
    expect(provider.prop('value')).toBe(instance.state.value);
    expect(provider.prop('value').user).toBeDefined();
    expect(provider.prop('value').logOut).toBeDefined();
  });

  it('calls logOut and alerts when ctrl+h is pressed', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    // First login
    instance.logIn('test@example.com', 'password123');
    expect(instance.state.value.user.isLoggedIn).toBe(true);
    
    // Trigger keydown
    const event = new KeyboardEvent('keydown', {
      ctrlKey: true,
      key: 'h'
    });
    
    instance.handleKeyDown(event);
    
    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(instance.state.value.user.isLoggedIn).toBe(false);
    
    alertMock.mockRestore();
  });

  it('Login component receives logIn as prop after login', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    const loginComponent = wrapper.find(Login);
    expect(loginComponent.prop('logIn')).toBeDefined();
  });

  it('state.value reference does not change if user object does not change', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    const firstValue = instance.state.value;
    
    // Call handleDisplayDrawer which should only change displayDrawer
    instance.handleDisplayDrawer();
    
    expect(instance.state.value).toBe(firstValue);
  });

  it('state.value reference changes when logIn is called', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    const firstValue = instance.state.value;
    
    instance.logIn('test@example.com', 'password123');
    
    expect(instance.state.value).not.toBe(firstValue);
  });
});
