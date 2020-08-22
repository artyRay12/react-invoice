import React, { createContext, useReducer } from "react";

const initialState = {
    avatarUrl: localStorage.getItem("avatarUrl"),
    userName: localStorage.getItem("username"),
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                username: action.payload.username,
                avatarUrl: action.payload.avatarUrl,
            };
        case "LOGOUT":
            return {
                ...state,
                username: "",
                avatarUrl: "",
            };
        default:
            return {
                ...state,
            };
    }
};
export const UserContex = createContext();

export const UserContextProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);

    return <UserContex.Provider value={value}>{children}</UserContex.Provider>;
};
