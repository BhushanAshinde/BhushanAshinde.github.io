// Main JS for Bhushan Shinde Portfolio
// Add interactive animations, 3D backgrounds, charts, and section logic here

// Example: Smooth scroll for navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Example: Inject skill cards
const skills = [
  { name: 'Python', icon: '🐍', tags: ['Django', 'Frappe'] },
  { name: 'Java', icon: '☕', tags: [] },
  { name: 'HTML/CSS', icon: '🌐', tags: [] },
  { name: 'AWS', icon: '☁️', tags: ['EC2', 'S3', 'IAM', 'VPC', 'Route53', 'RDS', 'Aurora'] },
  { name: 'Terraform', icon: '🛠️', tags: [] },
  { name: 'Frappe', icon: '📦', tags: [] },
  { name: 'ERPNext', icon: '📊', tags: [] },
  { name: 'MySQL', icon: '🗄️', tags: [] },
  { name: 'Frappe Framework', icon: '⚡', tags: [] },
  { name: 'MongoDB', icon: '🍃', tags: [] },
  { name: 'Linux (RHCSA)', icon: '🐧', tags: [] },
  { name: 'Git', icon: '🔗', tags: [] },
  { name: 'GitHub', icon: '🐙', tags: [] },
  { name: 'Postman', icon: '📬', tags: [] }
];
const skillsGrid = document.querySelector('.skills-grid');
skills.forEach(skill => {
  const card = document.createElement('div');
  card.className = 'skill-card';
  card.innerHTML = `<span style="font-size:2rem;">${skill.icon}</span><h3>${skill.name}</h3><div>${skill.tags.map(tag => `<span class='tag'>${tag}</span>`).join(' ')}</div>`;
  skillsGrid.appendChild(card);
});

// Example: Inject project cards
const projects = [
  {
    title: 'Self Monitoring System for Unauthorized Activity (BE Project)',
    stack: '',
    desc: 'Proctored Exam System for College/University Practical Examinations. Designed to prevent cheating during practical examinations by monitoring and flagging unauthorized activities in real time.'
  },
  {
    title: 'AWS Project - Web Development on EC2 Instances Using User Data',
    stack: '',
    desc: 'Development of website on cloud environment (EC2 instance). Automated deployment and configuration of a website on AWS EC2 using user data scripts for seamless cloud provisioning.'
  },
  {
    title: 'Web Development on EC2 Instances with Apache Server Installation',
    stack: '',
    desc: 'Created own virtual machine on cloud. Installed Apache server on a custom EC2 instance and developed a static website for demonstration and learning purposes.'
  }
  ,
  {
    title: 'Integrated Financial Management Information System',
    stack: '',
    desc: 'Comprehensive system for budgeting, accounting, and financial reporting to streamline fiscal operations and improve transparency.'
  }
];
const projectsGrid = document.querySelector('.projects-grid');
projectsGrid.innerHTML = '';
projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `<h3>${project.title}</h3><p>${project.desc}</p>`;
  projectsGrid.appendChild(card);
});

const experiences = [
  {
    period: '2022 — 2024',
    role: 'Software / Integration Developer',
    focus: 'Integration & Backend Development',
    description: 'Worked on enterprise software integration and backend development, gaining experience in integration platforms, APIs, data flow and business system connectivity.',
    technologies: ['WebMethods', 'Integration Server', 'APIs', 'SQL', 'Backend Development'],
    contributions: [
      'Built integrations between enterprise applications and backend systems.',
      'Worked with APIs, messaging flows, and business process connectivity.',
      'Strengthened understanding of enterprise data movement and system interoperability.'
    ],
    projects: ['Enterprise application integration', 'API-led connectivity', 'Business process orchestration'],
    keyLearning: 'Built a strong foundation in enterprise integration, backend systems and understanding how different business applications communicate.'
  },
  {
    period: '2024 — Present',
    role: 'ERPNext / Frappe Consultant',
    focus: 'ERP Implementation & Customization',
    description: 'Worked on ERPNext implementations across business functions including Sales, Purchase, Accounts, Inventory, Manufacturing and HRMS.',
    technologies: ['Python', 'Frappe Framework', 'ERPNext', 'JavaScript', 'SQL', 'Jinja', 'MariaDB'],
    contributions: [
      'ERPNext implementation and requirement analysis for multiple business domains.',
      'Configured custom DocTypes, client scripts, server scripts, workflow logic and reports.',
      'Supported UAT, client training and API integrations across business workflows.'
    ],
    projects: ['Sales', 'Purchase', 'Accounts', 'Inventory', 'Manufacturing', 'HRMS'],
    keyLearning: 'Mapped ERP processes to real business needs and translated requirements into practical system solutions.'
  },
  {
    period: '2026 — Present',
    role: 'Project Lead — ERPNext',
    focus: 'Technology + Business + Project Delivery',
    description: 'Leading ERPNext implementation activities while working closely with business stakeholders, functional teams and technical teams.',
    technologies: ['Python', 'Frappe', 'ERPNext', 'JavaScript', 'SQL', 'Power BI', 'AWS'],
    contributions: [
      'Drive requirement gathering, solution design, and ERPNext customization across teams.',
      'Coordinate technical delivery, stakeholder communication, UAT and deployment readiness.',
      'Support project tracking, issue resolution, and process optimization for business outcomes.'
    ],
    projects: ['ERP implementation delivery', 'Stakeholder alignment', 'Process optimization', 'Client demonstration management'],
    keyLearning: 'Progressed beyond technical execution into ownership, coordination and end-to-end business solution leadership.'
  }
];

const timelineRoot = document.getElementById('experience-timeline');
const detailRoot = document.getElementById('experience-detail');
let activeExperienceIndex = 0;

function renderOrbit(technologies) {
  const techs = technologies.slice(0, 6);
  const orbitPoints = [
    { x: 50, y: 15 },
    { x: 82, y: 35 },
    { x: 82, y: 68 },
    { x: 50, y: 85 },
    { x: 18, y: 68 },
    { x: 18, y: 35 }
  ];

  return `
    <div class="orbit-wrap" aria-label="Technology orbit">
      <span class="orbit-center">${techs[0] || 'Tech'}</span>
      ${techs.map((tech, index) => {
        const point = orbitPoints[index % orbitPoints.length];
        return `<span class="tech-node" style="--x: ${point.x}%; --y: ${point.y}%; animation-delay: ${index * 0.18}s;">${tech}</span>`;
      }).join('')}
    </div>
  `;
}

function renderDetailPanel(experience) {
  detailRoot.innerHTML = `
    <div class="detail-header">
      <span class="detail-period">${experience.period}</span>
      <h3>${experience.role}</h3>
      <p>${experience.focus}</p>
    </div>
    ${renderOrbit(experience.technologies)}
    <div class="detail-section">
      <h4>Key Contributions</h4>
      <ul>
        ${experience.contributions.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
    <div class="detail-section">
      <h4>Projects & Domains</h4>
      <ul>
        ${experience.projects.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
    <div class="detail-section">
      <h4>Key Learning</h4>
      <p class="detail-learning">${experience.keyLearning}</p>
    </div>
  `;
}

function renderTimeline() {
  timelineRoot.innerHTML = experiences.map((experience, index) => {
    const isActive = index === activeExperienceIndex;
    const itemClass = index % 2 === 0 ? 'left' : 'right';
    const badgeMarkup = experience.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('');

    return `
      <article
        class="experience-item ${itemClass} ${isActive ? 'active' : ''}"
        data-index="${index}"
        role="button"
        tabindex="0"
        aria-expanded="${isActive}"
        aria-label="${experience.role} experience"
      >
        <div class="experience-node" aria-hidden="true"></div>
        <div class="experience-year">${experience.period}</div>
        <div class="experience-card">
          <div class="card-header">
            <span class="role-name">${experience.role}</span>
            <span class="focus-label">${experience.focus}</span>
          </div>
          <div class="card-body">
            <p class="card-description">${experience.description}</p>
            <div class="badge-row">${badgeMarkup}</div>
            <div class="card-details">
              <div class="detail-section">
                <h4>Key Contributions</h4>
                <ul>
                  ${experience.contributions.map(item => `<li>${item}</li>`).join('')}
                </ul>
              </div>
              <div class="detail-section">
                <h4>Projects & Domains</h4>
                <ul>
                  ${experience.projects.map(item => `<li>${item}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  timelineRoot.querySelectorAll('.experience-item').forEach(item => {
    item.addEventListener('click', () => setActiveExperience(Number(item.dataset.index)));
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setActiveExperience(Number(item.dataset.index));
      }
    });
  });
}

function setActiveExperience(index) {
  activeExperienceIndex = index;
  renderTimeline();
  renderDetailPanel(experiences[index]);
}

function updateTimelineProgress() {
  const experienceSection = document.querySelector('.experience-section');
  if (!experienceSection) return;

  const rect = experienceSection.getBoundingClientRect();
  const progress = Math.min(Math.max((window.innerHeight - rect.top) / (rect.height + window.innerHeight * 0.3), 0), 1);
  experienceSection.style.setProperty('--line-progress', progress.toFixed(3));
}

const revealElements = document.querySelectorAll('.reveal-fade, .career-stage');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.2 });

revealElements.forEach(item => revealObserver.observe(item));
window.addEventListener('scroll', updateTimelineProgress, { passive: true });
window.addEventListener('load', () => {
  setActiveExperience(activeExperienceIndex);
  updateTimelineProgress();
});

const timelineSection = document.querySelector('.experience-section');
if (timelineSection) {
  timelineSection.style.setProperty('--line-progress', '0');
}

// Example: Inject timeline items
const timeline = [
  { type: 'Certification', title: 'AWS Cloud Practitioner' },
  { type: 'Certification', title: 'AWS re/Start Graduate' },
  { type: 'Certification', title: 'RHCSA' },
  { type: 'Certification', title: 'Cloud Application Developer (NASSCOM)' },
  { type: 'Certification', title: 'Advanced Terraform (LinkedIn)' },
  { type: 'Certification', title: 'Full Stack Java (Capgemini)' }
];
const timelineDiv = document.querySelector('.timeline');
timeline.forEach(item => {
  const div = document.createElement('div');
  div.className = 'timeline-item';
  div.innerHTML = `<span style='color:#00eaff;font-size:2rem;vertical-align:middle;display:inline-block;margin-right:0.5rem;'>●</span><span style='font-weight:500;'>${item.title}</span> ${item.link ? `<a href='${item.link}' target='_blank' style='color:#a259ff;'>Read</a>` : ''}`;
  div.style.position = 'relative';
  div.style.paddingLeft = '0';
  timelineDiv.appendChild(div);
});

const resumeOpenButton = document.querySelector('[data-open-resume]');
const resumeModal = document.getElementById('resume-modal-backdrop');
const resumeCloseButton = document.querySelector('.resume-modal-close');
const zoomOutButton = document.getElementById('resume-zoom-out');
const zoomInButton = document.getElementById('resume-zoom-in');
const resumeCanvasContainer = document.getElementById('resume-canvas-container');
const resumePageIndicator = document.getElementById('resume-page-indicator');
const RESUME_PATH = 'public/Bhushan-Shinde-Resume.pdf';
let pdfDocument = null;
let currentScale = 1.15;

function syncBodyScroll(disabled) {
  document.body.classList.toggle('modal-open', disabled);
}

async function renderResumePdf() {
  if (!window.pdfjsLib || !resumeCanvasContainer) return;

  if (!pdfDocument) {
    resumePageIndicator.textContent = 'Loading PDF...';
    try {
      pdfDocument = await pdfjsLib.getDocument(RESUME_PATH).promise;
    } catch (error) {
      resumePageIndicator.textContent = 'Unable to load PDF';
      console.error('Error loading PDF:', error);
      return;
    }
  }

  resumeCanvasContainer.innerHTML = '';

  for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber += 1) {
    const page = await pdfDocument.getPage(pageNumber);
    const viewport = page.getViewport({ scale: currentScale });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.className = 'resume-page-canvas';
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: context, viewport }).promise;
    resumeCanvasContainer.appendChild(canvas);
  }

  resumePageIndicator.textContent = `Page 1 / ${pdfDocument.numPages}`;
}

function openResumeModal() {
  if (!resumeModal) return;
  resumeModal.classList.remove('hidden');
  resumeModal.setAttribute('aria-hidden', 'false');
  syncBodyScroll(true);

  if (!pdfDocument) {
    renderResumePdf();
  }
}

function closeResumeModal() {
  if (!resumeModal) return;
  resumeModal.classList.add('hidden');
  resumeModal.setAttribute('aria-hidden', 'true');
  syncBodyScroll(false);
}

if (resumeOpenButton) {
  resumeOpenButton.addEventListener('click', openResumeModal);
}

if (resumeCloseButton) {
  resumeCloseButton.addEventListener('click', closeResumeModal);
}

if (resumeModal) {
  resumeModal.addEventListener('click', (event) => {
    if (event.target === resumeModal) {
      closeResumeModal();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && resumeModal && !resumeModal.classList.contains('hidden')) {
    closeResumeModal();
  }
});

if (zoomOutButton) {
  zoomOutButton.addEventListener('click', () => {
    currentScale = Math.max(0.8, Number((currentScale - 0.15).toFixed(2)));
    renderResumePdf();
  });
}

if (zoomInButton) {
  zoomInButton.addEventListener('click', () => {
    currentScale = Math.min(2.2, Number((currentScale + 0.15).toFixed(2)));
    renderResumePdf();
  });
}

const THEME_KEY = 'portfolio-theme';
const themeToggle = document.getElementById('theme-toggle');
const themeMenu = document.getElementById('theme-menu');
const themeOptions = Array.from(document.querySelectorAll('.theme-option'));
const root = document.documentElement;

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getResolvedTheme(themeMode) {
  if (themeMode === 'system') {
    return getSystemTheme();
  }
  return themeMode || 'dark';
}

function updateThemeToggleIcon(themeMode) {
  const resolved = getResolvedTheme(themeMode);
  const icon = themeToggle?.querySelector('.theme-toggle-icon');
  if (icon) {
    icon.textContent = resolved === 'dark' ? '🌙' : '☀️';
  }

  const buttonLabel = resolved === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  const tooltip = resolved === 'dark' ? 'Dark Mode' : 'Light Mode';
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', buttonLabel);
    themeToggle.setAttribute('title', tooltip);
  }
}

function applyTheme(themeMode) {
  const resolved = getResolvedTheme(themeMode);
  root.setAttribute('data-theme', resolved);
  root.classList.toggle('light', resolved === 'light');
  root.classList.toggle('dark', resolved === 'dark');

  themeOptions.forEach(option => {
    const active = option.dataset.theme === themeMode;
    option.classList.toggle('active', active);
    option.setAttribute('aria-checked', String(active));
  });

  updateThemeToggleIcon(themeMode);
}

function setTheme(themeMode) {
  localStorage.setItem(THEME_KEY, themeMode);
  applyTheme(themeMode);
}

function toggleThemeButton() {
  const currentTheme = localStorage.getItem(THEME_KEY) || 'dark';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const currentTheme = localStorage.getItem(THEME_KEY) || 'dark';
    if (currentTheme === 'system') {
      setTheme(getSystemTheme() === 'dark' ? 'light' : 'dark');
      return;
    }
    toggleThemeButton();
  });
}

if (themeMenu) {
  themeMenu.addEventListener('click', (event) => {
    const option = event.target.closest('.theme-option');
    if (!option) return;
    setTheme(option.dataset.theme || 'dark');
    themeMenu.classList.remove('open');
  });
}

document.addEventListener('click', (event) => {
  if (themeMenu && !themeMenu.contains(event.target) && themeToggle && !themeToggle.contains(event.target)) {
    themeMenu.classList.remove('open');
  }
});

if (themeToggle) {
  themeToggle.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    themeMenu?.classList.toggle('open');
  });
}

if (themeToggle) {
  themeToggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      themeToggle.click();
      return;
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      themeMenu?.classList.add('open');
      const options = [...themeOptions];
      const current = localStorage.getItem(THEME_KEY) || 'dark';
      const activeIndex = options.findIndex(option => option.dataset.theme === current);
      const nextIndex = event.key === 'ArrowDown'
        ? (activeIndex + 1) % options.length
        : (activeIndex - 1 + options.length) % options.length;
      options[nextIndex]?.focus();
    }
  });
}

const initialTheme = localStorage.getItem(THEME_KEY) || 'dark';
applyTheme(initialTheme);

if (window.matchMedia) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleSystemChange = () => {
    const current = localStorage.getItem(THEME_KEY) || 'dark';
    if (current === 'system') {
      applyTheme('system');
    }
  };

  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handleSystemChange);
  } else if (mediaQuery.addListener) {
    mediaQuery.addListener(handleSystemChange);
  }
}

// Certificate Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const carouselImages = document.querySelectorAll('.carousel-img');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const carouselTrack = document.querySelector('.carousel-track');
  let currentIndex = 0;
  let autoScrollInterval;

  function showImage(index) {
    carouselImages.forEach((img, i) => {
      img.classList.remove('active');
      if (i === index) {
        img.classList.add('active');
      }
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentIndex);
  }

  function startAutoScroll() {
    autoScrollInterval = setInterval(nextImage, 3000);
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  function resetAutoScroll() {
    stopAutoScroll();
    startAutoScroll();
  }

  // Initialize: show first image
  if (carouselImages.length > 0) {
    showImage(0);
    startAutoScroll();
  }

  // Add event listeners
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextImage();
      resetAutoScroll();
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevImage();
      resetAutoScroll();
    });
  }

  // Pause auto-scroll on hover
  if (carouselTrack) {
    carouselTrack.addEventListener('mouseenter', stopAutoScroll);
    carouselTrack.addEventListener('mouseleave', startAutoScroll);
  }
});

