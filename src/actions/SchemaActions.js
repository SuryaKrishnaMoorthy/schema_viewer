import { GET_ALL_SCHEMA, CHANGE_SCHEMA } from "./types";
import { getAllSchemaRequest } from "../requests";

const getAllSchema = () => {
  return async dispatch => {
    const payload = await getAllSchemaRequest();

    dispatch({
      type: GET_ALL_SCHEMA,
      payload
    });
  };
};

const changeSchema = schemaUrl => {
  const payload = { schemaUrl };
  return dispatch => dispatch({ type: CHANGE_SCHEMA, payload });
};

export { changeSchema, getAllSchema };
