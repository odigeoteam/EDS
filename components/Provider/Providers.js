import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import LangContext from "./langContext";
import CurrencyContext from "./langContext";

export default ({ lang, currency, children }) => (
  <LangContext.Provider value={lang}>
    <CurrencyContext.Provider value={currency}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CurrencyContext.Provider>
  </LangContext.Provider>
);
