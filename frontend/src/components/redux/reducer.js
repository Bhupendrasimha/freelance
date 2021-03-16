import {
  DELETE_DATA,
  EDIT_DATA,
  GET_DATA,
  GET_DATA_FAILURE,
  GET_DATA_SUCCESS,
  POST_DATA,
  POST_DATA_FAILURE,
} from "./actionType";

const initState = {
  data: [],
  isErr: false,
  studentsLength: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        isErr: false,
        studentsLength: payload.length,
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        isErr: true,
      };
    case DELETE_DATA:
      return {
        ...state,
      };
    case EDIT_DATA:
      return {
        ...state,
      };
    case POST_DATA:
      return {
        ...state,
      };
    case POST_DATA_FAILURE:
      return {};
    default:
      return state;
  }
};
