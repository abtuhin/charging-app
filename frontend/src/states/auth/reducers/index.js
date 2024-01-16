import { STORE_USER } from "../types";

const authDefaultState = {
  user: {}
};
  
export default (state = authDefaultState, action) => {
  switch (action.type) {
    case STORE_USER: {
      return {
        ...state,
        user: action.payload
      }
    }
    default:
      return state;
  }
};