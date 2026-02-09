import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('Notification Action Creators', () => {
  describe('markAsAread', () => {
    it('should return action with type MARK_AS_READ and index', () => {
      const index = 1;
      const expectedAction = {
        type: MARK_AS_READ,
        index: 1
      };
      expect(markAsAread(index)).toEqual(expectedAction);
    });
  });

  describe('setNotificationFilter', () => {
    it('should return action with type SET_TYPE_FILTER and filter', () => {
      const expectedAction = {
        type: SET_TYPE_FILTER,
        filter: 'DEFAULT'
      };
      expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(expectedAction);
    });
  });
});
