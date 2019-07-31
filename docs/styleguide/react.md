# React

Import as `import * as React from "react";`.

## Nomenclature

**Callbacks** and their **handlers** should be named:
* `on<Action>` - a callback
* `handle<Action>` - a handler

## Features

Utilise **composition**. Separate presentational and container components.

## Utilities

Either create custom **hooks**, or **render props** components. Hooks are preferred.

## Testing

Assert that the component **passes props** down the tree correctly. Having a high coverage of tests like this ensures the component contract is fulfilled.

**Example:**
```js
// Component
type Props = {
  value: string;
  onChange: (value: string) => void;
}

const MyComponent = ({ value, onChange }: Props) => (
  <Wrapper>
    <LengthNote max={15} current={value.length} />
    <InputField value={value} onChange={onChange} />
  </Wrapper>
);

// Test
test("render", () => {
  const onChange = jest.fn();
  const wrapper = shallow(
    <MyComponent value="kek" onChange={onChange} />
  );
  
  expect(wrapper.find("LengthNote").prop("current")).toBe(3);
  expect(wrapper.find("InputField").prop("value")).toBe("kek");
  expect(wrapper.find("InputField").prop("onChange")).toBe(onChange);
});
```

Test all conditional branches, assert that different branches are rendered based on different *props* combination.
