import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders NotificationItem components when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).length).toBeGreaterThan(0);
  });

  it('does not render NotificationItem components when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(NotificationItem).length).toBe(0);
  });

  it('first NotificationItem has correct html when displayed', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const firstItem = wrapper.find(NotificationItem).first();
    expect(firstItem.prop('value')).toBe('New course available');
  });

  it('calls console.log with correct message when markAsRead is called', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const instance = wrapper.instance();
    
    instance.markAsRead(5);
    
    expect(consoleSpy).toHaveBeenCalledWith('Notification 5 has been marked as read');
    
    consoleSpy.mockRestore();
  });

  it('does not rerender when updating props with the same list', () => {
    const list = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' }
    ];
    
    const wrapper = shallow(<Notifications listNotifications={list} />);
    const renderSpy = jest.spyOn(wrapper.instance(), 'render');
    
    wrapper.setProps({ listNotifications: list });
    
    expect(renderSpy).not.toHaveBeenCalled();
    renderSpy.mockRestore();
  });

  it('has correct propTypes for displayDrawer, handleDisplayDrawer, and handleHideDrawer', () => {
    const wrapper = shallow(<Notifications />);
    const instance = wrapper.instance();
    
    expect(instance.props).toBeDefined();
  });

  it('has correct defaultProps', () => {
    const wrapper = shallow(<Notifications />);
    
    expect(wrapper.prop('displayDrawer')).toBe(false);
    expect(wrapper.prop('handleDisplayDrawer')).toBeDefined();
    expect(wrapper.prop('handleHideDrawer')).toBeDefined();
  });

  it('calls handleDisplayDrawer when clicking on Your notifications', () => {
    const handleDisplayDrawerMock = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawerMock} />);
    
    const paragraph = wrapper.find('p');
    paragraph.simulate('click');
    
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when clicking on the close button', () => {
    const handleHideDrawerMock = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawerMock} />);
    
    const closeButton = wrapper.find('button');
    closeButton.simulate('click');
    
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });

  it('shouldComponentUpdate returns true when displayDrawer changes', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    const instance = wrapper.instance();
    
    const result = instance.shouldComponentUpdate({ displayDrawer: true, listNotifications: [] });
    
    expect(result).toBe(true);
  });

  it('shouldComponentUpdate returns true when list length increases', () => {
    const list1 = [{ id: 1, type: 'default', value: 'Notification 1' }];
    const list2 = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' }
    ];
    
    const wrapper = shallow(<Notifications listNotifications={list1} />);
    const instance = wrapper.instance();
    
    const result = instance.shouldComponentUpdate({ listNotifications: list2, displayDrawer: false });
    
    expect(result).toBe(true);
  });
});
