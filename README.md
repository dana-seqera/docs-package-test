# @seqera/docusaurus-theme

A custom Docusaurus theme package for Seqera documentation sites with built-in components, styles, and configurations.

## Features

- 🎨 Custom Seqera-branded components (Button, Card, Grid, etc.)
- 💅 Tailwind CSS v4 integration with custom design tokens
- 🔤 Inter and Degular custom fonts
- 🌙 Dark mode support
- 📖 OpenAPI documentation support
- 🔧 Pre-configured plugins and presets
- 📱 Responsive design

## Installation

```bash
npm install @seqera/docusaurus-theme
# or
yarn add @seqera/docusaurus-theme
```

## Usage

### Method 1: As a Theme (Recommended)

In your `docusaurus.config.js`:

```js
import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  // ... other config
  
  themes: [
    [
      '@seqera/docusaurus-theme',
      {
        enableTailwind: true,
        enableOpenApiDocs: true,
        customCss: './src/css/custom.css', // Your additional styles
      },
    ],
  ],
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  
  // Theme configuration
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Your Docs',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      // ... navbar items
    },
    footer: {
      // ... footer config
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: [
        'bash',
        'docker',
        'groovy',
        'java',
        'python',
        'yaml',
      ],
    },
  },
};

export default config;
```

### Method 2: Using the Preset Helper

For a more comprehensive setup with multiple documentation instances:

```js
import { createSeqeraPreset } from '@seqera/docusaurus-theme';
import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Your Documentation',
  tagline: 'Documentation powered by Seqera theme',
  url: 'https://your-site.com',
  baseUrl: '/',
  
  ...createSeqeraPreset({
    enableOpenApiDocs: true,
    docs: {
      sidebarPath: './sidebars.js',
      editUrl: 'https://github.com/your-org/your-repo/edit/main/',
    },
    theme: {
      enableTailwind: true,
      customCss: './src/css/custom.css',
    },
    platformApi: {
      enabled: true,
      path: 'platform-api-docs/docs',
      specPath: 'api/openapi.yaml',
    },
    platformEnterprise: {
      enabled: false, // Enable if needed
    },
  }),
  
  themeConfig: {
    // Your theme configuration
  },
};

export default config;
```

### Using Components

Import and use Seqera components in your MDX files or React components:

```jsx
import { Button, Card, Grid } from '@seqera/docusaurus-theme';

export default function MyComponent() {
  return (
    <Grid>
      <Card to="/docs/getting-started" title="Getting Started">
        Learn how to get started with our platform
      </Card>
      <Button href="/signup" brand arrow>
        Sign Up Now
      </Button>
    </Grid>
  );
}
```

## Components

### Button

```jsx
<Button 
  href="/link"
  brand // or white, blue, secondary
  arrow // adds arrow icon
  wide // wider padding
>
  Click Me
</Button>
```

Props:
- `href` / `to`: Link destination
- `brand`, `white`, `blue`, `secondary`: Style variants
- `arrow`: Add arrow icon
- `small`, `medium`, `large`: Size variants
- `wide`, `wider`: Width variants
- `disabled`: Disabled state

### Card

```jsx
<Card 
  to="/docs/page" 
  title="Card Title"
  id="optional-id"
>
  Card content goes here
</Card>
```

### Grid

```jsx
<Grid vertical={false}>
  <div>Grid item 1</div>
  <div>Grid item 2</div>
  <div>Grid item 3</div>
</Grid>
```

## Styling

### Custom CSS Variables

The theme provides numerous CSS variables you can override:

```css
:root {
  /* Override brand colors */
  --color-brand-950: #2D273C;
  --color-brand-600: #8A8792;
  
  /* Override spacing */
  --spacing-4: 16px;
  --spacing-8: 32px;
  
  /* Override fonts */
  --font-family-title: 'Your Font', sans-serif;
}
```

### Tailwind Classes

When Tailwind is enabled, you can use all Tailwind utilities within the `.tw-wrapper` class:

```jsx
<div className="tw-wrapper">
  <div className="flex items-center justify-between p-4">
    {/* Tailwind classes work here */}
  </div>
</div>
```

### Dark Mode

The theme automatically handles dark mode. Use CSS variables that adapt:

```css
.my-component {
  color: var(--color-brand-950);
  background: var(--color-gray-50);
}

html[data-theme='dark'] .my-component {
  color: var(--color-brand-200);
  background: var(--color-gray-900);
}
```

## Configuration Options

### Theme Options

- `enableTailwind` (boolean): Enable Tailwind CSS integration (default: `true`)
- `enableOpenApiDocs` (boolean): Enable OpenAPI documentation support (default: `true`)
- `customCss` (string | string[]): Additional CSS files to load

### Preset Options

- `docs`: Classic docs plugin configuration
- `theme`: Theme-specific options
- `openapi`: OpenAPI plugin configuration
- `platformApi`: Platform API documentation configuration
- `platformEnterprise`: Enterprise documentation configuration

## File Structure

When installed, the package provides:

```
@seqera/docusaurus-theme/
├── lib/                  # Compiled JavaScript
├── src/                  # Source TypeScript/React components
│   ├── components/       # Reusable components
│   ├── theme/           # Theme overrides
│   └── css/             # Styles
├── static/              # Static assets
│   └── fonts/           # Font files
└── css/                 # CSS files
```

## Migrating from Inline Theme

1. Install the package:
   ```bash
   npm install @seqera/docusaurus-theme
   ```

2. Remove local theme files from your project:
   - `src/components/` (if using Seqera components)
   - `src/theme/` (if using theme overrides)
   - `src/css/` (keep custom styles)

3. Update `docusaurus.config.js` to use the theme

4. Update imports in your MDX/React files:
   ```jsx
   // Before
   import Button from '@site/src/components/Button';
   
   // After
   import { Button } from '@seqera/docusaurus-theme';
   ```

## Development

To develop the theme locally:

1. Clone the repository
2. Install dependencies: `npm install`
3. Build: `npm run build`
4. Link locally: `npm link`
5. In your Docusaurus project: `npm link @seqera/docusaurus-theme`

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## License

Apache-2.0 © Seqera