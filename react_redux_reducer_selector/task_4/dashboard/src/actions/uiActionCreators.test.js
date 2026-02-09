import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest, loginSuccess, loginFailure } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('UI Action Creators', () => {
  describe('login', () => {
    it('should return action with type LOGIN and user object', () => {
      const email = 'test@example.com';
      const password = 'password123';
      const expectedAction = {
        type: LOGIN,
        user: {
          email: 'test@example.com',
          password: 'password123'
        }
      };
      expect(login(email, password)).toEqual(expectedAction);
    });
  });

  describe('logout', () => {
    it('should return action with type LOGOUT', () => {
      const expectedAction = {
        type: LOGOUT
      };
      expect(logout()).toEqual(expectedAction);
    });
  });

  describe('displayNotificationDrawer', () => {
    it('should return action with type DISPLAY_NOTIFICATION_DRAWER', () => {
      const expectedAction = {
        type: DISPLAY_NOTIFICATION_DRAWER
      };
      expect(displayNotificationDrawer()).toEqual(expectedAction);
    });
  });

  describe('hideNotificationDrawer', () => {
    it('should return action with type HIDE_NOTIFICATION_DRAWER', () => {
      const expectedAction = {
        type: HIDE_NOTIFICATION_DRAWER
      };
      expect(hideNotificationDrawer()).toEqual(expectedAction);
    });
  });

  describe('loginRequest', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it('should dispatch LOGIN and LOGIN_SUCCESS actions on successful API response', () => {
      fetchMock.getOnce('/login-success.json', {
        body: { success: true }
      });

      const store = mockStore({});
      const expectedActions = [
        { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
        { type: LOGIN_SUCCESS, user: undefined }
      ];

      return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should dispatch LOGIN and LOGIN_FAILURE actions on API failure', () => {
      fetchMock.getOnce('/login-success.json', {
        throws: new Error('API error')
      });

      const store = mockStore({});
      const expectedActions = [
        { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
        { type: LOGIN_FAILURE }
      ];

      return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
