/**
 * ============================================================================
 * Quiz Module
 * ============================================================================
 * Handles quiz questions, scoring, and results display.
 * ========================================================================== */

// ============================================================================
// 1. QUIZ DATA
// ============================================================================

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    correct: 0,
  },
  {
    id: 2,
    question: "Which tag is used to define the main heading of a page?",
    options: ["&lt;heading&gt;", "&lt;h1&gt;", "&lt;header&gt;", "&lt;title&gt;"],
    correct: 1,
  },
  {
    id: 3,
    question: "What is the correct way to create a link in HTML?",
    options: ["&lt;link href='url'&gt;", "&lt;a href='url'&gt;", "&lt;url&gt;", "&lt;hyperlink&gt;"],
    correct: 1,
  },
  {
    id: 4,
    question: "Which semantic tag should be used for the footer of a webpage?",
    options: ["&lt;bottom&gt;", "&lt;end&gt;", "&lt;footer&gt;", "&lt;copyright&gt;"],
    correct: 2,
  },
  {
    id: 5,
    question: "How do you add an image in HTML?",
    options: ["&lt;image src='url'&gt;", "&lt;img src='url'&gt;", "&lt;pic src='url'&gt;", "&lt;photo src='url'&gt;"],
    correct: 1,
  },
]

const QUIZ_STATE = {}

// ============================================================================
// 2. QUIZ INITIALIZATION
// ============================================================================

/**
 * Initialize quiz questions on page load
 */
function initializeQuiz() {
  const container = document.getElementById("quiz-questions-container")
  if (!container) return

  // Clear previous questions
  container.innerHTML = ""

  // Render all questions
  QUIZ_QUESTIONS.forEach((question, index) => {
    const questionElement = createQuestionElement(question, index)
    container.appendChild(questionElement)
  })

  console.log("[v0] Quiz initialized with " + QUIZ_QUESTIONS.length + " questions")
}

// Initialize quiz when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  initializeQuiz()
})

// ============================================================================
// 3. QUESTION RENDERING
// ============================================================================

/**
 * Create a quiz question element
 * @param {Object} question - Question data
 * @param {number} index - Question index
 * @returns {HTMLElement} Question element
 */
function createQuestionElement(question, index) {
  const questionDiv = document.createElement("div")
  questionDiv.className = "quiz-question"
  questionDiv.id = `question-${question.id}`

  // Question title
  const titleDiv = document.createElement("h4")
  titleDiv.textContent = `Question ${index + 1} of ${QUIZ_QUESTIONS.length}`
  questionDiv.appendChild(titleDiv)

  // Question text
  const textDiv = document.createElement("p")
  textDiv.innerHTML = question.question
  questionDiv.appendChild(textDiv)

  // Options
  const optionsDiv = document.createElement("div")
  optionsDiv.className = "quiz-options"

  question.options.forEach((option, optionIndex) => {
    const optionLabel = document.createElement("label")
    optionLabel.className = "quiz-option"

    const input = document.createElement("input")
    input.type = "radio"
    input.name = `question-${question.id}`
    input.value = optionIndex
    input.addEventListener("change", () => {
      QUIZ_STATE[question.id] = optionIndex
      console.log(`[v0] Question ${question.id} answer: ${optionIndex}`)
    })

    const labelText = document.createElement("label")
    labelText.innerHTML = option
    labelText.style.marginBottom = "0"

    optionLabel.appendChild(input)
    optionLabel.appendChild(labelText)
    optionsDiv.appendChild(optionLabel)
  })

  questionDiv.appendChild(optionsDiv)
  return questionDiv
}

// ============================================================================
// 4. QUIZ SUBMISSION
// ============================================================================

/**
 * Submit quiz and calculate score
 */
function submitQuiz() {
  // Check if all questions are answered
  const answered = Object.keys(QUIZ_STATE).length
  if (answered < QUIZ_QUESTIONS.length) {
    alert(`Please answer all questions. You have answered ${answered} of ${QUIZ_QUESTIONS.length}.`)
    return
  }

  // Calculate score
  let correctAnswers = 0
  QUIZ_QUESTIONS.forEach((question) => {
    if (QUIZ_STATE[question.id] === question.correct) {
      correctAnswers++
    }
  })

  const percentage = Math.round((correctAnswers / QUIZ_QUESTIONS.length) * 100)

  // Display results
  displayQuizResults(correctAnswers, QUIZ_QUESTIONS.length, percentage)

  console.log(`[v0] Quiz submitted: ${correctAnswers}/${QUIZ_QUESTIONS.length} (${percentage}%)`)
}

/**
 * Display quiz results
 * @param {number} correct - Number of correct answers
 * @param {number} total - Total questions
 * @param {number} percentage - Percentage score
 */
function displayQuizResults(correct, total, percentage) {
  // Hide questions container
  const questionsContainer = document.getElementById("quiz-questions-container")
  if (questionsContainer) {
    questionsContainer.style.display = "none"
  }

  // Hide submit button
  const submitBtn = document.getElementById("submit-quiz-btn")
  if (submitBtn) {
    submitBtn.style.display = "none"
  }

  // Show results
  const resultDiv = document.getElementById("quiz-result")
  if (resultDiv) {
    resultDiv.style.display = "block"

    const scoreDisplay = document.getElementById("score-display")
    if (scoreDisplay) {
      scoreDisplay.innerHTML = `You scored <strong>${correct}/${total}</strong> (${percentage}%)<br>
            <p style="font-size: 16px; margin-top: 10px;">
                ${percentage >= 80 ? "🎉 Excellent work!" : percentage >= 60 ? "✓ Good effort!" : "📚 Keep practicing!"}
            </p>`
    }
  }
}

// ============================================================================
// 5. QUIZ RESET
// ============================================================================

/**
 * Reset quiz to allow retaking
 */
function resetQuiz() {
  // Clear quiz state
  Object.keys(QUIZ_STATE).forEach((key) => delete QUIZ_STATE[key])

  // Show questions container
  const questionsContainer = document.getElementById("quiz-questions-container")
  if (questionsContainer) {
    questionsContainer.style.display = "block"
  }

  // Show submit button
  const submitBtn = document.getElementById("submit-quiz-btn")
  if (submitBtn) {
    submitBtn.style.display = "block"
  }

  // Hide results
  const resultDiv = document.getElementById("quiz-result")
  if (resultDiv) {
    resultDiv.style.display = "none"
  }

  // Reinitialize quiz
  initializeQuiz()

  // Clear all radio buttons
  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.checked = false
  })

  console.log("[v0] Quiz reset")
}

console.log("[v0] Quiz module loaded")
