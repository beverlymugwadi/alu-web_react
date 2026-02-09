import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

/**
 * Action creator for login
 * @param {string} email - The user's email
 * @param {string} password - The user's password
 * @returns {Object} Action object with type and user object
 */
export function login(email, password) {
  return {
    type: LOGIN,
    user: {
      email,
      password
    }
  };
}

/**
 * Action creator for logout
 * @returns {Object} Action object with type LOGOUT
 */
export function logout() {
  return {
    type: LOGOUT
  };
}

/**
 * Action creator for displaying the notification drawer
 * @returns {Object} Action object with type DISPLAY_NOTIFICATION_DRAWER
 */
export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  };
}

/**
 * Action creator for hiding the notification drawer
 * @returns {Object} Action object with type HIDE_NOTIFICATION_DRAWER
 */
export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  };
}
