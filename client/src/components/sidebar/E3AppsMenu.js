import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

export default function E3AppsMenu() {
  const setActive = (e) => {
    e.target.classList.add("active");
  };
  return (
    <Fragment>
      <Link to="/">
        <li className="sidebarItem active" onClick={setActive}>
          <NotificationsActiveIcon className="sidebarIcon" />
          Peak Shaving & Alert
        </li>
      </Link>
      <li className="sidebarItem">
        <AcUnitIcon className="sidebarIcon" />
        Ventilation
      </li>
      <li className="sidebarItem">
        <AvTimerIcon className="sidebarIcon" />
        Out of Hours
      </li>
      <li className="sidebarItem">
        <WhatshotIcon className="sidebarIcon" />
        Heat Pump
      </li>
      <li className="sidebarItem">
        <FlashOnIcon className="sidebarIcon" />
        Load Shifting
      </li>
    </Fragment>
  );
}
