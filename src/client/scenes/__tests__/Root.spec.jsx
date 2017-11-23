/* @flow */
import * as React from "react";
import { shallow } from "enzyme";

import Root from "../Root";

describe("#Root", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Root />);

    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
