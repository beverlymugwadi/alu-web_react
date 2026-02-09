/**
 * Selector to get the filter type from the notification state
 * @param {Map} state - The notification state as an Immutable Map
 * @returns {string} The filter type
 */
export const filterTypeSelected = (state) => {
  return state.get('filter');
};

/**
 * Selector to get all notifications from the state
 * @param {Map} state - The notification state as an Immutable Map
 * @returns {Map} The notifications Map
 */
export const getNotifications = (state) => {
  return state.get('notifications');
};

/**
 * Selector to get only unread notifications from the state
 * @param {Map} state - The notification state as an Immutable Map
 * @returns {Map} A Map containing only unread notifications
 */
export const getUnreadNotifications = (state) => {
  const notifications = state.get('notifications');
  return notifications.filter((notification) => notification.get('isRead') === false);
};
