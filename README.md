# Nwaeze.dev Portfolio

A modern, responsive personal portfolio website for showcasing frontend development, graphic design, and selected projects.

## Overview

This portfolio combines a dark visual style, a custom purple brand palette, Poppins typography, responsive layouts, and lightweight JavaScript interactions. It is designed to present professional work clearly across desktop, tablet, and mobile devices.

## Features

- Responsive fixed navigation bar
- Full-screen hero section with background image
- Custom brand colors using Tailwind CSS
- Google Fonts integration with Poppins
- About Me section with skills and profile image
- JavaScript-powered About image animations
- Projects section with category toggles:
  - Frontend projects
  - Graphic projects
- Clickable project cards that open in a new tab
- Project preview images
- Social media contact section
- Click-to-call phone contact
- Email contact link
- Responsive footer with dynamic copyright year
- Reduced-motion support for accessible animations

## Built With

- HTML5
- Tailwind CSS via CDN
- Vanilla JavaScript
- Google Fonts
- Inline SVG icons

## Project Structure

```text
Portfolio/
├── index.html
├── script.js
├── README.md
└── images/
    ├── About_me_image.jpg
    ├── Getschooled.png
    ├── Hero_background.jpg
    ├── Laundvend.png
    └── NwaeModern.png
```

## Getting Started

### Requirements

You only need a modern web browser. No build tool or package installation is required because Tailwind CSS is loaded through its CDN.

### Run Locally

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` directly in your browser.

For a better development experience, use the Live Server extension in Visual Studio Code.

## Customization

### Update Brand Colors

The brand palette is configured in `index.html`:

```javascript
colors: {
  brand: {
    DEFAULT: "#7C3AED",
    light: "#A78BFA",
    dark: "#6D28D9",
  },
}
```

Change these values to match your personal brand.

### Update the Font

The project currently uses Poppins from Google Fonts. Replace the Google Fonts URL and the Tailwind font configuration if you want to use another font.

### Update Personal Information

You can update the following content directly in `index.html`:

- Name and logo text
- Hero heading and introduction
- About Me biography
- Skills
- Project descriptions
- Social media links
- Email address
- Telephone number

### Update Project Links

Each project card uses an anchor element with `target="_blank"`:

```html
<a
  href="https://your-project-url.com"
  target="_blank"
  rel="noopener noreferrer"
>
```

Replace the `href` value with the correct live project URL.

### Add Project Images

Place new images inside the `images` folder and reference them from `index.html`:

```html
<img
  src="./images/project-image.png"
  alt="Project preview"
/>
```

Use descriptive `alt` text to improve accessibility.

## JavaScript Interactions

The `script.js` file controls:

- About image entrance animation
- About image hover bounce animation
- Project category toggling
- Dynamic footer copyright year

Project tabs are connected using the `data-filter` attribute:

```html
<button data-filter="frontend">Frontend projects</button>
<button data-filter="graphic">Graphic projects</button>
```

The matching project panels use IDs such as:

```html
<div id="frontend-projects"></div>
<div id="graphic-projects"></div>
```

## Contact Links

Before publishing, replace the current contact details with your own:

- GitHub profile
- LinkedIn profile
- Instagram profile
- Email address
- Telephone number

The telephone link uses the `tel:` format so visitors can call directly from supported devices.

## Deployment

This is a static website and can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

Upload the complete project folder and make sure `index.html` remains at the project root.

## Accessibility

The project includes:

- Semantic HTML sections
- Accessible navigation labels
- Labels and descriptions for interactive controls
- Alternative text for images
- Visible keyboard focus styles
- Reduced-motion support

## License

This project is available for personal and educational use. Update this section if you decide to apply a specific open-source license.

## Author

**Nwaeze**

- Portfolio: [Nwaeze.dev](#)
- GitHub: [sunnywizy](https://github.com/sunnywizy)
- LinkedIn: [Obasi Sunday](https://www.linkedin.com/in/obasi-sunday-93470626a/)
