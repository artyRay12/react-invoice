import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SideBar from "./Components/SideBar/SideBar";
import Terminal from "./Pages/Terminal/Terminal";
import Buyers from "./Pages/Buyers/Buyers";
import BuyerPersonal from "./Pages/BuyerPersonal/BuyerPersonal";
import NotFoundPage from "./Pages/404/404";

function App() {
    return (
        <div className="app container-fluid">
            <div className="row">
                {/* <NavBar /> */}
                <SideBar />
                <div className="offset-2 offset-sm-1 col mt-5">
                    <Switch>
                        <Route path="/" exact />
                        <Route path="/login/" component={Login} />
                        <Route path="/terminals/" component={Terminal} />
                        <Route path="/buyers/" component={Buyers} exact />
                        <Route path="/buyers/:slug" component={BuyerPersonal} />
                        <Route component={NotFoundPage} />
                    </Switch>{" "}
                </div>
            </div>
        </div>
    );
}

export default App;
