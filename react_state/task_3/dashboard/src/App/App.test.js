import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

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

  it('initializes state with listNotifications', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.listNotifications).toBeDefined();
    expect(instance.state.listNotifications.length).toBe(3);
  });

  it('initializes state with notifications containing correct structure', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    const firstNotification = instance.state.listNotifications[0];
    
    expect(firstNotification).toHaveProperty('id');
    expect(firstNotification).toHaveProperty('type');
    expect(firstNotification).toHaveProperty('value');
  });

  it('markNotificationAsRead removes notification from listNotifications', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    const initialLength = instance.state.listNotifications.length;
    const firstNotificationId = instance.state.listNotifications[0].id;
    
    instance.markNotificationAsRead(firstNotificationId);
    
    const newLength = instance.state.listNotifications.length;
    expect(newLength).toBe(initialLength - 1);
    
    const notificationIds = instance.state.listNotifications.map(n => n.id);
    expect(notificationIds).not.toContain(firstNotificationId);
  });

  it('markNotificationAsRead removes correct notification by id', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    // Mark notification with id 2 as read
    instance.markNotificationAsRead(2);
    
    const remainingIds = instance.state.listNotifications.map(n => n.id);
    expect(remainingIds).toEqual([1, 3]);
  });

  it('markNotificationAsRead does not affect other notifications', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    const notification1 = instance.state.listNotifications.find(n => n.id === 1);
    const notification3 = instance.state.listNotifications.find(n => n.id === 3);
    
    instance.markNotificationAsRead(2);
    
    const updatedNotification1 = instance.state.listNotifications.find(n => n.id === 1);
    const updatedNotification3 = instance.state.listNotifications.find(n => n.id === 3);
    
    expect(updatedNotification1).toEqual(notification1);
    expect(updatedNotification3).toEqual(notification3);
  });

  it('markNotificationAsRead handles removing all notifications', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    instance.markNotificationAsRead(1);
    instance.markNotificationAsRead(2);
    instance.markNotificationAsRead(3);
    
    expect(instance.state.listNotifications.length).toBe(0);
  });

  it('passes listNotifications to Notifications component', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    const notificationsComponent = wrapper.find(Notifications);
    expect(notificationsComponent.prop('listNotifications')).toEqual(instance.state.listNotifications);
  });

  it('passes markNotificationAsRead to Notifications component', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    const notificationsComponent = wrapper.find(Notifications);
    expect(notificationsComponent.prop('markNotificationAsRead')).toBe(instance.markNotificationAsRead);
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
    
    instance.logIn('test@example.com', 'password123');
    expect(instance.state.value.user.isLoggedIn).toBe(true);
    
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
});
