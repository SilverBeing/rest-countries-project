import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { VscSearch } from "react-icons/vsc";
import useCountries from "@/hooks/useCountries";
const SearchInput = () => {
  const [countries, setCountries] = useCountries();
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const fetchCountry = async (countryName) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await response.json();
      if (response.ok) {
        setCountries(data);
      } else {
        return setError(true);
      }

      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(search);
    if (search.length === 0 || !searchQuery) {
      setCountries(countries);
    }
  };
  useEffect(() => {
    searchQuery && fetchCountry(searchQuery);
  }, []);
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div className="search-input">
          <VscSearch />
          <input
            type="text"
            placeholder="Search for a Country"
            value={search}
            onChange={handleChange}
          />
        </div>
        {error ? <p className="search-error">Enter a valid Country</p> : ""}
      </form>
    </div>
  );
};

export default SearchInput;
