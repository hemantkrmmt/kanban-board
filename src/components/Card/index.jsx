import React from "react";
import { priorityMap, statusMap } from "../../constants";
import ProfileIcon from "../ProfileIcon";
import "./style.css";

function Card({ ticket, user, grouping }) {
  console.log("ticket", "user", ticket, user);
  const { id, title, tag, status, priority } = ticket;

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <div style={{ color: "gray", fontWeight: "600" }}> {id}</div>
        {grouping !== "userId" && <ProfileIcon user={user} />}
      </div>

      <div className="card-container">
        <div style={{ display: "flex", alignItems: "flex-start" }}>
        {grouping !== "status" && (<span
            style={{
              paddingRight: "5px",
              boxSizing: "border-box",
              width: "20px",
            }}
          >
            <img style={{ verticalAlign: "middle" }}
                src={statusMap[status].iconPath} alt="status Icon"
              />
          </span>
           )}
          {title}
        </div>
      </div>
      <div className="card-footer">
        {grouping !== "priority" && (
          <img className="priority-icon" src={priorityMap[priority].iconPath} alt="priority Icon" />
        )}
        {tag.map((tagItem) => (
          <span className="tag" >
            {tagItem}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
