// @flow strict
import * as React from "react";
import { shallow } from "enzyme";

import Text from "../index";
import { intlDefault } from "../../../records/Intl";

describe("#Text", () => {
  test("render", () => {
    const wrapper = shallow(<Text t="lol" />);

    expect(wrapper.prop("children")(intlDefault)).toMatchSnapshot();
  });

  test("render as span", () => {
    const wrapper = shallow(<Text t="lol" html />);

    expect(wrapper.prop("children")(intlDefault)).toMatchSnapshot();
  });
});
