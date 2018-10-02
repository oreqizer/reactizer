// @flow strict
import * as React from "react";
import { shallow } from "enzyme";

import Root from "../Root";
import { themeDefault } from "../../records/Theme";
import { intlDefault } from "../../records/Intl";

describe("#Root", () => {
  test("render", () => {
    const wrapper = shallow(<Root />);

    expect(
      // TODO remove <span /> once Enzyme supports context API
      shallow(<span>{wrapper.prop("children")(themeDefault)}</span>)
        .children()
        .prop("children")(intlDefault),
    ).toMatchSnapshot();
  });
});
