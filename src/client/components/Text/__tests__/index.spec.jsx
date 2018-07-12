// @flow strict
import * as React from "react";
import { shallow } from "enzyme";

import Text from "../index";

describe("#Text", () => {
  test("render", () => {
    const wrapper = shallow(<Text t="lol" />);

    expect(wrapper).toMatchSnapshot();
  });

  test("render as span", () => {
    const wrapper = shallow(<Text t="lol" html />);

    expect(wrapper).toMatchSnapshot();
  });
});
