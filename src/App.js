import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";

import "./sass/main.scss";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lightTheme: false
        };
    }
    render() {
        let bgColor = "#eff2f9";
        if (this.state.lightTheme) bgColor = "#eff2f9";
        else bgColor = "#161f3e";
        return (
            <div className="App" style={{ "background-color": bgColor }}>
                <Navbar lightTheme={this.state.lightTheme} />
                <Dashboard lightTheme={this.state.lightTheme} />
                <Sidebar lightTheme={this.state.lightTheme} />
            </div>
        );
    }
}
