import { USER } from "./userActions";

const initialState = {
  firstName: "",
  lastName: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.UPDATE: {
      const { payload } = action;
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};
