import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number } from "@storybook/addon-knobs";

import Line from "client/components/Line";

storiesOf("Line", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const border = number("Border", 0);

    return (
      <div style={{ border: "solid 1px black" }}>
        <Line
          fontSize={number("Font size REM", 1)}
          marginTop={number("Margin top", 0)}
          marginBottom={number("Margin bottom", 0)}
          border={border}
          style={{ border: `dotted ${border}px black` }}
        >
          {text("Text", "kek")}
        </Line>
      </div>
    );
  });
