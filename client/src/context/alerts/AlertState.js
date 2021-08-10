import React, { useReducer } from "react";
import alertContext from "./alertContext";
import alertReducer from "./alertReducer";
import axios from "axios";
import {
  ADD_ALERT,
  DELETE_ALERT,
  ALERT_ERROR,
  GET_ALERT,
  CLEAR_ALERT,
} from "../Types";

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
    } catch (error) {
      dispatch({ type: ALERT_ERROR, payload: error });
    }
  };

  //get alerts
  const getAlert = async () => {
    try {
      const res = await axios.get("/api/alert");

      dispatch({ type: GET_ALERT, payload: res.data });
    } catch (error) {
      dispatch({ type: ALERT_ERROR, payload: error });
    }
  };

  //clear contacts from state
  const clearAlert = () => {
    dispatch({ type: CLEAR_ALERT });
  };

  //delete alert
  const deleteAlert = async (id) => {
    try {
      await axios.delete(`/api/alert/${id}`);
      dispatch({ type: DELETE_ALERT, payload: id });
    } catch (error) {
      dispatch({ type: ALERT_ERROR, payload: error });
    }
  };

  return (
    <alertContext.Provider
      value={{
        alerts: state.alerts,
        error: state.error,
        deleteAlert,
        addAlert,
        getAlert,
        clearAlert,
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
