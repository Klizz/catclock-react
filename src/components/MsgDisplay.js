import React from "react";
import "../styles/style.css";

function MsgDisplay() {
  let today = new Date();
  let h = today.getHours();

  if (h < 12) {
    let message = "¡Buenos días!";
    return <span className="MsgDisplay">{message}</span>;
  } else if (h > 19) {
    let message = "¡Buenas noches!";
    return <span className="MsgDisplay">{message}</span>;
  } else {
    let message = "¡Buenas tardes!";
    return <span className="MsgDisplay">{message}</span>;
  }
}

export default MsgDisplay;
