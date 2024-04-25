const easyQuizData = [
  {
    question: "What is microinsurance?",
    options: ["Insurance for microorganisms", "Insurance for small businesses", "Insurance for low-income individuals", "Insurance for microchips"],
    answer: "Insurance for low-income individuals"
  },
  {
    question: "What is a common type of microinsurance product?",
    options: ["Health insurance", "Life insurance", "Property insurance", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of the following is not a characteristic of microinsurance?",
    options: ["Low premiums", "Simple policy structure", "Large coverage amount", "Risk pooling"],
    answer: "Large coverage amount"
  },
  {
    question: "In microinsurance, what is the typical duration of coverage?",
    options: ["5 years", "10 years", "1 year", "3 months"],
    answer: "1 year"
  },
  {
    question: "What is the primary purpose of microinsurance?",
    options: ["Generate profit for insurance companies", "Provide affordable insurance for low-income individuals", "Offer tax benefits to policyholders", "Cover high-value assets"],
    answer: "Provide affordable insurance for low-income individuals"
  },
  {
    question: "Which of the following is a microinsurance provider?",
    options: ["A large multinational insurance company", "A local community cooperative", "Government insurance agency", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What is the main advantage of microinsurance?",
    options: ["Complex policy structures", "High premiums", "Tailored to the needs of low-income individuals", "Exclusive to high-income individuals"],
    answer: "Tailored to the needs of low-income individuals"
  },
  {
    question: "Which type of risk is commonly covered by microinsurance?",
    options: ["Natural disasters", "Luxury item theft", "High-end medical procedures", "Travel insurance"],
    answer: "Natural disasters"
  },
  {
    question: "What is the role of microinsurance in poverty reduction?",
    options: ["Increases poverty", "Has no impact on poverty", "Helps protect against financial shocks", "Leads to economic instability"],
    answer: "Helps protect against financial shocks"
  },
  {
    question: "What is the main challenge in promoting microinsurance?",
    options: ["Lack of demand", "High premium costs", "Limited availability", "Overregulation"],
    answer: "Limited availability"
  }
];

const moderateQuizData = [
  {
    question: "What is the main challenge in implementing microinsurance in developing countries?",
    options: ["Lack of awareness", "High administrative costs", "Lack of technology", "Regulatory constraints"],
    answer: "Lack of awareness"
  },
  // Add more moderate level questions here
];

const veryHardQuizData = [
  {
    question: "Which organization first introduced the concept of microinsurance?",
    options: ["World Health Organization", "United Nations", "World Bank", "International Monetary Fund"],
    answer: "World Bank"
  },
  // Add more very hard level questions here
];

// Fill easy level questions
for (let i = easyQuizData.length; i < 10; i++) {
  easyQuizData.push({
    question: `Question ${i + 1}: Easy`,
    options: [`Option 1 ${i}`, `Option 2 ${i}`, `Option 3 ${i}`, `Option 4 ${i}`],
    answer: `Option 1 ${i}`
  });
}

// Fill moderate level questions
for (let i = moderateQuizData.length; i < 10; i++) {
  moderateQuizData.push({
    question: `Question ${i + 1}: Moderate`,
    options: [`Option 1 ${i}`, `Option 2 ${i}`, `Option 3 ${i}`, `Option 4 ${i}`],
    answer: `Option 1 ${i}`
  });
}

// Fill very hard level questions
for (let i = veryHardQuizData.length; i < 10; i++) {
  veryHardQuizData.push({
    question: `Question ${i + 1}: Very Hard`,
    options: [`Option 1 ${i}`, `Option 2 ${i}`, `Option 3 ${i}`, `Option 4 ${i}`],
    answer: `Option 1 ${i}`
  });
}

let currentQuestion = 0;
let score = 0;
let timerInterval = 15;
let quizData = [];

const startButton = document.getElementById("start-btn");
const levelSelect = document.getElementById("level-select");
const startPage = document.getElementById("start-page");
const quizPage = document.getElementById("quiz-page");
const resultPage = document.getElementById("result-page");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const quitButton = document.getElementById("quit-btn");
const quitButtonResult = document.getElementById("quit-btn-result");
const restartButton = document.getElementById("restart-btn");
const shareButton = document.getElementById("share-btn");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", loadNextQuestion);
quitButton.addEventListener("click", quitGame);
quitButtonResult.addEventListener("click", quitGame);
restartButton.addEventListener("click", restartGame);
shareButton.addEventListener("click", shareGame);

function startQuiz() {
  const selectedLevel = levelSelect.value;
  if (selectedLevel === "easy") {
    quizData = easyQuizData;
  } else if (selectedLevel === "moderate") {
    quizData = moderateQuizData;
  } else if (selectedLevel === "very-hard") {
    quizData = veryHardQuizData;
  }
  startPage.style.display = "none";
  quizPage.style.display = "block";
  resultPage.style.display = "none";
  loadQuestion();
}

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;
  optionsElement.innerHTML = "";
  currentQuizData.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => {
      checkAnswer(option);
    });
    optionsElement.appendChild(button);
  });
  startTimer();
}

function startTimer() {
  let secondsLeft = 15;
  updateTimer(secondsLeft);
  timerInterval = setInterval(() => {
    secondsLeft--;
    updateTimer(secondsLeft);
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      loadNextQuestion();
    }
  }, 1000);
}

function updateTimer(secondsLeft) {
  timerElement.textContent = `Time Left: ${secondsLeft} seconds`;
}

function checkAnswer(selectedOption) {
  const currentQuizData = quizData[currentQuestion];
  if (selectedOption === currentQuizData.answer) {
    score++;
  }
  loadNextQuestion();
}

function loadNextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  clearInterval(timerInterval);
  quizPage.style.display = "none";
  resultPage.style.display = "block";
  scoreElement.textContent = `Your score: ${score}/${quizData.length}`;
  
  const resultContainer = document.createElement("div");
  resultContainer.classList.add("result-container");
  
  quizData.forEach((questionData, index) => {
    const questionResult = document.createElement("p");
    questionResult.textContent = `Question ${index + 1}: Correct answer - ${questionData.answer}`;
    resultContainer.appendChild(questionResult);
  });
  
  resultPage.appendChild(resultContainer);
}

function quitGame() {
  clearInterval(timerInterval);
  currentQuestion = 0;
  score = 0;
  startPage.style.display = "block";
  quizPage.style.display = "none";
  resultPage.style.display = "none";
}

function restartGame() {
  clearInterval(timerInterval);
  currentQuestion = 0;
  score = 0;
  startPage.style.display = "block";
  quizPage.style.display = "none";
  resultPage.style.display = "none";
}

function shareGame() {
  // Add logic to share the game on social media platforms (e.g., WhatsApp, Facebook, Instagram, TikTok)
  alert("Sharing the game...");
}
