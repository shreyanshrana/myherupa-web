//Provide top and left position
//eg. <UpgradeWideDashboard left="50%" top = "50%"/>
import React from "react";
import "./UpgradeWideDashboard.css";

let UpgradeWideDashboard = props => {
  let position_of_promo = {
    left: props.left,
    top: props.top
  };
  return (
    <div className="UpgradeWideDashboard" style={position_of_promo}>
      <div className="UpgradeWideDashboard__Img"></div>
      <div className="UpgradeWideDashboard__Bg">
        <p className="UpgradeWideDashboard__Text">
          Upgrade to <span className="bold">Premium</span> to get more features
          and remove ads
        </p>
        <button className="UpgradeWideDashboard__Btn">
          <p className="UpgradeWideDashboard__Btn--Text">Find Out More </p>
          <ion-icon
            name="arrow-round-forward"
            class="UpgradeWideDashboard__Btn--Arrow"
          ></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default UpgradeWideDashboard;
