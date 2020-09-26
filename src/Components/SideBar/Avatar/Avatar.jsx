import React, { useContext } from "react";
import { UserContex } from "../../../Context/userContext";
import { Link } from "react-router-dom";
import "./avatar.scss";

const Avatar = () => {
    const [state, dipatch] = useContext(UserContex);

    const onLogoutClick = () => {
        dipatch({ type: "LOGOUT" });
        localStorage.clear("username");
        localStorage.clear("avatarUrl");
    };

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
                <>
                    <img
                        src={state.avatarUrl}
                        alt={state.username}
                        className="avatar-img mb-2"
                    />
                    <button
                        type="button"
                        className="btn btn-outline-info btn-sm"
                        onClick={onLogoutClick}
                    >
                        {" "}
                        out{" "}
                    </button>
                </>
            )}
        </div>
    );
};

export default Avatar;
