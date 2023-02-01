import { createContext, useEffect, useState } from "react";

export const countriesContext = createContext();

const CountriesContextProvider = ({ children }) => {
  const [countries, setCountries] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const getCountries = () => {
    fetch("https://restcountries.com/v3.1/all?pageSize=40&page=2", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Couldn't fetch Data");
        }
        return response.json();
      })
      .then((data) => {
        setCountries(data);
        setIsLoading(false);
        setIsError();
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(err.message);
      });
  };

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <countriesContext.Provider
      value={[countries, setCountries, isLoading, isError]}
    >
      {children}
    </countriesContext.Provider>
  );
};
export default CountriesContextProvider;
