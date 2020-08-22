import React from "react";
import "./sideBar.scss";
import Menu from "./Menu/Menu";
import Avatar from "./Avatar/Avatar";

const SideBar = () => {
    return (
        <div className="col-2 col-lg-1 bg-dark vh-100 sidebar-wrapper">
            <Avatar />
            <Menu />
            <div className="text-light">no copyright</div>
        </div>
    );
};

export default SideBar;
