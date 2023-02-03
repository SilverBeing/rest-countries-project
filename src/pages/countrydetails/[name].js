/* eslint-disable */
import Image from "next/image";

import Link from "next/link";
import { MdWest } from "react-icons/md";
import { useRouter } from "next/router";
import useCountries from "@/hooks/useCountries";

// export const getStaticPaths = async () => {
//   const response = await fetch("https://restcountries.com/v3.1/all");
//   const data = await response.json();
//   console.log(data);
//   const paths = data.map((path) => {
//     return {
//       params: { name: path.name.common.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const name = context.params.name;
//   const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
//   const data = await response.json();
//   console.log(data);
//   return {
//     props: { country: data },
//   };
// };

const CountryDetails = () => {
  const router = useRouter();
  const countryName = router.query.name;
  const [countries] = useCountries();
  console.log(countries);

  return (
    <div className="dynamic-route">
      <div className="navigation-button">
        <button>
          <Link href="/">
            <MdWest /> Back
          </Link>
        </button>
      </div>
      <div className="country-detail-container">
        {countries
          ?.filter((country) => country.name.common === countryName)
          .map((country, i) => (
            <>
              <div className="country-image">
                <Image
                  src={country.flags.svg}
                  width={350}
                  height={300}
                  alt={country.name.common}
                />
              </div>
              <div className="country-body">
                <div className="country-heading">
                  <h2>{country.name.common}</h2>
                </div>
                <div className="country-text">
                  <div className="country-info">
                    <p>
                      Native Name:
                      <strong>
                        {Object.values(country.name.nativeName)[0].common}
                      </strong>
                    </p>
                    <p>
                      Population: <strong>{country.population}</strong>
                    </p>
                    <p>
                      Region: <strong>{country.region}</strong>
                    </p>
                    <p>
                      Sub Region: <strong>{country.subregion}</strong>
                    </p>
                    <p>
                      Capital: <strong>{country.capital}</strong>
                    </p>
                  </div>
                  <div className="country-info">
                    <p>
                      Top Level Domain: <strong>{country?.tld[0] ?? ""}</strong>
                    </p>
                    <p>
                      Currencies:
                      <strong>
                        {Object.values(country.currencies)[0].name}
                      </strong>
                    </p>
                    <p>
                      Languages:
                      <strong>
                        {Object.values(country.languages).join(", ")}
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="country-borders">
                  <h2>Border Countries: </h2>
                  <div className="country-border">
                    {country?.borders?.map((border, i) => (
                      <button>{border}</button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default CountryDetails;
