import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContex } from "../Context/userContext";



export const ProtectedRoute = (props) => {
    const [state] = useContext(UserContex);

    if (state.username) {
        return <Route {...props} />;
    } else {
        return <Redirect to="/login/" />;
    }
};
