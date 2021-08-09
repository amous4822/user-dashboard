import React from "react";
import CreateAlertForm from "../../components/alert/CreateAlertForm";
import DisplayAlert from "../../components/alert/DisplayAlert";
import Charts from "../../components/chart/Charts";
import "../../css/Main.css";

export default function Main() {
  return (
    <div className="main">
      <Charts />
      <div className="alertSection">
        <CreateAlertForm />
        <DisplayAlert />
      </div>
    </div>
  );
}
