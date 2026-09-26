const questions = [

    {
        question: "What day of the apocalypse is shown when the film opens?",
        answers: [
            ["Day 89", 1],
            ["Day 27", 0],
            ["Day 112", 0],
            ["Day 47", 0]
        ]
    },

    {
        question: "What is the name of the family at the center of A Quiet Place?",
        answers: [
            ["The Carter family", 0],
            ["The Miller family", 0],
            ["The Abbott family", 1],
            ["The Baker family", 0]
        ]
    },

    {
        question: "What is the name of the mother in the Abbott family?",
        answers: [
            ["Sarah Abbott", 0],
            ["Emily Abbott", 0],
            ["Evelyn Abbott", 1],
            ["Regan Abbott", 0]
        ]
    },

    {
        question: "What condition does Regan Abbott have?",
        answers: [
            ["She has epilepsy", 0],
            ["She is blind", 0],
            ["She has a speech disorder", 0],
            ["She is deaf", 1]
        ]
    },

    {
        question: "Where is the Abbott family searching for supplies at the beginning of the film?",
        answers: [
            ["A railway station", 0],
            ["An abandoned store", 1],
            ["A military warehouse", 0],
            ["An abandoned hospital", 0]
        ]
    },

    {
        question: "What toy does Beau find in the abandoned store?",
        answers: [
            ["A toy robot", 0],
            ["A toy helicopter", 0],
            ["A toy space shuttle", 1],
            ["A toy car", 0]
        ]
    },

    {
        question: "Who secretly gives Beau the toy back?",
        answers: [
            ["Regan", 1],
            ["Marcus", 0],
            ["Lee", 0],
            ["Evelyn", 0]
        ]
    },

    {
        question: "Where does the Abbott family live?",
        answers: [
            ["Inside a forest cabin", 0],
            ["In an abandoned military base", 0],
            ["On an isolated farm", 1],
            ["Inside an underground bunker", 0]
        ]
    },

    {
        question: "Approximately how many days after the invasion does the main story of A Quiet Place take place?",
        answers: [
            ["383 days", 0],
            ["89 days", 0],
            ["219 days", 0],
            ["472 days", 1]
        ]
    },

    {
        question: "Why has the family created paths covered with sand around their property?",
        answers: [
            ["To make their footsteps quieter", 1],
            ["To hide their tracks", 0],
            ["To mark safe areas", 0],
            ["To prevent animals from approaching", 0]
        ]
    },

    {
        question: "Why is sign language particularly important to the Abbott family?",
        answers: [
            ["Marcus cannot read", 0],
            ["Regan is deaf", 1],
            ["Evelyn cannot hear", 0],
            ["Lee cannot speak", 0]
        ]
    },

    {
        question: "What type of hearing device does Regan use?",
        answers: [
            ["A tracking device", 0],
            ["A medical monitor", 0],
            ["A radio receiver", 0],
            ["A cochlear implant", 1]
        ]
    },

    {
        question: "What does Lee demonstrate to Marcus at the waterfall?",
        answers: [
            ["How to track a creature", 0],
            ["How to signal Regan", 0],
            ["How to mask their voices with the sound of the waterfall", 1],
            ["How to communicate by radio", 0]
        ]
    },

    {
        question: "What does Evelyn accidentally knock over after stepping on the nail?",
        answers: [
            ["A metal bucket", 0],
            ["A picture frame", 1],
            ["A radio", 0],
            ["A lamp", 0]
        ]
    },

    {
        question: "Why does the Abbott family turn on the red lights around the property?",
        answers: [
            ["To indicate that the generator is running", 0],
            ["To signal that the family should return home", 0],
            ["The power system is failing", 0],
            ["To warn that a creature is nearby", 1]
        ]
    },

    {
        question: "What does Evelyn use to distract the creature inside the house?",
        answers: [
            ["An egg timer", 1],
            ["A toy space shuttle", 0],
            ["A flashlight", 0],
            ["A radio", 0]
        ]
    },

    {
        question: "What does Lee tell Marcus to do after they see the red lights?",
        answers: [
            ["Turn off the generator", 0],
            ["Set off the fireworks", 1],
            ["Hide in the basement", 0],
            ["Run to the waterfall", 0]
        ]
    },

    {
        question: "Where does Lee take Evelyn and the baby after returning to the farmhouse?",
        answers: [
            ["The farmhouse attic", 0],
            ["The abandoned store", 0],
            ["The hidden space beneath the barn", 1],
            ["The grain silo", 0]
        ]
    },

    {
        question: "What does Lee communicate to Regan immediately before sacrificing himself?",
        answers: [
            ["That Marcus is safe", 0],
            ["That she must leave the farm", 0],
            ["That it's all her fault", 0],
            ["That he has always loved her", 1]
        ]
    },

    {
        question: "What does the creature expose when it reacts violently to the high-pitched feedback?",
        answers: [
            ["Its heart", 0],
            ["Its ears", 0],
            ["Its eyes", 0],
            ["Vulnerable tissue beneath its head armor", 1]
        ]
    },

    {
        question: "What does Regan place her hearing device against to amplify its feedback?",
        answers: [
            ["A generator", 0],
            ["A radio microphone", 1],
            ["A telephone", 0],
            ["A television", 0]
        ]
    },

    {
        question: "What weapon does Evelyn use when the creature's vulnerable tissue is exposed?",
        answers: [
            ["Shotgun", 1],
            ["Hunting knife", 0],
            ["Rifle", 0],
            ["Pistol", 0]
        ]
    },

    {
        question: "Who plays Lee Abbott?",
        answers: [
            ["Noah Jupe", 0],
            ["John Krasinski", 1],
            ["Cillian Murphy", 0],
            ["Djimon Hounsou", 0]
        ]
    },

    {
        question: "Who directed A Quiet Place (2018)?",
        answers: [
            ["Jordan Peele", 0],
            ["Matt Reeves", 0],
            ["John Krasinski", 1],
            ["Michael Bay", 0]
        ]
    },

    {
        question: "What are the alien creatures commonly called in A Quiet Place?",
        answers: [
            ["Silent Ones", 0],
            ["Death Angels", 1],
            ["Sound Hunters", 0],
            ["Night Stalkers", 0]
        ]
    }

];


let currentQuestion = 0;
let selectedAnswers = new Array(questions.length).fill(null);


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


startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
shareButton.addEventListener("click", shareResult);
challengeButton.addEventListener("click", shareResult);

backButton.addEventListener("click", goBack);
nextButton.addEventListener("click", goNext);
submitButton.addEventListener("click", showResult);


function startQuiz() {

    currentQuestion = 0;

    selectedAnswers =
        new Array(questions.length).fill(null);

    startScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    homeInfo.classList.add("hidden");

    suggestionsCard.classList.add("hidden");

    showQuestion();

}


function showQuestion() {

    const current =
        questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent =
        current.question;

    answersContainer.innerHTML = "";

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width =
        `${progress}%`;


    current.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className =
            "answer";

        button.type =
            "button";

        button.textContent =
            answer[0];


        if (
            selectedAnswers[currentQuestion] === index
        ) {

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

    selectedAnswers[currentQuestion] =
        answerIndex;


    const buttons =
        answersContainer.querySelectorAll(".answer");


    buttons.forEach((button, index) => {

        button.classList.toggle(
            "selected",
            index === answerIndex
        );

    });


    updateNavigation();


    const questionAtSelection =
        currentQuestion;


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

    if (
        selectedAnswers[currentQuestion] === null
    ) {

        return;

    }


    if (
        currentQuestion === questions.length - 1
    ) {

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


    backButton.disabled =
        isFirst;


    if (isLast) {

        nextButton.classList.add("hidden");

        submitButton.classList.remove("hidden");

        submitButton.disabled =
            !allAnswered;

        submitButton.textContent =
            allAnswered
                ? "SUBMIT"
                : "Answer All Questions";

    } else {

        submitButton.classList.add("hidden");

        nextButton.classList.remove("hidden");

        nextButton.textContent =
            "Next →";

        nextButton.disabled =
            !currentAnswered;

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

    const correctAnswers =
        calculateScore();

    const totalQuestions =
        questions.length;

    const incorrectAnswers =
        totalQuestions - correctAnswers;

    const score =
        Math.round(
            (correctAnswers / totalQuestions) * 100
        );

    const accuracy =
        score;


    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    homeInfo.classList.remove("hidden");

    suggestionsCard.classList.remove("hidden");


    document.getElementById("final-score").textContent =
        `${score}%`;


    /*
     * RESULT BREAKDOWN
     */

    document.getElementById("correct-count").textContent =
        correctAnswers;

    document.getElementById("incorrect-count").textContent =
        incorrectAnswers;

    document.getElementById("total-count").textContent =
        totalQuestions;

    document.getElementById("accuracy-percent").textContent =
        `${accuracy}%`;


    let title;
    let description;
    let knowledge;
    let icon;


    if (score <= 20) {

        title =
            "🔇 Silent Newcomer";

        description =
            "The world of the Abbott family is still a little hazy. It may be time to revisit A Quiet Place and try again.";

        knowledge =
            "Casual Viewer";

        icon =
            "🔇";

    }

    else if (score <= 40) {

        title =
            "🏚️ Farmhouse Survivor";

        description =
            "You remember some of the major events and characters, but several details about the Abbott family and the creatures slipped through the cracks.";

        knowledge =
            "Casual Fan";

        icon =
            "🏚️";

    }

    else if (score <= 60) {

        title =
            "👂 Sound Survivor";

        description =
            "Not bad! You remember many of the movie's major events, characters, survival methods and creature details.";

        knowledge =
            "Good Fan";

        icon =
            "👂";

    }

    else if (score <= 80) {

        title =
            "🎆 Abbott Family Survivor";

        description =
            "Impressive! You have a strong memory for the Abbott family's survival system, key events and the creatures' weakness.";

        knowledge =
            "Dedicated Fan";

        icon =
            "🎆";

    }

    else if (score <= 96) {

        title =
            "🔫 Death Angel Expert";

        description =
            "Excellent! You remember most of the important characters, survival strategies, major events and details about the creatures.";

        knowledge =
            "Expert Fan";

        icon =
            "🔫";

    }

    else {

        title =
            "👑 A Quiet Place Master";

        description =
            "Perfect score! You remembered practically every major detail about the Abbott family, their survival system and the creatures.";

        knowledge =
            "Ultimate Fan";

        icon =
            "👑";

    }


    document.getElementById("result-title").textContent =
        title;

    document.getElementById("result-description").textContent =
        description;

    document.getElementById("knowledge-level").textContent =
        knowledge;

    document.getElementById("result-icon").textContent =
        icon;


    progressBar.style.width =
        "100%";

}


function restartQuiz() {

    currentQuestion = 0;

    selectedAnswers =
        new Array(questions.length).fill(null);


    resultScreen.classList.add("hidden");

    quizScreen.classList.add("hidden");

    startScreen.classList.remove("hidden");

    homeInfo.classList.remove("hidden");

    suggestionsCard.classList.add("hidden");


    progressBar.style.width =
        "0%";

}


async function shareResult() {

    const title =
        document.getElementById("result-title").textContent;

    const knowledge =
        document.getElementById("knowledge-level").textContent;

    const finalScore =
        document.getElementById("final-score").textContent;


    const quizUrl =
        "https://apocalypsequizzes.com/a-quiet-place-quiz/";


    const shareText =
        `🔇 I scored ${finalScore} on the A Quiet Place Movie Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU remember A Quiet Place?`;


    const shareData = {

        title:
            "A Quiet Place Movie Quiz",

        text:
            shareText,

        url:
            quizUrl

    };


    try {

        if (navigator.share) {

            await navigator.share(
                shareData
            );

        }

        else {

            await navigator.clipboard.writeText(
                shareText +
                "\n\n" +
                quizUrl
            );


            alert(
                "Your result has been copied! You can paste it anywhere."
            );

        }

    }

    catch (error) {

        console.log(
            "Sharing cancelled."
        );

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
                menuToggle.getAttribute(
                    "aria-expanded"
                ) === "true";


            siteMenu.hidden =
                isOpen;


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

                siteMenu.hidden =
                    true;


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


    // CLOSE AFTER CLICKING A MENU LINK

    siteMenu
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    siteMenu.hidden =
                        true;


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
