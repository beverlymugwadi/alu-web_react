import { Map, fromJS } from 'immutable';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map();

export default function courseReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const normalized = coursesNormalizer(action.data || []);
      const courseEntities = normalized.entities.courses || {};
      
      // Add isSelected: false to each course and convert to Immutable Map
      const coursesWithSelection = {};
      for (const id in courseEntities) {
        coursesWithSelection[id] = {
          ...courseEntities[id],
          isSelected: false
        };
      }
      
      return state.merge(fromJS(coursesWithSelection));
    }
    case SELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], false);
    default:
      return state;
  }
}
