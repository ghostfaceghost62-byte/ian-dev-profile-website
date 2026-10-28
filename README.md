# Versagambit — Developer Portfolio Website

> **"Think Strategically. Adapt Freely. Explore Endlessly."**

Welcome to the official developer portfolio website for **Versagambit**, an independent software development brand inspired by chess strategy, technical adaptability, and creative exploration.

This website serves as the genuine, publicly accessible developer portfolio for Versagambit, showcasing our identity, software engineering principles, and multi-category application projects (including **De Code AI** for Android). It is structured to support Google Play Console developer identification and provide users, testers, and collaborators with an authentic point of contact.

---

## 1. Brand Identity & Visual System

- **Brand Name:** Versagambit
- **Identity:** Independent Software Development Studio & Solo Developer Brand
- **Tagline:** *"Think Strategically. Adapt Freely. Explore Endlessly."*
- **Design Aesthetic:** Premium, futuristic software studio with strategic chess-inspired motifs.
- **Color Palette:**
  - **Matte Black (`#0A0D12` / `#0F131A`):** Core background and depth.
  - **Deep Charcoal (`#141822` / `#181E2B`):** Surface and card containers.
  - **Crisp White (`#F3F4F6`):** High-contrast, accessible primary typography.
  - **Subtle Gold Accents (`#D4AF37`, `#FCE588`, `#E5C07B`):** Strategic highlights, badges, and focal points.
- **Motifs:** Original geometric chess knight emblem, tactical grid lines, and modular badges.
- **Central Developer Contact:** `ghostfaceghost62@gmail.com`

---

## 2. Directory Structure

The website is engineered with semantic HTML5, modern CSS3, and lightweight vanilla JavaScript — zero external runtime dependencies, completely static, and optimized for instant loading.

```
ian dev profile website/
├── index.html              # Homepage: Hero, brand pillars, featured spotlight (De Code AI), contact preview
├── about.html              # About: Brand meaning, development philosophy, and developer technical profile
├── projects.html           # Projects: Filterable multi-category portfolio, live status badges, store notice
├── contact.html            # Contact: Direct email actions, 1-click clipboard copy, pre-filled composer
├── privacy.html            # Privacy Policy: Strict zero-tracking policy, distinct from mobile app policies
├── assets/
│   ├── css/
│   │   └── style.css       # Complete stylesheet: responsive layout, theme tokens, animations
│   ├── js/
│   │   ├── main.js         # Navigation, email bindings, dynamic copyright, interactive composer
│   │   └── projects.js     # Centralized APP_CONFIG & extensible project data structure
│   └── images/
│       ├── logo.svg        # Scalable Versagambit horizontal vector logo
│       ├── favicon.svg     # Geometric knight emblem vector favicon
│       ├── knight-symbol.svg # Hero graphic with ambient glow and tactical grid
│       └── og-preview.svg  # OpenGraph / Twitter social card banner (1200x630)
└── README.md               # Documentation & deployment guide
```

---

## 3. Projects Architecture & De Code AI

All projects are managed within a single extensible data array in [`assets/js/projects.js`](assets/js/projects.js).

### Active Spotlight: De Code AI
- **Platform:** Android Application (Kotlin • Android Studio)
- **Category:** Artificial Intelligence & Developer Tools
- **Current Status:** `In Development`
- **Core Features:**
  - Programming-language detection across major languages
  - Syntax issue identification and highlighting
  - Code structure and flow analysis
  - Educational breakdowns & beginner-friendly explanations
  - AI-assisted debugging suggestions
  - Offline analysis fallback for core structural checks

### Strict Release Integrity
In compliance with developer platform guidelines and honest disclosure:
- No simulated or fake Google Play download buttons, invented ratings, or artificial user counts are displayed.
- As soon as **De Code AI** (or any future project) is approved and published on Google Play, its real listing URL can be added in `assets/js/projects.js`.

---

## 4. How to Add New Projects

To introduce a new application or game, open [`assets/js/projects.js`](assets/js/projects.js) and append a new object to the `PROJECTS_DATA` array:

```javascript
{
  id: "your-app-id",
  title: "Your App Title",
  category: "productivity", // 'ai', 'productivity', 'education', 'games', 'utilities'
  categoryLabel: "Productivity & Utilities",
  platform: "Android Application",
  targetStack: "Kotlin • Jetpack Compose",
  status: "in_development", // 'in_development', 'published', or 'planned'
  statusLabel: "In Development",
  shortDescription: "A concise 1-2 sentence description of what the app does.",
  longDescription: "Deeper explanation of your app's mission and architecture.",
  features: [
    "Feature one",
    "Feature two",
    "Feature three"
  ],
  storeUrl: null, // Replace with real Play Store URL when published: "https://play.google.com/store/apps/details?id=..."
  githubUrl: null,
  badgeColor: "gold",
  iconSvg: `<svg ...>...</svg>`
}
```

The filter tabs on [`projects.html`](projects.html) and card renderers will automatically detect and display the new project.

---

## 5. Deployment Instructions (GitHub Pages)

This static website is tailored for zero-cost, high-reliability deployment using **GitHub Pages**.

### Step 1: Initialize Git and Create a GitHub Repository
1. Log in to [GitHub](https://github.com/) and click **New Repository**.
2. Name the repository (e.g. `versagambit-website` or `<your-username>.github.io`).
3. Set the repository visibility to **Public**.
4. In your local terminal inside this project folder (`ian dev profile website`):

```bash
# Initialize local git repository
git init

# Add all files to staging
git add .

# Create the first commit
git commit -m "Initial release of Versagambit developer website"

# Rename branch to main
git branch -M main

# Link your local repo to GitHub (replace with your actual GitHub URL)
git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git

# Push the codebase
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (tab at the top right).
3. In the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`.
   - **Branch:** Select `main` and folder `/ (root)`.
5. Click **Save**.
6. Wait 1 to 2 minutes. GitHub Pages will generate your public URL:
   `https://<your-github-username>.github.io/<your-repo-name>/` (or `https://<your-username>.github.io/` if using a user page).

### Step 3: Verify the Live Deployment
1. Open a new **Incognito / Private Window** in Chrome or your browser.
2. Navigate to your GitHub Pages URL without signing into any account.
3. Verify that:
   - All navigation links (Home, About, Projects, Contact, Privacy Policy) navigate smoothly.
   - The logo and knight symbols render crisply.
   - Project filters switch categories cleanly.
   - The developer email button copies `ghostfaceghost62@gmail.com` to the clipboard.
   - Mobile responsive toggle works on narrow viewports.

### Step 4: Adding a Custom Domain (Optional)
If you purchase a custom domain (e.g., `versagambit.com` or `versagambit.dev`):
1. In your domain registrar (e.g., Namecheap, Google Domains / Squarespace, Cloudflare), add DNS records pointing to GitHub Pages:
   - **A Records:**
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME Record (for www):** points to `<your-username>.github.io`
2. In your GitHub repository under **Settings > Pages > Custom domain**, enter your domain name and click **Save**.
3. Check the box for **Enforce HTTPS**.

---

## 6. Updating Real Google Play Store URLs Upon Release

When **De Code AI** (or any other application) completes review and is officially published on Google Play:

1. Open [`assets/js/projects.js`](assets/js/projects.js).
2. Find the project object (e.g. `id: "decode-ai"`).
3. Update its properties:
   ```javascript
   status: "published",
   statusLabel: "Live on Google Play",
   storeUrl: "https://play.google.com/store/apps/details?id=com.versagambit.decodeai", // Replace with your exact package URL
   ```
4. Commit and push the change:
   ```bash
   git add assets/js/projects.js
   git commit -m "Update De Code AI release status and live Play Store link"
   git push origin main
   ```
5. The card will automatically update to display an authentic **"View on Google Play"** link button with direct store navigation.

---

## 7. Google Play Console Verification & Identity Alignment

When submitting this website to your **Google Play Console** developer profile:
- **Developer Name:** `Versagambit` (matching the website brand).
- **Developer Email:** `ghostfaceghost62@gmail.com` (matching the email prominently configured on this website).
- **Website URL:** Your live GitHub Pages URL (or custom domain).
- **Credibility Standard:** This website honestly reflects an independent developer identity, active technical projects, and direct contact avenues without inflated claims, fake legal entities, or misleading affiliations.

---

## 8. License & Copyright

&copy; 2026 Versagambit. All code and visual assets are proprietary to the developer.
Google Play and the Google Play logo are trademarks of Google LLC.

