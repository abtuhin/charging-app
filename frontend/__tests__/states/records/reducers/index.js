import recordsReducer from '@/states/records/reducers'; 
import { FILTER_RECORDS, GET_RECORDS_SUCCESS } from '@/states/records/types';

const mockRecords = [
  {
    "id": 14,
    "sessionId": "1",
    "vehicleId": "PORSCHE1",
    "start": "2024-01-16T19:25:03.000Z",
    "end": "2024-01-16T19:30:03.000Z",
    "totalCost": 838,
    "createdAt": null,
    "updatedAt": null
  },
  {
    "id": 15,
    "sessionId": "2",
    "vehicleId": "BMW2",
    "start": "2024-01-16T19:30:03.000Z",
    "end": "2024-01-16T19:35:03.000Z",
    "totalCost": 1250,
    "createdAt": null,
    "updatedAt": null
  },
  {
    "id": 16,
    "sessionId": "3",
    "vehicleId": "AUDI3",
    "start": "2024-01-16T19:35:03.000Z",
    "end": "2024-01-16T19:40:03.000Z",
    "totalCost": 642,
    "createdAt": null,
    "updatedAt": null
  },
  {
    "id": 23,
    "sessionId": "10",
    "vehicleId": "PORSCHE1",
    "start": "2024-01-16T19:30:03.000Z",
    "end": "2024-01-16T20:15:03.000Z",
    "totalCost": 1164,
    "createdAt": null,
    "updatedAt": null
  },
];

describe('Records Reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      records: [],
      filteredRecords: [],
      filterOptions: [],
      totalPages: 0,
    };
    const action = { type: 'DUMMY_ACTION' };

    const newState = recordsReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  it('should handle GET_RECORDS_SUCCESS', () => {
    const initialState = {
      records: [],
      filteredRecords: [],
      filterOptions: [],
      totalPages: 0,
    };
    
    const action = { type: GET_RECORDS_SUCCESS, payload: mockRecords };

    const newState = recordsReducer(initialState, action);

    expect(newState).toEqual({
      records: mockRecords,
      filteredRecords: [],
      filterOptions: ['PORSCHE1', 'BMW2', 'AUDI3'],
      totalPages: 1
    });
  });

  it('should handle FILTER_RECORDS', () => {
    const initialState = {
      records: mockRecords,
      filteredRecords: [],
      filterOptions: ['PORSCHE1', 'BMW2', 'AUDI3'],
      totalPages: 1,
    };

    const filterAction = {
      type: FILTER_RECORDS,
      payload: {
        sort: 'totalCost',
        order: 'desc',
        filter: 'PORSCHE1',
        currentPage: 1,
      },
    };

    const newState = recordsReducer(initialState, filterAction);

    expect(newState).toEqual({
      records: initialState.records,
      filteredRecords: [
        {
          "id": 23,
          "sessionId": "10",
          "vehicleId": "PORSCHE1",
          "start": "2024-01-16T19:30:03.000Z",
          "end": "2024-01-16T20:15:03.000Z",
          "totalCost": 1164,
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 14,
          "sessionId": "1",
          "vehicleId": "PORSCHE1",
          "start": "2024-01-16T19:25:03.000Z",
          "end": "2024-01-16T19:30:03.000Z",
          "totalCost": 838,
          "createdAt": null,
          "updatedAt": null
        },
      ],
      filterOptions: ['PORSCHE1', 'BMW2', 'AUDI3'],
      totalPages: 1,
    });
  });

});
