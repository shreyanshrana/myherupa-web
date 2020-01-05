import React from "react";
import "./CalendarSubjectButton.css";

let CalendarSubjectButton = props => {
  let style = {
    height: "100%",
    width: props.width
  };
  return (
    <div className="CalendarSubjectButton clearfix" style={style}>
      <div className="CalendarSubjectButton__Course-Code col col-lg-5">
        UCS101
      </div>
      <div className="CalendarSubjectButton__Class-Type col col-lg-7">
        Lecture
      </div>
      <div className="CalendarSubjectButton__Course-Name col col-lg-9">
        Computer Organisation and Architecture
      </div>
      <div className="CalendarSubjectButton__Class-Time col col-lg-3">9</div>
      <div className="CalendarSubjectButton__Class-Location col col-lg-6">
        <ion-icon
          name="business"
          class="CalendarSubjectButton__Icon"
        ></ion-icon>
        LP101
      </div>
      <div className="CalendarSubjectButton__Class-Teacher col col-lg-6">
        <ion-icon name="contact" class="CalendarSubjectButton__Icon"></ion-icon>
        LP101
      </div>
    </div>
  );
};

export default CalendarSubjectButton;
