const OFF = 0;
const WARN = 1;
const ERROR = 2;

// TODO check Prettier rules if really Prettier
module.exports = {
  plugins: ["jsx-a11y", "react", "react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // React (https://github.com/yannickcr/eslint-plugin-react)
    "react/boolean-prop-naming": ERROR,
    "react/button-has-type": [ERROR, { button: true, submit: true, reset: false }],
    "react/default-props-match-prop-types": ERROR,
    "react/destructuring-assignment": ERROR,
    "react/display-name": ERROR,
    "react/forbid-component-props": OFF, // Too extra
    "react/forbid-dom-props": [
      ERROR,
      {
        forbid: [
          "class", // https://reactjs.org/docs/dom-elements.html#classname
          "for", // https://reactjs.org/docs/dom-elements.html#htmlfor
        ],
      },
    ],
    "react/forbid-elements": OFF, // Too extra
    "react/forbid-foreign-prop-types": OFF, // Not using 'propTypes'
    "react/forbid-prop-types": OFF, // Too extra
    "react/function-component-definition": [
      ERROR,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/no-access-state-in-setstate": ERROR,
    "react/no-adjacent-inline-elements": OFF, // Prettier
    "react/no-array-index-key": ERROR,
    "react/no-arrow-function-lifecycle": ERROR,
    "react/no-children-prop": ERROR,
    "react/no-danger": ERROR,
    "react/no-danger-with-children": ERROR,
    "react/no-deprecated": ERROR,
    "react/no-did-mount-set-state": ERROR,
    "react/no-did-update-set-state": ERROR,
    "react/no-direct-mutation-state": ERROR,
    "react/no-find-dom-node": ERROR,
    "react/no-invalid-html-attribute": ERROR,
    "react/no-namespace": ERROR,
    "react/no-is-mounted": ERROR,
    "react/no-multi-comp": [ERROR, { ignoreStateless: true }],
    "react/no-redundant-should-component-update": ERROR,
    "react/no-render-return-value": ERROR,
    "react/no-set-state": OFF, // 'setState' is OK
    "react/no-string-refs": ERROR,
    "react/no-this-in-sfc": ERROR,
    "react/no-typos": ERROR,
    "react/no-unescaped-entities": ERROR,
    "react/no-unknown-property": ERROR,
    "react/no-unsafe": ERROR,
    "react/no-unstable-nested-components": ERROR,
    "react/no-unused-class-component-methods": ERROR,
    "react/no-unused-prop-types": ERROR,
    "react/no-unused-state": ERROR,
    "react/no-will-update-set-state": ERROR,
    "react/prefer-es6-class": [ERROR, "always"],
    "react/prefer-exact-props": ERROR,
    "react/prefer-read-only-props": OFF, // Too extra
    "react/prefer-stateless-function": ERROR,
    "react/prop-types": ERROR,
    "react/react-in-jsx-scope": OFF, // Obsolete rule
    "react/require-default-props": OFF, // Too extra, sometimes invalid
    "react/require-optimization": OFF, // Too extra, sometimes invalid
    "react/require-render-return": ERROR,
    "react/self-closing-comp": ERROR,
    "react/sort-comp": [
      ERROR,
      {
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
        order: [
          "type-annotations",
          "static-variables",
          "static-methods",
          "instance-variables",
          "lifecycle",
          "everything-else",
          "rendering",
        ],
        groups: {
          lifecycle: [
            "displayName",
            "propTypes",
            "contextTypes",
            "childContextTypes",
            "mixins",
            "statics",
            "defaultProps",
            "constructor",
            "getDefaultProps",
            "state",
            "getInitialState",
            "getChildContext",
            "getDerivedStateFromProps", // This is added
            "getDerivedStateFromError", // This is added
            "componentWillMount",
            "UNSAFE_componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "UNSAFE_componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "UNSAFE_componentWillUpdate",
            "getSnapshotBeforeUpdate",
            "componentDidUpdate",
            "componentDidCatch",
            "componentWillUnmount",
          ],
          rendering: ["/^render.+$/", "render"],
        },
      },
    ],
    "react/sort-prop-types": OFF, // Too extra
    "react/state-in-constructor": ERROR,
    "react/static-property-placement": ERROR,
    "react/style-prop-object": ERROR,
    "react/void-dom-elements-no-children": ERROR,

    // React JSX (https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules)
    // Some are skipped if taken care of by Prettier
    "react/jsx-boolean-value": ERROR,
    "react/jsx-child-element-spacing": OFF, // Prettier
    "react/jsx-closing-bracket-location": OFF, // Prettier
    "react/jsx-closing-tag-location": OFF, // Prettier
    "react/jsx-curly-brace-presence": ERROR,
    "react/jsx-curly-newline": OFF, // Prettier
    "react/jsx-curly-spacing": OFF, // Prettier
    "react/jsx-equals-spacing": OFF, // Prettier
    "react/jsx-filename-extension": [ERROR, { extensions: [".tsx", ".jsx"] }],
    "react/jsx-first-prop-new-line": OFF, // Prettier
    "react/jsx-fragments": ERROR,
    "react/jsx-handler-names": ERROR,
    "react/jsx-indent": OFF, // Prettier
    "react/jsx-indent-props": OFF, // Prettier
    "react/jsx-key": ERROR,
    "react/jsx-max-depth": OFF, // Too extra
    "react/jsx-max-props-per-line": OFF, // Prettier
    "react/jsx-newline": OFF, // Prettier
    "react/jsx-no-bind": [
      ERROR,
      {
        ignoreDOMComponents: true,
        ignoreRefs: true,
      },
    ],
    "react/jsx-no-constructed-context-values": OFF, // Prettier
    "react/jsx-no-comment-textnodes": ERROR,
    "react/jsx-no-duplicate-props": ERROR,
    "react/jsx-no-literals": OFF, // No need
    "react/jsx-no-target-blank": ERROR,
    "react/jsx-no-script-url": OFF, // Prettier
    "react/jsx-no-undef": ERROR,
    "react/jsx-no-useless-fragment": ERROR,
    "react/jsx-one-expression-per-line": OFF, // Prettier
    "react/jsx-pascal-case": ERROR,
    "react/jsx-props-no-multi-spaces": OFF, // Prettier
    "react/jsx-props-no-spreading": OFF, // It is OK
    "react/jsx-sort-default-props": OFF, // Too extra
    "react/jsx-sort-props": OFF, // Too extra
    "react/jsx-tag-spacing": OFF, // Prettier
    "react/jsx-uses-react": ERROR,
    "react/jsx-uses-vars": ERROR,
    "react/jsx-wrap-multilines": OFF, // Prettier

    // React Hooks (https://www.npmjs.com/package/eslint-plugin-react-hooks)
    "react-hooks/rules-of-hooks": ERROR,
    "react-hooks/exhaustive-deps": WARN, // Sometimes intended

    // React Accessibility (https://github.com/evcohen/eslint-plugin-jsx-a11y)
    "jsx-a11y/accessible-emoji": ERROR,
    "jsx-a11y/alt-text": ERROR,
    "jsx-a11y/anchor-has-content": ERROR,
    "jsx-a11y/anchor-is-valid": ERROR,
    "jsx-a11y/aria-activedescendant-has-tabindex": ERROR,
    "jsx-a11y/aria-props": ERROR,
    "jsx-a11y/aria-proptypes": ERROR,
    "jsx-a11y/aria-role": ERROR,
    "jsx-a11y/aria-unsupported-elements": ERROR,
    "jsx-a11y/autocomplete-valid": ERROR,
    "jsx-a11y/click-events-have-key-events": ERROR,
    "jsx-a11y/control-has-associated-label": ERROR,
    "jsx-a11y/heading-has-content": ERROR,
    "jsx-a11y/html-has-lang": ERROR,
    "jsx-a11y/iframe-has-title": ERROR,
    "jsx-a11y/img-redundant-alt": ERROR,
    "jsx-a11y/interactive-supports-focus": ERROR,
    "jsx-a11y/label-has-associated-control": ERROR,
    "jsx-a11y/label-has-for": ERROR,
    "jsx-a11y/lang": ERROR,
    "jsx-a11y/media-has-caption": ERROR,
    "jsx-a11y/mouse-events-have-key-events": ERROR,
    "jsx-a11y/no-access-key": ERROR,
    "jsx-a11y/no-autofocus": [ERROR, { ignoreNonDOM: true }],
    "jsx-a11y/no-distracting-elements": [ERROR, { elements: ["marquee", "blink"] }],
    "jsx-a11y/no-interactive-element-to-noninteractive-role": ERROR,
    "jsx-a11y/no-noninteractive-element-interactions": ERROR,
    "jsx-a11y/no-noninteractive-element-to-interactive-role": ERROR,
    "jsx-a11y/no-noninteractive-tabindex": ERROR,
    "jsx-a11y/no-onchange": ERROR,
    "jsx-a11y/no-redundant-roles": ERROR,
    "jsx-a11y/no-static-element-interactions": ERROR,
    "jsx-a11y/role-has-required-aria-props": ERROR,
    "jsx-a11y/role-supports-aria-props": ERROR,
    "jsx-a11y/scope": ERROR,
    "jsx-a11y/tabindex-no-positive": ERROR,
  },
};
