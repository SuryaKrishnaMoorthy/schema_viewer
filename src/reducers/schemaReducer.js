import { CHANGE_SCHEMA, GET_ALL_SCHEMA } from "../actions/types";

const INTIAL_STATE = {
  schemaUrl: "https://rebilly.github.io/ReDoc/swagger.yaml",
  schemas: []
};

const schemaReducer = (state = INTIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_ALL_SCHEMA:
      return { ...state, ...payload };
    case CHANGE_SCHEMA:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export { schemaReducer };
