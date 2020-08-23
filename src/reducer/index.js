import types from "../actionType";
const initialState = {
  activeTab: "todo",
};
const todoReducer = function (state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case types.ACTIVE_TAB: {
      return {
        ...state,
        activeTab: payload.activeTab,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
