import * as notificationsData from '../../notifications.json';

/**
 * Get all notification contexts for a specific user
 * @param {string} userId - The user ID to filter notifications by
 * @returns {Array} Array of context objects for the user's notifications
 */
export function getAllNotificationsByUser(userId) {
  return notificationsData.default
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}
