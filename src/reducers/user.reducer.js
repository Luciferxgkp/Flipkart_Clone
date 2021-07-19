import { flushSync } from "react-dom";
import { userConstants } from "../actions/constants";

const initState = {
  address: [],
  orders: [],
  error: null,
  loading: false,
  orderFetching: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case userConstants.GET_USER_ADDRESS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.GET_USER_ADDRESS_SUCCESS:
      state = {
        ...state,
        address: action.payload.address,
        loading: false,
      };
      break;
    case userConstants.GET_USER_ADDRESS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case userConstants.ADD_USER_ADDRESS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.ADD_USER_ADDRESS_SUCCESS:
      state = {
        ...state,
        address: action.payload.address,
        loading: false,
      };
      break;
    case userConstants.GET_USER_ADDRESS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case userConstants.GET_USER_ORDER_REQUEST:
        state={
            ...state,
            orderFetching: true
        }
      break;
    case userConstants.GET_USER_ORDER_SUCCESS:
        state={
            ...state,
            orderFetching: false,
            orders: action.payload.orders

        }
      break;
    case userConstants.GET_USER_ORDER_REQUEST:
        state={
            ...state,
            orderFetching: false,
            error: action.payload.error

        }
      break;
  }
  return state;
};
