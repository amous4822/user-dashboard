import { React, useState } from "react";
import "../../css/Sidebar.css";
//icons import
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import RestoreIcon from "@material-ui/icons/Restore";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import StorageIcon from "@material-ui/icons/Storage";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import E3AppsMenu from "./E3AppsMenu";

export default function Sidebar() {
  const [showE3Apps, setE3Apps] = useState(false);
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <div className="sidebarMenu">
          <h2 className="sidebarTitle">Grid Manager 2.0</h2>
          <div className="sidebarUsername">
            <ul className="sidebarList">
              <li className="sidebarItem">
                <DashboardOutlinedIcon className="sidebarIcon" />
                Dashboard
              </li>

              <div className={showE3Apps ? "sidebarSubMenuStyle" : null}>
                <li
                  className="sidebarItem"
                  onClick={() => {
                    setE3Apps(!showE3Apps);
                  }}
                >
                  <VpnKeyIcon className="sidebarIcon" />
                  <span style={{"width":"70%"}}>E3 Apps</span>
                  {showE3Apps ? (
                    <ArrowDropUpIcon className="sidebarDropDown" />
                  ) : (
                    <ArrowDropDownIcon className="sidebarDropDown" />
                  )}
                </li>
                {showE3Apps ? <E3AppsMenu /> : null}
              </div>

              <li className="sidebarItem">
                <EqualizerIcon className="sidebarIcon" />
                <span style={{"width":"70%"}}>Insights</span>
                <ArrowDropDownIcon className="sidebarDropDown" />
              </li>
              <li className="sidebarItem">
                <StorageIcon className="sidebarIcon" />
                <span style={{"width":"70%"}}>Demand Response</span>
                <ArrowDropDownIcon className="sidebarDropDown" />
              </li>
              <li className="sidebarItem">
                <RestoreIcon className="sidebarIcon" />
                <span style={{"width":"70%"}}>Version History</span>
                <ArrowDropDownIcon className="sidebarDropDown" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
