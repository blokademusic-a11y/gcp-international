# GCP International Limited Website

A professional corporate finance and advisory website for GCP International Limited.

## About

This is a static React website showcasing GCP International Limited's corporate finance and advisory services, with information about their leadership, successes, and various service offerings.

## Features

- Responsive design optimized for all devices
- Multi-page navigation with dedicated pages for:
  - Home
  - Our Services
  - Leadership
  - Successes (Transaction Highlights)
  - Advisory Boards
  - Negotiation Support
  - Confidentiality
  - ESG Statement
  - Contact
- Professional UI with Shadcn components
- Contact form (ready for integration with form services)

## Technology Stack

- React 19.0.0
- React Router DOM for navigation
- Tailwind CSS for styling
- Shadcn UI components
- Lucide React for icons

## Local Development

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager

### Installation

```bash
cd frontend
yarn install
```

### Running Locally

```bash
yarn start
```

The website will open at `http://localhost:3000`

## Building for Production

```bash
yarn build
```

This creates an optimized production build in the `build/` folder.

## Deployment

This is a static website that can be deployed to any static hosting service:

### Option 1: Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `cd frontend && yarn build`
4. Publish directory: `frontend/build`

### Option 2: Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Framework: Create React App
4. Root directory: `frontend`
5. Build command: `yarn build`
6. Output directory: `build`

### Option 3: AWS S3 + CloudFront

1. Build the project: `yarn build`
2. Upload the `build/` folder contents to an S3 bucket
3. Enable static website hosting
4. (Optional) Set up CloudFront for CDN

### Option 4: Traditional Web Hosting (cPanel, etc.)

1. Build the project: `yarn build`
2. Upload all files from the `build/` folder to your web hosting's public_html or www directory
3. Ensure `.htaccess` is configured for React Router (see below)

## Important: React Router Configuration

For hosting services that don't automatically handle client-side routing, add this `.htaccess` file to your build folder:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

## Contact Form Integration

The contact form is currently set up to work client-side only. To make it functional, you can integrate with:

### Option 1: Formspree (Easiest)

1. Sign up at https://formspree.io
2. Get your form endpoint
3. Update the form action in `ContactPage.jsx`:

```javascript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS

1. Sign up at https://www.emailjs.com
2. Install: `yarn add @emailjs/browser`
3. Follow EmailJS React integration guide

### Option 3: Netlify Forms

If deploying to Netlify, add `netlify` attribute to form:

```javascript
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  ...
</form>
```

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── ui/           # Shadcn UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── OurServicesPage.jsx
│   │   ├── LeadershipPage.jsx
│   │   ├── SuccessesPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── ...
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── tailwind.config.js
```

## Customization

### Colors

The main brand color is `#2c4c6e` (dark blue). To change it, update the color values in:
- Tailwind classes throughout components
- `tailwind.config.js` if you want to add custom colors

### Content

All content can be edited directly in the respective page components in `src/pages/`

### Images

Images are currently loaded from external URLs. For better performance:
1. Download images to `public/images/`
2. Update image paths to `/images/filename.jpg`

## Support

For questions or issues:
- Email: corporate@gcp-international.com
- LinkedIn: https://www.linkedin.com/company/90473127

## License

Copyright © 2026 GCP International Limited. All rights reserved.