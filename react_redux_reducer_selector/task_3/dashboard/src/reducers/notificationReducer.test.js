import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the default state', () => {
    expect(notificationReducer(undefined, {})).toEqual({
      notifications: [],
      filter: NotificationTypeFilters.DEFAULT
    });
  });

  it('should return data with isRead set to false for FETCH_NOTIFICATIONS_SUCCESS', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' }
    ];
    const expected = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false }
      ]
    };
    expect(notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data })).toEqual(expected);
  });

  it('should set isRead to true for MARK_AS_READ', () => {
    const state = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false }
      ]
    };
    const expected = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false }
      ]
    };
    expect(notificationReducer(state, { type: MARK_AS_READ, index: 2 })).toEqual(expected);
  });

  it('should set the filter for SET_TYPE_FILTER', () => {
    const state = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false }
      ]
    };
    const expected = {
      filter: NotificationTypeFilters.URGENT,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false }
      ]
    };
    expect(notificationReducer(state, { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.URGENT })).toEqual(expected);
  });
});
