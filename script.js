// Sample quiz data (expand this array for more questions)
const quizQuestions = [
    {
        question: "What does 'ubiquitous' mean?",
        options: ["Rare", "Everywhere", "Expensive", "Old"],
        answer: 1 // Index of correct option (0-based)
    },
    {
        question: "Synonym for 'meticulous'?",
        options: ["Careless", "Detailed", "Quick", "Lazy"],
        answer: 1
    }
    // Add more: e.g., {question: "...", options: [...], answer: X}
];

// Function to load quiz (call this in specific pages)
function loadQuiz(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let quizHTML = '';
    quizQuestions.forEach((q, index) => {
        quizHTML += `<div class="question">
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map((opt, i) => `
                <label>
                    <input type="radio" name="q${index}" value="${i}">
                    ${opt}
                </label><br>
            `).join('')}
        </div>`;
    });
    container.innerHTML = quizHTML + '<button onclick="submitQuiz()">Submit</button><div id="result"></div>';
}

// Function to score quiz
function submitQuiz() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) score++;
    });
    document.getElementById('result').innerHTML = `<p>Your score: ${score}/${quizQuestions.length}</p>`;
}

// Example: If on vocabulary page, load quiz automatically
if (window.location.pathname.includes('vocabulary.html')) {
    window.onload = () => loadQuiz('quiz-container');
}
