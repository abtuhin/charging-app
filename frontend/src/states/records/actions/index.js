import axios from "axios";
import { baseUrl } from "@/config/network";
import { FILTER_RECORDS, GET_RECORDS_FAILED, GET_RECORDS_PENDING, GET_RECORDS_SUCCESS } from "../types";


export const filterRecords = (payload) => {
  return {
    type: FILTER_RECORDS,
    payload: payload
  }
}

export const getRecords = () => async dispatch => {
  dispatch({type: GET_RECORDS_PENDING});
  try {
    const res = await axios.get(`${baseUrl}/records`);
    dispatch({ type: GET_RECORDS_SUCCESS, payload: res.data.data });
    return res;
  } catch (e) {
    dispatch({type: GET_RECORDS_FAILED, payload: e.message});
    throw new Error(e);
  }
};