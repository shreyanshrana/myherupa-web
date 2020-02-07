import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";

import "./sass/main.scss";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
            </div>
        );
    }
}
