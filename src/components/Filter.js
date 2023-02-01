import useCountries from "@/hooks/useCountries";
import React, { useEffect, useState } from "react";

const Filter = () => {
  const [showDropDown, setDropDown] = useState();
  const [countries, setCountries] = useCountries();
  const [filterContent, setFilterContent] = useState(countries);
  const fetchCountry = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();

    setFilterContent(data);
  };
  const filterByRegion = (region) => {
    const result = filterContent.filter((country) => country.region === region);
    setCountries(result);
    setDropDown(false);
  };
  useEffect(() => {
    fetchCountry();
  }, []);
  const handleAll = () => {
    setCountries(filterContent);
    setDropDown(false);
  };
  return (
    <div className="filter-container">
      <div className="filter-trigger">
        <button onClick={() => setDropDown((curr) => !curr)}>
          Filter by Region
        </button>
      </div>
      {showDropDown && (
        <div className="filter-dropdown">
          <div className="filter-buttons">
            <button onClick={handleAll}>All</button>
          </div>
          <div className="filter-buttons">
            <button onClick={() => filterByRegion("Africa")}>Africa</button>
          </div>
          <div className="filter-buttons">
            <button onClick={() => filterByRegion("Americas")}>Americas</button>
          </div>
          <div className="filter-buttons">
            <button onClick={() => filterByRegion("Asia")}>Asia</button>
          </div>
          <div className="filter-buttons">
            <button onClick={() => filterByRegion("Oceania")}>Oceania</button>
          </div>
          <div className="filter-buttons">
            <button onClick={() => filterByRegion("Europe")}>Europe</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
