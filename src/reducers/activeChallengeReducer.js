import { SET_ACTIVE_CHALLENGE } from "../actions/types";

const activeChallengeReducer = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_CHALLENGE:
      return action.payload;

    default:
      return state;
  }
};

export default activeChallengeReducer;
