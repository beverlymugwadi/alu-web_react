import { normalize, schema } from 'normalizr';

// Define course entity
const course = new schema.Entity('courses');

/**
 * Normalize courses data
 * @param {Array} data - Array of course objects
 * @returns {Object} Normalized data with entities and result
 */
export function coursesNormalizer(data) {
  return normalize(data, [course]);
}
