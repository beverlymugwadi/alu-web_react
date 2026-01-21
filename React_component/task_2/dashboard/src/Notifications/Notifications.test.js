import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders NotificationItem components', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toBeGreaterThan(0);
  });

  it('first NotificationItem has correct html', () => {
    const wrapper = shallow(<Notifications />);
    const firstItem = wrapper.find(NotificationItem).first();
    expect(firstItem.prop('value')).toBe('New course available');
  });

  it('calls console.log with correct message when markAsRead is called', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    const wrapper = shallow(<Notifications />);
    const instance = wrapper.instance();
    
    instance.markAsRead(5);
    
    expect(consoleSpy).toHaveBeenCalledWith('Notification 5 has been marked as read');
    
    consoleSpy.mockRestore();
  });
});
