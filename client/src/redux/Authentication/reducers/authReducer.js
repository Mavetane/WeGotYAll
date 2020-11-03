import { HANDLE_AUTH, SAVE_CODE, ADD_USER } from "../actions/actionTypes";

const initialState = {
  user: [],
  auth: false,
  code: null

};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { state, user: action.payload }
    case HANDLE_AUTH:
      return { state, auth: action.payload }
    case SAVE_CODE:
      return { state, code: action.payload }
    default:
      return state;
  }
};
;