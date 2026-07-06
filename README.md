# RunCode IDE - Official Static Website

This folder contains the complete, production-ready, highly-optimized static website for the **RunCode Android IDE**.

## 🚀 Instant Deployment with GitHub Pages

This project is built from scratch using pure vanilla **HTML5, CSS3, and modern JavaScript**, as requested. It does not require any compilers, bundlers, NPM, or external build processes.

To deploy this live on the web:
1. Create a new repository on GitHub (e.g., `runcode-website`).
2. Copy all the contents of this `RunCode/` folder directly into the root of your new repository.
3. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Deploy official website"
   git push origin main
   ```
4. Navigate to your GitHub Repository **Settings** > **Pages**.
5. Select the `main` branch as your build source and click **Save**.
6. Within 60 seconds, your website will be live at `https://<your-username>.github.io/<repository-name>/`!

---

## 📂 File Structure

```text
RunCode/
├── index.html            # Core Landing Page & Slogan Section
├── privacy.html          # Legal Privacy Policy Document
├── terms.html            # Terms of Service & Educational Guidelines
├── support.html          # Bug Reporting & Custom SDK request form
├── contact.html          # Professional contact card & inquiries
├── 404.html              # Custom page-not-found layout
│
├── css/
│   ├── style.css         # Modern Glassmorphic layouts & custom properties
│   ├── responsive.css    # Responsive grids & mobile breakpoints
│   └── animations.css    # Interactive micro-animations & transitions
│
├── js/
│   ├── app.js            # Live terminal compiler simulator
│   ├── animations.js     # Scroll effects & Intersection Observers
│   └── navigation.js     # Responsive header & route triggers
│
├── sitemap.xml           # SEO discovery map
├── robots.txt            # Search engine crawler instructions
└── manifest.webmanifest  # Progressive Web App configuration
```

---

## 🎨 Branding System & Custom Colors

* **Background Dark:** `#0D0D12`
* **Card Material:** `#1E2235`
* **Borders & Rules:** `#2A2F45`
* **Brand Accent:** `#0EA5E9` (Sky Blue)
* **Standard Text:** `White` (with secondary typography in `#9497A8`)
