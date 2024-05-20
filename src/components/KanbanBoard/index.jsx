import React, { useEffect, useState } from "react";
import Card from "../Card";
import Filter from "../Filter";
import { priorityMap, statusMap } from "../../constants";
import ProfileIcon from "../ProfileIcon";
import "./style.css";

function getInitialLocalState(key) {
  const data = localStorage.getItem("kanbanBoard");
  const parsedData = JSON.parse(data);
  return parsedData && parsedData[key];
}
  
function KanbanBoard({ data }) {
  const [displayData, setDisplayData] = useState({});
  const [ordering, setOrdering] = useState(() => {
    return getInitialLocalState("orderBy") || "priority";
  });
  const [grouping, setGrouping] = useState(() => {
    return getInitialLocalState("groupBy") || "status";
  });
  const [selectedColumns, setSelectedColumns] = useState({});
  const { tickets, users = [] } = data;
  const usersMap = users.reduce((obj, user) => {
    obj[user.id] = user;

    return obj;
  }, {});

  useEffect(() => {
    const displayDataTemp = {};
    tickets?.forEach((item) => {
      if (displayDataTemp[item[grouping]]) {
        displayDataTemp[item[grouping]].push(item);
      } else {
        displayDataTemp[item[grouping]] = [item];
      }
    });
    Object.entries(displayDataTemp).forEach(([key, value]) => {
      value.sort((a, b) => a[ordering] - b[ordering]);
      displayDataTemp[key] = value;
    });

    setSelectedColumns(
      grouping === "priority"
        ? priorityMap
        : grouping === "status"
        ? statusMap
        : usersMap
    );
    setDisplayData(displayDataTemp);
  }, [grouping, ordering, usersMap, tickets]);

  useEffect(() => {
    localStorage.setItem(
      "kanbanBoard",
      JSON.stringify({ orderBy: ordering, groupBy: grouping })
    );
  }, [ordering, grouping]);

  return users && tickets ? (
    <div style={{ position: "relative" }}>
      <div style={{ padding: "20px" }}>
        <Filter
          setGrouping={(value) => setGrouping(value)}
          setOrdering={setOrdering}
          grouping={grouping}
          ordering={ordering}
        />
      </div>
      <div className="tickets-container">
        {Object.entries(selectedColumns)?.map(
          ([key, selectedColumnData], index) => {
            if (Object.keys(displayData).length > 0) {
              const groupBy = key,
                groupList = displayData[key] || [];
              return (
                <div
                  key={index}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="column-header">
                    <span>
                      <span>
                        {grouping === "userId" ? (
                          usersMap[key] && <ProfileIcon user={usersMap[key]} />
                        ) : (
                          <img src={selectedColumnData?.iconPath} alt="" />
                        )}{" "}
                        {selectedColumnData?.name}
                      </span>

                      <span style={{ paddingLeft: "10px", color: "gray" }}>
                        {groupList.length}
                      </span>
                    </span>
                    <span>
                      <img
                        src="/svgIcons/add.svg"
                        alt="add Icon"
                        style={{ paddingRight: "10px" }}
                      />
                      <img
                        src="/svgIcons/three_dot_menu.svg"
                        alt="More options Menu"
                      />
                    </span>
                  </div>
                  <div>
                    {groupList.map((group, index) => {
                      return (
                        <Card
                          grouping={grouping}
                          key={`${groupBy}-${index}`}
                          ticket={group}
                          user={usersMap[group.userId]}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            } else {
              return <></>;
            }
          }
        )}
      </div>
    </div>
  ) : (
    <div className="middle-page">...Loading</div>
  );
}

export default KanbanBoard;
