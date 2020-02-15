import React, { Component } from "react";

import "./sass/UpcomingClassesWidget.scss";

class UpcomingClassesWidget extends Component {

    componentDidMount() {
        if (this.props.lightTheme === true) require("./sass/light.scss");
        if (this.props.lightTheme === false) require("./sass/dark.scss");
    }

    render() {
        return (
            <div className="UpcomingClassesWidget clearfix">
                <div className="col col-lg-3">
                    <div className="UpcomingClassesWidget__Abbr display7 ">
                        {this.props.courseAbbr}
                    </div>
                </div>
                <div className="col col-lg-9 UpcomingClassesWidget__Info">
                    <p className="display9" style={{ "min-height": "25px" }}>
                        {this.props.courseName}
                    </p>

                    <p className="display10" style={{ "font-weight": "700" }}>
                        {this.props.classType}
                    </p>

                    <p className="display10">{this.props.classTime}</p>
                </div>
            </div>
        );
    }
}

export default UpcomingClassesWidget;
