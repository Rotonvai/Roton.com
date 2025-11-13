/**
 * ============================================================================
 * Theme Management Module
 * ============================================================================
 * Handles light/dark mode toggle with localStorage persistence.
 * ========================================================================== */

// ============================================================================
// 1. THEME CONFIGURATION
// ============================================================================

const THEME_KEY = "htmlTutorialTheme"
const THEME_DARK = "dark"
const THEME_LIGHT = "light"

// ============================================================================
// 2. THEME INITIALIZATION
// ============================================================================

/**
 * Initialize theme on page load
 */
document.addEventListener("DOMContentLoaded", () => {
  initializeTheme()
})

/**
 * Initialize theme settings
 */
function initializeTheme() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem(THEME_KEY)

  // Check for system preference
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  // Determine theme to use
  const theme = savedTheme || (systemDark ? THEME_DARK : THEME_LIGHT)

  // Apply theme
  applyTheme(theme)

  console.log(`[v0] Theme initialized: ${theme}`)
}

// ============================================================================
// 3. THEME MANAGEMENT
// ============================================================================

/**
 * Apply theme to the document
 * @param {string} theme - Theme name ('dark' or 'light')
 */
function applyTheme(theme) {
  if (![THEME_DARK, THEME_LIGHT].includes(theme)) {
    console.warn(`[v0] Invalid theme: ${theme}`)
    return
  }

  // Update data attribute
  document.documentElement.setAttribute("data-theme", theme)

  // Update localStorage
  localStorage.setItem(THEME_KEY, theme)

  // Update icon (optional animation)
  updateThemeIcon(theme)
}

/**
 * Update theme toggle icon
 * @param {string} theme - Current theme
 */
function updateThemeIcon(theme) {
  const toggle = document.getElementById("theme-toggle")
  if (!toggle) return

  if (theme === THEME_DARK) {
    toggle.setAttribute("title", "Switch to light mode")
    toggle.setAttribute("aria-label", "Switch to light mode")
  } else {
    toggle.setAttribute("title", "Switch to dark mode")
    toggle.setAttribute("aria-label", "Switch to dark mode")
  }
}

// ============================================================================
// 4. THEME TOGGLE
// ============================================================================

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || THEME_DARK
  const next = current === THEME_DARK ? THEME_LIGHT : THEME_DARK
  applyTheme(next)
  console.log(`[v0] Theme toggled: ${current} → ${next}`)
}

// Set up toggle button
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle")
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }
})

// Listen for system theme changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  const newTheme = e.matches ? THEME_DARK : THEME_LIGHT
  applyTheme(newTheme)
  console.log(`[v0] System theme changed to: ${newTheme}`)
})

console.log("[v0] Theme module loaded")
