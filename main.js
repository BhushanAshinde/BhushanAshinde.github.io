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
];
const projectsGrid = document.querySelector('.projects-grid');
projectsGrid.innerHTML = '';
projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `<h3>${project.title}</h3><p>${project.desc}</p>`;
  projectsGrid.appendChild(card);
});

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
  // Only one bullet dot per item, no extra dot from CSS
  div.innerHTML = `<span style='color:#00eaff;font-size:2rem;vertical-align:middle;display:inline-block;margin-right:0.5rem;'>●</span><span style='font-weight:500;'>${item.title}</span> ${item.link ? `<a href='${item.link}' target='_blank' style='color:#a259ff;'>Read</a>` : ''}`;
  // Remove the default ::before bullet if present
  div.style.position = 'relative';
  div.style.paddingLeft = '0';
  timelineDiv.appendChild(div);
});

// Placeholder: Add 3D, chart, and animation logic here
// For advanced features, consider using external JS libraries and update this file accordingly.
