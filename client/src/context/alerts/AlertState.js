import React, { useReducer } from "react";
import alertContext from "./alertContext";
import alertReducer from "./alertReducer";
import axios from "axios";
import { ADD_ALERT, DELETE_ALERT, ADD_ALERT_ERROR } from "../Types";

// name: "",
// criteria1: "",
// criteria2: "", //less
// value: "",
// days: "",
// email: "",
// phone: "",

/*
[
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
  }; */

const AlertState = (props) => {
  const initialState = {
    alerts: [],
    error: null,
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //add alert
  const addAlert = async (alert) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/alert", alert, config);
      dispatch({ type: ADD_ALERT, payload: res.data });
      console.log(res, "respon");
    } catch (error) {
      console.log(error);
      dispatch({ type: ADD_ALERT_ERROR, payload: error });
    }
  };

  //delete alert
  const deleteAlert = (id) => {
    dispatch({ type: DELETE_ALERT, payload: id });
  };

  return (
    <alertContext.Provider
      value={{
        alerts: state.alerts,
        error: state.error,
        deleteAlert,
        addAlert,
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
