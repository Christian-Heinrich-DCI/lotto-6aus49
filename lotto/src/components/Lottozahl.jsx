import React from "react";
import "./Lottozahl.css";

function Lottozahl({ zahl, zusatz }) {
  return (
    <div className={zusatz ? "lottozahl zusatz" : "lottozahl"}>{zahl}</div>
  );
}

export default Lottozahl;
