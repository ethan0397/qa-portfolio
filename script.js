const skills = [
  {
    label: "Quality Engineering",
    title: "Strategy & process",
    items: [
      "Risk-Based Testing",
      "Shift-Left Testing",
      "Test Planning",
      "Root Cause Analysis",
      "Release Quality Assessment"
    ]
  },
  {
    label: "Test Automation",
    title: "Framework development",
    items: [
      "Playwright (TS/Java)",
      "Selenium WebDriver",
      "Katalon Studio",
      "POM Architecture",
      "Parallel Execution"
    ]
  },
  {
    label: "API Testing",
    title: "Backend validation",
    items: [
      "RESTful APIs",
      "Postman",
      "Playwright API",
      "Ajv Schema Validation",
      "Burp Suite"
    ]
  },
  {
    label: "Database",
    title: "Data verification",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Data Integrity",
      "Backend Troubleshooting"
    ]
  },
  {
    label: "Performance",
    title: "Non-functional testing",
    items: [
      "JMeter",
      "UX Testing",
      "Exploratory Testing",
      "Compatibility Testing",
      "Security Awareness"
    ]
  },
  {
    label: "CI/CD",
    title: "Pipeline integration",
    items: [
      "GitLab CI/CD",
      "Jenkins",
      "GitLab Runner",
      "Allure Reporting",
      "Continuous Testing"
    ]
  },
  {
    label: "Programming",
    title: "Implementation stack",
    items: [
      "TypeScript",
      "Java",
      "SQL",
      "JUnit / TestNG",
      "Cucumber BDD"
    ]
  },
  {
    label: "AI & Modern QA",
    title: "Next-generation testing",
    items: [
      "AI Test Design",
      "Cursor / Codex",
      "Failure Pattern Detection",
      "Regression Impact Analysis",
      "Quality Metrics Automation"
    ]
  }
];

const domains = [
  {
    label: "E-Commerce",
    title: "Marketplace & retail",
    items: [
      "Tiki / Ticketbox",
      "Amaze Marketplace",
      "Voucher Systems",
      "Seller Center",
      "Promotion Engines"
    ]
  },
  {
    label: "Fintech",
    title: "Payments & wallets",
    items: [
      "MoMo eKYC",
      "ShopeePay",
      "Payment Gateway",
      "Face Matching",
      "Digital Wallet"
    ]
  },
  {
    label: "Healthcare",
    title: "Digital health",
    items: [
      "Elfie Health",
      "Web Platform",
      "Mobile Application",
      "Quality Process",
      "Automation Framework"
    ]
  },
  {
    label: "Digital Products",
    title: "Cross-platform delivery",
    items: [
      "SaaS Platforms",
      "React / React Native",
      "Flutter Exposure",
      ".NET Backend",
      "Agile Development"
    ]
  }
];

const certifications = [
  {
    issuer: "TestMu AI",
    title: "Playwright 101",
    date: "April 15, 2026",
    certId: "P101-IVXWRP",
    image: "cert-playwright-101.png",
    verifyUrl: "https://www.testmuai.com/certifications/testmuai-certified/P101-IVXWRP.png",
    topics: ["Playwright Basics", "Test Automation", "Modern QA"]
  },
  {
    issuer: "TestMu AI",
    title: "Playwright 102",
    date: "April 15, 2026",
    certId: "P102-NCGXAK",
    image: "cert-playwright-102.png",
    verifyUrl: "https://www.testmuai.com/certifications/testmuai-certified/P102-NCGXAK.png",
    topics: ["Advanced Playwright", "Automation Strategy", "CI/CD Testing"]
  },
  {
    issuer: "TVN",
    title: "RESTful API Testing",
    date: "Professional Certification",
    certId: "API Testing",
    image: "cert-restful-api.png",
    verifyUrl: "cert-restful-api.png",
    topics: ["REST Architecture", "API Testing", "Contract Validation"]
  },
  {
    issuer: "Axon Active",
    title: "Scrum Master Certification",
    date: "April 2018",
    certId: "Agile / Scrum",
    image: "cert-scrum-master.png",
    verifyUrl: "cert-scrum-master.png",
    topics: ["Scrum Framework", "Agile Methodology", "Sprint Planning"]
  }
];

const impactData = {
  period: "Mar 2026 – May 2026",
  repo: "e2e-tests",
  snapshot: [
    { value: "195", label: "Commits authored" },
    { value: "40", label: "Merge commits" },
    { value: "57K+", label: "Lines added" },
    { value: "27K+", label: "Lines removed" }
  ],
  highlights: [
    "Owned end-to-end automation expansion across Seller Platform, Promotion Engine, and regression suites",
    "Built reusable API helper layers to accelerate test coverage and reduce maintenance cost",
    "Improved CI/reporting visibility with GitLab Pages, Cloudflare publishing, ReportPortal, and dashboard metrics",
    "Stabilized high-risk UI and API flows: navigation regression, shipping-fee, product, finance, and promotion scenarios"
  ],
  commitsByMonth: [
    { month: "2026-03", label: "Mar", value: 57 },
    { month: "2026-04", label: "Apr", value: 63 },
    { month: "2026-05", label: "May", value: 75 }
  ],
  workstreams: [
    { label: "Tests", value: 26036 },
    { label: "Scripts", value: 9455 },
    { label: "Utilities", value: 7828 },
    { label: "Reporting UI", value: 3920 },
    { label: "Pages / POM", value: 2780 },
    { label: "Docs", value: 1773 },
    { label: "CI config", value: 807 },
    { label: "Custom reporter", value: 485 },
    { label: "Locators", value: 403 }
  ],
  apiDomains: [
    { label: "discount", value: 39 },
    { label: "product", value: 33 },
    { label: "shipping-fee", value: 29 },
    { label: "flash-sale", value: 27 },
    { label: "order", value: 22 },
    { label: "bundle-deal", value: 16 },
    { label: "shop", value: 14 },
    { label: "finance", value: 10 },
    { label: "seller-profile", value: 10 },
    { label: "promotion-sc", value: 9 }
  ],
  proofPoints: [
    "Steady contribution growth: 57 → 63 → 75 commits/month from Mar to May 2026",
    "Not only test cases — built helpers, scripts, CI pipelines, reporting UI, and documentation",
    "Broad coverage across API, UI, reporting infrastructure, and team knowledge base",
    "Clear ownership clusters: seller-platform, promotion-engine, voucher v3, report pipeline, navigation regression"
  ]
};

const projects = [
  {
    title: "Playwright E2E Framework — Seller Platform",
    type: "e2e-tests · GitLab",
    year: "Mar – May 2026",
    summary:
      "Scaled API and UI automation for a marketplace seller platform — owning helper architecture, CI/report pipelines, and regression stabilization across 10+ API domains.",
    metrics: ["195 commits", "57K+ lines", "11 API domains"],
    bullets: [
      "Built and extended API automation for discount, product, shipping-fee, flash-sale, order, shop, finance, auth, media, and voucher flows.",
      "Created reusable helpers: product-api, shop-api, order-api, auth-api, discount-api, promotion-engine-api, and more.",
      "Shipped GitLab CI, GitLab Pages reports, Cloudflare publishing, ReportPortal integration, and dashboard metrics.",
      "Hardened seller center navigation, shipping-fee, and KOL/social media UI regression suites."
    ],
    tags: ["Playwright", "TypeScript", "GitLab CI", "ReportPortal", "API Helpers", "Seller Platform"],
    links: [
      { label: "Impact Data", href: "#impact" },
      { label: "Architecture", href: "#architecture" }
    ]
  },
  {
    title: "Playwright Automation Framework",
    type: "Elfie Health",
    year: "2025 – Present",
    summary:
      "Built a Playwright + TypeScript automation framework from scratch for Web and Mobile quality coverage, with BDD principles and CI integration.",
    metrics: ["From scratch", "POM + API layer", "Allure + GitLab CI"],
    bullets: [
      "Designed Page Object Model, reusable utilities, and environment management.",
      "Integrated Ajv schema validation, HTML/Allure reporting, and parallel execution.",
      "Converted manual test cases into automation assets for regression cycles.",
      "Applied Cucumber BDD and collaborated closely with developers on shift-left quality."
    ],
    tags: ["Playwright", "TypeScript", "POM", "Ajv", "GitLab CI/CD", "Cucumber"],
    links: [
      { label: "Architecture", href: "#architecture" },
      { label: "Experience", href: "#timeline" }
    ]
  },
  {
    title: "Payment Systems Validation",
    type: "ShopeeFood",
    year: "2023 – 2025",
    summary:
      "End-to-end quality for payment flows across ShopeePay, voucher packages, and partner promotions in a high-scale consumer platform.",
    metrics: ["ShopeePay", "Voucher packages", "Partner promotions"],
    bullets: [
      "Validated payment flows with CyberSource, MoMo, VNPAY, and Internet Banking.",
      "Automated regression using Selenium Java with API testing and SQL validation.",
      "Performed exploratory and UX testing on promotion and voucher systems.",
      "Supported release quality in a fast-shipping product environment."
    ],
    tags: ["Selenium Java", "Payment Gateway", "API Testing", "SQL", "Fintech"],
    links: [
      { label: "Experience", href: "#timeline" },
      { label: "Domains", href: "#domains" }
    ]
  },
  {
    title: "E-Voucher & Ticketbox Platform",
    type: "Tiki Corporation",
    year: "2022 – 2023",
    summary:
      "Quality ownership for voucher-driven e-commerce across Web, mWeb, and App — with API automation and performance testing.",
    metrics: ["E-voucher platform", "Ticketbox", "JMeter performance"],
    bullets: [
      "Built API automation flows and E2E voucher purchase automation with Selenium and Postman.",
      "Performed performance testing using JMeter on critical commerce journeys.",
      "Covered GA4-sensitive flows, promotion engines, and payment-adjacent behavior.",
      "Led small-team task assignment, timeline control, and release reporting."
    ],
    tags: ["Postman", "Selenium", "JMeter", "E-commerce", "Voucher"],
    links: [
      { label: "Experience", href: "#timeline" },
      { label: "Projects", href: "#projects" }
    ]
  },
  {
    title: "eKYC & Face Matching",
    type: "MoMo E-Wallet",
    year: "2021",
    summary:
      "System and integration testing for trust-sensitive wallet features including eKYC, face matching, and passwordless login.",
    metrics: ["eKYC", "Face matching", "My Wallet"],
    bullets: [
      "Executed system, integration, GUI, and A/B testing across mobile wallet flows.",
      "Validated backend data with SQL across authentication and onboarding journeys.",
      "Analyzed requirements and identified quality risks in a fintech compliance context.",
      "Strengthened data-aware QA practices for trust-critical user experiences."
    ],
    tags: ["Mobile QA", "eKYC", "SQL", "Integration Testing", "Fintech"],
    links: [
      { label: "Experience", href: "#timeline" },
      { label: "Domains", href: "#domains" }
    ]
  },
  {
    title: "Multi-Project SDET Foundation",
    type: "Kyanon Digital",
    year: "2018 – 2021",
    summary:
      "Multi-project QA across Samsung, Nippon, Our Better World, and NgayDauTien — with early automation adoption and SDET process implementation.",
    metrics: ["4+ client projects", "Scrum delivery", "Early automation"],
    bullets: [
      "Handled requirement analysis, client support, and structured Scrum delivery.",
      "Implemented SDET processes and built automation with Selenium and Katalon Studio.",
      "Grew from manual QA foundations into framework-oriented automation thinking.",
      "Developed cross-functional communication and test coordination skills."
    ],
    tags: ["Katalon", "Selenium", "Scrum", "SDET", "Manual QA"],
    links: [
      { label: "Roadmap", href: "#roadmap" },
      { label: "Experience", href: "#timeline" }
    ]
  }
];

const metrics = [
  {
    value: "7+",
    title: "Years in QA",
    copy: "From multi-project manual QA through automation, framework architecture, and quality engineering leadership."
  },
  {
    value: "5",
    title: "Companies",
    copy: "Elfie, ShopeeFood, Tiki, MoMo, and Kyanon — across product, e-commerce, fintech, and healthcare."
  },
  {
    value: "4",
    title: "Industry Domains",
    copy: "E-commerce, Fintech, Healthcare, and Digital Products with deep payment and voucher expertise."
  },
  {
    value: "3",
    title: "Platform Surfaces",
    copy: "Web, Mobile, and API coverage with CI-integrated automation instead of single-layer testing."
  }
];

const roadmap = [
  {
    step: "01",
    range: "2018 – 2021",
    title: "Traditional QA",
    copy: "Built foundations through multi-project manual testing, Scrum delivery, and early Selenium/Katalon automation."
  },
  {
    step: "02",
    range: "2021",
    title: "Domain QA Specialist",
    copy: "Expanded into fintech with eKYC, face matching, mobile, API, and SQL validation in trust-sensitive flows."
  },
  {
    step: "03",
    range: "2021 – 2023",
    title: "Automation Engineer",
    copy: "Grew API automation, E2E voucher flows, JMeter performance testing, and cross-platform e-commerce coverage."
  },
  {
    step: "04",
    range: "2023 – 2025",
    title: "Senior Product QA",
    copy: "Owned payment system quality at scale — Selenium Java, API testing, and release coordination in ShopeeFood."
  },
  {
    step: "05",
    range: "2025 – Now",
    title: "Quality Engineer",
    copy: "Leading fullstack QA at Elfie with Playwright framework architecture, BDD, and CI/CD pipeline integration."
  },
  {
    step: "06",
    range: "Next",
    title: "AI-Driven QE Leader",
    copy: "Evolving toward AI-assisted test design, quality intelligence, failure pattern detection, and engineering productivity."
  }
];

const timeline = [
  {
    year: "May 2025 – Present",
    company: "Elfie Health",
    logo: "logo-elfie.jpeg",
    title: "Senior Full-stack QA",
    intro: "Leading quality for Web and Mobile applications with framework-first automation.",
    copy: "Design comprehensive testing strategies, collaborate with developers and stakeholders, and convert manual coverage into scalable automation assets.",
    points: [
      "Built Playwright automation framework from scratch with POM, reusable utilities, and environment management.",
      "Implemented HTML/Allure reporting and executed automation in regression cycles via GitLab CI/CD.",
      "Applied BDD principles using Cucumber and participated in requirement analysis and risk identification."
    ]
  },
  {
    year: "Nov 2023 – Apr 2025",
    company: "ShopeeFood",
    logo: "logo-shopee.jpeg",
    title: "Senior QA",
    intro: "Payment systems quality across ShopeePay, vouchers, and partner promotions.",
    copy: "End-to-end payment validation in a high-scale consumer platform, working with CyberSource, MoMo, VNPAY, and Internet Banking integrations.",
    points: [
      "Automated regression using Selenium Java with API testing and SQL backend validation.",
      "Validated payment, voucher package, and partner promotion flows with exploratory and UX testing.",
      "Supported release quality in a fast-paced product organization with cross-functional teams."
    ]
  },
  {
    year: "Jan 2022 – Oct 2023",
    company: "Tiki Corporation",
    logo: "logo-tiki.jpeg",
    title: "Senior QC",
    intro: "E-voucher platform and Ticketbox quality with automation and performance testing.",
    copy: "Expanded from execution into API automation, E2E voucher purchase flows, and JMeter performance testing across Web, mWeb, and App.",
    points: [
      "Built API automation flows with Postman and E2E automation with Selenium.",
      "Performed performance testing using JMeter on critical commerce journeys.",
      "Led small-team task assignment, timeline control, and release reporting."
    ]
  },
  {
    year: "Mar 2021 – Nov 2021",
    company: "MoMo E-Wallet",
    logo: "logo-momo.jpeg",
    title: "QC Engineer",
    intro: "Trust-sensitive fintech flows: eKYC, face matching, and wallet features.",
    copy: "System, integration, and GUI testing for eKYC, face matching, passwordless login, My Wallet, and MoMo City features.",
    points: [
      "Executed A/B testing and requirement analysis for mobile wallet onboarding flows.",
      "Validated backend data integrity with SQL across authentication journeys.",
      "Worked in a compliance-sensitive domain where defects directly affect user trust."
    ]
  },
  {
    year: "2018 – Feb 2021",
    company: "Kyanon Digital",
    logo: "logo-kyanon.jpeg",
    title: "QC Engineer",
    intro: "Multi-project QA foundation with early automation and SDET process adoption.",
    copy: "Delivered QA across Samsung, Nippon, Our Better World, and NgayDauTien with Scrum-based delivery and client support.",
    points: [
      "Implemented SDET processes and built automation with Selenium and Katalon Studio.",
      "Handled requirement analysis, test planning, and cross-project coordination.",
      "Built communication, stakeholder management, and mentoring foundations."
    ]
  }
];

const blogPosts = [
  {
    tag: "AI Testing",
    title: "AI-Assisted Test Case Generation",
    copy: "Using ChatGPT, Codex, and Cursor to accelerate boundary analysis, requirement review, and test design without sacrificing quality rigor."
  },
  {
    tag: "Automation",
    title: "Building a Playwright Framework That Scales",
    copy: "POM architecture, API layer design, Ajv schema validation, environment management, and Allure reporting integrated with GitLab CI/CD."
  },
  {
    tag: "Quality Engineering",
    title: "From Defect Detection to Defect Prevention",
    copy: "How shift-left testing, risk-based planning, and early design review participation change the QA role from gatekeeper to quality partner."
  },
  {
    tag: "AI Intelligence",
    title: "Quality Intelligence with AI Tools",
    copy: "Failure pattern detection, root cause suggestion, regression impact analysis, and automated quality metrics for smarter release decisions."
  }
];

function appendChips(container, items, className) {
  items.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = className;
    chip.textContent = item;
    container.appendChild(chip);
  });
}

function renderSkillCards(containerId, data) {
  const container = document.querySelector(containerId);
  const template = document.querySelector("#skill-template");

  data.forEach((skill, index) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".skill-card");
    card.classList.add("reveal");
    card.dataset.revealDelay = String(index * 60);
    fragment.querySelector(".skill-label").textContent = skill.label;
    fragment.querySelector(".skill-title").textContent = skill.title;
    appendChips(fragment.querySelector(".chip-row"), skill.items, "chip");
    container.appendChild(fragment);
  });
}

function renderSkills() {
  renderSkillCards("#skills-grid", skills);
}

function renderDomains() {
  renderSkillCards("#domains-grid", domains);
}

function renderCertifications() {
  const container = document.querySelector("#cert-grid");
  const template = document.querySelector("#cert-template");
  const lightbox = document.querySelector("#cert-lightbox");
  const lightboxImage = lightbox.querySelector(".cert-lightbox-image");
  const lightboxCaption = lightbox.querySelector(".cert-lightbox-caption");

  function openLightbox(cert) {
    lightboxImage.src = cert.image;
    lightboxImage.alt = `${cert.title} certificate from ${cert.issuer}`;
    lightboxCaption.textContent = `${cert.title} · ${cert.issuer} · ${cert.certId}`;
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.removeAttribute("src");
    document.body.style.overflow = "";
  }

  lightbox.querySelector(".cert-lightbox-close").addEventListener("click", closeLightbox);
  lightbox.querySelector("[data-close-lightbox]").addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });

  certifications.forEach((cert, index) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".cert-card");
    const image = fragment.querySelector(".cert-image");

    card.classList.add("reveal");
    card.dataset.revealDelay = String(index * 100);
    image.src = cert.image;
    image.alt = `${cert.title} certificate from ${cert.issuer}`;
    fragment.querySelector(".cert-issuer").textContent = cert.issuer;
    fragment.querySelector(".cert-title").textContent = cert.title;
    fragment.querySelector(".cert-meta").textContent = `${cert.date} · ID: ${cert.certId}`;

    const viewButton = fragment.querySelector(".cert-view");
    const link = fragment.querySelector(".cert-link");
    link.href = cert.verifyUrl;

    viewButton.addEventListener("click", () => openLightbox(cert));
    image.addEventListener("click", () => openLightbox(cert));

    container.appendChild(fragment);
  });
}

function renderProjects() {
  const container = document.querySelector("#projects-grid");
  const template = document.querySelector("#project-template");

  projects.forEach((project, index) => {
    const fragment = template.content.cloneNode(true);
    fragment.querySelector(".project-card").classList.add("reveal");
    fragment.querySelector(".project-card").dataset.revealDelay = String(index * 90);
    fragment.querySelector(".project-type").textContent = project.type;
    fragment.querySelector(".project-year").textContent = project.year;
    fragment.querySelector(".project-title").textContent = project.title;
    fragment.querySelector(".project-summary").textContent = project.summary;

    appendChips(fragment.querySelector(".project-metrics"), project.metrics, "metric-chip");

    const bullets = fragment.querySelector(".project-bullets");
    project.bullets.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      bullets.appendChild(li);
    });

    appendChips(fragment.querySelector(".tag-row"), project.tags, "tag");

    const linkRow = fragment.querySelector(".link-row");
    project.links.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.className = "project-link";
      anchor.href = link.href;
      anchor.textContent = link.label;
      linkRow.appendChild(anchor);
    });

    container.appendChild(fragment);
  });
}

function renderMetrics() {
  const container = document.querySelector("#metrics-grid");
  const template = document.querySelector("#metric-template");

  metrics.forEach((item, index) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".metric-card");
    const valueEl = fragment.querySelector(".metric-value");

    card.classList.add("reveal");
    card.dataset.revealDelay = String(index * 80);
    valueEl.textContent = item.value;
    valueEl.dataset.countValue = item.value;
    fragment.querySelector(".metric-title").textContent = item.title;
    fragment.querySelector(".metric-copy").textContent = item.copy;
    container.appendChild(fragment);
  });
}

function renderRoadmap() {
  const container = document.querySelector("#roadmap-grid");
  const template = document.querySelector("#roadmap-template");

  roadmap.forEach((item, index) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".roadmap-card");
    card.classList.add("reveal");
    card.dataset.revealDelay = String(index * 70);
    fragment.querySelector(".roadmap-step").textContent = item.step;
    fragment.querySelector(".roadmap-range").textContent = item.range;
    fragment.querySelector(".roadmap-title").textContent = item.title;
    fragment.querySelector(".roadmap-copy").textContent = item.copy;
    container.appendChild(fragment);
  });
}

function renderTimeline() {
  const container = document.querySelector("#timeline-list");
  const template = document.querySelector("#timeline-template");

  timeline.forEach((item, index) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".timeline-item");
    card.classList.add("reveal");
    card.dataset.revealDelay = String(index * 80);
    fragment.querySelector(".timeline-year").textContent = item.year;
    const logo = fragment.querySelector(".company-logo");
    logo.src = item.logo;
    logo.alt = `${item.company} logo`;
    fragment.querySelector(".timeline-company").textContent = item.company;
    fragment.querySelector(".timeline-title").textContent = item.title;
    fragment.querySelector(".timeline-intro").textContent = item.intro;
    fragment.querySelector(".timeline-copy").textContent = item.copy;

    const points = fragment.querySelector(".timeline-points");
    item.points.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      points.appendChild(li);
    });

    container.appendChild(fragment);
  });
}

function renderBlogPosts() {
  const container = document.querySelector("#blog-grid");
  const template = document.querySelector("#blog-template");

  blogPosts.forEach((post, index) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".blog-card");
    card.classList.add("reveal");
    card.dataset.revealDelay = String(index * 90);
    fragment.querySelector(".blog-tag").textContent = post.tag;
    fragment.querySelector(".blog-title").textContent = post.title;
    fragment.querySelector(".blog-copy").textContent = post.copy;
    container.appendChild(fragment);
  });
}

function renderHorizontalChart(containerId, rows, showValues) {
  const container = document.querySelector(containerId);
  const max = Math.max(...rows.map((row) => row.value));

  rows.forEach((row) => {
    const percent = Math.round((row.value / max) * 100);
    const rowEl = document.createElement("div");
    rowEl.className = "h-bar-row";
    rowEl.innerHTML = `
      <span class="h-bar-label">${row.label}</span>
      <div class="h-bar-track">
        <div class="h-bar-fill" data-fill="${percent}" style="width: 0"></div>
      </div>
      <span class="h-bar-value">${showValues ? row.value.toLocaleString() : row.value}</span>
    `;
    container.appendChild(rowEl);
  });
}

function renderImpact() {
  const statsContainer = document.querySelector("#impact-stats");
  impactData.snapshot.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "impact-stat reveal";
    card.dataset.revealDelay = String(index * 70);
    card.innerHTML = `
      <p class="impact-stat-value">${item.value}</p>
      <p class="impact-stat-label">${item.label}</p>
    `;
    statsContainer.appendChild(card);
  });

  const highlights = document.querySelector("#impact-highlights");
  impactData.highlights.forEach((text, index) => {
    const li = document.createElement("li");
    li.className = "reveal";
    li.dataset.revealDelay = String(index * 60);
    li.textContent = text;
    highlights.appendChild(li);
  });

  const maxCommits = Math.max(...impactData.commitsByMonth.map((item) => item.value));
  const commitChart = document.querySelector("#commit-chart");
  impactData.commitsByMonth.forEach((item) => {
    const column = document.createElement("div");
    column.className = "commit-column";
    const height = Math.round((item.value / maxCommits) * 100);
    column.innerHTML = `
      <span class="commit-value">${item.value}</span>
      <div class="commit-track">
        <div class="commit-fill" data-fill="${height}" style="height: 0"></div>
      </div>
      <span class="commit-label">${item.label}</span>
    `;
    commitChart.appendChild(column);
  });

  renderHorizontalChart("#workstream-chart", impactData.workstreams, true);
  renderHorizontalChart("#domain-chart", impactData.apiDomains, false);

  const proofList = document.querySelector("#proof-points");
  impactData.proofPoints.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    proofList.appendChild(li);
  });
}

function animateImpactCharts() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll("[data-fill]").forEach((bar, index) => {
          setTimeout(() => {
            const fill = bar.dataset.fill;
            if (bar.classList.contains("commit-fill")) {
              bar.style.height = `${fill}%`;
            } else {
              bar.style.width = `${fill}%`;
            }
          }, index * 50);
        });
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".chart-card, .impact-stats").forEach((el) => observer.observe(el));
}

renderSkills();
renderProjects();
renderImpact();
renderMetrics();
renderRoadmap();
renderTimeline();
renderDomains();
renderBlogPosts();
renderCertifications();
initTheme();
initPageEffects();

function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const metaTheme = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (metaTheme) {
      metaTheme.content = theme === "light" ? "#eef3fb" : "#050810";
    }

    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
      toggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    }
  }

  const stored = localStorage.getItem("theme");
  applyTheme(stored === "light" || stored === "dark" ? stored : "dark");

  toggle?.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });
}

function initPageEffects() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".content-section, .section-heading, .about-panel, .about-copy, .contact-card, .architecture-card, .impact-intro, .impact-quote, .impact-proof").forEach((el) => {
    el.classList.add("reveal");
  });

  document.querySelectorAll(".arch-node.reveal, .arch-arrow.reveal").forEach((el, index) => {
    el.dataset.revealDelay = String(index * 90);
  });

  document.querySelectorAll(".hero-copy > *").forEach((el, index) => {
    el.classList.add("hero-reveal");
    el.style.animationDelay = `${120 + index * 80}ms`;
  });

  if (prefersReducedMotion) {
    document.querySelectorAll(".reveal, .hero-reveal").forEach((el) => {
      el.classList.add("is-visible");
    });
    return;
  }

  initScrollProgress();
  initNavSpy();
  initTopbarScroll();
  initRevealObserver();
  initMetricCounters();
  initHeroParallax();
  initChipRipple();
  initSchoolFlip();
  animateImpactCharts();
}

function initSchoolFlip() {
  const flip = document.querySelector(".school-flip");
  if (!flip) return;

  flip.addEventListener("click", () => {
    flip.classList.toggle("is-flipped");
  });

  flip.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      flip.classList.toggle("is-flipped");
    }
  });
}

function initScrollProgress() {
  const bar = document.querySelector(".scroll-progress");
  if (!bar) return;

  window.addEventListener(
    "scroll",
    () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${progress}%`;
    },
    { passive: true }
  );
}

function initNavSpy() {
  const links = document.querySelectorAll(".nav-links a[href^='#']");
  const sections = [...links]
    .map((link) => {
      const id = link.getAttribute("href").slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

function initTopbarScroll() {
  const topbar = document.querySelector(".topbar");
  if (!topbar) return;

  window.addEventListener(
    "scroll",
    () => {
      topbar.classList.toggle("is-scrolled", window.scrollY > 24);
    },
    { passive: true }
  );
}

function initRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.dataset.revealDelay || 0);
        setTimeout(() => {
          entry.target.classList.add("is-visible");
        }, delay);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function initMetricCounters() {
  const counters = document.querySelectorAll(".metric-value[data-count-value]");

  const animateValue = (el) => {
    const raw = el.dataset.countValue;
    const match = raw.match(/^(\d+)(.*)$/);
    if (!match) return;

    const target = Number(match[1]);
    const suffix = match[2] || "";
    const duration = 900;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      el.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateValue(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initHeroParallax() {
  const panel = document.querySelector(".hero-panel");
  const poster = document.querySelector(".portrait-image");
  if (!panel || !poster || window.matchMedia("(pointer: coarse)").matches) return;

  panel.addEventListener("mousemove", (event) => {
    const rect = panel.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    poster.style.transform = `scale(1.03) translate(${x * 10}px, ${y * 10}px)`;
  });

  panel.addEventListener("mouseleave", () => {
    poster.style.transform = "";
  });
}

function initChipRipple() {
  document.addEventListener("click", (event) => {
    const chip = event.target.closest(".signal-chip, .chip, .tag, .status-item");
    if (!chip) return;
    chip.classList.remove("is-popping");
    void chip.offsetWidth;
    chip.classList.add("is-popping");
  });
}
