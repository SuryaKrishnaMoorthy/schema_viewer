import { CHANGE_SCHEMA } from "../actions/types";

const INTIAL_STATE = {
  schemaUrl: "https://rebilly.github.io/ReDoc/swagger.yaml"
};

const schemaReducer = (state = INTIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_SCHEMA:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export { schemaReducer };
