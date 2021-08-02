import React, {createContext, useContext} from "react";
import useInputState from "../customHooks/useInputState";
import {APIContext} from "./API.context";

export const LogicContext = createContext();

const LogicContextProvider = (props) => {
  const [value, handleChange] = useInputState("");

  const [filter, handleFilterChange] = useInputState("");

  const { CountriesAPI } = useContext(APIContext);

  const filteredContact = CountriesAPI.all().filter(
      (country) => country.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
  // const filteredContact = CountriesAPI.all().filter(country => {if(filter !== "") return country.region.toLowerCase() === filter.toLowerCase()
  // })

  // function getFilteredCountries(){
  //   CountriesAPI.all().filter(country => {if(filter !== "") {return country.region.toLowerCase() === filter.toLowerCase()}})
  // }

  return (
    <LogicContext.Provider
      value={{ value, handleChange, filter, handleFilterChange, filteredContact }}
    >
      {props.children}
    </LogicContext.Provider>
  );
};

export default LogicContextProvider;
