import { CHANGE_SCHEMA } from "./types";

const changeSchema = schemaUrl => {
  const payload = { schemaUrl };
  return dispatch => dispatch({ type: CHANGE_SCHEMA, payload });
};

export { changeSchema };
