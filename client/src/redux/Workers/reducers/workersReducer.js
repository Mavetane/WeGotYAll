import { ADD_WORKER, GET_SEEKER_DATA } from "../actions/actionTypes";

const initialState = {
  worker: [],
  seekerData: null

};

export const workersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORKER:
      return { ...state, worker: action.payload }
    case GET_SEEKER_DATA:
      return { ...state, worker: action.payload }
    default:
      return state;
  }
};

