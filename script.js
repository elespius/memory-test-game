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
    question: "Who typically benefits from microinsurance?",
    options: ["High-income individuals", "Middle-income individuals", "Low-income individuals", "Senior citizens"],
    answer: "Low-income individuals"
  },
  {
    question: "What is the primary purpose of microinsurance?",
    options: ["To make profits for insurance companies", "To cover catastrophic losses", "To provide insurance for expensive items", "To protect low-income individuals"],
    answer: "To protect low-income individuals"
  },
  {
    question: "What does microinsurance help protect against?",
    options: ["Natural disasters", "Loss of employment", "Illness and accidents", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Where is microinsurance most commonly found?",
    options: ["Developed countries", "Rural areas", "Urban centers", "Industrialized nations"],
    answer: "Rural areas"
  },
  {
    question: "What is an important characteristic of microinsurance policies?",
    options: ["They are expensive", "They have high coverage limits", "They are tailored to the needs of low-income individuals", "They are only available to the wealthy"],
    answer: "They are tailored to the needs of low-income individuals"
  },
  {
    question: "Which organization is known for promoting microinsurance?",
    options: ["World Bank", "International Monetary Fund", "World Health Organization", "United Nations"],
    answer: "World Bank"
  },
  {
    question: "What is an example of a microinsurance model?",
    options: ["Community-based insurance", "Corporate insurance", "Government-funded insurance", "Private insurance"],
    answer: "Community-based insurance"
  },
  {
    question: "What is an important benefit of microinsurance?",
    options: ["It reduces poverty", "It only benefits the wealthy", "It is unaffordable for most people", "It covers rare events"],
    answer: "It reduces poverty"
  }
];

const moderateQuizData = [
  {
    question: "What challenges does microinsurance face?",
    options: ["Low awareness", "High costs", "Regulatory constraints", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What is an example of a microinsurance product?",
    options: ["Crop insurance", "Luxury car insurance", "Yacht insurance", "Private jet insurance"],
    answer: "Crop insurance"
  },
  {
    question: "What is an advantage of microinsurance?",
    options: ["It provides coverage for low-value items", "It is inaccessible to most people", "It only covers rare events", "It promotes financial inclusion"],
    answer: "It promotes financial inclusion"
  },
  {
    question: "What is an example of a microinsurance scheme?",
    options: ["Weather index insurance", "Multi-million dollar insurance", "Celebrity insurance", "Space travel insurance"],
    answer: "Weather index insurance"
  },
  {
    question: "Why is microinsurance important?",
    options: ["It helps protect against financial risks", "It is only for the wealthy", "It is not widely available", "It only covers high-value items"],
    answer: "It helps protect against financial risks"
  },
  {
    question: "What role does microinsurance play in development?",
    options: ["It promotes economic stability", "It is a luxury", "It is only for developed countries", "It is irrelevant"],
    answer: "It promotes economic stability"
  },
  {
    question: "What is a characteristic of microinsurance?",
    options: ["It is affordable", "It is only for the wealthy", "It provides unlimited coverage", "It is limited to specific regions"],
    answer: "It is affordable"
  },
  {
    question: "What does microinsurance cover?",
    options: ["Healthcare expenses", "Funeral costs", "Crop losses", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What is a common feature of microinsurance?",
    options: ["Premiums are low", "Policies have high deductibles", "Coverage is limited", "Claims are rarely paid out"],
    answer: "Premiums are low"
  },
  {
    question: "What is a key goal of microinsurance?",
    options: ["To provide financial protection", "To exclude low-income individuals", "To offer luxury services", "To maximize profits"],
    answer: "To provide financial protection"
  }
];

const veryHardQuizData = [
  {
    question: "What are the major barriers to microinsurance uptake?",
    options: ["Low awareness", "High costs", "Regulatory issues", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What is a significant challenge for microinsurance providers?",
    options: ["Risk management", "Profit maximization", "Expanding coverage", "Low demand"],
    answer: "Risk management"
  },
  {
    question: "What is an example of a microinsurance program?",
    options: ["Weather index insurance", "Private jet insurance", "Celebrity insurance", "Space travel insurance"],
    answer: "Weather index insurance"
  },
  {
    question: "What is a common feature of microinsurance schemes?",
    options: ["Affordability", "Exclusivity", "Complexity", "Limited coverage"],
    answer: "Affordability"
  },
  {
    question: "What role does microinsurance play in poverty reduction?",
    options: ["It helps protect assets", "It targets high-income individuals", "It increases inequality", "It promotes financial exclusion"],
    answer: "It helps protect assets"
  },
  {
    question: "What is a challenge for microinsurance distribution?",
    options: ["Geographic barriers", "High premiums", "Exclusive eligibility criteria", "High claim rates"],
    answer: "Geographic barriers"
  },
  {
    question: "What is an important consideration in microinsurance design?",
    options: ["Simplicity", "Exclusivity", "High premiums", "Limited coverage"],
    answer: "Simplicity"
  },
  {
    question: "What is a key benefit of microinsurance?",
    options: ["Financial protection", "Exclusivity", "Complexity", "Limited coverage"],
    answer: "Financial protection"
  },
  {
    question: "What is an example of a microinsurance innovation?",
    options: ["Mobile insurance", "Luxury insurance", "Yacht insurance", "Private jet insurance"],
    answer: "Mobile insurance"
  },
  {
    question: "What is a challenge for microinsurance sustainability?",
    options: ["Low premium payments", "High claim rates", "Complexity", "Exclusivity"],
    answer: "Low premium payments"
  }
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
let timerInterval;
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
  quizPage.style.display = "none";
  resultPage.style.display = "block";
  scoreElement.textContent = `Your score: ${score}/${quizData.length}`;
}

function quitGame() {
  currentQuestion = 0;
  score = 0;
  startPage.style.display = "block";
  quizPage.style.display = "none";
  resultPage.style.display = "none";
}

function restartGame() {
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

// JavaScript for WhatsApp functionality
function openWhatsAppChat() {
  window.open("https://api.whatsapp.com/send?phone=255747619168&text=Hello%20from%20the%20Memory%20Test%20game!", "_blank");
}
