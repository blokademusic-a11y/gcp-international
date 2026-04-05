# Deployment Guide for GCP International Limited Website

## Overview

This is a static React website that can be deployed to any web hosting service. After building, you'll have a collection of HTML, CSS, and JavaScript files that work together.

## Step-by-Step Deployment

### Step 1: Build the Website

On your local machine (or build server):

```bash
cd frontend
yarn install
yarn build
```

This creates a `build/` folder with your production-ready website.

### Step 2: Prepare for Upload

The `build/` folder contains everything you need:
- `index.html` - Main HTML file
- `static/` - CSS and JavaScript files
- `.htaccess` - Server configuration for routing
- Other assets (images, fonts, etc.)

### Step 3: Upload to Your Web Host

#### For cPanel Hosting:

1. Log into your cPanel
2. Open "File Manager"
3. Navigate to `public_html` (or `www` or `httpdocs` depending on your host)
4. Delete any existing files (if this is a fresh install)
5. Upload ALL files from the `build/` folder
6. Important: Make sure `.htaccess` is uploaded (it might be hidden)

#### For FTP Upload:

1. Use an FTP client (FileZilla, Cyberduck, etc.)
2. Connect to your server
3. Navigate to your website's root directory
4. Upload ALL files from `build/` folder
5. Ensure `.htaccess` is uploaded

#### For Git-based Hosting (GitHub Pages, GitLab Pages):

1. Push the `build/` folder contents to your repository
2. Configure the hosting service to serve from that folder

### Step 4: Configure Domain (if needed)

1. Point your domain to your hosting server
2. Update DNS records (A record or CNAME)
3. Wait for DNS propagation (can take up to 48 hours)

### Step 5: Enable HTTPS (Recommended)

Most modern hosting providers offer free SSL certificates:
- **cPanel**: Use "SSL/TLS Status" or "Let's Encrypt"
- **Cloudflare**: Free SSL certificate included
- **Other hosts**: Check your hosting panel for SSL options

## Important Files

### .htaccess Configuration

The `.htaccess` file is crucial for React Router to work properly. It ensures all routes are handled by `index.html`:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

If you're using Nginx instead of Apache, use this configuration:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## Contact Form Setup

The contact form needs a backend service to send emails. Here are easy options:

### Option 1: Formspree (Recommended for beginners)

1. Go to https://formspree.io
2. Sign up for free account
3. Create a new form
4. Copy your form endpoint
5. Update `ContactPage.jsx`:

```javascript
// Change the form element to:
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  // Add name attributes to match
  <input type="text" name="name" ... />
  <input type="email" name="email" ... />
  // etc.
</form>
```

### Option 2: Web3Forms (No registration needed)

1. Go to https://web3forms.com
2. Get your access key
3. Add to form as hidden field:

```javascript
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
```

### Option 3: EmailJS

1. Sign up at https://www.emailjs.com
2. Install: `yarn add @emailjs/browser`
3. Configure with your email service
4. Update the form submission handler

## Troubleshooting

### Page Not Found Errors (404)

**Problem**: Direct URLs like `/services` or `/contact` show 404 errors

**Solution**: 
- Make sure `.htaccess` file is uploaded and in the root directory
- Check if your server supports mod_rewrite (Apache)
- For Nginx servers, update the configuration file

### Images Not Loading

**Problem**: Images show broken or don't load

**Solution**:
- Check image URLs are correct
- Ensure images are uploaded with the build files
- Verify file paths are relative (not absolute)

### Form Not Sending Emails

**Problem**: Contact form doesn't send messages

**Solution**:
- Integrate with a form service (see Contact Form Setup above)
- The form currently only works client-side
- You need a backend service to actually send emails

### CSS Not Applied

**Problem**: Website looks broken, no styling

**Solution**:
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check if CSS files in `static/css/` were uploaded
- Verify no upload errors occurred

## Performance Optimization

### Enable Compression

Add to `.htaccess`:

```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

### Enable Browser Caching

Add to `.htaccess`:

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Use CDN (Optional)

For faster global loading:
1. Sign up for Cloudflare (free)
2. Add your domain
3. Update nameservers
4. Enable caching and optimization

## Updating the Website

When you need to make changes:

1. Update the source code
2. Run `yarn build` again
3. Upload the new `build/` folder contents
4. Clear browser cache to see changes

## Support

For hosting-specific questions:
- Contact your web hosting provider's support
- Check their documentation for static site hosting

For website content/code questions:
- Email: corporate@gcp-international.com

## Checklist

Before going live, verify:

- [ ] All pages load correctly (test each navigation link)
- [ ] Mobile responsiveness works (test on phone)
- [ ] Images display properly
- [ ] Contact form is configured with email service
- [ ] HTTPS/SSL is enabled
- [ ] Domain points to correct server
- [ ] `.htaccess` file is uploaded
- [ ] No console errors in browser (F12 to check)
- [ ] Social media links work
- [ ] Email links work

## Quick Reference: Common Hosting Providers

| Provider | Upload Method | SSL | Support |
|----------|--------------|-----|---------|
| Bluehost | cPanel/FTP | Free Let's Encrypt | 24/7 |
| SiteGround | cPanel/FTP | Free Let's Encrypt | 24/7 |
| HostGator | cPanel/FTP | Free Let's Encrypt | 24/7 |
| GoDaddy | cPanel/FTP | Paid/Free options | 24/7 |
| DreamHost | FTP/SFTP | Free Let's Encrypt | 24/7 |

All of these support static React apps with minimal configuration.
