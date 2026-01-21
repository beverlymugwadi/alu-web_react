import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it('logs when component is mounted', () => {
    const SimpleComponent = () => <div>Test</div>;
    SimpleComponent.displayName = 'SimpleComponent';
    
    const WrappedComponent = WithLogging(SimpleComponent);
    mount(<WrappedComponent />);
    
    expect(console.log).toHaveBeenCalledWith('Component SimpleComponent is mounted');
  });

  it('logs when component is going to unmount', () => {
    const SimpleComponent = () => <div>Test</div>;
    SimpleComponent.displayName = 'SimpleComponent';
    
    const WrappedComponent = WithLogging(SimpleComponent);
    const wrapper = mount(<WrappedComponent />);
    
    wrapper.unmount();
    
    expect(console.log).toHaveBeenCalledWith('Component SimpleComponent is going to unmount');
  });

  it('uses component name if displayName is not set', () => {
    const MyComponent = () => <div>Test</div>;
    
    const WrappedComponent = WithLogging(MyComponent);
    mount(<WrappedComponent />);
    
    expect(console.log).toHaveBeenCalledWith('Component MyComponent is mounted');
  });

  it('defaults to Component if component has no name', () => {
    const WrappedComponent = WithLogging(() => <div>Test</div>);
    mount(<WrappedComponent />);
    
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
  });

  it('sets correct displayName on wrapped component', () => {
    const TestComponent = () => <div>Test</div>;
    TestComponent.displayName = 'TestComponent';
    
    const WrappedComponent = WithLogging(TestComponent);
    
    expect(WrappedComponent.displayName).toBe('WithLogging(TestComponent)');
  });

  it('sets displayName to WithLogging(Component) when component has no name', () => {
    const WrappedComponent = WithLogging(() => <div>Test</div>);
    
    expect(WrappedComponent.displayName).toBe('WithLogging(Component)');
  });

  it('logs both mount and unmount messages', () => {
    const SimpleComponent = () => <div>Test</div>;
    SimpleComponent.displayName = 'SimpleComponent';
    
    const WrappedComponent = WithLogging(SimpleComponent);
    const wrapper = mount(<WrappedComponent />);
    
    expect(console.log).toHaveBeenCalledWith('Component SimpleComponent is mounted');
    
    wrapper.unmount();
    
    expect(console.log).toHaveBeenCalledWith('Component SimpleComponent is going to unmount');
  });

  it('logs Component Component when pure HTML is wrapped', () => {
    const WrappedComponent = WithLogging(() => <p>Pure HTML</p>);
    const wrapper = mount(<WrappedComponent />);
    
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
    
    wrapper.unmount();
    
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('logs Component Login when Login component is wrapped', () => {
    const WrappedComponent = WithLogging(Login);
    const wrapper = mount(<WrappedComponent />);
    
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
    
    wrapper.unmount();
    
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
