/**
 * ============================================================================
 * Navigation Module
 * ============================================================================
 * Handles all navigation-related functionality including page routing
 * and URL hash management.
 * ========================================================================== */

// Declare the PAGES variable
const PAGES = ["home", "about", "contact", "services"]

// Declare the navigateTo function
function navigateTo(page) {
  // Logic to navigate to the specified page
  console.log(`Navigating to ${page}`)
  // Additional code to handle page routing can be added here
}

// ============================================================================
// 1. HASH-BASED ROUTING
// ============================================================================

/**
 * Initialize hash-based routing
 */
function initializeRouting() {
  // Handle initial page load
  const hash = window.location.hash.slice(1) || "home"
  if (PAGES.includes(hash)) {
    navigateTo(hash)
  }

  // Handle hash changes
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.slice(1)
    if (PAGES.includes(hash)) {
      navigateTo(hash)
    }
  })
}

// Initialize routing on script load
initializeRouting()

// ============================================================================
// 2. KEYBOARD NAVIGATION
// ============================================================================

/**
 * Handle keyboard shortcuts
 */
document.addEventListener("keydown", (event) => {
  // Alt + Shift + N: Next page
  if (event.altKey && event.shiftKey && event.key === "N") {
    navigateNext()
  }

  // Alt + Shift + P: Previous page
  if (event.altKey && event.shiftKey && event.key === "P") {
    navigatePrevious()
  }
})

/**
 * Navigate to next page
 */
function navigateNext() {
  const currentPage = document.querySelector(".nav-link.active")?.getAttribute("data-page") || "home"
  const currentIndex = PAGES.indexOf(currentPage)

  if (currentIndex < PAGES.length - 1) {
    navigateTo(PAGES[currentIndex + 1])
  }
}

/**
 * Navigate to previous page
 */
function navigatePrevious() {
  const currentPage = document.querySelector(".nav-link.active")?.getAttribute("data-page") || "home"
  const currentIndex = PAGES.indexOf(currentPage)

  if (currentIndex > 0) {
    navigateTo(PAGES[currentIndex - 1])
  }
}

console.log("[v0] Navigation module loaded")
