import { CHANGE_SCHEMA } from "../actions/types";

const INTIAL_STATE = {
  schemaUrl: "Instagram"
};

export default (state = INTIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_SCHEMA:
      return { ...state, ...payload };
    default:
      return state;
  }
};
