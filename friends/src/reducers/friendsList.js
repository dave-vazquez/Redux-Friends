import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE
} from "../actions/friendsList";

const initialState = {
  friends: [],
  fetchingFriends: false,
  errorMessage: ""
};

export const friendsList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_START: {
      return {
        ...state,
        fetchingFriends: true
      };
    }
    case FETCH_FRIENDS_SUCCESS: {
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: false,
        errorMessage: ""
      };
    }
    case FETCH_FRIENDS_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
        fetchingFriends: false
      };
    }
    default:
      return state;
  }
};
