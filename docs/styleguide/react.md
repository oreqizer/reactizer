# React

Import as `import * as React from "react";`. This is mainly due to _Flow_ types.

Make use of `React.PureComponent` where it makes sense.

## Nomenclature

**Callbacks** and their **handlers** should be named:
* `on<Action>` - a callback
* `handle<Action>` - a handler

## Features

Utilise **composition**. Separate presentational and container components.

## Utilities

Components for wrapping other components in order to change the way they are represented, for example `Desktop` or `Mobile` for viewport-only components, or `ClientOnly` for displaying things only on the client.

Wrap components with utility components where **they are used**, do not put utility components directly into their definition.

Make use of the [render props](https://reactjs.org/docs/render-props.html) pattern.

## Testing

Assert that the component **passes props** down the tree correctly. Having a high coverage of tests like this ensures the component contract is fulfilled.

**Example:**
```js
// Component
type Props = {|
  value: string,
  onChange: (value: string) => void,
|}

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

Test all conditional branches, assert that different branches are rendered based on different *props* and *state* combination.

> Feel free to mount the component when testing stuff with context.

Test all **methods** in containers. Mock side effects if needed.
