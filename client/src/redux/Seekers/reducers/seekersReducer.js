import { ADD_SEEKER } from "../actions/actionsTypes";

const initialState = {
  seeker: null,


};

export const seekersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEEKER:
      return { state, seeker: action.payload }

    default:
      return state;
  }
};

