import React, { useContext } from "react";
import { UserContex } from "../../../Context/userContext";
import { Link } from "react-router-dom";
import "./avatar.scss";

const Avatar = () => {
    const [state] = useContext(UserContex);
    console.log("avatar render");

    return (
        <div className="avatar-wrapper">
            {!state.avatarUrl ? (
                <div className="navbar-dark">
                    <div className="navbar-nav">
                        <Link to="/login/" className="nav-link text-center">
                            Login
                        </Link>
                    </div>
                </div>
            ) : (
                <img
                    src={state.avatarUrl}
                    alt={state.username}
                    className="avatar-img"
                />
            )}
        </div>
    );
};

export default Avatar;
