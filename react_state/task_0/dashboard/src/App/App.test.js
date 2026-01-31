import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App component', () => {
  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('calls logOut and displays alert when ctrl+h is pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    const wrapper = shallow(<App logOut={logOutMock} />);
    const instance = wrapper.instance();
    
    const event = new KeyboardEvent('keydown', {
      ctrlKey: true,
      key: 'h'
    });
    
    instance.handleKeyDown(event);
    
    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
    
    alertMock.mockRestore();
  });

  it('does not call logOut or alert when other keys are pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    const wrapper = shallow(<App logOut={logOutMock} />);
    const instance = wrapper.instance();
    
    const event = new KeyboardEvent('keydown', {
      ctrlKey: false,
      key: 'a'
    });
    
    instance.handleKeyDown(event);
    
    expect(alertMock).not.toHaveBeenCalled();
    expect(logOutMock).not.toHaveBeenCalled();
    
    alertMock.mockRestore();
  });

  it('initializes the state with displayDrawer set to false', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.displayDrawer).toBe(false);
  });

  it('updates displayDrawer to true after calling handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    
    wrapper.instance().handleDisplayDrawer();
    
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('updates displayDrawer to false after calling handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    
    wrapper.setState({ displayDrawer: true });
    
    wrapper.instance().handleHideDrawer();
    
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('passes displayDrawer state to Notifications component', () => {
    const wrapper = shallow(<App />);
    
    wrapper.instance().handleDisplayDrawer();
    wrapper.update();
    
    const notificationsComponent = wrapper.find(Notifications);
    expect(notificationsComponent.prop('displayDrawer')).toBe(true);
  });

  it('passes handleDisplayDrawer and handleHideDrawer to Notifications component', () => {
    const wrapper = shallow(<App />);
    
    const notificationsComponent = wrapper.find(Notifications);
    expect(notificationsComponent.prop('handleDisplayDrawer')).toBe(wrapper.instance().handleDisplayDrawer);
    expect(notificationsComponent.prop('handleHideDrawer')).toBe(wrapper.instance().handleHideDrawer);
  });
});
