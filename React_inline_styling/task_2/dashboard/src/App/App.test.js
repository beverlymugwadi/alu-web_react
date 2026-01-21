import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

StyleSheetTestUtils.suppressStyleInjection();

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
      key: 'h'
    });
    
    instance.handleKeyDown(event);
    
    expect(alertMock).not.toHaveBeenCalled();
    expect(logOutMock).not.toHaveBeenCalled();
    
    alertMock.mockRestore();
  });
});
