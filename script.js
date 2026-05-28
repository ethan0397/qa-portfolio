const skills = [
  {
    label: "Automation",
    title: "Framework and execution",
    items: ["Playwright", "Cypress", "Selenium"]
  },
  {
    label: "Languages",
    title: "Implementation stack",
    items: ["JavaScript", "TypeScript", "Java"]
  },
  {
    label: "Testing",
    title: "Coverage areas",
    items: ["API", "Web", "Mobile", "Performance"]
  },
  {
    label: "DevOps",
    title: "Delivery and pipelines",
    items: ["Docker", "CI/CD", "GitHub Actions"]
  }
];

const projects = [
  {
    title: "E-voucher Quality Coverage",
    type: "TIKI / Ticketbox",
    year: "2022 - 2023",
    summary:
      "Quality ownership for voucher-related e-commerce flows where release confidence depended on stable coverage across user journeys and payment-adjacent behavior.",
    metrics: [
      "3 platforms",
      "Web / mWeb / App",
      "Voucher + payment flows"
    ],
    bullets: [
      "Tested critical user flows across Web, mWeb, and App for voucher-driven commerce features.",
      "Combined manual validation, release coordination, and automation exposure to reduce blind spots during rollout.",
      "Worked closely with GA4-sensitive and payment-adjacent journeys where small regressions could affect business behavior."
    ],
    tags: ["E-commerce", "Voucher", "Payments", "Cross-platform", "GA4"],
    links: [
      { label: "Experience", href: "#timeline" },
      { label: "Architecture", href: "#architecture" }
    ]
  },
  {
    title: "API Automation at TIKI",
    type: "Internal QA System",
    year: "2022 - 2023",
    summary:
      "Built API automation with Postman to move repeated backend verification into reusable test assets and support cleaner release checks.",
    metrics: [
      "1 API automation base",
      "Postman-driven",
      "Release support"
    ],
    bullets: [
      "Created API automation flows to cover service-level validation more consistently than repetitive manual checks.",
      "Improved repeatability for backend verification during release cycles and defect confirmation.",
      "Used automation as a practical bridge from execution-heavy QA toward reusable quality systems."
    ],
    tags: ["Postman", "API Testing", "Release QA", "Regression"],
    links: [
      { label: "Experience", href: "#timeline" },
      { label: "Roadmap", href: "#roadmap" }
    ]
  },
  {
    title: "KYC-OCR Quality Validation",
    type: "MoMo",
    year: "2021",
    summary:
      "Quality assurance for a KYC-OCR e-wallet domain where trust, data validation, and mobile behavior had to be verified with precision.",
    metrics: [
      "3 validation layers",
      "Mobile + API + SQL",
      "Trust-sensitive domain"
    ],
    bullets: [
      "Worked across mobile app testing, API testing, and SQL validation to verify end-to-end correctness.",
      "Focused on a domain where defects could directly affect onboarding quality and trust signals.",
      "Strengthened data-aware QA practices before moving deeper into framework and automation work."
    ],
    tags: ["KYC-OCR", "Mobile QA", "API", "SQL", "Fintech"],
    links: [
      { label: "Experience", href: "#timeline" },
      { label: "Career Path", href: "#roadmap" }
    ]
  },
  {
    title: "QA Framework Direction",
    type: "Current Focus",
    year: "2025 - Now",
    summary:
      "Current work direction centered on reusable automation architecture, quality tooling, and the path toward Agent-Q style evaluation systems.",
    metrics: [
      "5+ years QA",
      "5 companies",
      "API / Web / Mobile"
    ],
    bullets: [
      "Building toward framework-first QA instead of isolated script execution.",
      "Connecting automation, reporting, and CI thinking into a more scalable quality model.",
      "Using past product and domain experience as the base for reusable quality systems."
    ],
    tags: ["Frameworks", "Quality Tooling", "Agent-Q", "CI Thinking"],
    links: [
      { label: "Roadmap", href: "#roadmap" },
      { label: "Contact", href: "#contact" }
    ]
  }
];

const metrics = [
  {
    value: "5+",
    title: "Years in QA",
    copy: "From multi-project manual QA to automation, framework direction, and quality systems thinking."
  },
  {
    value: "5",
    title: "Companies",
    copy: "Hands-on experience across product, e-commerce, fintech, and service-based delivery environments."
  },
  {
    value: "3",
    title: "Platform Surfaces",
    copy: "Worked across Web, mWeb, and App coverage instead of limiting quality scope to a single layer."
  },
  {
    value: "4+",
    title: "Automation Stacks",
    copy: "Used Postman, Selenium, Playwright, and Katalon while growing toward framework-level reuse."
  }
];

const roadmap = [
  {
    step: "01",
    range: "2018 - 2021",
    title: "Manual QA Foundations",
    copy: "Built product instincts through exploratory testing, Scrum delivery, and early web automation exposure."
  },
  {
    step: "02",
    range: "2021",
    title: "Domain QA Expansion",
    copy: "Moved into KYC-OCR, mobile, API, and SQL validation with tighter quality and data-sensitive flows."
  },
  {
    step: "03",
    range: "2021 - 2023",
    title: "Automation Expansion",
    copy: "Covered e-commerce flows across web, mWeb, and app while growing Postman automation and release coordination."
  },
  {
    step: "04",
    range: "2023 - 2025",
    title: "Product QA at Scale",
    copy: "Operated in high-scale product environments where quality had to align with platform behavior and speed."
  },
  {
    step: "05",
    range: "2025 - Now",
    title: "Framework Builder",
    copy: "Shifted toward automation systems, framework architecture, and engineering-level quality ownership."
  },
  {
    step: "06",
    range: "Next",
    title: "Agent-Q Platform",
    copy: "Evolving toward reusable quality platforms, evaluation workflows, and AI-assisted QA systems."
  }
];

const timeline = [
  {
    year: "May 2025 - Present",
    company: "Elfie",
    logo: "logo-elfie.jpeg",
    title: "Sr Fullstack Quality Assurance",
    intro: "Leading fullstack quality with stronger ownership across systems, automation, and product confidence.",
    copy: "Working across product quality, automation direction, and fullstack validation with a stronger focus on scalable systems and engineering-level quality ownership.",
    points: [
      "Own quality across broader system flows rather than isolated test execution.",
      "Push QA toward reusable automation and stronger engineering collaboration.",
      "Focus on scalable quality practices that can grow into framework and platform work."
    ]
  },
  {
    year: "Nov 2023 - Apr 2025",
    company: "Shopee",
    logo: "logo-shopee.jpeg",
    title: "Product Quality Assurance",
    intro: "Driving product quality inside a high-scale consumer platform with fast release cadence.",
    copy: "Owned product quality in a large-scale environment, working closely with release flow, platform behavior, and cross-functional teams in an on-site product organization.",
    points: [
      "Validated product behavior in a scale-sensitive environment with fast shipping cycles.",
      "Worked closely with release flow, platform quality, and cross-functional execution.",
      "Built stronger instincts for quality prioritization under product speed constraints."
    ]
  },
  {
    year: "Dec 2021 - Oct 2023",
    company: "TIKI",
    logo: "logo-tiki.jpeg",
    title: "Quality Control Specialist",
    intro: "Expanded from execution into automation, release coordination, and cross-platform e-commerce quality.",
    copy: "Handled testing across Web, mWeb, and App; worked with GA4 and e-commerce flows like vouchers and payments; led small-team task assignment and release timeline control; built API automation with Postman; and gained hands-on automation experience with Selenium and Playwright. Successful projects included E-voucher on Tiki and Ticketbox.",
    points: [
      "Tested across Web, mWeb, and App instead of working in a single QA surface.",
      "Covered GA4-sensitive and commerce-heavy flows including voucher and payment behavior.",
      "Led small-team task assignment, timeline control, and release reporting.",
      "Built API automation with Postman and strengthened hands-on exposure to Selenium and Playwright."
    ]
  },
  {
    year: "Mar 2021 - Nov 2021",
    company: "MoMo",
    logo: "logo-momo.jpeg",
    title: "Quality Assurance Specialist (KYC-OCR)",
    intro: "Focused on trust-heavy wallet flows where mobile, API, and data validation had to be precise.",
    copy: "Worked in the KYC-OCR e-wallet domain with strong exposure to mobile app testing, API testing, and SQL-based validation.",
    points: [
      "Worked in a trust-sensitive KYC-OCR domain with higher correctness demands.",
      "Covered mobile app testing, API testing, and SQL-based data checks.",
      "Built stronger validation discipline across product behavior and backend data."
    ]
  },
  {
    year: "Jun 2018 - Feb 2021",
    company: "Kyanon Digital",
    logo: "logo-kyanon.jpeg",
    title: "Quality Control Specialist",
    intro: "Built the foundation through multi-project QA work and early automation adoption in Scrum teams.",
    copy: "Started in multi-project manual testing under Scrum delivery, then built early automation scripts with Katalon and Java Selenium for web products.",
    points: [
      "Handled QA across multiple projects rather than a single product line.",
      "Worked in Scrum delivery and learned structured collaboration with developers and PMs.",
      "Started automation with Katalon and Java Selenium for web products."
    ]
  }
];

const blogPosts = [
  {
    tag: "Framework",
    title: "How I Built a Playwright Framework That Scales",
    copy: "Structure, abstractions, reporting, and the tradeoffs behind framework decisions that survive team growth."
  },
  {
    tag: "Career",
    title: "Lessons After 5 Years in QA",
    copy: "What changed when QA moved from execution support to engineering systems and product quality strategy."
  },
  {
    tag: "API",
    title: "API Automation Patterns I Reuse Across Projects",
    copy: "A practical breakdown of test clients, data handling, assertions, and environment design for backend testing."
  },
  {
    tag: "CI/CD",
    title: "CI/CD for Testers: Making Automation Matter",
    copy: "How to wire automated checks into pipelines so results influence release confidence rather than sit in reports."
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

function renderSkills() {
  const container = document.querySelector("#skills-grid");
  const template = document.querySelector("#skill-template");

  skills.forEach((skill) => {
    const fragment = template.content.cloneNode(true);
    fragment.querySelector(".skill-label").textContent = skill.label;
    fragment.querySelector(".skill-title").textContent = skill.title;
    appendChips(fragment.querySelector(".chip-row"), skill.items, "chip");
    container.appendChild(fragment);
  });
}

function renderProjects() {
  const container = document.querySelector("#projects-grid");
  const template = document.querySelector("#project-template");

  projects.forEach((project) => {
    const fragment = template.content.cloneNode(true);
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

  metrics.forEach((item) => {
    const fragment = template.content.cloneNode(true);
    fragment.querySelector(".metric-value").textContent = item.value;
    fragment.querySelector(".metric-title").textContent = item.title;
    fragment.querySelector(".metric-copy").textContent = item.copy;
    container.appendChild(fragment);
  });
}

function renderRoadmap() {
  const container = document.querySelector("#roadmap-grid");
  const template = document.querySelector("#roadmap-template");

  roadmap.forEach((item) => {
    const fragment = template.content.cloneNode(true);
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

  timeline.forEach((item) => {
    const fragment = template.content.cloneNode(true);
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

  blogPosts.forEach((post) => {
    const fragment = template.content.cloneNode(true);
    fragment.querySelector(".blog-tag").textContent = post.tag;
    fragment.querySelector(".blog-title").textContent = post.title;
    fragment.querySelector(".blog-copy").textContent = post.copy;
    container.appendChild(fragment);
  });
}

renderSkills();
renderProjects();
renderMetrics();
renderRoadmap();
renderTimeline();
renderBlogPosts();
