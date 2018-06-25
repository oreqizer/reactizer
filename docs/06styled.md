# Styled componetns

Follow best practices and read the [documentation](https://www.styled-components.com/docs)!

## Primitives

A **primitive** is a styled component that consists only of a single styled component and has no wrapper:

```js
// @flow strict
import styled from "styled-components";

const Input = styled.input`
    color: black;
`;

export default Input;
```

Primitives have one problem - they're impossible to properly Flow-type. Define **propTypes** for their props instead:

```js
// @flow
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
    color: ${props => props.color};
`;

Input.propTypes = {
    color: PropTypes.oneOf(["black", "crimson"]).isRequired,
};

export default Input;
```

Although not statically analysable, this is currently the best solution I came up with.

### Default theme

Every component that uses theme **must** have a `defaultProps` with the `theme` property set:

```js
// @flow strict
import styled from "styled-components";

import { themeDefault } from "client/records/Theme";

const Input = styled.input`
    background: ${props => props.theme.colors.primary};
`;

Input.defaultProps = {
    theme: themeDefault,
};

export default Input;
```

This is to allow easy testing without having to provide `theme` every time.

### Extending

Use `.extend`, only wrap in `styled(...)` when absolutely necessary. This is limited to components that need a `className` to be styled, such as `react-router`'s `Link` or `react-icons`.

### Nesting

The **only** valid use case for nesting is when having to style a dynamically injected component class:

```js
// @flow strict
import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background: white;

    .icon {
        height: 20px;
        width: 20px;
    }
`;

type Props = {|
    Icon: React.ComponentClass<any>,
|};

const MyComponent = ({ Icon }: Props) => (
    <Wrapper>
        <Icon className="icon" />
    </Wrapper>
);

export default MyComponent;
```

Or having to style already styled 3rd party things, such as Google autocompleter.

## Components

A **component** is a regular React component that consists of more than a single styled component:

```js
// @flow strict
import styled from "styled-components";

const Label = styled.input`
    height: 40px;
`;

const Input = styled.input`
    color: black;
`;

type Props = {
    id: string,
    value: string,
};

const InputText = (props: Props) => (
    <Label htmlFor={props.id}>
        <Input {...props} />
    </Label>
);

export default InputText;
```

> It is a bad practice to allow passing `className` as a prop as it creates an implicit relationship. Avoid it at all costs. Do any necessary modifications via explicit props, or find a different solution.
