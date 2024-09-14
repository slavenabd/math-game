let score = 0;
let totalQuestions = 0;
let startTime;
let currentAnswer = '';
const totalPossibleQuestions = 20;
let incorrectAnswers = [];
let questionSet = new Set();

const questionElement = document.getElementById('question');
const typedAnswerElement = document.getElementById('typed-answer');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const playAgainButton = document.getElementById('play-again');
const startOverButton = document.getElementById('start-over');
const whereToImproveElement = document.getElementById('where-to-improve');
const improvementList = document.getElementById('improvement-list');

let currentQuestion;

function generateQuestion() {
    let num1, num2;
    do {
        num1 = Math.floor(Math.random() * 21);
        num2 = Math.floor(Math.random() * 21);
    } while (questionSet.has(`${num1},${num2}`));

    questionSet.add(`${num1},${num2}`);
    currentQuestion = { num1, num2, answer: num1 + num2 };
    questionElement.textContent = `${num1} + ${num2} = ?`;
    typedAnswerElement.textContent = ''; // Clear the previous answer display
    currentAnswer = ''; // Reset current answer for the new question
}

function startGame() {
    score = 0;
    totalQuestions = 0;
    currentAnswer = '';
    incorrectAnswers = [];
    questionSet.clear();
    startTime = new Date();
    playAgainButton.style.display = 'none';
    whereToImproveElement.style.display = 'none';
    resultElement.textContent = ''; // Clear the result message
    scoreElement.textContent = `Score: ${score}`; // Reset the score display
    generateQuestion();
    updateProgressBar();
}

function updateProgressBar() {
    progressBar.innerHTML = ''; // Clear existing progress dots
    for (let i = 0; i < totalPossibleQuestions; i++) {
        const dot = document.createElement('div');
        dot.classList.add('progress-dot');
        if (i < totalQuestions) {
            if (incorrectAnswers.includes(i)) {
                dot.classList.add('incorrect');
            } else {
                dot.classList.add('correct');
            }
        }
        progressBar.appendChild(dot);
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        // Append the pressed number to the current answer
        currentAnswer += event.key;
        typedAnswerElement.textContent = currentAnswer; // Display the typed answer
    } else if (event.key === 'Enter') {
        // When Enter is pressed, check the answer
        checkAnswer();
    } else if (event.key === 'Backspace') {
        // Remove the last character from the current answer
        currentAnswer = currentAnswer.slice(0, -1);
        typedAnswerElement.textContent = currentAnswer; // Update the display
    }
});

function checkAnswer() {
    const userAnswer = parseInt(currentAnswer, 10);
    let isCorrect = false;
    if (userAnswer === currentQuestion.answer) {
        score++;
        isCorrect = true;
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `Incorrect! The answer was ${currentQuestion.answer}`;
        resultElement.style.color = 'red';
        incorrectAnswers.push(totalQuestions); // Record the incorrect question index
    }
    totalQuestions++;
    scoreElement.textContent = `Score: ${score}`;

    // Keep the player's provided answer during the delay period
    typedAnswerElement.textContent = currentAnswer; 

    updateProgressBar();

    // Delay moving to the next question
    setTimeout(() => {
        if (totalQuestions < totalPossibleQuestions) {
            resultElement.textContent = ''; // Clear the result message
            generateQuestion();
        } else {
            endGame();
        }
    }, 2000); // 2-second delay
}

function endGame() {
    const endTime = new Date();
    const timeTaken = Math.floor((endTime - startTime) / 1000) - totalQuestions * 2; // Subtract 2 seconds per question
    resultElement.textContent = `Game Over! You scored ${score} out of ${totalQuestions} in ${timeTaken} seconds.`;
    playAgainButton.style.display = 'block'; // Show the Play Again button
    displayWhereToImprove();
}

function displayWhereToImprove() {
    whereToImproveElement.style.display = 'block';
    improvementList.innerHTML = ''; // Clear previous data
    if (incorrectAnswers.length > 0) {
        incorrectAnswers.forEach((index) => {
            const question = Array.from(questionSet)[index].split(',').map(Number);
            const listItem = document.createElement('li');
            listItem.textContent = `${question[0]} + ${question[1]} = ${question[0] + question[1]}`;
            improvementList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'Play some more!';
        improvementList.appendChild(listItem);
    }
}

playAgainButton.addEventListener('click', startGame);
startOverButton.addEventListener('click', startGame);

startGame();
