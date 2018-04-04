/* @flow */
import * as React from "react";
import { shallow } from "enzyme";

import Num from "../index";

describe("#Num", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Num value={1234} />);

    expect(wrapper).toMatchSnapshot();
  });
});
