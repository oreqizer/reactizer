/* eslint-disable flowtype/no-types-missing-file-annotation */
import * as React from "react";
import { shallow } from "enzyme";

import WrappedDay from "../index";

const Day = WrappedDay.WrappedComponent;

describe("#Day", () => {
  it("should render correctly", () => {
    const date = new Date(Date.UTC(2017, 9, 28));
    const wrapper = shallow(<Day date={date} locale="en" translate={id => id} />);

    expect(wrapper).toMatchSnapshot();
  });
});
