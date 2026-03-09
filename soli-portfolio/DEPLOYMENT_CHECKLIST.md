# Portfolio Deployment Checklist

Use this checklist when deploying or updating the portfolio.

---

# 1️⃣ Local Development

Start the development server:

npm run dev

Open:

http://localhost:5173

---

# 2️⃣ Build for Production

Run:

npm run build

Output directory:

dist

---

# 3️⃣ Netlify Deployment

Push the repository to GitHub.

In Netlify:

Create a **new site from GitHub repo**.

Build settings:

Build command

npm run build

Publish directory

dist

---

# 4️⃣ Domain Configuration

Add custom domain:

soli.nyc

Configure DNS in GoDaddy to point to Netlify.

---

# 5️⃣ Verify SEO Tags

Check `index.html` includes:

title
description
og:title
og:description
og:image

---

# 6️⃣ Verify Favicon

Ensure favicon files exist in:

public/favicon

Hard refresh browser if favicon does not update.

---

# 7️⃣ Verify Navigation

Test:

- Home
- About
- Projects
- Skills
- Approach
- Contact
- Project Details pages

---

# 8️⃣ Verify Responsive Layout

Test layouts on:

- desktop
- tablet
- mobile

Check:

- hero section
- project grid
- navigation
- contact section

---

# 9️⃣ Verify Social Preview

Test sharing the site link:

https://soli.nyc

Confirm preview loads correctly.

---

# 🔟 Performance Check

Run Lighthouse in Chrome.

Target scores:

Performance: 90+
Accessibility: 95+
SEO: 95+

---

# Next Development Phase

Upcoming backend integration:

MongoDB Atlas
Netlify Functions API
Cloudinary media hosting
Dynamic project data
