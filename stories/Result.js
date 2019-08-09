import React from "react";
import { storiesOf } from "@storybook/react";
import Result from "../components/Result";

storiesOf("Result", module).add("Single result", () => (
  <Result
    fromCity="Barcelona"
    toCity="London"
    price={54.5}
    currency="EUR"
    fromDate={new Date()}
    toDate={new Date()}
    type="Round trip"
    img="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
  />
));
