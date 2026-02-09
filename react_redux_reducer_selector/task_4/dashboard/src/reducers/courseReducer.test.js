import { Map, fromJS } from 'immutable';
import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the default state', () => {
    expect(courseReducer(undefined, {}).toJS()).toEqual({});
  });

  it('should return data with isSelected set to false for FETCH_COURSE_SUCCESS', () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const expected = {
      '1': { id: 1, name: 'ES6', credit: 60, isSelected: false },
      '2': { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      '3': { id: 3, name: 'React', credit: 40, isSelected: false }
    };
    expect(courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data }).toJS()).toEqual(expected);
  });

  it('should set isSelected to true for SELECT_COURSE', () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const state = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data });
    const newState = courseReducer(state, { type: SELECT_COURSE, index: 2 });
    expect(newState.getIn(['2', 'isSelected'])).toBe(true);
    expect(newState.getIn(['1', 'isSelected'])).toBe(false);
    expect(newState.getIn(['3', 'isSelected'])).toBe(false);
  });

  it('should set isSelected to false for UNSELECT_COURSE', () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const state = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data });
    let newState = courseReducer(state, { type: SELECT_COURSE, index: 2 });
    newState = courseReducer(newState, { type: UNSELECT_COURSE, index: 2 });
    expect(newState.getIn(['2', 'isSelected'])).toBe(false);
  });
});
