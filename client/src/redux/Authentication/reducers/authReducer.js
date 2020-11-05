import { HANDLE_AUTH, SAVE_CODE, ADD_USER, GET_ERROR, LOG_OUT } from "../actions/actionTypes";


const initialState = {
  user: null,
  code: null,
  isAuthorized: false,
  error: { error: "" }

};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { state, user: action.payload }
    case HANDLE_AUTH:
      return { state, isAuthorized: action.payload }
    case SAVE_CODE:
      return { state, code: action.payload }
    case LOG_OUT:
      return { state, user: null }
    case GET_ERROR:
      return { state, error: action.payload }
    default:
      return state;
  }
};
;