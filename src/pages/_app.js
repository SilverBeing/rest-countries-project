import "@/styles/globals.css";
import { Nunito_Sans } from "@next/font/google";
import { ThemeContextProvider } from "@/context/themeContext";
import Navbar from "@/components/Navbar";
import CountriesContextProvider from "@/context/countriesContext";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <CountriesContextProvider>
      <ThemeContextProvider>
        <section className={nunito.className}>
          <header>
            <Navbar />
          </header>
          <Component {...pageProps} />
        </section>
      </ThemeContextProvider>
    </CountriesContextProvider>
  );
}
