import { uiReducer, initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { SELECT_COURSE } from '../actions/courseActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    expect(uiReducer()).toEqual(initialState);
  });

  it('should return the initial state when action is SELECT_COURSE', () => {
    const action = { type: SELECT_COURSE };
    expect(uiReducer(initialState, action)).toEqual(initialState);
  });

  it('should set isNotificationDrawerVisible to true when action is DISPLAY_NOTIFICATION_DRAWER', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true
    };
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });
});
