import React, { useContext } from "react";
import { LogicContext } from "../store/Logic.context";

const InputSearch = () => {
  const { value, handleChange } = useContext(LogicContext);
  console.log("InputSearch Rendered");
  return (
    <div className="input-search p sh">
      <div className="input-search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g className="nc-icon-wrapper">
            <path d="M18.677 19.607l-5.715-5.716a6 6 0 0 1-7.719-9.133 6 6 0 0 1 9.134 7.718l5.715 5.716-1.414 1.414-.001.001zM9.485 5a4 4 0 1 0 2.917 1.264l.605.6-.682-.68-.012-.012A3.972 3.972 0 0 0 9.485 5z"/>
          </g>
        </svg>
      </div>
      <input
        type="text"
        className="input-search-input"
        placeholder="Search for a country..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputSearch;
