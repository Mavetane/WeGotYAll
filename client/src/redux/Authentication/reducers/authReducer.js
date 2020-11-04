import { HANDLE_AUTH, SAVE_CODE, ADD_USER, GET_ERROR } from "../actions/actionTypes";


const initialState = {
  user: null,
  auth: false,
  code: null,
  error: null

};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { state, user: action.payload }
    case HANDLE_AUTH:
      return { state, auth: action.payload }
    case SAVE_CODE:
      return { state, code: action.payload }
    case GET_ERROR:
      return { state, error: action.payload }
    default:
      return state;
  }
};
;