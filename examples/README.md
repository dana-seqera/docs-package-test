# Example Docusaurus Site

This example demonstrates how to use the `@seqera/docusaurus-theme` package in a real Docusaurus site.

## 🚀 Quick Start

### Development (Using Local Theme)

```bash
# From the root directory, build the theme
npm run build

# Create npm link
npm link

# Navigate to example directory
cd example

# Install dependencies
npm install

# Link the local theme package
npm link @seqera/docusaurus-theme

# Start with local theme
npm run start:local
```

### Production (Using Published Package)

```bash
# Install from npm
npm install @seqera/docusaurus-theme

# Start normally
npm start
```

## 📁 Structure

```
example/
├── docs/                    # Documentation pages
│   ├── intro.md            # Introduction page
│   ├── components.md       # Component usage guide
│   └── styling.md          # Styling guide
├── src/
│   ├── css/
│   │   └── custom.css     # Custom styles
│   └── pages/
│       └── showcase.tsx   # Component showcase page
├── static/                # Static assets
├── docusaurus.config.ts   # Docusaurus configuration
├── package.json           # Dependencies
└── sidebars.js           # Sidebar configuration
```

## 🎯 Features Demonstrated

### Components
- **Button** - All variants and sizes
- **Card** - Navigation cards with different styles
- **Grid** - Responsive grid layouts
- **MultiqcModules** - Module listing component

### Styling
- CSS Variables usage
- Tailwind CSS integration
- Dark mode support
- Custom color palettes

### Pages
- `/` - Homepage with hero banner
- `/showcase` - Interactive component showcase
- `/docs/intro` - Getting started guide
- `/docs/components` - Component documentation
- `/docs/styling` - Styling guide

## 🧪 Testing Checklist

Use this site to test:

- [ ] **Components render correctly**
  - [ ] Buttons (all variants)
  - [ ] Cards (internal/external links)
  - [ ] Grid layouts
  
- [ ] **Styling works**
  - [ ] CSS variables apply
  - [ ] Tailwind classes work in `tw-wrapper`
  - [ ] Dark mode switches properly
  - [ ] Custom fonts load

- [ ] **Theme Integration**
  - [ ] Footer renders with Seqera branding
  - [ ] Navbar displays correctly
  - [ ] Color palettes available
  
- [ ] **Build Process**
  - [ ] Development server runs
  - [ ] Production build succeeds
  - [ ] No TypeScript errors

## 🛠️ Customization

### Using Components in MDX

```mdx
import { Button, Card, Grid } from '@seqera/docusaurus-theme';

<Grid>
  <Card to="/docs" title="Documentation">
    Read the docs
  </Card>
  <Card to="/blog" title="Blog">
    Latest updates
  </Card>
</Grid>

<Button brand arrow>Get Started</Button>
```

### Overriding Theme Variables

```css
/* src/css/custom.css */
:root {
  --color-brand-600: #custom-color;
  --font-size-base: 18px;
}
```

### Using Tailwind

```jsx
<div className="tw-wrapper">
  <div className="bg-nextflow-100 p-4 rounded-lg">
    <h3 className="text-xl font-bold text-nextflow-900">
      Tailwind Styled
    </h3>
  </div>
</div>
```

## 📝 Notes

- The `USE_LOCAL_THEME` environment variable switches between local and published package
- Components are imported from `@seqera/docusaurus-theme`
- The showcase page (`/showcase`) provides an interactive component playground
- Check the browser console for any errors or warnings

## 🔗 Links

- [Main Package README](../README.md)
- [Docusaurus Documentation](https://docusaurus.io)
- [Seqera Website](https://seqera.io)