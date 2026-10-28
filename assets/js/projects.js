/**
 * Versagambit - Projects & Brand Configuration
 * Centralized data source for projects, applications, and developer info.
 * To add a new project, simply append an object to the `PROJECTS_DATA` array below.
 */

const APP_CONFIG = {
  brandName: "Versagambit",
  tagline: "Think Strategically. Adapt Freely. Explore Endlessly.",
  developerEmail: "ghostfaceghost62@gmail.com",
  contactSubjectDefault: "Inquiry regarding Versagambit Software",
  githubRepoUrl: "https://github.com/ghostfaceghost62-byte", // Main GitHub profile
  playConsoleDeveloperName: "Versagambit",
};

/**
 * Projects List
 * Status types:
 * - 'in_development': Actively being coded/tested, not yet on store.
 * - 'published': Live on Google Play or web (requires real storeUrl).
 * - 'planned': Conceptual or early research phase.
 */
const PROJECTS_DATA = [
  {
    id: "decode-ai",
    title: "De Code AI",
    category: "ai",
    categoryLabel: "Artificial Intelligence & Developer Tools",
    platform: "Android Application",
    targetStack: "Kotlin • Android Studio • AI Engine",
    status: "in_development",
    statusLabel: "In Development",
    shortDescription: "An Android application designed to help users understand, analyze, and debug source code through code analysis, programming-language detection, educational explanations, and AI-assisted suggestions.",
    longDescription: "De Code AI bridges the gap between code comprehension and learning. Built natively for Android, it serves as an intelligent coding companion that parses source code snippets, identifies syntax snags, and explains complex architectural logic with accessible explanations and offline capabilities.",
    features: [
      "Programming-language detection across major languages",
      "Syntax issue identification and highlighting",
      "Code structure and flow analysis",
      "Educational breakdowns & beginner-friendly explanations",
      "AI-assisted debugging suggestions and fixes",
      "Offline analysis fallback for core structural checks"
    ],
    // Store links remain null until officially published on Google Play Console
    storeUrl: null,
    githubUrl: null,
    badgeColor: "gold",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="project-svg-icon"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><circle cx="12" cy="12" r="2"></circle></svg>`
  },
  {
    id: "tactical-workflow",
    title: "Tactical Flow Utility",
    category: "productivity",
    categoryLabel: "Productivity & Utilities",
    platform: "Cross-Platform / Android",
    targetStack: "Android • Kotlin",
    status: "planned",
    statusLabel: "Planned / In Design",
    shortDescription: "A calculated task and focus management utility inspired by chess opening preparation and positional time-control techniques.",
    longDescription: "Designed for developers, thinkers, and strategists seeking structured deep-work intervals, branch-based priority scheduling, and minimal distraction.",
    features: [
      "Positional task branching",
      "Chess-clock inspired focus timers",
      "Local-first data privacy",
      "Customizable daily gambits"
    ],
    storeUrl: null,
    githubUrl: null,
    badgeColor: "silver",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="project-svg-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
  },
  {
    id: "algorithmic-tactics",
    title: "Algorithmic Tactics Lab",
    category: "education",
    categoryLabel: "Education & Logic",
    platform: "Web & Mobile Experiment",
    targetStack: "Web Standards • Interactive Visuals",
    status: "planned",
    statusLabel: "Planned / Exploration",
    shortDescription: "Interactive visual puzzles that demonstrate computational logic, recursive thinking, and strategic decision trees through gamified chess motifs.",
    longDescription: "An experimental educational playground demonstrating how computational problem solving mirrors positional chess gambits.",
    features: [
      "Visual decision tree exploration",
      "State-space puzzle navigation",
      "Interactive algorithm tutorials",
      "Zero account required, instant access"
    ],
    storeUrl: null,
    githubUrl: null,
    badgeColor: "silver",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="project-svg-icon"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
  },
  {
    id: "world-explorer",
    title: "World Explorer 3.0",
    category: "games",
    categoryLabel: "Games & Interactive Experiences",
    platform: "Web Application (Browser-Based)",
    targetStack: "HTML5 • CSS3 • JavaScript • GitHub Pages",
    status: "published",
    statusLabel: "Live • Open Source",
    shortDescription: "An interactive browser-based exploration game that lets users navigate and discover world environments, landmarks, and geographic experiences through an engaging web interface.",
    longDescription: "World Explorer 3.0 is a web-based interactive experience built with vanilla web technologies, offering users an immersive way to explore and interact with world-themed content directly in their browser.",
    features: [
      "Browser-based interactive world exploration",
      "Engaging visual navigation and discovery mechanics",
      "Responsive design for desktop and mobile browsers",
      "No installation required — instant play via URL",
      "Open source and hosted on GitHub Pages"
    ],
    storeUrl: null,
    githubUrl: "https://github.com/ghostfaceghost62-byte/World-Explorer-3.0",
    liveUrl: "https://ghostfaceghost62-byte.github.io/World-Explorer-3.0/",
    badgeColor: "gold",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="project-svg-icon"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
  },
  {
    id: "anzence",
    title: "Anzence",
    category: "utilities",
    categoryLabel: "Web Apps & Utilities",
    platform: "Web Application (Browser-Based)",
    targetStack: "HTML5 • CSS3 • JavaScript • GitHub Pages",
    status: "published",
    statusLabel: "Live • Open Source",
    shortDescription: "A web-based application project showcasing frontend development skills with a clean, responsive interface and interactive user experience.",
    longDescription: "Anzence is a web application built and deployed via GitHub Pages, demonstrating practical frontend engineering and user-centric design principles.",
    features: [
      "Clean and modern user interface design",
      "Responsive layout across devices",
      "Client-side interactivity with vanilla JavaScript",
      "Lightweight and fast-loading static architecture",
      "Open source and publicly accessible"
    ],
    storeUrl: null,
    githubUrl: "https://github.com/ghostfaceghost62-byte/Anzence",
    liveUrl: "https://ghostfaceghost62-byte.github.io/Anzence/",
    badgeColor: "gold",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="project-svg-icon"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
  },
  {
    id: "eagle-one",
    title: "EAGLE ONE Motosupply",
    category: "utilities",
    categoryLabel: "E-Commerce & Business Web Apps",
    platform: "Web Application (Browser-Based)",
    targetStack: "HTML5 • CSS3 • JavaScript • Local Storage",
    status: "published",
    statusLabel: "Live • Open Source",
    shortDescription: "A full-featured motorcycle parts and accessories e-commerce web application with user authentication, product catalog, shopping cart, admin panel, and user dashboard.",
    longDescription: "EAGLE ONE Motosupply is a comprehensive e-commerce storefront built for a motorcycle parts and accessories business. Features a multi-view architecture with authentication, browsable product store, customer dashboard, and admin management panel — all running client-side with local storage persistence.",
    features: [
      "User authentication system with session management",
      "Product catalog with browsable motorcycle parts store",
      "Shopping cart and order management",
      "Customer dashboard for order tracking and profile editing",
      "Admin panel for inventory and user management",
      "Responsive design optimized for mobile and desktop"
    ],
    storeUrl: null,
    githubUrl: "https://github.com/ghostfaceghost62-byte/EAGLE-ONE-final-",
    liveUrl: "https://ghostfaceghost62-byte.github.io/EAGLE-ONE-final-/",
    badgeColor: "gold",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="project-svg-icon"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`
  }
];

/**
 * Render Project Cards into a target container
 * @param {string} containerId - Element ID to render cards into
 * @param {string} filterCategory - Category to filter by ('all' or specific category)
 * @param {boolean} featuredOnly - If true, only render the primary featured project (for Home page)
 */
function renderProjects(containerId, filterCategory = "all", featuredOnly = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let filtered = PROJECTS_DATA;
  if (filterCategory !== "all") {
    filtered = filtered.filter(p => p.category === filterCategory);
  }

  if (featuredOnly) {
    filtered = filtered.slice(0, 1);
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">♟</div>
        <h3>No projects in this category yet</h3>
        <p>Versagambit is actively engineering new software. Check back soon or suggest an idea!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(project => {
    // Generate feature list pills
    const featureItems = project.features
      .map(f => `<li class="feature-item"><span class="feature-bullet">✦</span> <span>${f}</span></li>`)
      .join("");

    // Action buttons: Google Play link (if live) + GitHub link (if provided) + Status badge
    let actionButtonsHtml = "";
    let githubBtnHtml = "";

    if (project.githubUrl) {
      githubBtnHtml = `
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-gold btn-sm btn-github" aria-label="View ${project.title} on GitHub">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>View on GitHub</span>
        </a>
      `;
    }

    // Live Demo button for web projects hosted on GitHub Pages or external URLs
    let liveDemoBtnHtml = "";
    if (project.liveUrl) {
      liveDemoBtnHtml = `
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
          <span>Live Demo</span>
        </a>
      `;
    }

    if (project.status === "published" && project.storeUrl) {
      actionButtonsHtml = `
        <div class="project-actions-row">
          <a href="${project.storeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <span>View on Google Play</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          ${githubBtnHtml}
        </div>
      `;
    } else if (project.status === "published" && project.liveUrl) {
      // Published web project (not on Play Store) — show Live Demo + GitHub
      actionButtonsHtml = `
        <div class="project-actions-row">
          ${liveDemoBtnHtml}
          ${githubBtnHtml}
        </div>
      `;
    } else if (project.status === "in_development") {
      actionButtonsHtml = `
        <div class="project-actions-container">
          ${githubBtnHtml ? `<div style="margin-bottom: 10px;">${githubBtnHtml}</div>` : ''}
          <div class="project-status-note">
            <span class="status-pulse-dot"></span>
            <span>In Active Android Development • Store link will be listed upon official release</span>
          </div>
        </div>
      `;
    } else {
      actionButtonsHtml = `
        <div class="project-actions-container">
          ${githubBtnHtml ? `<div style="margin-bottom: 10px;">${githubBtnHtml}</div>` : ''}
          <div class="project-status-note note-planned">
            <span>Concept & Architecture Phase • Future Roadmap</span>
          </div>
        </div>
      `;
    }

    const badgeClass = project.status === "published" ? "badge-published" : 
                       project.status === "in_development" ? "badge-dev" : "badge-planned";

    return `
      <article class="project-card ${project.status === 'in_development' ? 'project-card-highlight' : ''}" id="project-${project.id}">
        <div class="card-header">
          <div class="card-icon-wrapper">
            ${project.iconSvg}
          </div>
          <div class="card-badges">
            <span class="badge ${badgeClass}">${project.statusLabel}</span>
            <span class="badge badge-platform">${project.platform}</span>
          </div>
        </div>

        <div class="card-body">
          <div class="card-meta">
            <span class="project-category-text">${project.categoryLabel}</span>
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.shortDescription}</p>

          <div class="project-details-block">
            <h4 class="details-heading">Core Capabilities & Highlights:</h4>
            <ul class="features-list">
              ${featureItems}
            </ul>
          </div>

          <div class="project-tech-stack">
            <span class="stack-label">Target Architecture:</span>
            <span class="stack-val">${project.targetStack}</span>
          </div>
        </div>

        <div class="card-footer">
          ${actionButtonsHtml}
        </div>
      </article>
    `;
  }).join("");
}

/**
 * Filter event listener setup for projects page
 */
function setupProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  if (!filterButtons.length) return;

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");

      const category = button.getAttribute("data-category") || "all";
      renderProjects("all-projects-container", category);
    });
  });
}

