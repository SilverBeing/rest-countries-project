import { useContext } from "react";
import { countriesContext } from "@/context/countriesContext";

const useCountries = () => {
  return useContext(countriesContext);
};
export default useCountries;
