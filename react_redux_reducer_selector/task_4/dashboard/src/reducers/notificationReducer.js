import { Map, fromJS } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
  notifications: Map(),
  filter: NotificationTypeFilters.DEFAULT
});

export default function notificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalized = notificationsNormalizer(action.data || []);
      const notificationEntities = normalized.entities.notifications || {};
      
      // Add isRead: false to each notification and convert to Immutable Map
      const notificationsWithRead = {};
      for (const id in notificationEntities) {
        notificationsWithRead[id] = {
          ...notificationEntities[id],
          isRead: false
        };
      }
      
      return state.set('notifications', fromJS(notificationsWithRead));
    }
    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.index), 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
}
