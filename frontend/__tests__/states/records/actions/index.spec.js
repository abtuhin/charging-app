import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  filterRecords,
  getRecords
} from '@/states/records/actions';
import { FILTER_RECORDS, GET_RECORDS_SUCCESS, GET_RECORDS_FAILED, GET_RECORDS_PENDING } from "@/states/records/types";
import { baseUrl } from '@/config/network';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockAxios = new MockAdapter(axios);

describe('Records Actions', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('should create an action to filter records', () => {
    const payload = { filter: 'someFilter' };
    const expectedAction = {
      type: FILTER_RECORDS,
      payload: payload,
    };
    expect(filterRecords(payload)).toEqual(expectedAction);
  });

  it('should dispatch GET_RECORDS_SUCCESS when fetching records has been done', async () => {
    const responseData = [{ id: 1, name: 'Record 1' }];
    mockAxios.onGet(`${baseUrl}/records`).reply(200, { data: responseData });

    const expectedActions = [
      { type: GET_RECORDS_PENDING },
      { type: GET_RECORDS_SUCCESS, payload: responseData },
    ];

    const store = mockStore({});
    await store.dispatch(getRecords());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch GET_RECORDS_FAILED when fetching records fails', async () => {
    const errorMessage = "Request failed with status code 500";;
    mockAxios.onGet(`${baseUrl}/records`).reply(500, { message: errorMessage });

    const expectedActions = [
      { type: GET_RECORDS_PENDING },
      { type: GET_RECORDS_FAILED, payload: errorMessage },
    ];

    const store = mockStore({});

    try {
      await store.dispatch(getRecords());
    } catch (error) {}

    expect(store.getActions()).toEqual(expectedActions);
  });
});
