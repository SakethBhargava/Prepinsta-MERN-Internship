const quizData = [
    {
        question: "What is 2 + 2?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
    },
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 120;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuizData = quizData[currentQuestion];

    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = '';

    currentQuizData.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option');
        optionButton.value = option;
        optionButton.innerText = option;
        optionButton.addEventListener('click', selectOption);
        optionsElement.appendChild(optionButton);
    });
}

function selectOption(event) {
    const selectedOption = event.target.value;
    const currentQuizData = quizData[currentQuestion];

    if (selectedOption === currentQuizData.correctAnswer) {
        score++;
        document.getElementById('score').innerText = score;
    }

    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        document.getElementById('question-number').innerText = currentQuestion + 1;
        displayQuestion();
    } else {
        alert(`Quiz finished! Your score is: ${score}`);
    }
}

function updateTimer() {
    const timerElement = document.getElementById('timer');
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    timerElement.innerText = `${minutes}:${seconds}`;
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        alert("Time's up!");
    }
    timeLeft--;
}
const timerInterval = setInterval(updateTimer, 1000);
displayQuestion();
