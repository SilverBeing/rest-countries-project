/* eslint-disable */

import useCountries from "@/hooks/useCountries";
import Image from "next/image";
import Link from "next/link";

const CountryCard = () => {
  const [countries] = useCountries();
  // console.log(countries);

  return (
    <div className="countries_container">
      {countries?.map((country, i) => (
        <Link
          href={`/countrydetails/${country.name.common}`}
          className="country_card"
          key={i}
        >
          <div className="country_image">
            <Image
              src={country.flags.svg}
              alt={country.name.common}
              width={250}
              height={250}
            />
          </div>
          <div className="country_body">
            <h3>{country.name.common}</h3>
            <div className="country_info">
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountryCard;
