import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [flags, setFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  const handleFlags = (flag) => {
    const newFlags = [...flags, flag];
    setFlags(newFlags);
  };

  return (
    <div>
      Countries: {countries.length}
      <div>
        <h4>Visited countries: {visitedCountries.length}</h4>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country?.name?.common}>{country?.name?.common}</li>
          ))}
        </ul>
        <div>
          {flags.map((flag, idx) => (
            <img className="flaf-img" key={idx} src={flag}></img>
          ))}
        </div>
      </div>
      <div>
        <div className="countries">
          {countries.map((country) => (
            <Country
              key={country.cca3}
              country={country}
              handleVisitedCountry={handleVisitedCountry}
              handleFlags={handleFlags}
            ></Country>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
