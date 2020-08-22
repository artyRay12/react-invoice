import React from "react";
import "./sideBar.scss";
import Menu from "./Menu/Menu";
import Avatar from "./Avatar/Avatar";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const SideBar = () => {
    const {width} = useWindowDimensions();

    return (
        <div className="col-2 col-sm-1 bg-dark vh-100 sidebar-wrapper">
            <Avatar />
            <Menu />
            <div className="text-light text-center">{width > 800 ? 'Copyright © 2020' : '©' }</div>
        </div>
    );
};

export default SideBar;
