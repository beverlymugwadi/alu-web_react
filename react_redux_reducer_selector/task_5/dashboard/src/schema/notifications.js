import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

// Define user entity
const user = new schema.Entity('users');

// Define message entity with guid as idAttribute
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

// Define notification entity
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// Normalize the notifications data
const normalizedData = normalize(notificationsData.default, [notification]);

/**
 * Get all notification contexts for a specific user
 * @param {string} userId - The user ID to filter notifications by
 * @returns {Array} Array of context objects for the user's notifications
 */
export function getAllNotificationsByUser(userId) {
  const contexts = [];
  
  for (const notificationId of normalizedData.result) {
    const notification = normalizedData.entities.notifications[notificationId];
    if (notification.author === userId) {
      const messageId = notification.context;
      contexts.push(normalizedData.entities.messages[messageId]);
    }
  }
  
  return contexts;
}

/**
 * Normalize notifications data
 * @param {Array} data - Array of notification objects
 * @returns {Object} Normalized data with entities and result
 */
export function notificationsNormalizer(data) {
  return normalize(data, [notification]);
}

export { normalizedData };

