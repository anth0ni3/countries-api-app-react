import React, { useContext } from "react";
import { LogicContext } from "../store/Logic.context";

const FilterInput = () => {
  const { handleFilterChange } = useContext(LogicContext);
  console.log("filterInput Rendered");
  return (
    <div className="filter-input p sh">
      <select
        name="region"
        id="region"
        className="filter-input-select"
        onChange={handleFilterChange}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};
export default FilterInput;
