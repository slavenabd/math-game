let score = 0;
let totalQuestions = 0;
let startTime;
let currentAnswer = '';
const totalPossibleQuestions = 20;
let incorrectAnswers = [];
let questionSet = new Set(); // Stores keys like "op,num1,num2" for uniqueness check
let questionsHistory = []; // Stores question objects in order

const questionElement = document.getElementById('question');
const typedAnswerElement = document.getElementById('typed-answer');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const playAgainButton = document.getElementById('play-again');
const startOverButton = document.getElementById('start-over');
const whereToImproveElement = document.getElementById('where-to-improve');
const improvementList = document.getElementById('improvement-list');

// Settings Elements
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const closeSettingsBtn = document.querySelector('.close-btn');
const saveSettingsBtn = document.getElementById('save-settings');

// Default Settings
let minRange = 0;
let maxRange = 20;
let enabledOps = ['+'];

let currentQuestion;

// Helper to get random integer inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateSettings() {
    const minInput = parseInt(document.getElementById('min-val').value, 10);
    const maxInput = parseInt(document.getElementById('max-val').value, 10);
    
    // Validate range
    if (isNaN(minInput) || isNaN(maxInput) || minInput > maxInput) {
        alert("Invalid number range. Ensure Min <= Max.");
        return false;
    }
    
    minRange = minInput;
    maxRange = maxInput;
    
    enabledOps = [];
    if (document.getElementById('op-add').checked) enabledOps.push('+');
    if (document.getElementById('op-sub').checked) enabledOps.push('-');
    if (document.getElementById('op-mul').checked) enabledOps.push('*');
    if (document.getElementById('op-div').checked) enabledOps.push('/');

    if (enabledOps.length === 0) {
        alert("Please select at least one operation.");
        // Revert to + default UI
        document.getElementById('op-add').checked = true;
        enabledOps.push('+');
        return false;
    }
    return true;
}

// Settings Modal Events
settingsBtn.onclick = () => {
    settingsModal.style.display = "flex";
}
closeSettingsBtn.onclick = () => {
    settingsModal.style.display = "none";
}
window.onclick = (event) => {
    if (event.target == settingsModal) {
        settingsModal.style.display = "none";
    }
}
saveSettingsBtn.onclick = () => {
    if (updateSettings()) {
        settingsModal.style.display = "none";
        startGame(); // Restart with new settings
    }
}

function generateQuestion() {
    let num1, num2, answer, op;
    let key;
    let attempts = 0;
    
    do {
        op = enabledOps[Math.floor(Math.random() * enabledOps.length)];
        attempts++;
        
        // Give up on uniqueness if it takes too long (e.g. small range)
        if (attempts > 50) {
            // Proceed with whatever we generated last or generate one without check
            // We will just break the loop logic below by ignoring the Set check if attempts > 50
        }

        if (op === '/') {
            // Division: num1 / num2 = answer
            // num1 (dividend) in [min, max]
            // num2 (divisor) in [1, max] (avoid 0)
            // num1 must be multiple of num2
            
            // Pick num2 first
            num2 = getRandomInt(1, maxRange);
            if (num2 === 0) num2 = 1; // Safety
            
            // Find valid num1s
            // Start at first multiple of num2 >= minRange
            let start = Math.ceil(minRange / num2) * num2;
            let validNum1s = [];
            for (let i = start; i <= maxRange; i += num2) {
                validNum1s.push(i);
            }
            
            if (validNum1s.length === 0) continue; // Try again
            
            num1 = validNum1s[Math.floor(Math.random() * validNum1s.length)];
            answer = num1 / num2;
            
        } else if (op === '*') {
            num1 = getRandomInt(minRange, maxRange);
            num2 = getRandomInt(minRange, maxRange);
            answer = num1 * num2;
            
        } else if (op === '-') {
            num1 = getRandomInt(minRange, maxRange);
            num2 = getRandomInt(minRange, maxRange);
            // Ensure result >= 0
            if (num1 < num2) {
                let temp = num1; num1 = num2; num2 = temp;
            }
            answer = num1 - num2;
            
        } else { // +
            num1 = getRandomInt(minRange, maxRange);
            num2 = getRandomInt(minRange, maxRange);
            answer = num1 + num2;
        }

        key = `${op},${num1},${num2}`;

    } while (questionSet.has(key) && attempts <= 50);

    questionSet.add(key);
    currentQuestion = { num1, num2, op, answer };
    questionsHistory.push(currentQuestion);
    
    let opSymbol = op;
    if (op === '*') opSymbol = '×';
    if (op === '/') opSymbol = '÷';
    if (op === '-') opSymbol = '−';

    questionElement.textContent = `${num1} ${opSymbol} ${num2} = ?`;
    typedAnswerElement.textContent = ''; // Clear the previous answer display
    currentAnswer = ''; // Reset current answer for the new question
}

function startGame() {
    score = 0;
    totalQuestions = 0;
    currentAnswer = '';
    incorrectAnswers = [];
    questionSet.clear();
    questionsHistory = [];
    startTime = new Date();
    playAgainButton.style.display = 'none';
    startOverButton.style.display = 'block';
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
    // Allow empty answer to count as wrong? Or do nothing?
    // Current logic: parseInt('') is NaN.
    if (isNaN(userAnswer) && currentAnswer !== '') return; // Should allow 0? parseInt('0') is 0.
    
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
    startOverButton.style.display = 'none';
    displayWhereToImprove();
}

function displayWhereToImprove() {
    whereToImproveElement.style.display = 'block';
    improvementList.innerHTML = ''; // Clear previous data
    if (incorrectAnswers.length > 0) {
        incorrectAnswers.forEach((index) => {
            const q = questionsHistory[index];
            if (q) {
                let sym = q.op;
                if (sym === '*') sym = '×';
                if (sym === '/') sym = '÷';
                if (sym === '-') sym = '−';
                
                const listItem = document.createElement('li');
                listItem.textContent = `${q.num1} ${sym} ${q.num2} = ${q.answer}`;
                improvementList.appendChild(listItem);
            }
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
