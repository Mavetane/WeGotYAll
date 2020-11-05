import { ADD_SEEKER, GET_INFO, ADD_SEEKER_POST } from "../actions/actionsTypes";

const initialState = {
  seeker: null,
  workersInfo: null,
  seekerPost: null


};

export const seekersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEEKER:
      return { state, seeker: action.payload }
    case GET_INFO:
      return { state, workersInfo: action.payload }
    case ADD_SEEKER_POST:
      return { state, seekerPost: action.payload }
    default:
      return state;
  }
};

