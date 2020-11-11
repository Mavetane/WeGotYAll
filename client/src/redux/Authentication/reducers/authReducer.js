import { HANDLE_AUTH, SAVE_CODE, ADD_USER, GET_ERROR, LOG_OUT, ADD_TOKEN, ADD_EMAIL } from "../actions/actionTypes";


const initialState = {
  user: null,
  userEmail: null,
  code: null,
  token: null,
  isAuthorized: false,
  error: { error: "" }

};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return { ...state, token: action.payload }
    case ADD_EMAIL:
      return { ...state, userEmail: action.payload }
    case ADD_USER:
      return { ...state, user: action.payload }
    case HANDLE_AUTH:
      return { ...state, isAuthorized: action.payload }
    case SAVE_CODE:
      return { ...state, code: action.payload }
    case LOG_OUT:
      return { ...state, user: null }
    case GET_ERROR:
      return { ...state, error: action.psayload }
    default:
      return state;
  }
};
;