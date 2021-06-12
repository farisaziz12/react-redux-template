const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "": {
      return {};
    }
    default:
      return state;
  }
};
