/* eslint-disable flowtype/no-types-missing-file-annotation */
import * as React from "react";
import { shallow } from "enzyme";

import WrappedText from "../index";

const Text = WrappedText.WrappedComponent;

describe("#Text", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Text t="lol" locale="en" translate={id => id} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly as span", () => {
    const wrapper = shallow(<Text t="lol" locale="en" translate={id => id} html />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("span").length).toBe(1);
  });
});
