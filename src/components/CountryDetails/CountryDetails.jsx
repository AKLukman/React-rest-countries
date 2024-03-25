import CountryData from "../CountryData/CountryData";

const CountryDetails = ({ country, handleVisitedCountry, handleFlags }) => {
  return (
    <div>
      <CountryData
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleFlags={handleFlags}
      ></CountryData>
    </div>
  );
};

export default CountryDetails;
