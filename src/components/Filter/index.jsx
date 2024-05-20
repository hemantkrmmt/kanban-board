import React, { useRef, useState, useEffect } from "react";
import ToggleArrow from "../ToggleArrow";
import FilterModel from "../FilterModel";
import "./style.css";

function Filter({ setOrdering, setGrouping, grouping, ordering }) {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!btnRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <>
      <div style={{ position: "relative" }} ref={btnRef}>
        <div
          className="filter-wrapper"
          onClick={(e) => {
            setIsOpen(!isOpen);
            e.stopPropagation();
          }}
        >
          <img src="/svgIcons/Display.svg" alt="Filter Icon" /> Display{" "}
          <ToggleArrow isOpen={isOpen} />
        </div>
        {isOpen && (
          <FilterModel
            setOrdering={setOrdering}
            setGrouping={setGrouping}
            grouping={grouping}
            ordering={ordering}
          />
        )}
      </div>
    </>
  );
}

export default Filter;
