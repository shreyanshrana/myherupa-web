import React, { Component } from "react";

import "./sass/SubjectWidget.scss";

class SubjectWidget extends Component {
    componentDidMount() {
        if (this.props.lightTheme === true) require("./sass/light.scss");
        if (this.props.lightTheme === false) require("./sass/dark.scss");
    }
    render() {
        return (
            <div className="SubjectWidget clearfix">
                <div
                    className="SubjectWidget__Abbr"
                    style={{ "background-color": this.props.color }}
                >
                    {this.props.courseAbbr}
                </div>
                <div className="SubjectWidget__Info">
                    <h1 className="SubjectWidget__Info--Course-Name">
                        {this.props.courseName}
                    </h1>
                    <p className="SubjectWidget__Info--Course-Code">
                        {this.props.courseCode}
                    </p>
                </div>
                <div
                    className="SubjectWidget__Bar"
                    style={{ "background-color": this.props.color }}
                ></div>
            </div>
        );
    }
}

export default SubjectWidget;
