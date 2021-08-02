import React, {useContext} from "react";
import Country from "./Country";
import { LogicContext } from "../store/Logic.context";

const CountryList = () => {
  const { filteredContact} = useContext(LogicContext);

  console.log("CountryList Rendered");
  return (
    <div className="country-list-wrapper p">
      {filteredContact.map((country) => (
        <Country key={country.numericCode} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
