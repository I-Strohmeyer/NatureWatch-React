import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";

import "./footer-view.scss";

function FooterView() {
  return (
    <div className="footer">
      <div className="footer-text">
        Made with{" "}
        <div className="heart">
          <BsFillSuitHeartFill />
        </div>{" "}
        in Germany - 2022
      </div>
    </div>
  );
}

export default FooterView;
