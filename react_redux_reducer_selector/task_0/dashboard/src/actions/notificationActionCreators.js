import { bindActionCreators } from 'redux';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

/**
 * Action creator for marking a notification as read
 * @param {number} index - The index of the notification to mark as read
 * @returns {Object} Action object with type and index
 */
export function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index
  };
}

/**
 * Action creator for setting the notification filter
 * @param {string} filter - The filter to apply (from NotificationTypeFilters)
 * @returns {Object} Action object with type and filter
 */
export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter
  };
}

/**
 * Bound action creators
 */
export const boundMarkAsAread = (dispatch) => bindActionCreators(markAsAread, dispatch);
export const boundSetNotificationFilter = (dispatch) => bindActionCreators(setNotificationFilter, dispatch);
