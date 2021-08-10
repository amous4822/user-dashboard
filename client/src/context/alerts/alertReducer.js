import {
  ADD_ALERT,
  DELETE_ALERT,
  ALERT_ERROR,
  GET_ALERT,
  CLEAR_ALERT,
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case CLEAR_ALERT:
      return {
        ...state,
        alerts: [],
        error: null,
      };
    case ADD_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
        loading: false,
      };
    case DELETE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter((alert) => alert._id !== action.payload),
      };

    case GET_ALERT:
      return {
        ...state,
        alerts: action.payload,
        loading: false,
      };

    case ALERT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
