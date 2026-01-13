# rjsf-material-ui-v3

Material-UI v3 theme components for `@rjsf/core` (react-jsonschema-form v5).

## Requirements

- `react` and `react-dom` >= 16.8
- `@material-ui/core` and `@material-ui/icons` ^3
- `@rjsf/core` and `@rjsf/utils` ^5

## Installation

```bash
npm i rjsf-material-ui-v3 @rjsf/core @rjsf/utils @material-ui/core @material-ui/icons react react-dom
```

## Quick Start

```tsx
import React from 'react';
import { withTheme } from '@rjsf/core';
import { Theme } from 'rjsf-material-ui-v3';

const Form = withTheme(Theme);

const schema = {
  title: 'Example',
  type: 'object',
  required: ['firstName'],
  properties: {
    firstName: { type: 'string', title: 'First name' },
    age: { type: 'number', title: 'Age' },
  },
};

export default function App() {
  return <Form schema={schema} />;
}
```

## API

Exports from `src/index.ts`:

- `default` (MuiForm) - preconfigured `Form` component for the theme
- `Form`, `generateForm` - form factory based on the theme
- `Theme`, `generateTheme` - theme object for `withTheme`
- `Templates`, `generateTemplates` - template set
- `Widgets`, `generateWidgets` - widget set
- `CustomWidgets`, `generateCustomWidgets` - custom widget set

## Development

```bash
npm run typecheck
npm run build
npm run clean
```

The `__template__` directory contains reference templates and is excluded from build/typecheck.
