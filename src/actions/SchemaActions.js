import { CHANGE_SCHEMA } from "./types";

export const changeSchema = (schemaUrl, dispatch) => {
  const payload = { schemaUrl };
  dispatch({ type: CHANGE_SCHEMA, payload });
};
