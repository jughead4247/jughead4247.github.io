const questions = [

{
    question: "Who leads the Right Arm during the events of the movie?",
    answers: [
        ["Lawrence", 0],
        ["Jorge", 0],
        ["Gally", 0],
        ["Vince", 1]
    ]
},

{
    question: "What was Jorge's occupation before the Flare outbreak?",
    answers: [
        ["Pilot", 1],
        ["Doctor", 0],
        ["Engineer", 0],
        ["Soldier", 0]
    ]
},

{
    question: "Which other Immune is rescued from the train alongside Aris?",
    answers: [
        ["Brenda", 0],
        ["Teresa", 0],
        ["Sonya", 1],
        ["Harriet", 0]
    ]
},

{
    question: "Who is the main person the group discovers is missing from the train?",
    answers: [
        ["Newt", 0],
        ["Minho", 1],
        ["Jorge", 0],
        ["Gally", 0]
    ]
},

{
    question: "Who is WCKD's leader in the movie?",
    answers: [
        ["Hans", 0],
        ["Ava Paige", 1],
        ["Janson", 0],
        ["Vince", 0]
    ]
},

{
    question: "What is the name of the fortified city where WCKD is based?",
    answers: [
        ["The Scorch city", 0],
        ["The Safe Haven", 0],
        ["The Lost City", 0],
        ["The Last City", 1]
    ]
},

{
    question: "Who saves Thomas, Newt, and Frypan from the Cranks in the tunnel outside the Last City?",
    answers: [
        ["Vince and Harriet", 0],
        ["Jorge and Brenda", 1],
        ["Minho and Teresa", 0],
        ["Gally and Lawrence", 0]
    ]
},

{
    question: "Who unexpectedly reveals himself as still alive from the Maze?",
    answers: [
        ["Winston", 0],
        ["Gally", 1],
        ["Chuck", 0],
        ["Alby", 0]
    ]
},

{
    question: "What does Gally say first when he reveals himself to Thomas?",
    answers: [
        ["“You thought I was dead.”", 0],
        ["“Hello, Thomas.”", 0],
        ["“Hey, Greenie.”", 1],
        ["“Long time no see.”", 0]
    ]
},

{
    question: "What happened to Gally before he was believed to be dead?",
    answers: [
        ["Newt attacked him with a knife", 0],
        ["Teresa shot him", 0],
        ["Thomas stabbed him", 0],
        ["Minho threw a spear at him", 1]
    ]
},

{
    question: "Who leads the rebellion operating outside the Last City?",
    answers: [
        ["Lawrence", 1],
        ["Jorge", 0],
        ["Vince", 0],
        ["Gally", 0]
    ]
},

{
    question: "What is Janson's position within WCKD?",
    answers: [
        ["Chairman of WCKD", 0],
        ["Head of Security", 1],
        ["Head of Medical Research", 0],
        ["Head of Hospitality", 0]
    ]
},

{
    question: "What nickname did the Gladers give Janson?",
    answers: [
        ["The Warden", 0],
        ["Snake", 0],
        ["Rat Man", 1],
        ["The Doctor", 0]
    ]
},

{
    question: "On which level were Minho and the other Immune children being held by WCKD?",
    answers: [
        ["Sub-Level 3", 1],
        ["Level 5", 0],
        ["Sub-Level 2", 0],
        ["Level 1", 0]
    ]
},

{
    question: "Which former Glader is revealed to be not Immune to the Flare?",
    answers: [
        ["Gally", 0],
        ["Frypan", 0],
        ["Minho", 0],
        ["Newt", 1]
    ]
},

{
    question: "What does Newt give Thomas shortly before his death?",
    answers: [
        ["A WCKD access card", 0],
        ["A pendant", 1],
        ["A map", 0],
        ["A gun", 0]
    ]
},

{
    question: "Who operates the crane to help the bus carrying the Immune children escape the Last City?",
    answers: [
        ["Vince", 0],
        ["Jorge", 0],
        ["Frypan", 1],
        ["Gally", 0]
    ]
},

{
    question: "Who kills Ava Paige?",
    answers: [
        ["Teresa", 0],
        ["Thomas", 0],
        ["Janson", 1],
        ["Minho", 0]
    ]
},

{
    question: "Who played Lawrence in Maze Runner: The Death Cure?",
    answers: [
        ["Barry Pepper", 0],
        ["Aidan Gillen", 0],
        ["Walton Goggins", 1],
        ["Giancarlo Esposito", 0]
    ]
},

{
    question: "What does Thomas discover inside Newt's pendant at the end?",
    answers: [
        ["A letter from Newt", 1],
        ["A sample of the cure", 0],
        ["A map to the Maze", 0],
        ["A WCKD access code", 0]
    ]
}

];

let currentQuestion = 0;
let selectedAnswers = new Array(questions.length).fill(null);

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const homeInfo = document.getElementById("home-info");

const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const shareButton = document.getElementById("share-btn");
const challengeButton = document.getElementById("challenge-btn");

const backButton = document.getElementById("back-btn");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
shareButton.addEventListener("click", shareResult);
challengeButton.addEventListener("click", shareResult);

backButton.addEventListener("click", goBack);
nextButton.addEventListener("click", goNext);
submitButton.addEventListener("click", showResult);

function startQuiz() {

currentQuestion = 0;
selectedAnswers = new Array(questions.length).fill(null);

startScreen.classList.add("hidden");
resultScreen.classList.add("hidden");
quizScreen.classList.remove("hidden");
homeInfo.classList.add("hidden");

showQuestion();

}

function showQuestion() {

const current = questions[currentQuestion];

questionNumber.textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

questionText.textContent = current.question;

answersContainer.innerHTML = "";

const progress =
    ((currentQuestion + 1) / questions.length) * 100;

progressBar.style.width = `${progress}%`;

current.answers.forEach((answer, index) => {

    const button = document.createElement("button");

    button.className = "answer";
    button.type = "button";
    button.textContent = answer[0];

    if (selectedAnswers[currentQuestion] === index) {
        button.classList.add("selected");
    }

    button.addEventListener("click", () => {
        selectAnswer(index);
    });

    answersContainer.appendChild(button);
});

updateNavigation();

}

function selectAnswer(answerIndex) {

selectedAnswers[currentQuestion] = answerIndex;

const buttons =
    answersContainer.querySelectorAll(".answer");

buttons.forEach((button, index) => {

    button.classList.toggle(
        "selected",
        index === answerIndex
    );

});

updateNavigation();

const questionAtSelection = currentQuestion;

setTimeout(() => {

    if (
        currentQuestion === questionAtSelection &&
        selectedAnswers[questionAtSelection] === answerIndex &&
        currentQuestion < questions.length - 1
    ) {

        currentQuestion++;
        showQuestion();

    }

}, 180);

}

function goNext() {

if (selectedAnswers[currentQuestion] === null) {
    return;
}

if (currentQuestion === questions.length - 1) {

    if (
        selectedAnswers.every(
            answer => answer !== null
        )
    ) {
        showResult();
    }

    return;
}

currentQuestion++;
showQuestion();

}

function goBack() {

if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
}

}

function updateNavigation() {

const isFirst =
    currentQuestion === 0;

const isLast =
    currentQuestion === questions.length - 1;

const currentAnswered =
    selectedAnswers[currentQuestion] !== null;

const allAnswered =
    selectedAnswers.every(
        answer => answer !== null
    );

backButton.disabled = isFirst;

if (isLast) {

    nextButton.classList.add("hidden");
    submitButton.classList.remove("hidden");

    submitButton.disabled = !allAnswered;

    submitButton.textContent =
        allAnswered
            ? "SUBMIT"
            : "Answer All Questions";

} else {

    submitButton.classList.add("hidden");
    nextButton.classList.remove("hidden");

    nextButton.textContent = "Next →";
    nextButton.disabled = !currentAnswered;
}

}

function calculateScore() {

let score = 0;

selectedAnswers.forEach(
    (answerIndex, questionIndex) => {

        if (answerIndex !== null) {

            score +=
                questions[questionIndex]
                    .answers[answerIndex][1];
        }
    }
);

return score;

}

function showResult() {

const correctAnswers = calculateScore();

const score = Math.round(
    (correctAnswers / questions.length) * 100
);

homeInfo.classList.remove("hidden");
quizScreen.classList.add("hidden");
resultScreen.classList.remove("hidden");

document.getElementById("final-score").textContent = `${score}%`;

let title;
let description;
let knowledge;
let icon;

if (score <= 20) {

    title = "⚔️ Maze Recruit";
    description =
        "The Scorch has caught you off guard. It may be time to revisit Maze Runner: The Death Cure and try again.";

    knowledge = "Casual Viewer";
    icon = "⚔️";

} else if (score <= 40) {

    title = "🏃 Scorch Survivor";
    description =
        "You remember some of Thomas's journey, but several details about WCKD, the Last City and the Gladers slipped through the cracks.";

    knowledge = "Casual Fan";
    icon = "🏃";

} else if (score <= 60) {

    title = "🔥 Glader Survivor";
    description =
        "Not bad! You remember many of the movie's major events, characters and the fight against WCKD.";

    knowledge = "Good Fan";
    icon = "🔥";

} else if (score <= 80) {

    title = "⚔️ Right Arm Veteran";
    description =
        "Impressive! You have a strong memory for Thomas, the Gladers, WCKD and the events surrounding the Last City.";

    knowledge = "Dedicated Fan";
    icon = "⚔️";

} else if (score <= 96) {

    title = "🧠 Maze Runner Expert";
    description =
        "Excellent! You remember most of the important characters, events, locations and revelations in The Death Cure.";

    knowledge = "Expert Fan";
    icon = "🧠";

} else {

    title = "👑 Death Cure Master";
    description =
        "Perfect score! You remembered practically every major detail about Thomas, the Gladers, WCKD and their final fight for freedom.";

    knowledge = "Ultimate Fan";
    icon = "👑";
}

document.getElementById("result-title").textContent = title;
document.getElementById("result-description").textContent = description;
document.getElementById("knowledge-level").textContent = knowledge;
document.getElementById("result-icon").textContent = icon;

progressBar.style.width = "100%";

}

function restartQuiz() {

currentQuestion = 0;

selectedAnswers =
    new Array(questions.length).fill(null);

resultScreen.classList.add("hidden");
quizScreen.classList.add("hidden");
startScreen.classList.remove("hidden");
homeInfo.classList.remove("hidden");

progressBar.style.width = "0%";

}

async function shareResult() {

const title =
    document.getElementById("result-title").textContent;

const knowledge =
    document.getElementById("knowledge-level").textContent;

const finalScore =
    document.getElementById("final-score").textContent;

const quizUrl =
    "https://apocalypsequizzes.com/maze-runner-the-death-cure-quiz/";

const shareText =
    `🧪 I scored ${finalScore} on the Maze Runner: The Death Cure Quiz!\n\n` +
    `${title}\n` +
    `Knowledge level: ${knowledge}\n\n` +
    `How well do YOU remember Maze Runner: The Death Cure?`;

const shareData = {
    title: "Maze Runner: The Death Cure Quiz",
    text: shareText,
    url: quizUrl
};

try {

    if (navigator.share) {

        await navigator.share(shareData);

    } else {

        await navigator.clipboard.writeText(
            shareText +
            "\n\n" +
            quizUrl
        );

        alert(
            "Your result has been copied! You can paste it anywhere."
        );
    }

} catch (error) {

    console.log("Sharing cancelled.");

}

}

// ===============================
// GLOBAL SITE MENU
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const siteMenu = document.getElementById("site-menu");

if (menuToggle && siteMenu) {

// OPEN / CLOSE WITH HAMBURGER
menuToggle.addEventListener("click", function (event) {

    event.stopPropagation();

    const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

    siteMenu.hidden = isOpen;

    menuToggle.setAttribute(
        "aria-expanded",
        String(!isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Open navigation"
            : "Close navigation"
    );

});


// CLOSE WHEN CLICKING OUTSIDE
document.addEventListener("click", function (event) {

    if (
        !siteMenu.hidden &&
        !siteMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        siteMenu.hidden = true;

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

    }

});


// CLOSE AFTER CLICKING A MENU LINK
siteMenu.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        siteMenu.hidden = true;

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

    });

});

}