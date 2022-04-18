import { SAVE_COMMENT } from "./types";
export function save_comment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}
