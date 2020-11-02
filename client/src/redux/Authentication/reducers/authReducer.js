import { HANDLE_AUTH } from "../actions/actionTypes";

const initialState = {
  user: null,
  auth: false

};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {

    case HANDLE_AUTH:
      return { state, auth: action.payload }
    default:
      return state;
  }
};

export default adminReducer;