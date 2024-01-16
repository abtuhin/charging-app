import axios from "axios";
import { baseUrl } from "@/config/network";
import { FILTER_RECORDS, SORT_RECORDS, GET_RECORDS_FAILED, GET_RECORDS_PENDING, GET_RECORDS_SUCCESS } from "../types";

export const sortRecords = (payload) => {
  return {
    type: SORT_RECORDS,
    payload: payload
  }
}

export const filterRecords = (vechicleId) => {
  return {
    type: FILTER_RECORDS,
    payload: vechicleId
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