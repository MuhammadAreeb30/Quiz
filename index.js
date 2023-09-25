const quizWeb = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hyper Text Markup Language",
        b: "Hyper Text Super Language",
        c: "Hey Text Mokup Lunch",
        d: "He Tell Me",
        ans: "ans1"
    }, {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheep",
        b: "Cartoon Style Sheets",
        c: "Cascading Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans3"
    }, {
        question: "Q3: What is the full form of HTTP?",
        a: "HyperText Transfer Product",
        b: "HyperText Test Protocol",
        c: "Hy Transfer Protocol",
        d: "HyperText Transfer Protocol",
        ans: "ans4"
    }, {
        question: "Q4: What is the full form of JS?",
        a: "JavaSuper",
        b: "JavaScript",
        c: "JustScript",
        d: "JordenShose",
        ans: "ans2"
    }
];
const question = document.querySelector('.question');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');
let submit = document.querySelector('.submit');
let answers = document.querySelectorAll('.answer');
let showScore = document.querySelector('#showScore');
let quizIndex = 0;
let score = 0;

const loadQuiz = () => {
    question.innerText = quizWeb[quizIndex].question;
    option1.innerText = quizWeb[quizIndex].a;
    option2.innerText = quizWeb[quizIndex].b;
    option3.innerText = quizWeb[quizIndex].c;
    option4.innerText = quizWeb[quizIndex].d;
}

loadQuiz();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curElem) => {
        if (curElem.checked) {
            answer = curElem.id;
        }
    });
    return answer;
}

const deSelectAll = () => {
    answers.forEach((curElem) => {
curElem.checked = false;
    });
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    if (checkedAnswer === quizWeb[quizIndex].ans) {
        score++;
    };
    quizIndex++;
    deSelectAll();
    if (quizIndex < quizWeb.length) {
        loadQuiz();
    } else {
        showScore.innerHTML = `
    <h3> You Scored ${score}/${quizWeb.length} 😎🤞<h3/>
    <button class="btn" onclick="location.reload()"> Play Again <button/>
    `;
        showScore.classList.remove('scoreArea');
        showScore.classList.add('bg');
    };
});


