import React from "react";
import CreateAlert from "../../components/alert/CreateAlert";
import DisplayAlert from "../../components/alert/DisplayAlert";
import Charts from "../../components/chart/Charts";
import "../../css/Main.css";

export default function Main() {
  return (
    <div className="main">
      Main Page for the dashboard
      <Charts />
      <div className="alertSection">
        <CreateAlert />
        <DisplayAlert />
      </div>
    </div>
  );
}
