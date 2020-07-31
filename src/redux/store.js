import { createStore } from "redux";

const counter = (state = [], action) => {
  let newState;
  switch (action.type) {
    case "ADD_TO_PLAYLIST":
      newState = [...state, action.item];
      return newState;
    case "TOGGLE_LISTENED":
      newState = state.map((item) => {
        if (item.id === action.item.id) {
          return { ...item, listened: !item.listened };
        } else {
            return item
        }
      });

      return newState;
    default:
      return state;
  }
};

const store = createStore(counter);

export default store;
