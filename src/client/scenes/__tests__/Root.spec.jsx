// @flow strict
import * as React from "react";
import { shallow } from "enzyme";

import Root from "../Root";

describe("#Root", () => {
  test("render", () => {
    const wrapper = shallow(<Root />);

    expect(wrapper).toMatchSnapshot();
  });
});
