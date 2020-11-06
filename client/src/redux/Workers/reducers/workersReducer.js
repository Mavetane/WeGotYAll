import { ADD_WORKER, ADD_WORKER_POST, GET_SEEKER_DATA } from "../actions/actionTypes";

const initialState = {
  worker: null,
  seekersData: null,
  workerPost: null

};

export const workersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORKER:
      return { ...state, worker: action.payload }
    case GET_SEEKER_DATA:
      return { ...state, seekersData: action.payload }
    case ADD_WORKER_POST:
      return { ...state, workerPost: action.payload }
    default:
      return state;
  }
};


