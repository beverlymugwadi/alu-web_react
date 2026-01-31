import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import AppContext, { defaultUser, defaultLogOut } from '../App/AppContext';

describe('Header component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the school logo and title', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').prop('alt')).toBe('logo');
    expect(wrapper.find('h1').text()).toBe('School Dashboard');
  });

  it('does not render logoutSection with default context', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('renders logoutSection when user is logged in', () => {
    const contextValue = {
      user: {
        email: 'test@example.com',
        password: 'password123',
        isLoggedIn: true
      },
      logOut: defaultLogOut
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find('#logoutSection').length).toBe(1);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome');
    expect(wrapper.find('#logoutSection').text()).toContain('test@example.com');
  });

  it('displays correct email in logoutSection', () => {
    const contextValue = {
      user: {
        email: 'john@example.com',
        password: 'secret',
        isLoggedIn: true
      },
      logOut: defaultLogOut
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find('strong').text()).toBe('john@example.com');
  });

  it('calls logOut when logout link is clicked', () => {
    const logOutMock = jest.fn();
    const contextValue = {
      user: {
        email: 'test@example.com',
        password: 'password123',
        isLoggedIn: true
      },
      logOut: logOutMock
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    const logoutLink = wrapper.find('a');
    logoutLink.simulate('click', { preventDefault: () => {} });

    expect(logOutMock).toHaveBeenCalled();
  });

  it('does not render logoutSection when isLoggedIn is false', () => {
    const contextValue = {
      user: {
        email: 'test@example.com',
        password: 'password123',
        isLoggedIn: false
      },
      logOut: defaultLogOut
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('has contextType set to AppContext', () => {
    expect(Header.contextType).toBe(AppContext);
  });
});
