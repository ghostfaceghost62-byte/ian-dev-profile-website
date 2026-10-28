/**
 * Versagambit - Core Website Scripts
 * Clean, lightweight, dependency-free vanilla JavaScript.
 */

document.addEventListener("DOMContentLoaded", () => {
  initEmailBinding();
  initDynamicYear();
  initMobileMenu();
  initContactForm();
  initCopyEmailButton();
  initActiveNavLink();
  initCardGlow();
});

/**
 * Centrally bind the developer email throughout the website
 */
function initEmailBinding() {
  const email = (typeof APP_CONFIG !== "undefined" && APP_CONFIG.developerEmail) 
    ? APP_CONFIG.developerEmail 
    : "ghostfaceghost62@gmail.com";

  // Replace text in elements marked with .dev-email
  document.querySelectorAll(".dev-email").forEach(el => {
    el.textContent = email;
  });

  // Set href for mailto links marked with .dev-mailto
  document.querySelectorAll("a.dev-mailto").forEach(link => {
    link.href = `mailto:${email}`;
  });
}

/**
 * Set current year dynamically for footer copyright
 */
function initDynamicYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Mobile Navigation Toggle
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (!toggleBtn || !navMenu) return;

  function toggleMenu(forceClose = false) {
    const isExpanded = forceClose ? false : toggleBtn.getAttribute("aria-expanded") === "true";
    const newState = !isExpanded;

    toggleBtn.setAttribute("aria-expanded", String(newState));
    navMenu.classList.toggle("is-open", newState);
    document.body.classList.toggle("menu-open", newState);
  }

  toggleBtn.addEventListener("click", () => toggleMenu());

  // Close when clicking nav link
  navMenu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => toggleMenu(true));
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target) && navMenu.classList.contains("is-open")) {
      toggleMenu(true);
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("is-open")) {
      toggleMenu(true);
    }
  });
}

/**
 * Highlight active navigation link based on current page
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}

/**
 * Contact Form Helper: Pre-fills and opens default email client
 * This ensures 100% genuine functionality without needing a fake server backend.
 */
function initContactForm() {
  const contactForm = document.getElementById("developer-contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("sender-name")?.value.trim() || "Visitor";
    const userEmail = document.getElementById("sender-email")?.value.trim() || "";
    const subjectCategory = document.getElementById("sender-topic")?.value.trim() || "General Inquiry";
    const message = document.getElementById("sender-message")?.value.trim() || "";

    const devEmail = (typeof APP_CONFIG !== "undefined" && APP_CONFIG.developerEmail)
      ? APP_CONFIG.developerEmail
      : "ghostfaceghost62@gmail.com";

    const emailSubject = encodeURIComponent(`[Versagambit - ${subjectCategory}] from ${name}`);
    const emailBody = encodeURIComponent(
      `Hello Versagambit,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${userEmail}\nSent via Versagambit Developer Website`
    );

    const mailtoUrl = `mailto:${devEmail}?subject=${emailSubject}&body=${emailBody}`;

    // Show feedback state
    const feedbackBox = document.getElementById("form-feedback");
    if (feedbackBox) {
      feedbackBox.className = "feedback-box feedback-success";
      feedbackBox.innerHTML = `
        <div class="feedback-icon">✓</div>
        <div>
          <strong>Email Client Launching...</strong>
          <p>Your mail application has been opened with your message ready to send directly to <code>${devEmail}</code>. If your mail client did not open automatically, <a href="${mailtoUrl}" class="gold-link">click here to send manually</a> or copy our email below.</p>
        </div>
      `;
      feedbackBox.style.display = "flex";
    }

    // Trigger mailto link
    window.location.href = mailtoUrl;
  });
}

/**
 * 1-Click Copy Email to Clipboard with visual feedback
 */
function initCopyEmailButton() {
  const copyBtns = document.querySelectorAll(".btn-copy-email");
  if (!copyBtns.length) return;

  const email = (typeof APP_CONFIG !== "undefined" && APP_CONFIG.developerEmail)
    ? APP_CONFIG.developerEmail
    : "ghostfaceghost62@gmail.com";

  copyBtns.forEach(btn => {
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(email);
        const originalText = btn.innerHTML;
        btn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>Email Copied!</span>
        `;
        btn.classList.add("copied");

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove("copied");
        }, 2500);
      } catch (err) {
        // Fallback for older browsers
        const tempInput = document.createElement("input");
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert(`Email copied: ${email}`);
      }
    });
  });
}

/**
 * Subtle interactive mouse tracking glow on project and philosophy cards
 */
function initCardGlow() {
  const cards = document.querySelectorAll(".project-card, .philosophy-card, .profile-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

