import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('Course Action Creators', () => {
  describe('selectCourse', () => {
    it('should return action with type SELECT_COURSE and index', () => {
      const index = 1;
      const expectedAction = {
        type: SELECT_COURSE,
        index: 1
      };
      expect(selectCourse(index)).toEqual(expectedAction);
    });
  });

  describe('unSelectCourse', () => {
    it('should return action with type UNSELECT_COURSE and index', () => {
      const index = 1;
      const expectedAction = {
        type: UNSELECT_COURSE,
        index: 1
      };
      expect(unSelectCourse(index)).toEqual(expectedAction);
    });
  });
});
