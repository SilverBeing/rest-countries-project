import React from "react";
import { useQuery } from "react-query";
import Filter from "./Filter";
import SearchInput from "./SearchInput";

const SearchandFilter = () => {
  //   const { data } = useQuery("countries");
  //   console.log(data);
  return (
    <div className="searchandfilter">
      <SearchInput />
      <Filter />
    </div>
  );
};

export default SearchandFilter;
