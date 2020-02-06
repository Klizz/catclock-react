import React from "react";
import "../styles/style.css";

function ImgDisplay() {
  let today = new Date();
  let h = today.getHours();

  if (h < 12) {
    let img =
      "https://media1.tenor.com/images/a1dcc06e23e05ee5b47b992bd0fbd62e/tenor.gif?itemid=10250522";
    return <img src={img} className="ImgDisplay" alt="Not found" />;
  } else if (h > 19) {
    let img = "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif";
    return <img src={img} className="ImgDisplay" alt="Not found" />;
  } else {
    let img = "https://media0.giphy.com/media/yFQ0ywscgobJK/giphy.gif";
    return <img src={img} className="ImgDisplay" alt="Not found" />;
  }
}

export default ImgDisplay;