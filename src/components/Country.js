import React from "react";
import { Link } from "react-router-dom";

const Country = (props) => {
  const { name, population, region, capital, flag } = props.country;
  console.log("Country Rendered");
  return (
    <Link
      to={`/country/${props.country.numericCode}`}
      style={{ textDecoration: "none" }}
    >
      <div className="country sh">
        <div className="country-img-wrapper">
          <img
            height="230rem"
            src={flag}
            alt={`flag of ${name}`}
            className="country-img"
            loading="lazy"
          />
        </div>
        <div className="country-info-wrapper p">
          <p className="country-name">{name}</p>
          <p className="country-info">
            <span>Population:</span> {population}
          </p>
          <p className="country-info">
            <span>Region:</span> {region}
          </p>
          <p className="country-info">
            <span>Capital:</span> {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Country;
