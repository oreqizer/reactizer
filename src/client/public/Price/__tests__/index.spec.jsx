/* @flow */
import * as React from "react";
import { shallow } from "enzyme";

import WrappedPrice from "../index";

const Price = WrappedPrice.WrappedComponent;

describe("#Price", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Price value={1234} currency="EUR" locale="en" translate={id => id} />);

    expect(wrapper).toMatchSnapshot();
  });
});
