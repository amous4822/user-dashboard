import { React, Fragment, useContext, useEffect } from "react";
import CreateAlertForm from "../../components/alert/CreateAlertForm";
import DisplayAlert from "../../components/alert/DisplayAlert";
import Charts from "../../components/chart/Charts";
import Sidebar from "../../components/sidebar/Sidebar";
import AuthContext from "../../context/auth/authContext";
import "../../css/Main.css";

export default function Main() {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
  
  }, []);
  return (
    <Fragment>
      <Sidebar />

      <div className="main">
        <Charts />
        <div className="alertSection">
          <CreateAlertForm />
          <DisplayAlert />
        </div>
      </div>
    </Fragment>
  );
}
