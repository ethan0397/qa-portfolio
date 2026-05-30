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
    label: "Agile",
    title: "Scrum Master Certification",
    items: ["Axon Active", "Scrum Framework", "Sprint Planning", "Retrospectives"]
  },
  {
    label: "API",
    title: "RESTful API Certification",
    items: ["TVN", "REST Architecture", "Authentication", "Contract Validation"]
  },
  {
    label: "Testing",
    title: "TestMu 101",
    items: ["Test Automation University", "Testing Principles", "Quality Mindset"]
  },
  {
    label: "Automation",
    title: "TestMu 102",
    items: ["Test Automation University", "Automation Strategy", "CI/CD Testing"]
  }
];

const projects = [
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

  data.forEach((skill) => {
    const fragment = template.content.cloneNode(true);
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
  renderSkillCards("#cert-grid", certifications);
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
renderDomains();
renderBlogPosts();
renderCertifications();
