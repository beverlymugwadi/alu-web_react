import { Map, fromJS } from 'immutable';
import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the default state', () => {
    const state = notificationReducer(undefined, {});
    expect(state.toJS()).toEqual({
      notifications: {},
      filter: NotificationTypeFilters.DEFAULT
    });
  });

  it('should return data with isRead set to false for FETCH_NOTIFICATIONS_SUCCESS', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' }
    ];
    const state = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data });
    const result = state.toJS();
    expect(result.filter).toBe(NotificationTypeFilters.DEFAULT);
    expect(result.notifications['1']).toEqual({ id: 1, type: 'default', value: 'New course available', isRead: false });
    expect(result.notifications['2']).toEqual({ id: 2, type: 'urgent', value: 'New resume available', isRead: false });
    expect(result.notifications['3']).toEqual({ id: 3, type: 'urgent', value: 'New data available', isRead: false });
  });

  it('should set isRead to true for MARK_AS_READ', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' }
    ];
    const state = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data });
    const newState = notificationReducer(state, { type: MARK_AS_READ, index: 2 });
    expect(newState.getIn(['notifications', '2', 'isRead'])).toBe(true);
    expect(newState.getIn(['notifications', '1', 'isRead'])).toBe(false);
    expect(newState.getIn(['notifications', '3', 'isRead'])).toBe(false);
  });

  it('should set the filter for SET_TYPE_FILTER', () => {
    const state = notificationReducer(undefined, {});
    const newState = notificationReducer(state, { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.URGENT });
    expect(newState.get('filter')).toBe(NotificationTypeFilters.URGENT);
  });
});
