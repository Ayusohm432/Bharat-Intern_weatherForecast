const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');

let currentQuestionIndex = 0;

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Madrid', correct: false },
            { text: 'Rome', correct: false }
        ]
    },
    // Add more questions here
];

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer) {
    const correct = answer.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.innerText === answer.text && correct);
    });
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
