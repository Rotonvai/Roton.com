/**
 * ============================================================================
 * HTML Tutorial Platform - Main Application File
 * ============================================================================
 * Core functionality for the tutorial platform including page routing,
 * progress tracking, and initialization.
 * ========================================================================== */

// ============================================================================
// 1. CONSTANTS & CONFIGURATION
// ============================================================================

const PAGES = [
  "home",
  "intro",
  "structure",
  "headings",
  "links",
  "images",
  "lists",
  "tables",
  "forms",
  "semantic",
  "media",
  "html5",
  "examples",
  "quiz",
]

const PROGRESS_KEY = "htmlTutorialProgress"

// ============================================================================
// 2. INITIALIZE APPLICATION
// ============================================================================

/**
 * Initialize the application on DOM load
 */
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Application initializing...")

  // Initialize event listeners
  initializeEventListeners()

  // Load saved progress
  loadProgress()

  // Initialize quiz questions
  initializeQuiz()

  console.log("[v0] Application initialized successfully")
})

// ============================================================================
// 3. EVENT LISTENERS SETUP
// ============================================================================

/**
 * Set up all event listeners for the application
 */
function initializeEventListeners() {
  // Navigation links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", handleNavigation)
  })

  // Sidebar toggle for mobile
  const sidebarToggle = document.getElementById("sidebar-toggle")
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", toggleSidebar)
  }

  // Close sidebar when navigating on mobile
  const sidebar = document.getElementById("sidebar")
  if (window.innerWidth <= 768 && sidebar) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        sidebar.classList.add("closed")
        sidebarToggle?.classList.remove("open")
      })
    })
  }

  // Handle responsive behavior
  window.addEventListener("resize", handleWindowResize)
}

/**
 * Handle navigation between pages
 * @param {Event} event - Click event
 */
function handleNavigation(event) {
  event.preventDefault()
  const page = this.getAttribute("data-page")
  navigateTo(page)
}

/**
 * Navigate to a specific page
 * @param {string} page - Page identifier
 */
function navigateTo(page) {
  if (!PAGES.includes(page)) {
    console.warn(`[v0] Invalid page: ${page}`)
    return
  }

  // Hide all pages
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active")
  })

  // Show target page
  const targetPage = document.getElementById(`page-${page}`)
  if (targetPage) {
    targetPage.classList.add("active")
  }

  // Update navigation
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("data-page") === page) {
      link.classList.add("active")
    }
  })

  // Update progress
  updateProgress(page)

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" })

  console.log(`[v0] Navigated to page: ${page}`)
}

// ============================================================================
// 4. SIDEBAR MANAGEMENT
// ============================================================================

/**
 * Toggle sidebar visibility on mobile
 */
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar")
  const toggle = document.getElementById("sidebar-toggle")

  if (sidebar && toggle) {
    sidebar.classList.toggle("closed")
    toggle.classList.toggle("open")
  }
}

/**
 * Handle window resize for responsive behavior
 */
function handleWindowResize() {
  const sidebar = document.getElementById("sidebar")
  const toggle = document.getElementById("sidebar-toggle")

  if (!sidebar || !toggle) return

  if (window.innerWidth > 768) {
    sidebar.classList.remove("closed")
    toggle.classList.remove("open")
  }
}

// ============================================================================
// 5. PROGRESS TRACKING
// ============================================================================

/**
 * Load saved progress from localStorage
 */
function loadProgress() {
  const saved = localStorage.getItem(PROGRESS_KEY)
  if (saved) {
    const progress = JSON.parse(saved)
    console.log("[v0] Loaded progress:", progress)
    updateProgressBar(progress)
  }
}

/**
 * Update progress when user visits a page
 * @param {string} page - Page identifier
 */
function updateProgress(page) {
  // Get current progress
  const saved = localStorage.getItem(PROGRESS_KEY) || "{}"
  const progress = JSON.parse(saved)

  // Mark page as visited
  progress[page] = true

  // Save to localStorage
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))

  // Update progress bar
  updateProgressBar(progress)
}

/**
 * Update progress bar UI
 * @param {Object} progress - Progress object
 */
function updateProgressBar(progress) {
  const visited = Object.keys(progress).length
  const total = PAGES.length
  const percentage = Math.round((visited / total) * 100)

  const progressFill = document.getElementById("progress-fill")
  const progressPercentage = document.getElementById("progress-percentage")

  if (progressFill) {
    progressFill.style.width = `${percentage}%`
  }

  if (progressPercentage) {
    progressPercentage.textContent = percentage
  }

  console.log(`[v0] Progress updated: ${visited}/${total} (${percentage}%)`)
}

// ============================================================================
// 6. INITIALIZATION COMPLETE
// ============================================================================

/**
 * Initialize the quiz on page load
 * This function is called from quiz.js
 */
function initializeQuiz() {
  // Placeholder for quiz initialization
  // Actual implementation in quiz.js
}
