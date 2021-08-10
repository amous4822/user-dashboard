import React from "react";
import { Button } from "@material-ui/core";
import "../../css/DisplayAlert.css";
import { makeStyles } from "@material-ui/core/styles";
import EnhancedTable from "../table/DisplayTable";

const useStyles = makeStyles({
  alert: {
    margin: "5px",
    marginBottom:"14px",
    backgroundColor: "#0f123f",
    color: "white",
    padding: "5px 35px 5px 35px",
    "&:hover": {
      backgroundColor: "#0f123f98",
    },
  },
  triggerAlert: {
    margin: "5px",
    marginBottom:"14px",
    color: "grey",
    padding: "5px 20px 5px 20px",
  },
});

export default function DisplayAlert() {
  const classes = useStyles();
  return (
    <div className="displayAlert">
      <div className="alertButtons">
        <Button variant="outlined" className={classes.alert}>
          Alerts
        </Button>
        <Button variant="outlined" className={classes.triggerAlert}>
          Triggered Alerts
        </Button>
      </div>
      <div>
        <EnhancedTable />
      </div>
    </div>
  );
}
