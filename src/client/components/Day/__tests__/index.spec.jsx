/* eslint-disable flowtype/no-types-missing-file-annotation */
import * as React from "react";
import { shallow } from "enzyme";

import Day from "../index";

describe("#Day", () => {
  it("should render correctly", () => {
    const date = new Date(2017, 9, 28);
    const wrapper = shallow(<Day date={date} />);

    expect(wrapper).toMatchSnapshot();
  });
});
