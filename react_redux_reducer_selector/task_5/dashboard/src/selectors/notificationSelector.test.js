import { Map, fromJS } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications
} from './notificationSelector';
import notificationReducer from '../reducers/notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters
} from '../actions/notificationActionTypes';

describe('notificationSelector', () => {
  describe('filterTypeSelected', () => {
    it('should return the value of the filter', () => {
      const state = notificationReducer(undefined, {});
      expect(filterTypeSelected(state)).toBe(NotificationTypeFilters.DEFAULT);
    });

    it('should return URGENT when filter is set to URGENT', () => {
      let state = notificationReducer(undefined, {});
      state = notificationReducer(state, {
        type: SET_TYPE_FILTER,
        filter: NotificationTypeFilters.URGENT
      });
      expect(filterTypeSelected(state)).toBe(NotificationTypeFilters.URGENT);
    });
  });

  describe('getNotifications', () => {
    it('should return an empty Map when no notifications are loaded', () => {
      const state = notificationReducer(undefined, {});
      const notifications = getNotifications(state);
      expect(notifications.toJS()).toEqual({});
    });

    it('should return a list of the message entities within the reducer', () => {
      const data = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' }
      ];
      const state = notificationReducer(undefined, {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data
      });
      const notifications = getNotifications(state);
      const notificationsJS = notifications.toJS();
      
      expect(notificationsJS['1']).toEqual({
        id: 1,
        type: 'default',
        value: 'New course available',
        isRead: false
      });
      expect(notificationsJS['2']).toEqual({
        id: 2,
        type: 'urgent',
        value: 'New resume available',
        isRead: false
      });
      expect(notificationsJS['3']).toEqual({
        id: 3,
        type: 'urgent',
        value: 'New data available',
        isRead: false
      });
    });
  });

  describe('getUnreadNotifications', () => {
    it('should return an empty Map when no notifications are loaded', () => {
      const state = notificationReducer(undefined, {});
      const unreadNotifications = getUnreadNotifications(state);
      expect(unreadNotifications.toJS()).toEqual({});
    });

    it('should return a list of unread message entities within the reducer', () => {
      const data = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' }
      ];
      let state = notificationReducer(undefined, {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data
      });
      
      // All notifications should be unread initially
      let unreadNotifications = getUnreadNotifications(state);
      let unreadJS = unreadNotifications.toJS();
      expect(Object.keys(unreadJS).length).toBe(3);
      
      // Mark notification 2 as read
      state = notificationReducer(state, {
        type: MARK_AS_READ,
        index: 2
      });
      
      // Now only 2 notifications should be unread
      unreadNotifications = getUnreadNotifications(state);
      unreadJS = unreadNotifications.toJS();
      expect(Object.keys(unreadJS).length).toBe(2);
      expect(unreadJS['1']).toEqual({
        id: 1,
        type: 'default',
        value: 'New course available',
        isRead: false
      });
      expect(unreadJS['3']).toEqual({
        id: 3,
        type: 'urgent',
        value: 'New data available',
        isRead: false
      });
      expect(unreadJS['2']).toBeUndefined();
    });
  });
});
