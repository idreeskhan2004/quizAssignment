// Quiz data for all subjects
const quizData = {
    html: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"
            ],
            correct: 0
        },
        {
            question: "Which tag is used to create a hyperlink?",
            options: [
                "<link>",
                "<a>",
                "<href>",
                "<hyperlink>"
            ],
            correct: 1
        },
        {
            question: "Which attribute is used to specify an alternate text for an image?",
            options: [
                "src",
                "alt",
                "title",
                "href"
            ],
            correct: 1
        },
        {
            question: "Which tag is used to define an unordered list?",
            options: [
                "<ol>",
                "<ul>",
                "<li>",
                "<list>"
            ],
            correct: 1
        },
        {
            question: "Which character is used to indicate an end tag?",
            options: [
                "^",
                "/",
                "*",
                "<"
            ],
            correct: 1
        },
        {
            question: "Which element is used for the largest heading?",
            options: [
                "<h6>",
                "<head>",
                "<heading>",
                "<h1>"
            ],
            correct: 3
        },
        {
            question: "Which attribute specifies the URL of the page the link goes to?",
            options: [
                "src",
                "link",
                "href",
                "url"
            ],
            correct: 2
        },
        {
            question: "Which tag is used to define a table row?",
            options: [
                "<td>",
                "<tr>",
                "<th>",
                "<table-row>"
            ],
            correct: 1
        },
        {
            question: "Which tag is used to define an internal style sheet?",
            options: [
                "<css>",
                "<style>",
                "<script>",
                "<link>"
            ],
            correct: 1
        },
        {
            question: "Which input type defines a slider control?",
            options: [
                "slider",
                "range",
                "scroll",
                "number"
            ],
            correct: 1
        }
    ],
    css: [
        {
            question: "What does CSS stand for?",
            options: [
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Computer Style Sheets",
                "Colorful Style Sheets"
            ],
            correct: 1
        },
        {
            question: "Which property is used to change the background color?",
            options: [
                "color",
                "bgcolor",
                "background-color",
                "background"
            ],
            correct: 2
        },
        {
            question: "How do you add a background color for all <h1> elements?",
            options: [
                "all.h1 {background-color:#FFFFFF;}",
                "h1.setAll {background-color:#FFFFFF;}",
                "h1 {background-color:#FFFFFF;}",
                "h1.all {background-color:#FFFFFF;}"
            ],
            correct: 2
        },
        {
            question: "Which property is used to change the font of an element?",
            options: [
                "font-style",
                "font-weight",
                "font-family",
                "text-style"
            ],
            correct: 2
        },
        {
            question: "How do you make the text bold?",
            options: [
                "font:bold;",
                "style:bold;",
                "font-weight:bold;",
                "text-style:bold;"
            ],
            correct: 2
        },
        {
            question: "Which property is used to change the left margin of an element?",
            options: [
                "margin-left",
                "padding-left",
                "indent",
                "left-margin"
            ],
            correct: 0
        },
        {
            question: "How do you select an element with id 'demo'?",
            options: [
                ".demo",
                "#demo",
                "*demo",
                "demo"
            ],
            correct: 1
        },
        {
            question: "How do you select elements with class name 'test'?",
            options: [
                "*test",
                ".test",
                "#test",
                "test"
            ],
            correct: 1
        },
        {
            question: "Which property is used to change the text color of an element?",
            options: [
                "text-color",
                "color",
                "font-color",
                "text-style"
            ],
            correct: 1
        },
        {
            question: "Which property is used to change the spacing between lines?",
            options: [
                "line-height",
                "spacing",
                "line-spacing",
                "text-spacing"
            ],
            correct: 0
        }
    ],
    javascript: [
        {
            question: "Which of the following is a JavaScript data type?",
            options: [
                "style",
                "boolean",
                "div",
                "class"
            ],
            correct: 1
        },
        {
            question: "How do you create a function in JavaScript?",
            options: [
                "function = myFunction()",
                "function myFunction()",
                "function:myFunction()",
                "function => myFunction()"
            ],
            correct: 1
        },
        {
            question: "How do you call a function named 'myFunction'?",
            options: [
                "call myFunction()",
                "myFunction()",
                "call function myFunction()",
                "myFunction"
            ],
            correct: 1
        },
        {
            question: "How to write an IF statement in JavaScript?",
            options: [
                "if i == 5 then",
                "if (i == 5)",
                "if i = 5",
                "if i = 5 then"
            ],
            correct: 1
        },
        {
            question: "How does a FOR loop start?",
            options: [
                "for (i = 0; i <= 5; i++)",
                "for (i = 0; i <= 5)",
                "for i = 1 to 5",
                "for (i <= 5; i++)"
            ],
            correct: 0
        },
        {
            question: "How can you add a comment in JavaScript?",
            options: [
                "//This is a comment",
                "'This is a comment",
                "<!--This is a comment-->",
                "*This is a comment*"
            ],
            correct: 0
        },
        {
            question: "What is the correct way to write a JavaScript array?",
            options: [
                "var colors = (1:'red', 2:'green', 3:'blue')",
                "var colors = ['red', 'green', 'blue']",
                "var colors = 'red', 'green', 'blue'",
                "var colors = {red, green, blue}"
            ],
            correct: 1
        },
        {
            question: "Which operator is used to assign a value to a variable?",
            options: [
                "*",
                "=",
                "-",
                "x"
            ],
            correct: 1
        },
        {
            question: "How do you round the number 7.25 to the nearest integer?",
            options: [
                "Math.round(7.25)",
                "round(7.25)",
                "Math.rnd(7.25)",
                "rnd(7.25)"
            ],
            correct: 0
        },
        {
            question: "Which event occurs when the user clicks on an HTML element?",
            options: [
                "onchange",
                "onclick",
                "onmouseclick",
                "onmouseover"
            ],
            correct: 1
        }
    ]
};

// App state
let currentSubject = null;
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let timer;
let timeLeft = 15;

// DOM elements
const themeToggle = document.getElementById('themeToggle');
const pages = document.querySelectorAll('.page');
const subjectCards = document.querySelectorAll('.subject-card');
const viewLeaderboardBtn = document.getElementById('viewLeaderboard');
const viewLeaderboard2Btn = document.getElementById('viewLeaderboard2');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const retakeQuizBtn = document.getElementById('retakeQuiz');
const newSubjectBtn = document.getElementById('newSubject');
const backToHomeBtn = document.getElementById('backToHome');
const timerElement = document.getElementById('timer');
const progressElement = document.getElementById('progress');
const questionTextElement = document.getElementById('questionText');
const optionsElement = document.getElementById('options');
const quizSubjectElement = document.getElementById('quizSubject');
const finalScoreElement = document.getElementById('finalScore');
const scorePercentageElement = document.getElementById('scorePercentage');
const performanceMessageElement = document.getElementById('performanceMessage');
const answerReviewElement = document.getElementById('answerReview');
const leaderboardBodyElement = document.getElementById('leaderboardBody');

// Initialize the app
function init() {
    // Event listeners
    themeToggle.addEventListener('click', toggleTheme);
    subjectCards.forEach(card => {
        card.addEventListener('click', () => selectSubject(card.dataset.subject));
    });
    viewLeaderboardBtn.addEventListener('click', showLeaderboard);
    viewLeaderboard2Btn.addEventListener('click', showLeaderboard);
    prevBtn.addEventListener('click', showPreviousQuestion);
    nextBtn.addEventListener('click', showNextQuestion);
    retakeQuizBtn.addEventListener('click', retakeQuiz);
    newSubjectBtn.addEventListener('click', chooseNewSubject);
    backToHomeBtn.addEventListener('click', showLandingPage);
    
    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
    
    // Load leaderboard
    updateLeaderboard();
}

// Toggle dark/light theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Show a specific page
function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Select a quiz subject
function selectSubject(subject) {
    currentSubject = subject;
    currentQuestion = 0;
    score = 0;
    userAnswers = new Array(quizData[subject].length).fill(null);
    showQuizPage();
    loadQuestion();
    startTimer();
}

// Show the quiz page
function showQuizPage() {
    showPage('quizPage');
}

// Load the current question
function loadQuestion() {
    const question = quizData[currentSubject][currentQuestion];
    questionTextElement.textContent = `Q${currentQuestion + 1}: ${question.question}`;
    
    // Update progress bar
    progressElement.style.width = `${((currentQuestion + 1) / quizData[currentSubject].length) * 100}%`;
    
    // Clear previous options
    optionsElement.innerHTML = '';
    
    // Add new options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        if (userAnswers[currentQuestion] === index) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(optionElement);
    });
    
    // Update navigation buttons
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === quizData[currentSubject].length - 1 ? 'Finish Quiz' : 'Next';
}

// Select an option
function selectOption(optionIndex) {
    userAnswers[currentQuestion] = optionIndex;
    
    // Update UI to show selected option
    const options = optionsElement.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === optionIndex) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}

// Show the next question
function showNextQuestion() {
    // If no option selected, show alert and return
    if (userAnswers[currentQuestion] === null) {
        alert('Please select an answer before proceeding.');
        return;
    }
    
    // Move to next question or finish quiz
    if (currentQuestion < quizData[currentSubject].length - 1) {
        currentQuestion++;
        loadQuestion();
        resetTimer();
    } else {
        finishQuiz();
    }
}

// Show the previous question
function showPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        resetTimer();
    }
}

// Start the timer
function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            autoProceed();
        }
    }, 1000);
}

// Reset the timer
function resetTimer() {
    startTimer();
}

// Update timer display
function updateTimerDisplay() {
    timerElement.textContent = `${timeLeft}s`;
    
    // Change color based on time left
    timerElement.classList.remove('warning', 'danger');
    if (timeLeft <= 10) {
        timerElement.classList.add('warning');
    }
    if (timeLeft <= 5) {
        timerElement.classList.add('danger');
    }
}

// Automatically proceed to next question when timer runs out
function autoProceed() {
    // If no option selected, mark as unanswered
    if (userAnswers[currentQuestion] === null) {
        userAnswers[currentQuestion] = -1; // -1 indicates unanswered
    }
    
    // Move to next question or finish quiz
    if (currentQuestion < quizData[currentSubject].length - 1) {
        currentQuestion++;
        loadQuestion();
        resetTimer();
    } else {
        finishQuiz();
    }
}

// Finish the quiz and show results
function finishQuiz() {
    clearInterval(timer);
    
    // Calculate score
    score = 0;
    quizData[currentSubject].forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });
    
    // Save score to leaderboard
    saveScore();
    
    // Update results page
    quizSubjectElement.textContent = currentSubject.toUpperCase();
    finalScoreElement.textContent = `${score}/${quizData[currentSubject].length}`;
    
    const percentage = Math.round((score / quizData[currentSubject].length) * 100);
    scorePercentageElement.textContent = `Percentage: ${percentage}%`;
    
    // Set performance message
    if (percentage >= 80) {
        performanceMessageElement.textContent = 'Excellent job! You have mastered this subject!';
    } else if (percentage >= 60) {
        performanceMessageElement.textContent = 'Good effort! Keep learning to improve your skills.';
    } else if (percentage >= 40) {
        performanceMessageElement.textContent = 'Not bad, but there is room for improvement.';
    } else {
        performanceMessageElement.textContent = 'Keep practicing to improve your knowledge.';
    }
    
    // Generate answer review
    answerReviewElement.innerHTML = '';
    quizData[currentSubject].forEach((question, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('question');
        
        const questionHeader = document.createElement('h3');
        questionHeader.textContent = `Q${index + 1}: ${question.question}`;
        reviewItem.appendChild(questionHeader);
        
        const optionsList = document.createElement('div');
        optionsList.classList.add('options');
        
        question.options.forEach((option, optIndex) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            
            if (optIndex === question.correct) {
                optionElement.classList.add('correct');
            } else if (userAnswers[index] === optIndex && userAnswers[index] !== question.correct) {
                optionElement.classList.add('incorrect');
            }
            
            optionElement.textContent = option;
            optionsList.appendChild(optionElement);
        });
        
        reviewItem.appendChild(optionsList);
        answerReviewElement.appendChild(reviewItem);
    });
    
    // Show results page
    showPage('resultsPage');
}

// Save score to localStorage
function saveScore() {
    // Get existing scores or initialize empty array
    const leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard')) || [];
    
    // Create username (in a real app, this would be user input)
    const username = `User${Math.floor(Math.random() * 1000)}`;
    
    // Add new score
    leaderboard.push({
        username,
        subject: currentSubject,
        score,
        total: quizData[currentSubject].length,
        percentage: Math.round((score / quizData[currentSubject].length) * 100),
        date: new Date().toLocaleDateString()
    });
    
    // Sort by percentage (descending) and keep only top 10
    leaderboard.sort((a, b) => b.percentage - a.percentage);
    const topScores = leaderboard.slice(0, 10);
    
    // Save back to localStorage
    localStorage.setItem('quizLeaderboard', JSON.stringify(topScores));
    
    // Update leaderboard display
    updateLeaderboard();
}

// Update leaderboard display
function updateLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard')) || [];
    leaderboardBodyElement.innerHTML = '';
    
    if (leaderboard.length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 5;
        cell.textContent = 'No scores yet. Be the first to take the quiz!';
        cell.style.textAlign = 'center';
        row.appendChild(cell);
        leaderboardBodyElement.appendChild(row);
        return;
    }
    
    leaderboard.forEach((entry, index) => {
        const row = document.createElement('tr');
        
        const rankCell = document.createElement('td');
        rankCell.textContent = `#${index + 1}`;
        if (index === 0) rankCell.innerHTML += ' <span class="badge badge-success">Top</span>';
        row.appendChild(rankCell);
        
        const nameCell = document.createElement('td');
        nameCell.textContent = entry.username;
        row.appendChild(nameCell);
        
        const subjectCell = document.createElement('td');
        subjectCell.textContent = entry.subject.toUpperCase();
        row.appendChild(subjectCell);
        
        const scoreCell = document.createElement('td');
        scoreCell.textContent = `${entry.score}/${entry.total} (${entry.percentage}%)`;
        row.appendChild(scoreCell);
        
        const dateCell = document.createElement('td');
        dateCell.textContent = entry.date;
        row.appendChild(dateCell);
        
        leaderboardBodyElement.appendChild(row);
    });
}

// Show leaderboard page
function showLeaderboard() {
    updateLeaderboard();
    showPage('leaderboardPage');
}

// Retake the current quiz
function retakeQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = new Array(quizData[currentSubject].length).fill(null);
    showQuizPage();
    loadQuestion();
    startTimer();
}

// Choose a new subject
function chooseNewSubject() {
    showPage('landingPage');
}

// Show landing page
function showLandingPage() {
    showPage('landingPage');
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);