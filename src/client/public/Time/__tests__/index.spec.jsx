/* eslint-disable flowtype/no-types-missing-file-annotation */
import * as React from "react";
import { shallow } from "enzyme";

import WrappedTime from "../index";

const Time = WrappedTime.WrappedComponent;

describe("#Time", () => {
  it("should render correctly", () => {
    const time = new Date(Date.UTC(0, 0, 0, 10, 30));
    const wrapper = shallow(<Time time={time} locale="en" translate={id => id} />);

    expect(wrapper).toMatchSnapshot();
  });
});
