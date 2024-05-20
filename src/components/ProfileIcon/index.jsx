import React from "react";
import { getBackgroundColor } from "../../utils";
import "./style.css";

function ProfileIcon({ user }) {
  const shortName = user.name
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase();
    })
    .join("");

  return <div
        className="profile-wrapper"
        style={{
          backgroundColor: getBackgroundColor(user.id),
        }}
      >
        {shortName}
        <div
          className="active-color"
          style={{
            backgroundColor: user.available ? "green" : "lightgray",
          }}
        ></div>
      </div>;
}

export default ProfileIcon;
