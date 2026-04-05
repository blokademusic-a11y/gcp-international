# Quick Build & Deploy Guide

## For Web Developers/IT Teams

This is a simple 3-step process to get the website live.

### Step 1: Build the Website (5 minutes)

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies (only needed first time)
yarn install

# Build production version
yarn build
```

You now have a `build/` folder with your website.

### Step 2: Upload to Hosting (10 minutes)

**All files from the `build/` folder** need to be uploaded to your web server's public directory (usually `public_html`, `www`, or `httpdocs`).

#### Using cPanel File Manager:
1. Login to cPanel
2. Open File Manager
3. Go to `public_html`
4. Click Upload
5. Select all files from `build/` folder
6. Upload (including hidden `.htaccess` file)

#### Using FTP (FileZilla, etc.):
1. Connect to your server
2. Navigate to public directory
3. Drag & drop all files from `build/` folder
4. Ensure `.htaccess` is uploaded

### Step 3: Configure Contact Form (5 minutes)

The contact form needs a backend service to send emails.

**Easiest Option - Formspree (Free):**

1. Go to https://formspree.io
2. Sign up (free)
3. Create new form
4. Copy your form endpoint URL
5. In `ContactPage.jsx` (line 32), replace:
   ```javascript
   const handleSubmit = (e) => {
     e.preventDefault();
     // Replace this section with Formspree
   };
   ```
   
   With:
   ```javascript
   // Just change the form tag to:
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Alternative - Web3Forms (No signup required):**

1. Go to https://web3forms.com
2. Get access key
3. Add to form:
   ```html
   <input type="hidden" name="access_key" value="YOUR_KEY_HERE" />
   ```

---

## File Structure After Build

```
build/
├── index.html              (Main page)
├── static/
│   ├── css/               (Stylesheets)
│   ├── js/                (JavaScript)
│   └── media/             (Images, fonts)
├── .htaccess              (Important! For routing)
└── [other files]
```

## Verification Checklist

After uploading, test:

- [ ] Homepage loads: `https://yourdomain.com`
- [ ] Navigation works (click all menu items)
- [ ] Direct URLs work: `/contact`, `/services`, etc.
- [ ] Mobile version looks good (check on phone)
- [ ] Contact form sends emails (after configuring service)
- [ ] No browser console errors (F12 → Console tab)

## Common Issues

### "Page Not Found" on direct URLs

**Problem**: `/contact` or `/services` shows 404

**Fix**: Ensure `.htaccess` file is uploaded and in the root directory

### Images not loading

**Problem**: Broken image icons

**Fix**: Make sure all files from `build/static/` were uploaded

### Form doesn't send

**Problem**: Contact form doesn't work

**Fix**: Configure Formspree or Web3Forms (see Step 3)

---

## Need Help?

**For hosting questions:** Contact your hosting provider
**For website questions:** corporate@gcp-international.com

## Quick Commands Reference

```bash
# Install dependencies
yarn install

# Run locally (for testing)
yarn start

# Build for production
yarn build

# Build size check
du -sh build/
```

## Production Build Details

The build creates:
- **Minified** JavaScript (smaller file sizes)
- **Optimized** CSS (combined and compressed)
- **Compressed** images
- **Ready** for any static web host

No server-side code needed. Works on any hosting that supports static websites.
