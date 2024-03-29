import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./sass/CoursePage.scss";
import notesList from "./notesList.json";
import labList from "./labList.json";
import DocumentWidget from "../DocumentWidget/DocumentWidget";

class CoursePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            whatsActive: {
                notes: true,
                lab: false,
                tutorials: false,
                tutorial_solutions: false,
                previous_year_paper: false
            },
            documentList: notesList
        };
    }
    componentDidMount() {
        if (this.props.lightTheme === true) require("./sass/light.scss");
        if (this.props.lightTheme === false) require("./sass/dark.scss");
    }

    render() {
        let toggleNotes = () => {
            this.setState({
                whatsActive: {
                    notes: true,
                    lab: false,
                    tutorials: false,
                    tutorial_solutions: false,
                    previous_year_paper: false
                },
                documentList: notesList
            });
        };

        let toggleLab = () => {
            this.setState({
                whatsActive: {
                    notes: false,
                    lab: true,
                    tutorials: false,
                    tutorial_solutions: false,
                    previous_year_paper: false
                },
                documentList: labList
            });
        };

        let toggleTutorials = () => {
            this.setState({
                whatsActive: {
                    notes: false,
                    lab: false,
                    tutorials: true,
                    tutorial_solutions: false,
                    previous_year_paper: false
                }
            });
        };

        let toggleTutorial_Solutions = () => {
            this.setState({
                whatsActive: {
                    notes: false,
                    lab: false,
                    tutorials: false,
                    tutorial_solutions: true,
                    previous_year_paper: false
                }
            });
        };

        let togglePrevious_Year_Paper = () => {
            this.setState({
                whatsActive: {
                    notes: false,
                    lab: false,
                    tutorials: false,
                    tutorial_solutions: false,
                    previous_year_paper: true
                }
            });
        };

        let buttonClass = {
            notes: "CoursePage__Menu-Btn",
            lab: "CoursePage__Menu-Btn",
            tutorials: "CoursePage__Menu-Btn",
            tutorial_solutions: "CoursePage__Menu-Btn",
            previous_year_paper: "CoursePage__Menu-Btn"
        };

        //Notes Class
        if (this.state.whatsActive.notes === true) {
            buttonClass.notes = buttonClass.notes.concat(
                " CoursePage__Menu-Active"
            );
        } else {
            buttonClass.notes = buttonClass.notes.slice(0, 20);
        }

        //Lab Class
        if (this.state.whatsActive.lab === true) {
            buttonClass.lab = buttonClass.lab.concat(
                " CoursePage__Menu-Active"
            );
        } else {
            buttonClass.lab = buttonClass.lab.slice(0, 20);
        }

        //Tuorials Class
        if (this.state.whatsActive.tutorials === true) {
            buttonClass.tutorials = buttonClass.tutorials.concat(
                " CoursePage__Menu-Active"
            );
        } else {
            buttonClass.tutorials = buttonClass.tutorials.slice(0, 20);
        }

        //Tutorial Solutions Class
        if (this.state.whatsActive.tutorial_solutions === true) {
            buttonClass.tutorial_solutions = buttonClass.tutorial_solutions.concat(
                " CoursePage__Menu-Active"
            );
        } else {
            buttonClass.tutorial_solutions = buttonClass.tutorial_solutions.slice(
                0,
                20
            );
        }

        //Paper Class
        if (this.state.whatsActive.previous_year_paper === true) {
            buttonClass.previous_year_paper = buttonClass.previous_year_paper.concat(
                " CoursePage__Menu-Active"
            );
        } else {
            buttonClass.previous_year_paper = buttonClass.previous_year_paper.slice(
                0,
                20
            );
        }

        // const fuse = new Fuse(this.state.documentList, options);

        let search = event => {
            let searchText = event.target.value;
            let copy_of_documentList = this.state.documentList;
            for (let i = 0; i < copy_of_documentList.length; i++) {
                if (
                    copy_of_documentList[i].documentName
                        .toUpperCase()
                        .includes(searchText.toUpperCase())
                ) {
                    copy_of_documentList[i].show = true;
                } else {
                    copy_of_documentList[i].show = false;
                }
            }
            this.setState({
                documentList: copy_of_documentList
            });
        };
        // console.log(this.props);
        return (
            <div className="CoursePage">
                <h1 className="CoursePage__Title">
                    <Router>
                        <Link to="/">
                            <button className="CoursePage__Back">
                                <ion-icon name="arrow-back-circle"></ion-icon>
                            </button>
                        </Link>
                    </Router>
                    Your Courses > {this.props.courseName}
                </h1>
                <div className="CoursePage__Container">
                    <div className="CoursePage__Menu clearfix">
                        <button
                            className={buttonClass.notes}
                            onClick={toggleNotes}
                        >
                            Notes
                        </button>
                        <button
                            className={buttonClass.tutorials}
                            onClick={toggleTutorials}
                        >
                            Tutorials
                        </button>
                        <button
                            className={buttonClass.tutorial_solutions}
                            onClick={toggleTutorial_Solutions}
                        >
                            Tutorial Solutions
                        </button>
                        <button className={buttonClass.lab} onClick={toggleLab}>
                            Lab
                        </button>
                        <button
                            className={buttonClass.previous_year_paper}
                            onClick={togglePrevious_Year_Paper}
                        >
                            Previous Year Paper
                        </button>
                        <ion-icon
                            name="search"
                            class="CoursePage__Search-Icon"
                        ></ion-icon>
                        <input
                            className="CoursePage__Search"
                            placeholder="Search here.."
                            onChange={search}
                        ></input>
                    </div>
                    <div className="CoursePage__Document-Container clearfix">
                        {this.state.documentList.map(elem => {
                            if (elem.show === true)
                                return (
                                    <DocumentWidget
                                        lightTheme={this.props.lightTheme}
                                        documentName={elem.documentName}
                                        documentViews={elem.documentViews}
                                        documentDate={elem.documentDate}
                                    />
                                );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default CoursePage;
