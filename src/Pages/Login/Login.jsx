import React, { useState, useEffect, useContext } from "react";
import "./login.scss";
import useFetch from "../../hooks/useFetch";
import { UserContex } from "../../Context/userContext";
import { PASSWORD_REG } from "./loginConfig";
import { Redirect } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordValidation, setPasswordValidation] = useState(false);
    const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false);
    const [, dispatch] = useContext(UserContex);
    const [{ isLoading, response, error }, doFetch] = useFetch(
        `https://api.github.com/users/${username}`
    );

    const onSubmit = (e) => {
        e.preventDefault();
        if (!PASSWORD_REG.test(password)) {
            setPasswordValidation(true);
            return;
        } else {
            setPasswordValidation(false);
        }

        doFetch();
    };

    useEffect(() => {
        if (!response) return;
        dispatch({
            type: "SET_USER",
            payload: {
                username: response.login,
                avatarUrl: response.avatar_url,
            },
        });

        localStorage.setItem('username', response.avatar_url)
        localStorage.setItem('avatarUrl', response.avatar_url)
        setIsSuccessfulSubmit(true);
    }, [response, error, dispatch]);

    if (isSuccessfulSubmit) return <Redirect to="/" />;

    return (
        <div className="col-3 form-wrapper">
            <h1 className="text-center text-light mb-4">Login</h1>
            <form action="" onSubmit={onSubmit}>
                <fieldset className="form-group">
                    <input
                        type="text"
                        className={`form-control ${error && "is-invalid"}`}
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="invalid-feedback">
                        This user doens't exist
                    </div>
                </fieldset>

                <fieldset className="form-group">
                    <input
                        type="password"
                        className={`form-control ${
                            passwordValidation && "is-invalid"
                        }`}
                        autoComplete="current-pass"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="invalid-feedback">
                        Password should contain atleast: 1 number, 1 capital
                        letter, 1 letter
                    </div>
                </fieldset>
                <div className="text-center">
                    <button
                        className="btn btn-outline-light btn-md"
                        type="submit"
                        disabled={isLoading}
                    >
                        login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
