# Glass Decor Showcase

A modern, elegant showcase website for a fictional glass decor company. This project features a fully responsive design with product browsing, detail views, and category filtering. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Responsive design that works across all device sizes
- Product browsing with category filtering
- Detailed product pages with related product suggestions
- Modern UI with glassmorphism elements
- Optimized for GitHub Pages hosting

## Tech Stack

- React 18
- TypeScript
- Vite build system
- Tailwind CSS for styling
- React Router (HashRouter for GitHub Pages compatibility)
- Shadcn UI components

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sample-glass-decor-showcase.git
cd sample-glass-decor-showcase
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to http://localhost:8080

## Building for Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

This will create a `dist` folder with optimized static files ready for deployment.

## Deploying to GitHub Pages

This project is configured for easy deployment to GitHub Pages:

1. Make sure your GitHub repository is set up.

2. Install the gh-pages package (already in package.json):
```bash
npm install --save-dev gh-pages
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
# or
yarn deploy
```

This will build the project and push it to the `gh-pages` branch of your repository.

4. In your GitHub repository settings, ensure the GitHub Pages source is set to the `gh-pages` branch.

## Project Structure

- `/src` - Source code
  - `/components` - Reusable UI components
  - `/pages` - Page components
  - `/data` - Static data files
  - `/lib` - Utility functions and helpers

## License

MIT
