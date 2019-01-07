import { ADD_PLACE } from "../constants/action-types";

export function addPlace(payload) {
  return { type: ADD_PLACE, payload };
}
