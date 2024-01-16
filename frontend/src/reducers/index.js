import { combineReducers } from 'redux';
import authReducer from '@/states/auth/reducers';
import recordReducer from "@/states/records/reducers";

const reducers = combineReducers({
  auth: authReducer,
  record: recordReducer
});

export default reducers;