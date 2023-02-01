import { Html, Head, Main, NextScript } from "next/document";
import { themeContext } from "@/context/themeContext";
import { useContext } from "react";

export default function Document() {
  const { theme } = useContext(themeContext);
  return (
    <Html lang="en">
      <Head />

      <body className={theme}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
