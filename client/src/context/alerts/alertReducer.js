import { ADD_ALERT, DELETE_ALERT, ADD_ALERT_ERROR } from "../Types";

export default (state, action) => {
  switch (action.type) {
    case ADD_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
      };
    case DELETE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter((item, i) => i !== action.payload),
      };

    case ADD_ALERT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
