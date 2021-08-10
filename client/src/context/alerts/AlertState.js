import React, { useReducer } from "react";
import alertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { ADD_ALERT, DELETE_ALERT } from "../Types";

// name: "",
// criteria1: "",
// criteria2: "", //less
// value: "",
// days: "",
// email: "",
// phone: "",

const AlertState = (props) => {
  const initialState = {
    alerts: [
      {
        name: "Test",
        criteria1: "DK1",
        criteria2: "Less Than",
        value: 0,
        email: "email@email.com",
        days: "sun,mon,tue,wed",
      },
      {
        name: "Test",
        criteria1: "DK1",
        criteria2: "Less Than",
        value: 0,
        email: "email@email.com",
        days: "sun,mon,tue,wed",
      },
      {
        name: "Test",
        criteria1: "DK1",
        criteria2: "Less Than",
        value: 0,
        email: "email@email.com",
        days: "sun,mon,tue,wed",
      },
      {
        name: "Test",
        criteria1: "DK1",
        criteria2: "Less Than",
        value: 0,
        email: "email@email.com",
        days: "sun,mon,tue,wed",
      },
      {
        name: "Test",
        criteria1: "DK1",
        criteria2: "Less Than",
        value: 0,
        email: "email@email.com",
        days: "sun,mon,tue,wed",
      },
      {
        name: "Test",
        criteria1: "DK1",
        criteria2: "Less Than",
        value: 0,
        email: "email@email.com",
        days: "sun,mon,tue,wed",
      },
      {
        name: "Test",
        criteria1: "DK1",
        criteria2: "Less Than",
        value: 0,
        email: "email@email.com",
        days: "sun,mon,tue,wed",
      },
      {
        name: "Test",
        criteria1: "DK1",
        criteria2: "Less Than",
        value: 0,
        email: "email@email.com",
        days: "sun,mon,tue,wed",
      },
      {
        name: "Test",
        criteria1: "DK1",
        criteria2: "Less Than",
        value: 0,
        email: "email@email.com",
        days: "sun,mon,tue,wed",
      },
      {
        name: "Test",
        criteria1: "DK1",
        criteria2: "Less Than",
        value: 0,
        email: "email@email.com",
        days: "sun,mon,tue,wed",
      },
      {
        name: "Test",
        criteria1: "DK1",
        criteria2: "Less Than",
        value: 0,
        email: "email@email.com",
        days: "sun,mon,tue,wed",
      },
      {
        name: "Test",
        criteria1: "DK1",
        criteria2: "Less Than",
        value: 0,
        email: "email@email.com",
        days: "sun,mon,tue,wed",
      },
      {
        name: "Test",
        criteria1: "DK1",
        criteria2: "Less Than",
        value: 0,
        email: "email@email.com",
        days: "sun,mon,tue,wed",
      },
    ],
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //add alert
  const addAlert = alert =>{
    dispatch({type:ADD_ALERT, payload: alert})
  }

  //delete alert
  const deleteAlert = (id) => {
    dispatch({ type: DELETE_ALERT, payload: id });
  };

  return (
    <alertContext.Provider
      value={{
        alerts: state.alerts,
        deleteAlert,
        addAlert
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
