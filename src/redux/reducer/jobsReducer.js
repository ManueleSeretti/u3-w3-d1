import { SET_JOBS } from "../action";

const initialState = {
  content: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return { ...state, content: action.payload };

    default:
      return state;
  }
};
export default jobsReducer;
