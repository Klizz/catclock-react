import React from 'react';
import '../styles/style.css';

function Clock() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();

  let time = h + ":" + m + " hrs";

  return (
    <span className="Clock">
      { time }
    </span>
  );
}

export default Clock;