import { baseUrl } from "@/config/network";
import axios from "axios";
import { STORE_USER, USER_LOGIN_FAILED, USER_LOGIN_PENDING, USER_LOGIN_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_PENDING, USER_REGISTER_SUCCESS } from "../types";

export const storeUser = (data) => {
  return {
    type: STORE_USER,
    payload: data
  }
}

export const register = (data) => async dispatch => {
  dispatch({ type: USER_REGISTER_PENDING });
  try {
    const res = await axios.post(`${baseUrl}/users/register`, data);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data.data });
    return res;
  } catch (e) {
    dispatch({ type: USER_REGISTER_FAILED, payload: e.message });
    throw new Error(e);
  }
}

export const login = (data) => async dispatch => {
  dispatch({ type: USER_LOGIN_PENDING });
  try {
    const res = await axios.post(`${baseUrl}/users/login`, data);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.data });
    return res;
  } catch (e) {
    dispatch({ type: USER_LOGIN_FAILED, payload: e.message });
    throw new Error(e);
  }
}