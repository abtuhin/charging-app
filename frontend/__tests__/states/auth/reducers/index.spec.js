import authReducer from "@/states/auth/reducers";
import { STORE_USER } from '@/states/auth/types';

describe('Auth Reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      user: {},
    };
    const action = { type: 'DUMMY_ACTION' };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it('should handle STORE_USER action', () => {
    const initialState = {
      user: {},
    };
    const userPayload = { username: 'testuser' };
    const action = { type: STORE_USER, payload: userPayload };

    const newState = authReducer(initialState, action);

    expect(newState).toEqual({
      user: userPayload,
    });
  });
});
