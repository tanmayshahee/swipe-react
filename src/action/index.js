import types from "../actionType";

export function setActiveTab(payload) {
  return {
    type: types.ACTIVE_TAB,
    payload,
  };
}
