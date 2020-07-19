```js script
import { html } from '@open-wc/demoing-storybook';
import '../mm-business-card.js';

export default {
  title: 'MmBusinessCard',
  component: 'mm-business-card',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# MmBusinessCard

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add mm-business-card
```

```js
import 'mm-business-card/mm-business-card.js';
```

```js preview-story
export const Simple = () => html`
  <mm-business-card></mm-business-card>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <mm-business-card title="Hello World"></mm-business-card>
`;
```
