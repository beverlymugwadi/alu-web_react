import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';
import AppContext, { defaultUser, defaultLogOut } from '../App/AppContext';

describe('Footer component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the copyright text', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.text()).toContain('Copyright - Holberton School');
  });

  it('does not display Contact us link when user is logged out', () => {
    const contextValue = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: defaultLogOut
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find('a').length).toBe(0);
    expect(wrapper.text()).not.toContain('Contact us');
  });

  it('displays Contact us link when user is logged in', () => {
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
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find('a').text()).toBe('Contact us');
  });

  it('Contact us link has correct href', () => {
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
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find('a').prop('href')).toBe('#contact');
  });

  it('does not display Contact us link even with logged in user if context is not provided properly', () => {
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
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find('a').length).toBe(0);
  });
});
