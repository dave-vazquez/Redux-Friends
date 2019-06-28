import { LOGIN_START } from "../actions/login";
const initialState = {
  isLoggingIn: false
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        isLoggingIn: true
      };
    }
    default:
      return state;
  }
};
