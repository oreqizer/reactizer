// @flow strict
import * as React from "react";
import { shallow } from "enzyme";

import InitIntl from "../index";
import { intlDefault } from "../../../records/Intl";

const intlRaw = {
  locale: intlDefault.locale,
  translations: intlDefault.translations,
};

describe("#Text", () => {
  test("render", () => {
    const child = jest.fn().mockImplementation(() => <span>asd</span>);
    const wrapper = shallow(<InitIntl intl={intlRaw}>{child}</InitIntl>);

    expect(wrapper).toMatchSnapshot();
    expect(child).toBeCalled();
  });
});
