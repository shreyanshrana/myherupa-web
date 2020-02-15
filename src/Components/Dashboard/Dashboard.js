import React, { Component } from "react";
import SubjectWidget from "../SubjectWidget/SubjectWidget";
import CoursePage from "../CoursePage/CoursePage";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

import courseList from "./courseList.json";
import "./sass/Dashboard.scss";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseList: courseList
        };
    }
    componentDidMount() {
        if (this.props.lightTheme === true) require("./sass/light.scss");
        if (this.props.lightTheme === false) require("./sass/dark.scss");
    }
    render() {
        return (
            <div className="Dashboard">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <h1 className="Dashboard__Title">
                                Your Courses :{" "}
                            </h1>
                            <div className="Dashboard__SubjectWidget--Container">
                                {this.state.courseList.map(elem => {
                                    return (
                                        <Link to={elem.courseCode}>
                                            <SubjectWidget
                                                color={elem.color}
                                                courseAbbr={elem.courseAbbr}
                                                courseName={elem.courseName}
                                                courseCode={elem.courseCode}
                                                lightTheme={
                                                    this.props.lightTheme
                                                }
                                            />
                                        </Link>
                                    );
                                })}
                            </div>
                        </Route>
                        <Route path="/UCS111">
                            <CoursePage
                                courseName="Test"
                                lightTheme={this.props.lightTheme}
                            />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Dashboard;
