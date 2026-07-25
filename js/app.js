/* ============================================
   Data Configuration
   ============================================ */

var skillsData = [
  {
    category: "Languages & Core",
    items: [
      { name: "C" },
      { name: "C++" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Go" },
      { name: "SQL" },
    ],
  },
  {
    category: "Frontend & Mobile",
    items: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Redux" },
      { name: "Tailwind CSS" },
      { name: "Vite" },
      { name: "React Native" },
      { name: "Flutter" },
      { name: "Expo" },
    ],
  },
  {
    category: "Backend, APIs & Messaging",
    items: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "FastAPI" },
      { name: "Bun" },
      { name: "Flask" },
      { name: "Prisma" },
      { name: "BullMQ" },
      { name: "Socket.io" },
      { name: "Kafka" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "OpenSearch" },
      { name: "ClickHouse" },
      { name: "Supabase" },
      { name: "NeonDB" },
    ],
  },
  {
    category: "Cloud, DevOps & Systems",
    items: [
      { name: "AWS" },
      { name: "GCP" },
      { name: "Azure" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Jenkins" },
      { name: "Ansible" },
      { name: "Terraform" },
      { name: "Cloudflare" },
      { name: "Firebase" },
      { name: "Vercel" },
      { name: "Render" },
      { name: "Netlify" },
      { name: "Red Hat Enterprise Linux" },
      { name: "Git" },
      { name: "Postman" },
      { name: "Android Studio" },
    ],
  },
  {
    category: "AI/ML & Data",
    items: [
      { name: "PyTorch" },
      { name: "NLTK" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Jupyter Notebook" },
      { name: "Hugging Face" },
    ],
  },
];

var iconMap = {
  C: "cp.png",
  "C++": "cpp.png",
  Python: "python.png",
  JavaScript: "js.png",
  TypeScript: "typescript.png",
  "React.js": "react-js.png",
  "Next.js": "next-js.png",
  HTML5: "html-5.png",
  CSS3: "css-3.png",
  "Node.js": "node-js.png",
  "Express.js": "express-js.png",
  Flask: "flask.png",
  MongoDB: "mongodb.png",
  MySQL: "mysql.png",
  "React Native": "react-js.png",
  Flutter: "flutter.svg",
  AWS: "aws.png",
  GCP: "gcp.png",
  Azure: "azure.png",
  Docker: "docker.png",
  Kubernetes: "kubernetes.svg",
  Jenkins: "jenkins.svg",
  Ansible: "ansible.svg",
  Firebase: "firebase.svg",
  "Red Hat Enterprise Linux": "redhat.svg",
  Git: "git.png",
  Postman: "postman.png",
  "Android Studio": "android-studio.png",
  "Jupyter Notebook": "jupyter.png",
  Go: "golang.png",
  PostgreSQL: "postgresql.png",
  SQL: "sql.png",
  Expo: "expo.png",
  FastAPI: "fastapi.png",
  Bun: "bun.png",
  Prisma: "prisma.png",
  BullMQ: "bullmq.png",
  "Socket.io": "socketio.png",
  Kafka: "kafka.png",
  Redis: "redis.png",
  OpenSearch: "opensearch.png",
  ClickHouse: "clickhouse.png",
  Supabase: "supabase.png",
  NeonDB: "neondb.png",
  Terraform: "terraform.png",
  Cloudflare: "cloudflare.png",
  Vercel: "vercel.png",
  Render: "render.png",
  Netlify: "netlify.png",
  PyTorch: "pytorch.png",
  Transformers: "transformers.png",
  NLTK: "nltk.png",
  NumPy: "numpy.png",
  Pandas: "pandas.png",
  "Hugging Face": "huggingface.png",
  Vite: "vite.png",
  Redux: "redux.png",
  "Tailwind CSS": "tailwindcss.png",
};

var experienceData = [
  {
    date: "September 2025 - Present",
    title: "Software Engineer",
    company: "HROne",
    companyUrl: "https://hrone.cloud/",
    description: [
      "Started as Software Engineer Trainee and built the end-to-end API key management system as my first major feature — enabling secure external integrations with granular access control.",
      "Promoted to full-time Software Engineer. Developed major features including a comprehensive record audit logs system and a standalone analytics platform for HR insights.",
      "Building full-stack features for HROne Studio with FastAPI backends, MongoDB aggregation pipelines, and React frontend integration.",
      "Collaborating cross-functionally on API design, system reliability, and UI implementation.",
    ],
    architecture:
      "FastAPI microservices with MongoDB aggregation, React frontend, record audit logs, and standalone analytics platform",
  },
  {
    date: "June 2025 - Present",
    title: "Founding Engineer",
    company: "Infonza Innovations",
    companyUrl: "https://yuvahire.com/",
    description: [
      "Built and continue to maintain YuvaHire, a campus placement management platform - full-stack from Next.js frontend to Bun/Express backend.",
      "TypeScript-based modular monolith: Bun, Express, Prisma, PostgreSQL, and Server-Sent Events, with a Next.js + Redux frontend.",
      "Containerized deployments with Docker across GCP, Vercel, and Render.",
      "Leveraged Cloudflare R2 for object storage and Cloudflare Workers for edge processing and performance optimization.",
    ],
    architecture:
      "TypeScript modular monolith with containerized multi-platform deployment",
  },
  {
    date: "December 2024 - April 2025",
    title: "Software Engineer, Freelance",
    company: "Sanaank",
    companyUrl: "https://sanaank.com/",
    description: [
      "Built and shipped the Sanaank Quiz App website in Next.js with integrated payment gateway, deployed on GCP Cloud Run.",
      "Result: +30% user retention, 50% faster server response time.",
      "Built a cross-platform Flutter + Firebase mobile app with real-time quizzes and in-app payments — projected to onboard 10,000+ users in Q1 post-launch.",
      "End-to-end ownership from frontend to mobile to DevOps.",
    ],
  },
  {
    date: "November 2024 - February 2025",
    title: "Backend Developer & Project Manager Intern",
    company: "Coding Bits",
    companyUrl: "https://codingbits.in/",
    description: [
      "Designed and optimized NoSQL database models, improving query performance by 30%.",
      "Managed 4 team leads and streamlined workflows, boosting project completion rate by 40%.",
    ],
  },
  {
    date: "September - October 2023",
    title: "Artificial Intelligence - Virtual Intern",
    company: "CodSoft",
    description: [
      "Built a rule-based chatbot with Python's NLTK library.",
      "Implemented a strategic Tic-Tac-Toe AI using the Minimax algorithm.",
      "Developed an image captioning model using computer vision and deep learning techniques.",
    ],
  },
  {
    date: "June - July 2023",
    title: "Data Analytics - Virtual Intern",
    company: "IBM SkillsBuild",
    description: [
      "Spearheaded a team to develop an AI-powered electric vehicle buying assistant.",
      "Leveraged data analytics and machine learning for intelligent recommendations.",
    ],
  },
];

var educationData = [
  {
    date: "2022 - 2026",
    degree: "BTech - Computer Science Engineering",
    school: "Techno India NJR Institute of Technology",
    schoolUrl: "https://www.technonjr.org/",
    description:
      "Completed Bachelor of Technology in Computer Science Engineering. Developed a solid foundation in software engineering, system design, and competitive programming.",
  },
];

var flagshipProjects = [
  {
    title: "Health Sync",
    subtitle: "Hospital Management System",
    thumbnail: "assets/images/thumbnails/health-sync.png",
    description:
      "A comprehensive hospital management system addressing OPD queuing, bed availability, patient admission, and inventory management. Includes a patient-facing mobile app with appointments, medical history, and emergency volunteer support.",
    impact: [{ number: "+35%", label: "appointment efficiency" }],
    stack: ["MongoDB", "Express", "React", "Node.js", "Flutter"],
    links: [{ label: "GitHub", url: "https://github.com/Hogwarts-Hackademy" }],
  },
  {
    title: "GovID Extractor",
    subtitle: "OCR Document Processing",
    thumbnail: "assets/images/thumbnails/govid-extractor.png",
    description:
      "Extracts structured data (name, document number, expiry) from government-issued ID images using Tesseract.js OCR with Sharp preprocessing. Overcame inconsistent OCR output with custom pattern matching for reliable data extraction.",
    impact: [
      { number: "+40%", label: "data accuracy" },
      { number: "-30%", label: "processing time" },
    ],
    stack: ["React", "Node.js", "Express", "Tesseract.js", "Sharp"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/qaidjoharj53/OCR-Government-ID",
      },
    ],
  },
  {
    title: "BookFlow",
    subtitle: "Library Management System",
    thumbnail: "assets/images/thumbnails/bookflow.png",
    description:
      "Enables QR-code-based book borrowing and returns without librarian involvement. Streamlines library operations through automated check-in/check-out with real-time inventory tracking.",
    impact: [{ number: "-50%", label: "librarian workload" }],
    stack: ["MySQL", "Express", "React", "Node.js"],
    links: [{ label: "Live", url: "https://book-flow.netlify.app/" }],
  },
];

var otherProjects = [
  {
    title: "Blood Bridge",
    description:
      "Donor/recipient matching platform for blood donation coordination.",
    stack: ["JavaScript", "HTML", "CSS", "PHP"],
    url: "https://github.com/qaidjoharj53/Blood-Bridge",
  },
  {
    title: "Py Student Manager",
    description:
      "Python CLI tool for managing student records with MySQL backend.",
    stack: ["Python", "MySQL"],
    url: "https://github.com/qaidjoharj53/Student-Management-System",
  },
  {
    title: "Rule Minds",
    description:
      "Rule-based chatbot using NLTK for pattern matching and response generation.",
    stack: ["Python", "NLTK", "Jupyter"],
    url: "https://github.com/qaidjoharj53/CODSOFT/tree/main/codsoft_1",
  },
  {
    title: "TacAI Master",
    description:
      "Unbeatable Tic-Tac-Toe AI using the Minimax algorithm with Pygame interface.",
    stack: ["Python", "Pygame", "NumPy"],
    url: "https://github.com/qaidjoharj53/CODSOFT/tree/main/codsoft_2",
  },
  {
    title: "Pixel Phraser",
    description:
      "Image captioning model generating natural language descriptions for images.",
    stack: ["Python", "PyTorch", "Transformers"],
    url: "https://github.com/qaidjoharj53/CODSOFT/tree/main/codsoft_3",
  },
  {
    title: "Unicorn Runner",
    description:
      "Endless runner game inspired by Chrome's Dino Game, built in Scratch.",
    stack: ["Scratch"],
    url: "https://scratch.mit.edu/projects/847385969",
  },
];

var freelanceWork = [
  {
    title: "Sanaank Quiz Platform",
    client: "Sanaank",
    date: "Dec 2024 - April 2025",
    problem:
      "Ed-tech startup needed a production-ready quiz platform with payment integration and cross-platform mobile presence.",
    description:
      "Built and shipped the Sanaank Quiz App website in Next.js with integrated payment gateway, deployed on GCP Cloud Run. Built a cross-platform Flutter + Firebase mobile app with real-time quizzes and in-app payments. End-to-end ownership from frontend to mobile to DevOps.",
    impact: [
      { number: "+30%", label: "user retention" },
      { number: "50%", label: "faster server response" },
      { number: "10K+", label: "projected Q1 users" },
    ],
    stack: [
      "Next.js",
      "Flutter",
      "Firebase",
      "GCP Cloud Run",
      "Payment Gateway",
    ],
  },
];

var communityWork = [
  {
    title: "Kaun Banega Champion (KBC)",
    client: "Udaipur Toloba",
    date: "Built as community member",
    problem:
      "Community organization needed a scalable real-time quiz platform to engage members during live events.",
    description:
      "Real-time, 4-layer quiz web app featuring Quiz Rounds, Super 30, live Rapid Fire, and KBC-style live game with scoring, leaderboard, and referral system. Deployed on IIS Server to run live events.",
    impact: [
      { number: "+50%", label: "player engagement" },
      { number: "15K+", label: "participants" },
    ],
    stack: ["MySQL", "Express", "React", "Node.js", "Socket.io", "IIS Server"],
    url: "https://kbc.udaipurtoloba.com",
  },
  {
    title: "Finance Management App",
    client: "Udaipur Toloba",
    date: "In Testing Phase",
    problem:
      "Community committee needed real-time visibility into member's dues, transactions, and expenses instead of manual spreadsheet reconciliation.",
    description:
      "Cross-platform mobile app built for tracking member contributions/dues, recording transactions, and providing the committee with a real-time financial dashboard. Push notifications via Firebase, Expo, and Apple APN keep both giver and receiver in the loop when any transaction is recorded.",
    impact: [
      { number: "Real-time", label: "financial visibility" },
      { number: "Push", label: "transaction notifications" },
    ],
    stack: ["React Native", "Go", "Expo", "Supabase", "IIS Server"],
  },
];

var certificationsData = [
  {
    title: "RedHat Certified System Administrator",
    url: "https://www.credly.com/badges/fbdc9ea4-d645-44d4-9e36-c5f7b9f70dc8/public_url",
    image: "assets/images/rhcsa.png",
  },
  {
    title: "Google Certified Cybersecurity Professional",
    url: "https://www.credly.com/badges/ca06bf0e-7773-4520-b1c4-51d8a4be15ed/public_url",
    image: "assets/images/google-cybersecurity.png",
  },
  {
    title: "Google Cloud Computing Foundations",
    url: "https://www.credly.com/badges/13e579bc-5dc0-44ad-811f-a765dcff6e26/public_url",
    image: "assets/images/gccf.png",
  },
  {
    title: "Beta Microsoft Learn Student Ambassador",
    url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/5450daa0-da8e-46ab-a07c-443543a010e7",
    image: "assets/images/betamlsa.png",
  },
  {
    title: "Postman API Student Expert",
    url: "https://api.badgr.io/public/assertions/q6S1FftORpGT3fExlHio0A",
    image: "assets/images/postmanapi.png",
  },
  {
    title: "Memory for AI Applications with MongoDB",
    url: "https://www.credly.com/badges/51ba1a54-133d-4a1a-b40d-dc30f8ad8c98",
    image: "assets/images/mongodb-memory-ai.png",
  },
  {
    title: "CS50x: Intro to Computer Science",
    url: "https://cs50.harvard.edu/certificates",
    image: "assets/images/cs50.png",
  },
  {
    title: "Data Analysis Using Python",
    url: "https://www.credly.com/badges/76d98fbd-fa93-4700-9fc0-ec186bbbd888/public_url",
    image: "assets/images/dataA.png",
  },
  {
    title: "Data Visualization Using Python",
    url: "https://www.credly.com/badges/111ac50e-bb02-4576-9192-7cbce7a463c3/public_url",
    image: "assets/images/dataV.png",
  },
  {
    title: "Hacktoberfest 2023",
    url: "https://www.holopin.io/@qaidjoharj53#",
    image: "assets/images/hacktoberfest.png",
  },
];

/* ============================================
   Theme System
   ============================================ */

var themeToggle = document.querySelector(".theme-toggle");
var htmlEl = document.documentElement;

function getPreferredTheme() {
  var stored = localStorage.getItem("theme");
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setTheme(theme) {
  htmlEl.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

setTheme(getPreferredTheme());

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    var current = htmlEl.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function (e) {
    if (!localStorage.getItem("theme")) {
      setTheme(e.matches ? "dark" : "light");
    }
  });

/* ============================================
   Mobile Navigation
   ============================================ */

var navToggle = document.querySelector(".nav-toggle");
var navMenu = document.querySelector(".nav-menu");
var navLinkItems = document.querySelectorAll(".nav-link");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", function () {
    var isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  navLinkItems.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ============================================
   Scroll Progress
   ============================================ */

var scrollProgress = document.querySelector(".scroll-progress");

function updateScrollProgress() {
  if (!scrollProgress) return;
  var scrollTop = window.scrollY;
  var docHeight = document.documentElement.scrollHeight - window.innerHeight;
  var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.value = progress;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

/* ============================================
   Typing Effect
   ============================================ */

function Typewriter(element, words, delay, deleteDelay, pauseDelay) {
  this.element = element;
  this.words = words;
  this.delay = delay || 100;
  this.deleteDelay = deleteDelay || 50;
  this.pauseDelay = pauseDelay || 2000;
  this.wordIndex = 0;
  this.charIndex = 0;
  this.isDeleting = false;
  this.type();
}

Typewriter.prototype.type = function () {
  var currentWord = this.words[this.wordIndex];

  if (this.isDeleting) {
    this.element.textContent = currentWord.substring(0, this.charIndex - 1);
    this.charIndex--;
  } else {
    this.element.textContent = currentWord.substring(0, this.charIndex + 1);
    this.charIndex++;
  }

  var typeSpeed = this.isDeleting ? this.deleteDelay : this.delay;

  if (!this.isDeleting && this.charIndex === currentWord.length) {
    typeSpeed = this.pauseDelay;
    this.isDeleting = true;
  } else if (this.isDeleting && this.charIndex === 0) {
    this.isDeleting = false;
    this.wordIndex = (this.wordIndex + 1) % this.words.length;
    typeSpeed = 500;
  }

  var self = this;
  setTimeout(function () {
    self.type();
  }, typeSpeed);
};

var typingElement = document.querySelector(".typing-text");
if (typingElement) {
  var words = typingElement.getAttribute("data-words").split(",");
  new Typewriter(typingElement, words, 80, 40, 2500);
}

/* ============================================
   Scroll Reveal System
   ============================================ */

var revealObserver;

function setupRevealObserver() {
  if ("IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
  }
}

function observeReveal(el) {
  if (revealObserver) {
    revealObserver.observe(el);
  } else {
    el.classList.add("is-visible");
  }
}

setupRevealObserver();

/* ============================================
   Back to Top
   ============================================ */

var toTopButton = document.querySelector(".to-top");

function toggleToTop() {
  if (!toTopButton) return;
  if (window.scrollY > 600) {
    toTopButton.hidden = false;
  } else {
    toTopButton.hidden = true;
  }
}

if (toTopButton) {
  toTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.addEventListener("scroll", toggleToTop, { passive: true });
toggleToTop();

/* ============================================
   DOM Helper Functions
   ============================================ */

function createEl(tag, className, text) {
  var el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

/* ============================================
   Data Injection: Skills
   ============================================ */

var skillsContainer = document.getElementById("skills-container");
if (skillsContainer) {
  skillsData.forEach(function (category) {
    var card = createEl("div", "skill-category reveal");
    var title = createEl("h3", "skill-category-title", category.category);
    card.appendChild(title);

    var list = createEl("div", "skill-list");
    category.items.forEach(function (item) {
      var badge = createEl("span", "skill-item");
      var iconFile = iconMap[item.name];
      if (iconFile) {
        var img = document.createElement("img");
        img.src = "assets/images/icon/" + iconFile;
        img.alt = item.name;
        img.className = "skill-item-icon";
        img.loading = "lazy";
        img.width = 16;
        img.height = 16;
        badge.appendChild(img);
      }
      var text = document.createTextNode(item.name);
      badge.appendChild(text);
      list.appendChild(badge);
    });
    card.appendChild(list);
    skillsContainer.appendChild(card);
    observeReveal(card);
  });
}

/* ============================================
   Data Injection: Experience
   ============================================ */

var experienceContainer = document.getElementById("experience-container");
if (experienceContainer) {
  experienceData.forEach(function (item, index) {
    var itemEl = createEl("div", "timeline-item reveal");
    itemEl.style.transitionDelay = index * 100 + "ms";

    var dot = createEl("div", "timeline-dot");
    dot.setAttribute("aria-hidden", "true");
    itemEl.appendChild(dot);

    var content = createEl("div", "timeline-content");

    var date = createEl("div", "timeline-date");
    var dateText = document.createTextNode(item.date);
    date.appendChild(dateText);
    if (item.date.toLowerCase().indexOf("present") !== -1) {
      var badge = createEl("span", "timeline-current-badge", "Current");
      date.appendChild(badge);
      dot.classList.add("is-current");
    }
    content.appendChild(date);

    var title = createEl("h3", "timeline-title", item.title);
    content.appendChild(title);

    var companyDiv = createEl("div", "timeline-company");
    if (item.companyUrl) {
      var companyLink = createEl("a", null, item.company);
      companyLink.href = item.companyUrl;
      companyLink.target = "_blank";
      companyLink.rel = "noopener noreferrer";
      companyDiv.appendChild(companyLink);
    } else {
      companyDiv.textContent = item.company;
    }
    content.appendChild(companyDiv);

    var desc = createEl("div", "timeline-desc");
    item.description.forEach(function (p) {
      var para = createEl("p", null, p);
      desc.appendChild(para);
    });
    content.appendChild(desc);

    if (item.architecture) {
      var arch = createEl("div", "timeline-architecture");
      arch.innerHTML = "<strong>Architecture:</strong> " + item.architecture;
      content.appendChild(arch);
    }

    var hint = createEl("p", "timeline-hint", "Hover to see details");
    content.appendChild(hint);

    itemEl.appendChild(content);
    experienceContainer.appendChild(itemEl);
    observeReveal(itemEl);
  });
}

/* ============================================
   Data Injection: Education
   ============================================ */

var educationContainer = document.getElementById("education-container");
if (educationContainer) {
  educationData.forEach(function (item, index) {
    var card = createEl("div", "education-card reveal");
    card.style.transitionDelay = index * 100 + "ms";

    var date = createEl("div", "education-date", item.date);
    card.appendChild(date);

    var degree = createEl("h3", "education-degree", item.degree);
    card.appendChild(degree);

    var school = createEl("div", "education-school");
    if (item.schoolUrl) {
      var schoolLink = createEl("a", null, item.school);
      schoolLink.href = item.schoolUrl;
      schoolLink.target = "_blank";
      schoolLink.rel = "noopener noreferrer";
      school.appendChild(schoolLink);
    } else {
      school.textContent = item.school;
    }
    card.appendChild(school);

    var desc = createEl("p", "education-desc", item.description);
    card.appendChild(desc);

    educationContainer.appendChild(card);
    observeReveal(card);
  });
}

/* ============================================
   Data Injection: Projects Featured
   ============================================ */

var projectsFeatured = document.getElementById("projects-featured");
if (projectsFeatured) {
  flagshipProjects.forEach(function (project, index) {
    var article = createEl("article", "project-card-featured reveal");
    article.style.transitionDelay = index * 150 + "ms";

    var imageDiv = createEl("div", "project-image");
    var img = document.createElement("img");
    img.src = project.thumbnail;
    img.alt = project.title;
    img.loading = "lazy";
    imageDiv.appendChild(img);
    article.appendChild(imageDiv);

    var body = createEl("div", "project-body");

    var header = createEl("div", "project-header");
    var headerLeft = createEl("div");
    var title = createEl("h3", "project-title", project.title);
    var subtitle = createEl("p", "project-subtitle", project.subtitle);
    headerLeft.appendChild(title);
    headerLeft.appendChild(subtitle);
    header.appendChild(headerLeft);

    var linksDiv = createEl("div", "project-links");
    project.links.forEach(function (link) {
      var a = createEl("a", "project-link", link.label + " ->");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      linksDiv.appendChild(a);
    });
    header.appendChild(linksDiv);
    body.appendChild(header);

    var impactDiv = createEl("div", "project-impact");
    project.impact.forEach(function (m) {
      var metric = createEl("div", "impact-metric");
      var num = createEl("span", "impact-number", m.number);
      var lbl = createEl("span", "impact-label", m.label);
      metric.appendChild(num);
      metric.appendChild(lbl);
      impactDiv.appendChild(metric);
    });
    body.appendChild(impactDiv);

    var desc = createEl("p", "project-desc", project.description);
    body.appendChild(desc);

    var stackDiv = createEl("div", "project-stack");
    project.stack.forEach(function (tech) {
      var badge = createEl("span", "stack-badge", tech);
      stackDiv.appendChild(badge);
    });
    body.appendChild(stackDiv);

    article.appendChild(body);
    projectsFeatured.appendChild(article);
    observeReveal(article);
  });
}

/* ============================================
   Data Injection: Projects Grid
   ============================================ */

var projectsGrid = document.getElementById("projects-grid");
if (projectsGrid) {
  otherProjects.forEach(function (project, index) {
    var article = createEl("article", "project-card-compact reveal");
    article.style.transitionDelay = index * 100 + "ms";

    var title = createEl("h4", "project-title", project.title);
    article.appendChild(title);

    var desc = createEl("p", "project-desc", project.description);
    article.appendChild(desc);

    var stackDiv = createEl("div", "project-stack");
    project.stack.forEach(function (tech) {
      var badge = createEl("span", "stack-badge", tech);
      stackDiv.appendChild(badge);
    });
    article.appendChild(stackDiv);

    if (project.url) {
      var link = createEl("a", "project-link", "View ->");
      link.href = project.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.style.marginTop = "1rem";
      link.style.display = "inline-flex";
      article.appendChild(link);
    }

    projectsGrid.appendChild(article);
    observeReveal(article);
  });
}

/* ============================================
   Data Injection: Freelance
   ============================================ */

var freelanceContainer = document.getElementById("freelance-container");
if (freelanceContainer) {
  freelanceWork.forEach(function (item, index) {
    var article = createEl("article", "case-study reveal");
    article.style.transitionDelay = index * 150 + "ms";

    var header = createEl("div", "case-study-header");
    var headerLeft = createEl("div");
    var title = createEl("h4", "case-study-title", item.title);
    var client = createEl("span", "case-study-client", item.client);
    headerLeft.appendChild(title);
    headerLeft.appendChild(client);
    header.appendChild(headerLeft);

    var date = createEl("span", "case-study-date", item.date);
    header.appendChild(date);
    article.appendChild(header);

    var problem = createEl("p", "case-study-problem", item.problem);
    article.appendChild(problem);

    var desc = createEl("p", "case-study-desc", item.description);
    article.appendChild(desc);

    var impactDiv = createEl("div", "case-study-impact");
    item.impact.forEach(function (m) {
      var metric = createEl("div", "impact-metric");
      var num = createEl("span", "impact-number", m.number);
      var lbl = createEl("span", "impact-label", m.label);
      metric.appendChild(num);
      metric.appendChild(lbl);
      impactDiv.appendChild(metric);
    });
    article.appendChild(impactDiv);

    var stackDiv = createEl("div", "case-study-stack");
    item.stack.forEach(function (tech) {
      var badge = createEl("span", "stack-badge", tech);
      stackDiv.appendChild(badge);
    });
    article.appendChild(stackDiv);

    freelanceContainer.appendChild(article);
    observeReveal(article);
  });
}

/* ============================================
   Data Injection: Community
   ============================================ */

var communityContainer = document.getElementById("community-container");
if (communityContainer) {
  communityWork.forEach(function (item, index) {
    var article = createEl("article", "case-study reveal");
    article.style.transitionDelay = index * 150 + "ms";

    var header = createEl("div", "case-study-header");
    var headerLeft = createEl("div");
    var title = createEl("h4", "case-study-title", item.title);
    var client = createEl(
      "span",
      "case-study-client",
      "Built for " + item.client + " as an active member",
    );
    headerLeft.appendChild(title);
    headerLeft.appendChild(client);
    header.appendChild(headerLeft);

    var date = createEl("span", "case-study-date", item.date);
    header.appendChild(date);
    article.appendChild(header);

    var problem = createEl("p", "case-study-problem", item.problem);
    article.appendChild(problem);

    var desc = createEl("p", "case-study-desc", item.description);
    article.appendChild(desc);

    var impactDiv = createEl("div", "case-study-impact");
    item.impact.forEach(function (m) {
      var metric = createEl("div", "impact-metric");
      var num = createEl("span", "impact-number", m.number);
      var lbl = createEl("span", "impact-label", m.label);
      metric.appendChild(num);
      metric.appendChild(lbl);
      impactDiv.appendChild(metric);
    });
    article.appendChild(impactDiv);

    var stackDiv = createEl("div", "case-study-stack");
    item.stack.forEach(function (tech) {
      var badge = createEl("span", "stack-badge", tech);
      stackDiv.appendChild(badge);
    });
    article.appendChild(stackDiv);

    if (item.url) {
      var link = createEl("a", "project-link", "Visit ->");
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.style.marginTop = "1rem";
      link.style.display = "inline-flex";
      article.appendChild(link);
    }

    if (item.isDraft) {
      var draft = createEl(
        "span",
        "case-study-draft",
        "Draft - needs final details before publishing",
      );
      article.appendChild(draft);
    }

    communityContainer.appendChild(article);
    observeReveal(article);
  });
}

/* ============================================
   Data Injection: Certifications
   ============================================ */

var certificationsContainer = document.getElementById(
  "certifications-container",
);
if (certificationsContainer) {
  certificationsData.forEach(function (cert, index) {
    var link = createEl("a", "cert-badge reveal");
    link.href = cert.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = cert.title;
    link.style.transitionDelay = index * 50 + "ms";

    var imgWrap = createEl("div", "cert-badge-img");
    var img = document.createElement("img");
    img.src = cert.image;
    img.alt = cert.title;
    img.loading = "lazy";
    imgWrap.appendChild(img);
    link.appendChild(imgWrap);

    var titleBelow = createEl("div", "cert-title-below", cert.title);
    link.appendChild(titleBelow);

    certificationsContainer.appendChild(link);
    observeReveal(link);
  });
}

/* ============================================
   Contact Form — Gmail / Outlook Choice
   ============================================ */

var contactForm = document.getElementById("contact-form");
var formStatus = document.querySelector(".form-status");
var emailChoice = document.querySelector(".email-choice");

function buildEmailBody(name, email, message) {
  return (
    "Hey Qaidjohar,\n\n" +
    "You have a new message from your portfolio contact form:\n\n" +
    "Name: " +
    name +
    "\n" +
    "Email: " +
    email +
    "\n\n" +
    "Message:\n" +
    message +
    "\n\n" +
    "---\nSent from qaidjohar.tech"
  );
}

function openGmail(name, email, message) {
  var subject = "Portfolio Contact Form Submission";
  var body = buildEmailBody(name, email, message);
  var url =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    "&to=" +
    encodeURIComponent("qaidjoharytqt@gmail.com") +
    "&su=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
  window.open(url, "_blank");
}

function openOutlook(name, email, message) {
  var subject = "Portfolio Contact Form Submission";
  var body = buildEmailBody(name, email, message);
  var url =
    "https://outlook.live.com/mail/0/deeplink/compose" +
    "?to=" +
    encodeURIComponent("qaidjoharytqt@gmail.com") +
    "&subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
  window.open(url, "_blank");
}

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      if (formStatus) {
        formStatus.textContent = "Please fill in all fields.";
        formStatus.classList.remove("is-visible", "is-success", "is-error");
        formStatus.classList.add("is-visible", "is-error");
      }
      return;
    }

    if (formStatus) {
      formStatus.textContent =
        "Great! Choose your email provider to send the message:";
      formStatus.classList.remove("is-visible", "is-success", "is-error");
      formStatus.classList.add("is-visible", "is-success");
    }

    if (emailChoice) {
      emailChoice.classList.add("is-visible");

      var gmailBtn = emailChoice.querySelector(".email-gmail");
      var outlookBtn = emailChoice.querySelector(".email-outlook");

      if (gmailBtn) {
        gmailBtn.onclick = function () {
          openGmail(name, email, message);
        };
      }

      if (outlookBtn) {
        outlookBtn.onclick = function () {
          openOutlook(name, email, message);
        };
      }
    }
  });
}

/* ============================================
   Footer Year
   ============================================ */

var yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* ============================================
   Smooth Scroll for Anchor Links
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    var targetId = this.getAttribute("href");
    if (targetId === "#") return;

    var targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      var navHeight = document.querySelector(".nav").offsetHeight;
      var targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

/* ============================================
   Scrollspy - Update Active Nav Link on Scroll
   ============================================ */

var sections = document.querySelectorAll("section[id]");
var spyNavLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {
  var navHeight = document.querySelector(".nav").offsetHeight;
  var scrollPos = window.scrollY + navHeight + 100;

  var current = "";
  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  spyNavLinks.forEach(function (link) {
    link.classList.remove("is-active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("is-active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
updateActiveNav();

/* ============================================
   Interactivity Enhancements
   ============================================ */

/* Magnetic Buttons */
document
  .querySelectorAll(".btn, .social-link, .project-link, .theme-toggle")
  .forEach(function (el) {
    el.addEventListener("mousemove", function (e) {
      var rect = el.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = "translate(" + x * 0.25 + "px, " + y * 0.25 + "px)";
    });
    el.addEventListener("mouseleave", function () {
      el.style.transform = "";
    });
  });
