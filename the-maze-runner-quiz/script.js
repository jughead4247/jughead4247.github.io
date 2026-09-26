const questions = [

    {
        question: "Who is the first person Thomas sees when the Box opens?",
        answers: [
            ["Alby", 0],
            ["Chuck", 0],
            ["Gally", 1],
            ["Newt", 0]
        ]
    },

    {
        question: "What is the name of the area where the boys live?",
        answers: [
            ["The Haven", 0],
            ["The Glade", 1],
            ["The Colony", 0],
            ["The Settlement", 0]
        ]
    },

    {
        question: "Who is Alby's second-in-command?",
        answers: [
            ["Winston", 0],
            ["Minho", 0],
            ["Gally", 0],
            ["Newt", 1]
        ]
    },

    {
        question: "What is the area used to hold prisoners in the Glade?",
        answers: [
            ["The Box", 0],
            ["The Cage", 0],
            ["The Pit", 1],
            ["The Slammer", 0]
        ]
    },

    {
        question: "Which Glader is responsible for tending to injured people?",
        answers: [
            ["Jeff", 1],
            ["Winston", 0],
            ["Minho", 0],
            ["Frypan", 0]
        ]
    },

    {
        question: "Who is the Keeper of the Runners?",
        answers: [
            ["Winston", 0],
            ["Minho", 1],
            ["Alby", 0],
            ["Gally", 0]
        ]
    },

    {
        question: "What did the Gladers call the creatures living in the Maze?",
        answers: [
            ["Trackers", 0],
            ["Wargs", 0],
            ["Grievers", 1],
            ["Cranks", 0]
        ]
    },

    {
        question: "What does Gally emphasize about the rules of the Maze?",
        answers: [
            ["The Runners should stop exploring it", 0],
            ["Teresa knows the way out", 0],
            ["It can be destroyed", 0],
            ["The rules must be followed", 1]
        ]
    },

    {
        question: "Who is the Glader found badly injured after being attacked by a Griever?",
        answers: [
            ["Jeff", 0],
            ["Ben", 1],
            ["Zart", 0],
            ["Winston", 0]
        ]
    },

    {
        question: "What process does a Glader undergo after being stung by a Griever?",
        answers: [
            ["They become Runners", 0],
            ["They lose their ability to speak", 0],
            ["They undergo the Changing", 1],
            ["They immediately die", 0]
        ]
    },

    {
        question: "Who was banished from the Glade after attacking Thomas while undergoing the Changing?",
        answers: [
            ["Ben", 1],
            ["Alby", 0],
            ["Minho", 0],
            ["Gally", 0]
        ]
    },

    {
        question: "Who decides that Thomas should become a Runner?",
        answers: [
            ["Winston", 0],
            ["Newt", 1],
            ["Gally", 0],
            ["Alby", 0]
        ]
    },

    {
        question: "How many sections is the Maze divided into?",
        answers: [
            ["8", 1],
            ["6", 0],
            ["10", 0],
            ["7", 0]
        ]
    },

    {
        question: "What does Teresa have with her when she arrives?",
        answers: [
            ["A map", 0],
            ["A radio", 0],
            ["Two syringes", 1],
            ["A gun", 0]
        ]
    },

    {
        question: "What does the note say about Teresa's arrival?",
        answers: [
            ["She knows the Maze's exit", 0],
            ["She is the last person to be sent", 1],
            ["She is the first girl sent", 0],
            ["She is the new leader", 0]
        ]
    },

    {
        question: "What do the syringes contain?",
        answers: [
            ["A serum that can cure a Griever sting", 1],
            ["A memory serum", 0],
            ["A poison", 0],
            ["A sleeping drug", 0]
        ]
    },

    {
        question: "Which major Glader is killed during the Griever attack?",
        answers: [
            ["Frypan", 0],
            ["Minho", 0],
            ["Newt", 0],
            ["Alby", 1]
        ]
    },

    {
        question: "What did Chuck give Thomas before he went to the Maze?",
        answers: [
            ["A small knife", 0],
            ["A necklace", 0],
            ["A wooden carving", 1],
            ["A drawing", 0]
        ]
    },

    {
        question: "What does Teresa say she has triggered?",
        answers: [
            ["The Griever Attack", 0],
            ["The Ending", 1],
            ["The Maze Code", 0],
            ["The Escape", 0]
        ]
    },

    {
        question: "Why were the Gladers placed in the Maze?",
        answers: [
            ["To establish a new colony", 0],
            ["As punishment", 0],
            ["To train as soldiers", 0],
            ["As part of an experiment", 1]
        ]
    },

    {
        question: "What organization is revealed to be behind the Maze experiment?",
        answers: [
            ["The Right Arm", 0],
            ["WCKD", 1],
            ["FEMA", 0],
            ["WHO", 0]
        ]
    },

    {
        question: "What does WCKD stand for in the movie?",
        answers: [
            ["World Catastrophe Killzone Department", 1],
            ["Worldwide Catastrophe Research Department", 0],
            ["World Crisis Killzone Division", 0],
            ["World Catastrophe Knowledge Division", 0]
        ]
    },

    {
        question: "What happened to the world before the Flare virus devastated humanity?",
        answers: [
            ["An alien invasion", 0],
            ["A worldwide famine", 0],
            ["The sun scorched the world", 1],
            ["Nuclear war", 0]
        ]
    },

    {
        question: "What disease is mentioned as devastating humanity?",
        answers: [
            ["The Burn", 0],
            ["The Blight", 0],
            ["The Fever", 0],
            ["The Flare", 1]
        ]
    },

    {
        question: "Who appears in the recorded message explaining the experiment?",
        answers: [
            ["Brenda", 0],
            ["Ava Paige", 1],
            ["Newt", 0],
            ["Teresa", 0]
        ]
    }

];


let currentQuestion = 0;
let selectedAnswers = new Array(questions.length).fill(null);


// ===============================
// DOM ELEMENTS
// ===============================

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const homeInfo = document.getElementById("home-info");
const suggestionsCard = document.getElementById("suggestions-card");

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


// ===============================
// EVENT LISTENERS
// ===============================

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
shareButton.addEventListener("click", shareResult);
challengeButton.addEventListener("click", shareResult);

backButton.addEventListener("click", goBack);
nextButton.addEventListener("click", goNext);
submitButton.addEventListener("click", showResult);


// ===============================
// START QUIZ
// ===============================

function startQuiz() {

    currentQuestion = 0;
    selectedAnswers = new Array(questions.length).fill(null);

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    homeInfo.classList.add("hidden");
    suggestionsCard.classList.add("hidden");

    showQuestion();

}


// ===============================
// SHOW QUESTION
// ===============================

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


// ===============================
// SELECT ANSWER
// ===============================

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


// ===============================
// NEXT
// ===============================

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


// ===============================
// BACK
// ===============================

function goBack() {

    if (currentQuestion > 0) {

        currentQuestion--;
        showQuestion();

    }

}


// ===============================
// NAVIGATION STATE
// ===============================

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


// ===============================
// CALCULATE SCORE
// ===============================

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


// ===============================
// SHOW RESULT
// ===============================

function showResult() {

    const correctAnswers = calculateScore();

    const totalQuestions = questions.length;

    const incorrectAnswers =
        totalQuestions - correctAnswers;

    const score = Math.round(
        (correctAnswers / totalQuestions) * 100
    );

    const accuracy = score;


    // Screen visibility

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    homeInfo.classList.remove("hidden");
    suggestionsCard.classList.remove("hidden");


    // Final score

    document.getElementById("final-score").textContent =
        `${score}%`;


    // ===============================
    // RESULT BREAKDOWN
    // ===============================

    document.getElementById("correct-count").textContent =
        correctAnswers;

    document.getElementById("incorrect-count").textContent =
        incorrectAnswers;

    document.getElementById("total-count").textContent =
        totalQuestions;

    document.getElementById("accuracy-percent").textContent =
        `${accuracy}%`;


    // ===============================
    // RESULT LEVEL
    // ===============================

    let title;
    let description;
    let knowledge;
    let icon;


    if (score <= 20) {

        title = "🌱 Glade Newcomer";

        description =
            "The Glade, Maze and Grievers are still a little hazy. It may be time to return to the Maze and try again.";

        knowledge = "Casual Viewer";
        icon = "🌱";


    } else if (score <= 40) {

        title = "🏃 Maze Survivor";

        description =
            "You remember some of Thomas's journey, but several details about the Glade, Maze and Grievers slipped through the cracks.";

        knowledge = "Casual Fan";
        icon = "🏃";


    } else if (score <= 60) {

        title = "🔥 Glade Survivor";

        description =
            "Not bad! You remember many of the movie's major characters, events and details surrounding the Maze.";

        knowledge = "Good Fan";
        icon = "🔥";


    } else if (score <= 80) {

        title = "⚙️ Maze Runner Veteran";

        description =
            "Impressive! You have a strong memory for Thomas, Teresa, the Glade, the Grievers and the escape from the Maze.";

        knowledge = "Dedicated Fan";
        icon = "⚙️";


    } else if (score <= 96) {

        title = "🧩 Maze Expert";

        description =
            "Excellent! You remember most of the important characters, events and details behind the Maze experiment.";

        knowledge = "Expert Fan";
        icon = "🧩";


    } else {

        title = "👑 Maze Legend";

        description =
            "Perfect score! You remembered practically every major detail of Thomas's journey through the Glade and the Maze.";

        knowledge = "Ultimate Fan";
        icon = "👑";

    }


    document.getElementById("result-title").textContent =
        title;

    document.getElementById("result-description").textContent =
        description;

    document.getElementById("knowledge-level").textContent =
        knowledge;

    document.getElementById("result-icon").textContent =
        icon;


    progressBar.style.width = "100%";

}


// ===============================
// RESTART QUIZ
// ===============================

function restartQuiz() {

    currentQuestion = 0;

    selectedAnswers =
        new Array(questions.length).fill(null);


    resultScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");

    startScreen.classList.remove("hidden");

    homeInfo.classList.remove("hidden");
    suggestionsCard.classList.add("hidden");

    progressBar.style.width = "0%";

}


// ===============================
// SHARE RESULT
// ===============================

async function shareResult() {

    const title =
        document.getElementById("result-title").textContent;

    const knowledge =
        document.getElementById("knowledge-level").textContent;

    const finalScore =
        document.getElementById("final-score").textContent;

    const quizUrl =
        "https://apocalypsequizzes.com/the-maze-runner-quiz/";


    const shareText =
        `🧩 I scored ${finalScore} on The Maze Runner Movie Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU remember The Maze Runner?`;


    const shareData = {
        title: "The Maze Runner Movie Quiz",
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

const menuToggle =
    document.getElementById("menu-toggle");

const siteMenu =
    document.getElementById("site-menu");


if (menuToggle && siteMenu) {


    // OPEN / CLOSE WITH HAMBURGER

    menuToggle.addEventListener(
        "click",
        function (event) {

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

        }
    );


    // CLOSE WHEN CLICKING OUTSIDE

    document.addEventListener(
        "click",
        function (event) {

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

        }
    );


    // CLOSE AFTER CLICKING MENU LINK

    siteMenu
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

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
            );

        });

}
