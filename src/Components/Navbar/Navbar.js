import React from "react";
import logo from "./img/Logo.png";
import "./sass/Navbar.scss";
import { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lightTheme: true,
            study: true,
            calendar: false
        };
    }
    componentDidMount() {
        if (this.state.lightTheme === true) require("./sass/light.scss");
        if (this.state.lightTheme === false) require("./sass/dark.scss");
    }

    //works only 2 timw, temperory
    componentDidUpdate() {
        if (this.state.lightTheme === true) require("./sass/light.scss");
        if (this.state.lightTheme === false) require("./sass/dark.scss");
    }
    render() {
        let toggleStudy = () => {
            this.setState({
                study: true,
                calendar: false
            });
        };

        let toggleCalendar = () => {
            this.setState({
                study: false,
                calendar: true
            });
        };

        //works only 2 timw, temperory
        let toggleTheme = () => {
            this.setState({
                lightTheme: !this.state.lightTheme
            });

            console.log(this.state.lightTheme);
        };
        let studyButtonClass = {
            container: "Navbar__Btn-Holder clearfix",
            indicator: "col col-lg-1"
        };
        let calendarButtonClass = {
            container: "Navbar__Btn-Holder clearfix",
            indicator: "col col-lg-1"
        };

        //Study Class
        if (this.state.study === true) {
            studyButtonClass.container = studyButtonClass.container.concat(
                " Navbar__Btn-Selected"
            );
            studyButtonClass.indicator = studyButtonClass.indicator.concat(
                " Navbar__Btn-Selected-Indicator"
            );
        } else {
            studyButtonClass.container = studyButtonClass.container.slice(
                0,
                27
            );
            studyButtonClass.indicator = studyButtonClass.indicator.slice(
                0,
                12
            );
        }

        //Study Class
        if (this.state.calendar === true) {
            calendarButtonClass.container = calendarButtonClass.container.concat(
                " Navbar__Btn-Selected"
            );
            calendarButtonClass.indicator = calendarButtonClass.indicator.concat(
                " Navbar__Btn-Selected-Indicator"
            );
        } else {
            calendarButtonClass.container = calendarButtonClass.container.slice(
                0,
                27
            );
            calendarButtonClass.indicator = calendarButtonClass.indicator.slice(
                0,
                12
            );
        }
        return (
            <div className="Navbar">
                <img src={logo} alt="myHerupa" onClick={toggleTheme} />
                <div className="Navbar__Btn-Container">
                    <Router>
                        <Link to="/" onClick={toggleStudy}>
                            <div className={studyButtonClass.container}>
                                <div className="col col-lg-11">
                                    <ion-icon
                                        name="book"
                                        class="display6"
                                    ></ion-icon>
                                    <h1 className="display10">Study</h1>
                                </div>
                                <div
                                    className={studyButtonClass.indicator}
                                ></div>
                            </div>
                        </Link>
                        <Link to="/calendar" onClick={toggleCalendar}>
                            <div className={calendarButtonClass.container}>
                                <div className="col col-lg-11">
                                    <ion-icon
                                        name="calendar"
                                        class="display6"
                                    ></ion-icon>
                                    <h1 className="display10">Calendar</h1>
                                </div>
                                <div
                                    className={calendarButtonClass.indicator}
                                ></div>
                            </div>
                        </Link>
                    </Router>
                </div>
                <Router>
                    <Link to="/settings" className=" ">
                        <div className="Navbar__Btn-Settings">
                            <ion-icon
                                name="settings"
                                class="display7"
                            ></ion-icon>
                        </div>
                    </Link>
                </Router>
            </div>
        );
    }
}

export default Navbar;
