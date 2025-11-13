// ==========================================
// CSS Master - JavaScript Functionality
// ==========================================

// ===== Theme Management =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Initialize theme
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const systemTheme = prefersDark.matches ? 'dark' : 'light';
  const theme = savedTheme || systemTheme;
  setTheme(theme);
}

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

// Listen for system theme changes
prefersDark.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});

// ===== Mobile Menu Management =====
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-nav-link, .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileNav.classList.remove('active');
  });
});

// ===== Section Navigation =====
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, [data-navigate]');

function showSection(sectionId) {
  // Hide all sections
  sections.forEach(section => section.classList.remove('active'));
  
  // Show selected section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  
  // Update active nav link
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === sectionId || link.getAttribute('href') === `#${sectionId}`) {
      link.classList.add('active');
    }
  });
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle navigation clicks
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const sectionId = link.getAttribute('data-section') || link.getAttribute('data-navigate');
    if (sectionId) {
      e.preventDefault();
      showSection(sectionId);
    }
  });
});

// ===== Topic Navigation =====
const topicItems = document.querySelectorAll('.topic-item');
const topicContents = document.querySelectorAll('.topic-content');

topicItems.forEach(item => {
  item.addEventListener('click', () => {
    const topicId = item.getAttribute('data-topic');
    
    // Remove active class from all items
    topicItems.forEach(btn => btn.classList.remove('active'));
    topicContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked item
    item.classList.add('active');
    
    // Show corresponding content
    const targetContent = document.querySelector(`.topic-content[data-topic="${topicId}"]`);
    if (targetContent) {
      targetContent.classList.add('active');
    }
  });
});

// ===== Code Copy Functionality =====
function copyCode(button) {
  const codeBlock = button.closest('.code-example').querySelector('pre code');
  const text = codeBlock.textContent;
  
  navigator.clipboard.writeText(text).then(() => {
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
  }).catch(() => {
    alert('Failed to copy code');
  });
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  showSection('home'); // Show home section by default
});

// ===== Smooth Scroll Offset for Fixed Header =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
  // ESC to close mobile menu
  if (e.key === 'Escape') {
    menuToggle.classList.remove('active');
    mobileNav.classList.remove('active');
  }
});

// ===== Add Smooth Scroll Behavior for Mobile =====
if ('scrollBehavior' in document.documentElement.style === false) {
  console.log('Smooth scroll not supported, using polyfill');
}

console.log('[v0] CSS Master loaded successfully!');