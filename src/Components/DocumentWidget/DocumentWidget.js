import React, { Component } from "react";

import "./sass/DocumentWidget.scss";

class DocumentWidget extends Component {
    componentDidMount() {
        if (this.props.lightTheme === true) require("./sass/light.scss");
        if (this.props.lightTheme === false) require("./sass/dark.scss");
    }
    render() {
        return (
            <div className="DocumentWidget clearfix">
                <div className="DocumentWidget__Img"></div>
                <div className="DocumentWidget__Info">
                    <h1
                        className="DocumentWidget__Info-Title"
                        title={this.props.documentName}
                    >
                        {this.props.documentName.slice(0, 18)}
                    </h1>
                    <h2 className="DocumentWidget__Info-Desc">
                        Viewed {this.props.documentViews} Times
                    </h2>
                    <h2 className="DocumentWidget__Info-Desc">
                        Dated : {this.props.documentDate}
                    </h2>
                </div>
            </div>
        );
    }
}

export default DocumentWidget;
