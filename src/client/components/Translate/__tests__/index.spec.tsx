import * as React from "react";
import { mount } from "enzyme";

import Text from "../index";

describe("#Translate", () => {
  test("render", () => {
    const wrapper = mount(<Text t="lol" />);

    expect(wrapper.contains("lol")).toBe(true);
  });

  test("render as span", () => {
    const wrapper = mount(<Text t="lol" html />);

    // eslint-disable-next-line react/no-danger
    expect(wrapper.contains(<span dangerouslySetInnerHTML={{ __html: "lol" }} />)).toBe(true);
  });
});
