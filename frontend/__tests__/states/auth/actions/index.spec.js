import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  STORE_USER,
  USER_REGISTER_PENDING,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from '@/states/auth/types';
import { login, register, storeUser } from '@/states/auth/actions';
import { baseUrl } from '@/config/network';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockAxios = new MockAdapter(axios);

describe('Auth Actions', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('should create an action to store user data', () => {
    const userData = { id: 1, username: 'test' };
    const expectedAction = {
      type: STORE_USER,
      payload: userData,
    };
    expect(storeUser(userData)).toEqual(expectedAction);
  });

  it('should dispatch USER_REGISTER_SUCCESS when registering user', async () => {
    const userData = { username: 'test', password: 'test' };
    mockAxios.onPost(`${baseUrl}/users/register`, userData).reply(201, { data: userData });

    const expectedActions = [
      { type: USER_REGISTER_PENDING },
      { type: USER_REGISTER_SUCCESS, payload: userData },
    ];

    const store = mockStore({});

    await store.dispatch(register(userData));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch USER_REGISTER_FAILED when registering user', async () => {
    const userData = { username: 'test', password: 'test' };
    const errorMessage = "Request failed with status code 500";
    mockAxios.onPost(`${baseUrl}/users/register`, userData).reply(500, { message: errorMessage });

    const expectedActions = [
      { type: USER_REGISTER_PENDING },
      { type: USER_REGISTER_FAILED, payload: errorMessage },
    ];

    const store = mockStore({});

    try {
      await store.dispatch(register(userData));
    } catch (error) {}

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch USER_LOGIN_SUCCESS when logging in has been done', async () => {
    const userData = { username: 'test', password: 'test' };
    mockAxios.onPost(`${baseUrl}/users/login`, userData).reply(200, { data: userData });

    const expectedActions = [
      { type: USER_LOGIN_PENDING },
      { type: USER_LOGIN_SUCCESS, payload: userData },
    ];

    const store = mockStore({});

    await store.dispatch(login(userData));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch USER_LOGIN_FAILED when registering user', async () => {
    const userData = { username: 'test', password: 'test' };
    const errorMessage = "Request failed with status code 500";
    mockAxios.onPost(`${baseUrl}/users/login`, userData).reply(500, { message: errorMessage });

    const expectedActions = [
      { type: USER_LOGIN_PENDING },
      { type: USER_LOGIN_FAILED, payload: errorMessage },
    ];

    const store = mockStore({});

    try {
      await store.dispatch(login(userData));
    } catch (error) {}

    expect(store.getActions()).toEqual(expectedActions);
  });
});
