import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SideBar from "./Components/SideBar/SideBar";
import Terminal from "./Pages/Terminal/Terminal";
import Buyers from "./Pages/Buyers/Buyers";
import BuyerPersonal from "./Pages/BuyerPersonal/BuyerPersonal";
import NotFoundPage from "./Pages/404/404";
import { ProtectedRoute } from "./route/ProtectedRoute";

function App() {
    return (
        <div className="app container-fluid">
            <div className="row">
                <SideBar />
                <div className="offset-2 offset-sm-1 col mt-5">
                    <Switch>
                        <Route path="/" exact />
                        <Route path="/login/" component={Login} />
                        <ProtectedRoute path="/terminals/" component={Terminal} />
                        <ProtectedRoute path="/buyers/" component={Buyers} exact />
                        <ProtectedRoute path="/buyers/:slug" component={BuyerPersonal} />
                        <Route component={NotFoundPage} />
                    </Switch>{" "}
                </div>
            </div>
        </div>
    );
}

export default App;
