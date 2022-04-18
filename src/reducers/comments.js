import { SAVE_COMMENT } from "actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.paylod];
    default:
      return state;
  }
}
