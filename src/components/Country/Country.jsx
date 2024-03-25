import { useState } from "react";
import "./Country.css";
import CountryDetails from "../CountryDetails/CountryDetails";
const Country = ({ country, handleVisitedCountry, handleFlags }) => {
  const { name, flags, population, area, cca2 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited && "visited"}`}>
      <h4>name: {name?.common}</h4>
      <img src={flags.png} alt="" />
      <p>Population:{population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca2}</p>
      <button onClick={handleVisited}>{visited ? "visited" : "Going"}</button>
      <p style={{ color: visited ? "green" : "red" }}>
        {visited ? "I have visited" : "I want to visit"}
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark as visited
      </button>
      <button onClick={() => handleFlags(country?.flags?.png)}>Add Flag</button>
      <hr />
      <CountryDetails
        country={country}
        handleFlags={handleFlags}
        handleVisitedCountry={handleVisitedCountry}
      ></CountryDetails>
    </div>
  );
};

export default Country;
