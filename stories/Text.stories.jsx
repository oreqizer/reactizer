// @flow strict
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs/react";

import Text from "client/components/Text";

storiesOf("Text", module)
  .addDecorator(withKnobs)
  .add("default", () => <Text t={text("Text", "kek")} />)
  .add("with html", () => <Text t={text("Text", "kek <b>bold</b> lmao")} html />);
