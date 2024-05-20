import React from "react";
import "./style.css"
function ToggleArrow({ isOpen }) {
  return (
    <div
    className="arrow"
      style={{
         ...(isOpen ? { transform: `rotate(180deg)` } : {}),
      }}
    >
      <img src="/svgIcons/down.svg" alt="down Arrow" />
    </div>
  );
}

export default ToggleArrow;
