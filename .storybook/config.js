import React from "react";
import yourTheme from "./edreamsTheme";
import { configure, addDecorator, addParameters } from "@storybook/react";
import Provider from "../components/Provider";

function loadStories() {
  require("../stories/index.js");
  // You can require as many stories as you need.
}

addDecorator(story => <Provider currency="EUR" lang="en">{story()}</Provider>);

addParameters({ options: { theme: yourTheme } });

configure(loadStories, module);
