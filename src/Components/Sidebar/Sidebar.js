import React, { Component } from "react";

import "./sass/Sidebar.scss";
import UpcomingClassesWidget from "../UpcomingClassesWidget/UpcomingClassesWidget";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Schedule: [
                {
                    courseAbbr: "SE",
                    courseName: "Software Engineering",
                    classType: "Lecture",
                    classTime: "9:00 AM - 10:00 AM"
                },
                {
                    courseAbbr: "CA",
                    courseName: "Computer Organisation & Architecture",
                    classType: "Lecture",
                    classTime: "10:00 AM - 11:00 AM"
                },
                {
                    courseAbbr: "MC",
                    courseName: "Matrix Computation",
                    classType: "Lab",
                    classTime: "11:00 AM - 01:00 PM"
                },
                {
                    courseAbbr: "ES",
                    courseName: "Embedded Systems",
                    classType: "Lab",
                    classTime: "01:00 PM - 03:00 PM"
                },
                {
                    courseAbbr: "FM",
                    courseName: "Financial Mathematics",
                    classType: "Lecture",
                    classTime: "03:00 PM - 04:00 PM"
                }
            ]
        };
    }
    componentDidMount() {
        if (this.props.lightTheme === true) require("./sass/light.scss");
        if (this.props.lightTheme === false) require("./sass/dark.scss");
    }

    render() {
        let today = new Date();
        today = today.toDateString();
        let date = today.slice(4, 10);
        let day = today.slice(0, 4);
        return (
            <div className="Sidebar">
                <h1 className="Sidebar__Date display5">{day}</h1>
                <p className="Sidebar__Date display5">{date}</p>
                <div className="Sidebar__Container">
                    <h1 className="display8">Today's Classes : </h1>
                    {this.state.Schedule.map(elem => {
                        return (
                            <UpcomingClassesWidget
                                courseAbbr={elem.courseAbbr}
                                courseName={elem.courseName}
                                classType={elem.classType}
                                classTime={elem.classTime}
                                color={elem.color}
                                lightTheme={this.props.lightTheme}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Sidebar;
