import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import CurrencyContext from "../components/Provider/currencyContext";
import LangContext from "../components/Provider/langContext";
import Currency from "../components/Currency";

storiesOf("Currency", module)
  .addDecorator(withKnobs)
  .add("With a value", () => {
    const currency = text("Currency type", "EUR");
    const value = number("Value", 100.5);
    const lang = text("Lang", "en");
    const color = text("Color", "black");
    return (
      <CurrencyContext.Provider value={currency}>
        <LangContext.Provider value={lang}>
          <Currency color={color}>{value}</Currency>
        </LangContext.Provider>
      </CurrencyContext.Provider>
    );
  });
