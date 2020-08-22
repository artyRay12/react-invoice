import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SideBar from "./Components/SideBar/SideBar";
import Terminal from "./Pages/Terminal/Terminal";
import Buyers from "./Pages/Buyers/Buyers";

function App() {
    return (
        <div className="app container-fluid">
            <div className="row">
                {/* <NavBar /> */}
                <SideBar />
                <Switch>
                    <Route path="/login/" component={Login} />
                    <Route path="/terminals/" component={Terminal} />
                    <Route path="/buyers/" component={Buyers} />
                </Switch>{" "}
            </div>
        </div>
    );
}

export default App;
