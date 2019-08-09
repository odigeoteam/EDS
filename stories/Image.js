import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import Image from "../components/Image";

storiesOf("Image", module)
  .addDecorator(withKnobs)
  .add("With a borderRadius", () => {
    const props = {
      src: text(
        "src",
        "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
      ),
      width: number("Width", 100),
      height: number("Height", 100),
      borderRadius: number("BorderRadius", 3)
    };
    return <Image {...props} />;
  });
