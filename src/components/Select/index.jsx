import React from "react";
import "./style.css";

function Select({ options, onOptionChange, selectedValue }) {
  return <span className="select-wrapper">
      <select
        onChange={(e) => {
          onOptionChange(e.target.value);
        }}
        defaultValue={selectedValue}
      >
        {options.map((option, index) => (
          <option
            key={index}
            style={{ background: "white" }}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    </span>;
}

export default Select;
