import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.jsx
const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
