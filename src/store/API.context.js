import React, { createContext } from "react";
import useInitialLocalStorage from "../customHooks/useInitialLocalStorage";

export const APIContext = createContext();

const APIContextProvider = (props) => {
  const [countries] = useInitialLocalStorage("countries", () =>
    fetchCountries()
  );
  const fetchCountries = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    return  await res.json();

  };

  const CountriesAPI = {
    countries: countries,
    all() {
      return this.countries;
    },
    get(id, _condition) {
      const isCountry = (country) => country[_condition] === id;
      return this.countries.find(isCountry);
      // return this.countries.filter(
      //   (country) => parseInt(country.numericCode) === id
      // );
    },
  };

  return (
    <APIContext.Provider value={{ CountriesAPI }}>
      {props.children}
    </APIContext.Provider>
  );
};

export default APIContextProvider;
