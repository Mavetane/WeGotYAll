import { ADD_WORKER } from "../actions/actionTypes";

const initialState = {
  worker: [],


};

export const workersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORKER:
      return { state, worker: action.payload }

    default:
      return state;
  }
};

