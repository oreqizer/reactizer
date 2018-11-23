# File templates

These are basic templates for convenient file creation. You can add them to your **WebStorm** templates.

## React

Function:
```
// @flow strict
import * as React from "react";
import styled from "styled-components";

type Props = {|

|};

const ${Component} = (props: Props) => (

);

export default ${Component};
```

Class:
```
// @flow strict
import * as React from "react";

type Props = {|

|};

export default class ${Component} extends React.PureComponent<Props> {
  render() {
    return (
    
    );
  }
}
```

**Relay** container:
```
// @flow strict
import * as React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import styled from "styled-components";

import type { ${Component}_${Prop} } from "./__generated__/${Component}_${Prop}.graphql"

type Props = {|
  ${Prop}: ${Component}_${Prop},
|};

const ${Component} = (props: Props) => (

);

export default createFragmentContainer(
  ${Component},
  graphql`
    fragment ${Component}_${Prop} on ${Fragment} {
      id
      # ...
    }
  `,
);
```

Story:
```
// @flow strict
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs/react";

import ${NAME} from "client/components/${NAME}";

storiesOf("${NAME}", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <${NAME} />
  ));
```

Test:
```
// @flow strict
import * as React from "react";
import { shallow } from "enzyme";

import ${Component} from "../${NAME}";

describe("#${Component}", () => {
  test("render", () => {
    const wrapper = shallow(<${Component} />);
    
    expect(wrapper).toMatchSnapshot();
  });
});
```

## Other

Record:
```
// @flow strict
export type ${NAME} = {|

|}; 
```

Test:
```
// @flow strict
import ${NAME} from "../${NAME}";

describe("#${NAME}", () => {
  test("thing", () => {
  
  });
});
```
