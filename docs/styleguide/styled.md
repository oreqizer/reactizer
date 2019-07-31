# Styled componetns

Follow best practices and read the [documentation](https://www.styled-components.com/docs)!

## Primitives

A **primitive** is a styled **component** that consists only of a single styled component and has no wrapper:

```js
import styled from "styled-components";

const Input = styled.input`
    color: black;
`;

export default Input;
```

### Default theme

Every component that uses theme **must** have a `defaultProps` with the `theme` property set:

```js
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

## Components

A **component** is a regular React component that consists of more than a single styled component.

Each global component should accept a `className` property for manipulating margins and layout:

```js
import styled from "styled-components";

const Label = styled.input`
    height: 40px;
`;

const Input = styled.input`
    color: black;
`;

interface Props {
    className?: string;
    id: string;
    value: string;
}

const InputText = ({ className, id, value, ...rest }: Props) => (
    <Label className={className} htmlFor={id}>
        <Input id={id} value={value} {...rest} />
    </Label>
);

export default InputText;
```
