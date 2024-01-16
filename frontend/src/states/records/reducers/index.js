import { FILTER_RECORDS, GET_RECORDS_SUCCESS, SORT_RECORDS } from '../types';

const soundDefaultState = {
  records: [],
  filteredRecords: [],
  filterOptions: []
};

export default (state = soundDefaultState, action) => {
  switch (action.type) {
    case FILTER_RECORDS: {
      return {
        ...state,
        filteredRecords: action.payload === "all" ? [...state.records] :[...state.records.filter(item => item.vehicleId === action.payload)]
      }
    }
    case SORT_RECORDS: {
      return {
        ...state,
        filteredRecords: [...state.filteredRecords].sort((a,b) => a[action.payload] - b[action.payload])
      }
    }
    case GET_RECORDS_SUCCESS: {
      return {
        ...state,
        records: [...action.payload],
        filterOptions: [...new Set(action.payload.map(item => item.vehicleId))]
      };
    }
    default:
      return state;
  }
};