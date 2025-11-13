/**
 * ============================================================================
 * Code Preview Module
 * ============================================================================
 * Handles live code execution and preview in embedded iframes.
 * ========================================================================== */

// ============================================================================
// 1. CODE PREVIEW SETUP
// ============================================================================

/**
 * Run code in the preview iframe
 * @param {HTMLElement} button - The run code button
 */
function runCode(button) {
  // Find the code input in the same container
  const container = button.closest(".code-example-container")
  if (!container) {
    console.warn("[v0] Could not find code container")
    return
  }

  const codeInput = container.querySelector(".code-input")
  const previewFrame = container.querySelector(".preview-frame")

  if (!codeInput || !previewFrame) {
    console.warn("[v0] Could not find code input or preview frame")
    return
  }

  try {
    // Get the HTML code
    const htmlCode = codeInput.value

    // Create a new document for the iframe
    const doc = previewFrame.contentDocument || previewFrame.contentWindow.document
    doc.open()
    doc.write(htmlCode)
    doc.close()

    console.log("[v0] Code executed successfully")

    // Visual feedback
    button.textContent = "Code Preview Updated ✓"
    button.style.backgroundColor = "#10b981"

    setTimeout(() => {
      button.textContent = "Run Code"
      button.style.backgroundColor = ""
    }, 2000)
  } catch (error) {
    console.error("[v0] Error executing code:", error)
    alert("Error executing code. Please check the console.")
  }
}

// ============================================================================
// 2. AUTO-RUN ON NAVIGATION
// ============================================================================

/**
 * Auto-run code examples when page loads
 */
document.addEventListener("DOMContentLoaded", () => {
  // Auto-run first example on each page
  setTimeout(() => {
    autoRunExamples()
  }, 500)
})

/**
 * Auto-run code examples on page navigation
 */
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "class" && mutation.target.classList.contains("page")) {
      if (mutation.target.classList.contains("active")) {
        setTimeout(() => {
          autoRunExamples()
        }, 300)
      }
    }
  })
})

// Observe page elements for changes
document.querySelectorAll(".page").forEach((page) => {
  observer.observe(page, { attributes: true, attributeFilter: ["class"] })
})

/**
 * Auto-run code examples on the current page
 */
function autoRunExamples() {
  const activePage = document.querySelector(".page.active")
  if (!activePage) return

  const firstButton = activePage.querySelector(".run-code-btn")
  if (firstButton) {
    // Click the first run code button automatically
    setTimeout(() => {
      runCode(firstButton)
    }, 100)
  }
}

// ============================================================================
// 3. CODE EDITING HELPERS
// ============================================================================

/**
 * Handle Tab key in textarea for indentation
 */
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab" && e.target.classList.contains("code-input")) {
    e.preventDefault()

    const textarea = e.target
    const start = textarea.selectionStart
    const end = textarea.selectionEnd

    // Insert tab character
    textarea.value = textarea.value.substring(0, start) + "\t" + textarea.value.substring(end)

    // Move cursor after the inserted tab
    textarea.selectionStart = textarea.selectionEnd = start + 1
  }
})

console.log("[v0] Code preview module loaded")
