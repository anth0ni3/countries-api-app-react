import React, { useContext } from "react";
import { APIContext } from "../store/API.context";

const MoreInfo = (props) => {
  const { CountriesAPI } = useContext(APIContext);
  console.log("MoreInfo Rendered");
  const country = CountriesAPI.get(
    props.match.params.countryNumber,
    "numericCode"
  );
  return (
    <div className="more-info p">
      <div className="btn-wrapper">
        <div className="btn sh" onClick={() => props.history.goBack()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g className="nc-icon-wrapper">
              <path d="M7.83 11l3.58-3.59L10 6l-6 6 6 6 1.41-1.41L7.83 13H20v-2H7.83z"/>
            </g>
          </svg>
          Back
        </div>
      </div>
      <div className="more-info-main-wrapper">
        <div className="more-info-img-wrapper country-img-wrapper">
          <img src={country.flag} alt="" className="country-img" />
        </div>
        <div className="more-info-wrapper">
          <p className="country-name more-info-wrapper-1">{country.name}</p>
          <div className="more-info-wrapper-2">
            <p className="country-info">
              <span>Native Name:</span> {country.nativeName}
              {}
            </p>
            <p className="country-info">
              <span>Population:</span> {country.population}
            </p>
            <p className="country-info">
              <span>Region:</span> {country.region}
            </p>
            <p className="country-info">
              <span>Sub Region:</span> {country.subregion}
            </p>
            <p className="country-info">
              <span>Capital:</span> {country.capital}
            </p>
          </div>
          <div className="more-info-wrapper-3">
            <p className="country-info">
              <span>Top Level Domain:</span>{" "}
              {country.topLevelDomain.map((TLD) => TLD)}
            </p>
            <p className="country-info">
              <span>Currencies:</span> {country.currencies.map((c) => c.name)}
            </p>
            <p className="country-info">
              <span>Languages:</span>{" "}
              {country.languages.map((l) => l.name + ",")}
            </p>
          </div>
          <div className="more-info-wrapper-4">
            <p className="more-info-bonus-text">Border countries:</p>
            <div className="more-info-bonus-tag-group">
              <div className="more-info-bonus-tag btn sh">
                <span className="more-info-bonus-tag-text">France</span>
              </div>
              <div className="more-info-bonus-tag btn sh">
                <span className="more-info-bonus-tag-text">Germany</span>
              </div>
              <div className="more-info-bonus-tag btn sh">
                <span className="more-info-bonus-tag-text">Netherlands</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
