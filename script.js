document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    sv: {
      "nav.home": "Hem",
      "nav.about": "Vem jag är",
      "nav.services": "Tjänster",
      "nav.contact": "Kontakt",
      "hero.badge": "Front-end konsult • Sverige",
      "hero.title": "Jag bygger skarpa digitala upplevelser.",
      "hero.lead": "ASP.NET Core, Blazor och modern front-end som levererar snabbare lanseringar och hållbar kod.",
      "hero.cta": "Boka ett samtal",
      "hero.secondary": "Se tjänster",
      "hero.meta1": "+4 år erfarenhet",
      "hero.meta2": "Remote & på plats",
      "hero.cardTitle": "Din partner för webbutveckling",
      "hero.point1": "Fullstack .NET & JavaScript",
      "hero.point2": "Designsystem och komponentbibliotek",
      "hero.point3": "Prestanda- och tillgänglighetslyft",
      "hero.availability": "Tillgänglig för nya uppdrag nu",
      "about.eyebrow": "Vem jag är",
      "about.title": "Teknik, tempo och tydlig kommunikation.",
      "about.body": "Jag hjälper team att leverera stabila lösningar i högt tempo. Med bakgrund som front-end konsult och .NET-utvecklare bygger jag broar mellan produkt, design och teknik.",
      "about.stackTitle": "Teknisk verktygslåda",
      "about.approachTitle": "Så arbetar jag",
      "about.approachText": "Snabba iterationer, tydliga demos och mätbar effekt. Jag kliver in där ni behöver mig: från discovery och arkitektur till färdiga komponenter och release.",
      "about.point1": "Designsystem & komponentbibliotek",
      "about.point2": "Prestandaoptimering & Core Web Vitals",
      "about.point3": "Tillgänglighet enligt WCAG 2.1",
      "services.eyebrow": "Tjänster",
      "services.title": "Resultatdriven utveckling från idé till release.",
      "services.webapp.kicker": "Backend + Frontend",
      "services.webapp.title": "ASP.NET Core & API:er",
      "services.webapp.body": "Skalbara API:er och backend som håller för produktion. Fokus på säkerhet, testbarhet och CI/CD.",
      "services.webapp.point1": "REST & GraphQL",
      "services.webapp.point2": "Autentisering & B2C",
      "services.webapp.point3": "Databaser & caching",
      "services.blazor.kicker": "Single Page Apps",
      "services.blazor.title": "Blazor & komponenter",
      "services.blazor.body": "Komponentbaserade gränssnitt med C# end-to-end. Designsystem, teming och återanvändbara moduler.",
      "services.blazor.point1": "Server & WebAssembly",
      "services.blazor.point2": "SignalR realtid",
      "services.blazor.point3": "PWA-stöd",
      "services.frontend.kicker": "UX + Performance",
      "services.frontend.title": "Modern front-end",
      "services.frontend.body": "Snabba, responsiva och tillgängliga upplevelser. Jag tar hand om pixelprecision, interaktioner och mätbara förbättringar.",
      "services.frontend.point1": "React & TypeScript",
      "services.frontend.point2": "Designsystem & Storybook",
      "services.frontend.point3": "Core Web Vitals-optimering",
      "contact.eyebrow": "Kontakt",
      "contact.title": "Låt oss prata om ditt nästa projekt.",
      "contact.body": "Skicka ett kort meddelande så återkommer jag med förslag på upplägg och tidplan.",
      "contact.emailLabel": "E-post",
      "contact.phoneLabel": "Telefon",
      "contact.locationLabel": "Plats",
      "contact.locationValue": "Sverige • Remote eller på plats",
      "form.name": "Namn",
      "form.email": "E-post",
      "form.service": "Tjänst",
      "form.choose": "Välj tjänst",
      "form.opt1": "ASP.NET Core",
      "form.opt2": "Blazor",
      "form.opt3": "Front-end",
      "form.opt4": "Fullstack",
      "form.opt5": "Annat",
      "form.message": "Projektbeskrivning",
      "form.submit": "Skicka",
      "footer": "DiagTech © 2025"
    },
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.contact": "Contact",
      "hero.badge": "Front-end consultant • Sweden",
      "hero.title": "I build sharp digital experiences.",
      "hero.lead": "ASP.NET Core, Blazor and modern front-end that ship faster with maintainable code.",
      "hero.cta": "Book a call",
      "hero.secondary": "View services",
      "hero.meta1": "+4 years experience",
      "hero.meta2": "Remote & on-site",
      "hero.cardTitle": "Your partner for web development",
      "hero.point1": "Fullstack .NET & JavaScript",
      "hero.point2": "Design systems and component libraries",
      "hero.point3": "Performance and accessibility boosts",
      "hero.availability": "Available for new projects now",
      "about.eyebrow": "About me",
      "about.title": "Technology, pace and clear communication.",
      "about.body": "I help teams deliver stable solutions at speed. With a background in front-end consulting and .NET, I bridge product, design and engineering.",
      "about.stackTitle": "Toolbox",
      "about.approachTitle": "How I work",
      "about.approachText": "Fast iterations, clear demos and measurable impact. I join where you need me: from discovery and architecture to polished components and release.",
      "about.point1": "Design systems & component libraries",
      "about.point2": "Performance tuning & Core Web Vitals",
      "about.point3": "Accessibility aligned with WCAG 2.1",
      "services.eyebrow": "Services",
      "services.title": "Outcome-focused delivery from idea to release.",
      "services.webapp.kicker": "Backend + Frontend",
      "services.webapp.title": "ASP.NET Core & APIs",
      "services.webapp.body": "Production-ready APIs and backends with security, testability and CI/CD baked in.",
      "services.webapp.point1": "REST & GraphQL",
      "services.webapp.point2": "Authentication & B2C",
      "services.webapp.point3": "Databases & caching",
      "services.blazor.kicker": "Single Page Apps",
      "services.blazor.title": "Blazor & components",
      "services.blazor.body": "Component-driven UIs with C# end-to-end. Design systems, theming and reusable modules.",
      "services.blazor.point1": "Server & WebAssembly",
      "services.blazor.point2": "SignalR real-time",
      "services.blazor.point3": "PWA support",
      "services.frontend.kicker": "UX + Performance",
      "services.frontend.title": "Modern front-end",
      "services.frontend.body": "Fast, responsive and accessible experiences. I handle polish, interactions and measurable gains.",
      "services.frontend.point1": "React & TypeScript",
      "services.frontend.point2": "Design systems & Storybook",
      "services.frontend.point3": "Core Web Vitals optimisation",
      "contact.eyebrow": "Contact",
      "contact.title": "Let's talk about your next project.",
      "contact.body": "Send a short note and I'll reply with a suggested approach and timeline.",
      "contact.emailLabel": "Email",
      "contact.phoneLabel": "Phone",
      "contact.locationLabel": "Location",
      "contact.locationValue": "Sweden • Remote or on-site",
      "form.name": "Name",
      "form.email": "Email",
      "form.service": "Service",
      "form.choose": "Choose a service",
      "form.opt1": "ASP.NET Core",
      "form.opt2": "Blazor",
      "form.opt3": "Front-end",
      "form.opt4": "Fullstack",
      "form.opt5": "Other",
      "form.message": "Project summary",
      "form.submit": "Send",
      "footer": "DiagTech © 2025"
    },
  };

  const langButtons = document.querySelectorAll(".lang-btn");
  const i18nElements = document.querySelectorAll("[data-i18n]");
  let currentLang = "sv";

  // Neon mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  function closeMenu() {
    if (!navMenu) return;
    navMenu.classList.remove("open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    if (!navMenu) return;
    const isOpen = navMenu.classList.toggle("open");
    if (navToggle) navToggle.setAttribute("aria-expanded", String(isOpen));
  }

  if (navToggle) {
    navToggle.addEventListener("click", toggleMenu);
  }

  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  function applyTranslations(lang) {
    const dictionary = translations[lang];
    if (!dictionary) return;

    i18nElements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dictionary[key];
      if (!value) return;

      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.setAttribute("placeholder", value);
      } else if (el.tagName === "OPTION") {
        el.textContent = value;
      } else {
        el.textContent = value;
      }
    });

    // Update placeholders manually where needed
    const message = document.getElementById("message");
    if (message) {
      message.setAttribute(
        "placeholder",
        lang === "sv"
          ? "Berätta kort om målet"
          : lang === "en"
          ? "Tell me about the goal"
          : "Opisz krótko cel"
      );
    }
  }

  function setLanguage(lang) {
    currentLang = lang;
    langButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    applyTranslations(lang);
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  // Smooth scroll for nav links
  document.querySelectorAll(".nav a, .button.primary, .button.ghost").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Basic scroll spy to highlight nav
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  function updateActiveLink() {
    let current = "";
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom > 120) {
        current = section.id;
      }
    });
    navLinks.forEach((link) => {
      const id = link.getAttribute("href").substring(1);
      link.classList.toggle("active", id === current);
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();

  // Initial language
  setLanguage(currentLang);
});
