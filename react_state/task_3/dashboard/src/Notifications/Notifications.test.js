import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

// Mock notification data
export const mockNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
];

describe('Notifications component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders notification items when displayDrawer is true', () => {
    const wrapper = shallow(
      <Notifications 
        displayDrawer={true}
        listNotifications={mockNotifications}
      />
    );
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('does not render notification items when displayDrawer is false', () => {
    const wrapper = shallow(
      <Notifications 
        displayDrawer={false}
        listNotifications={mockNotifications}
      />
    );
    expect(wrapper.find(NotificationItem).length).toBe(0);
  });

  it('renders correct number of NotificationItems based on listNotifications', () => {
    const customNotifications = [
      { id: 1, type: 'default', value: 'Test 1' },
      { id: 2, type: 'urgent', value: 'Test 2' }
    ];

    const wrapper = shallow(
      <Notifications 
        displayDrawer={true}
        listNotifications={customNotifications}
      />
    );

    expect(wrapper.find(NotificationItem).length).toBe(2);
  });

  it('passes markNotificationAsRead to each NotificationItem', () => {
    const markNotificationAsReadMock = jest.fn();
    
    const wrapper = shallow(
      <Notifications 
        displayDrawer={true}
        listNotifications={mockNotifications}
        markNotificationAsRead={markNotificationAsReadMock}
      />
    );

    const notificationItems = wrapper.find(NotificationItem);
    notificationItems.forEach(item => {
      expect(item.prop('markNotificationAsRead')).toBe(markNotificationAsReadMock);
    });
  });

  it('passes correct id to each NotificationItem', () => {
    const wrapper = shallow(
      <Notifications 
        displayDrawer={true}
        listNotifications={mockNotifications}
      />
    );

    const notificationItems = wrapper.find(NotificationItem);
    expect(notificationItems.at(0).prop('id')).toBe(1);
    expect(notificationItems.at(1).prop('id')).toBe(2);
    expect(notificationItems.at(2).prop('id')).toBe(3);
  });

  it('passes correct type to each NotificationItem', () => {
    const wrapper = shallow(
      <Notifications 
        displayDrawer={true}
        listNotifications={mockNotifications}
      />
    );

    const notificationItems = wrapper.find(NotificationItem);
    expect(notificationItems.at(0).prop('type')).toBe('default');
    expect(notificationItems.at(1).prop('type')).toBe('urgent');
    expect(notificationItems.at(2).prop('type')).toBe('urgent');
  });

  it('passes correct value to each NotificationItem', () => {
    const wrapper = shallow(
      <Notifications 
        displayDrawer={true}
        listNotifications={mockNotifications}
      />
    );

    const notificationItems = wrapper.find(NotificationItem);
    expect(notificationItems.at(0).prop('value')).toBe('New course available');
    expect(notificationItems.at(1).prop('value')).toBe('New resume available');
  });

  it('renders close button when displayDrawer is true', () => {
    const wrapper = shallow(
      <Notifications 
        displayDrawer={true}
        listNotifications={mockNotifications}
      />
    );

    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').text()).toBe('×');
  });

  it('does not render close button when displayDrawer is false', () => {
    const wrapper = shallow(
      <Notifications 
        displayDrawer={false}
        listNotifications={mockNotifications}
      />
    );

    expect(wrapper.find('button').length).toBe(0);
  });

  it('calls handleHideDrawer when close button is clicked', () => {
    const handleHideDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications 
        displayDrawer={true}
        handleHideDrawer={handleHideDrawerMock}
        listNotifications={mockNotifications}
      />
    );

    wrapper.find('button').simulate('click');
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });

  it('calls handleDisplayDrawer when notification text is clicked', () => {
    const handleDisplayDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications 
        handleDisplayDrawer={handleDisplayDrawerMock}
        listNotifications={mockNotifications}
      />
    );

    wrapper.find('p').simulate('click');
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('has correct propTypes defined', () => {
    expect(Notifications.propTypes.displayDrawer).toBeDefined();
    expect(Notifications.propTypes.handleDisplayDrawer).toBeDefined();
    expect(Notifications.propTypes.handleHideDrawer).toBeDefined();
    expect(Notifications.propTypes.listNotifications).toBeDefined();
    expect(Notifications.propTypes.markNotificationAsRead).toBeDefined();
  });

  it('has correct defaultProps defined', () => {
    expect(Notifications.defaultProps.displayDrawer).toBe(false);
    expect(Notifications.defaultProps.handleDisplayDrawer).toBeDefined();
    expect(Notifications.defaultProps.handleHideDrawer).toBeDefined();
    expect(Notifications.defaultProps.listNotifications).toEqual([]);
    expect(Notifications.defaultProps.markNotificationAsRead).toBeDefined();
  });

  it('renders empty ul when displayDrawer is true but listNotifications is empty', () => {
    const wrapper = shallow(
      <Notifications 
        displayDrawer={true}
        listNotifications={[]}
      />
    );

    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find(NotificationItem).length).toBe(0);
  });

  it('is a PureComponent for performance optimization', () => {
    const instance = new Notifications();
    expect(instance instanceof React.PureComponent).toBe(true);
  });

  it('renders your notifications text', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toBe('Your notifications');
  });
});
