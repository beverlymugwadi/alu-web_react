import { bindActionCreators } from 'redux';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

/**
 * Action creator for selecting a course
 * @param {number} index - The index of the course to select
 * @returns {Object} Action object with type and index
 */
export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index
  };
}

/**
 * Action creator for unselecting a course
 * @param {number} index - The index of the course to unselect
 * @returns {Object} Action object with type and index
 */
export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index
  };
}

/**
 * Bound action creators
 */
export const boundSelectCourse = (dispatch) => bindActionCreators(selectCourse, dispatch);
export const boundUnSelectCourse = (dispatch) => bindActionCreators(unSelectCourse, dispatch);
