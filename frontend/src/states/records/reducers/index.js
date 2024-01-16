import sortByProperty from '@/utils/sortUtil';
import { FILTER_RECORDS, GET_RECORDS_SUCCESS } from '../types';

const MAX_ITEM = 10;

const soundDefaultState = {
  records: [],
  filteredRecords: [],
  filterOptions: [],
  totalPages: 0
};

export default (state = soundDefaultState, action) => {
  switch (action.type) {
    case FILTER_RECORDS: {
      const sortedItems = [...state.records].sort(sortByProperty(action.payload.sort, action.payload.order));
      const filteredItems = action.payload.filter === "all" ? [...sortedItems] :[...sortedItems].filter(item => item.vehicleId === action.payload.filter);
      
      const totalPages = Math.ceil(filteredItems.length / MAX_ITEM);

      const startIndex = (action.payload.currentPage - 1) * MAX_ITEM;
      const endIndex = startIndex + MAX_ITEM;
      const items = filteredItems.slice(startIndex, endIndex);

      return {
        ...state,
        filteredRecords: [...items],
        totalPages
      }
    }

    case GET_RECORDS_SUCCESS: {
      return {
        ...state,
        records: [...action.payload],
        totalPages: Math.ceil([...action.payload].length / MAX_ITEM),
        filterOptions: [...new Set(action.payload.map(item => item.vehicleId))]
      };
    }
    default:
      return state;
  }
};