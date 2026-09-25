const questions = [

    {
        question: "What is Seok-woo's occupation?",
        answers: [
            ["Fund manager", 1],
            ["Doctor", 0],
            ["Police officer", 0],
            ["Train conductor", 0]
        ]
    },

    {
        question: "Why does Su-an want to go to Busan?",
        answers: [
            ["To meet her friends", 0],
            ["To visit her mother", 1],
            ["To attend school", 0],
            ["To visit her grandmother", 0]
        ]
    },

    {
        question: "From which city does their train depart?",
        answers: [
            ["Daegu", 0],
            ["Daejeon", 0],
            ["Seoul", 1],
            ["Busan", 0]
        ]
    },

    {
        question: "Who is Sang-hwa?",
        answers: [
            ["A military officer traveling with his pregnant wife", 0],
            ["A train conductor traveling with his pregnant wife", 0],
            ["A baseball coach traveling with his pregnant wife", 0],
            ["A working-class man traveling with his pregnant wife", 1]
        ]
    },

    {
        question: "What is Sang-hwa's wife's name?",
        answers: [
            ["Seong-kyeong", 1],
            ["Jong-gil", 0],
            ["In-gil", 0],
            ["Jin-hee", 0]
        ]
    },

    {
        question: "Which passenger is a high-ranking business executive?",
        answers: [
            ["Ki-chul", 0],
            ["Yon-suk", 1],
            ["Yong-guk", 0],
            ["Sang-hwa", 0]
        ]
    },

    {
        question: "What sport does Yong-guk play?",
        answers: [
            ["Basketball", 0],
            ["Baseball", 1],
            ["Soccer", 0],
            ["Rugby", 0]
        ]
    },

    {
        question: "What relationship do In-gil and Jong-gil have?",
        answers: [
            ["Cousins", 0],
            ["Brothers", 0],
            ["Sisters", 1],
            ["Mother and daughter", 0]
        ]
    },

    {
        question: "What unusual animal is shown near the beginning of the film?",
        answers: [
            ["A dead horse", 0],
            ["An infected wolf", 0],
            ["A rabid dog", 0],
            ["An infected deer", 1]
        ]
    },

    {
        question: "Who is attacked first by the infected woman aboard the train?",
        answers: [
            ["Sang-hwa", 0],
            ["A train attendant", 1],
            ["Yong-guk", 0],
            ["Seok-woo", 0]
        ]
    },

    {
        question: "Which baseball player becomes one of the main survivors?",
        answers: [
            ["Yong-guk", 1],
            ["Yon-suk", 0],
            ["Ki-chul", 0],
            ["Sang-hwa", 0]
        ]
    },

    {
        question: "What is one noticeable weakness of the infected in Train to Busan?",
        answers: [
            ["They cannot climb stairs or obstacles", 0],
            ["They have severe difficulty seeing in darkness", 1],
            ["They become inactive when separated from the horde", 0],
            ["They become slower when they hear loud sounds", 0]
        ]
    },

    {
        question: "What do the survivors use to block the zombies' view through a train door?",
        answers: [
            ["Bags and clothing", 0],
            ["Fire extinguishers and smoke", 0],
            ["A newspaper and water", 1],
            ["Blankets and gasoline", 0]
        ]
    },

    {
        question: "Why does Sang-hwa insist on reaching Seong-kyeong?",
        answers: [
            ["She knows where the military is", 0],
            ["She has the train keys", 0],
            ["She is a doctor", 0],
            ["She is his pregnant wife", 1]
        ]
    },

    {
        question: "Who strongly influences the passengers to keep the returning survivors outside?",
        answers: [
            ["Yon-suk", 1],
            ["Jong-gil", 0],
            ["Yong-guk", 0],
            ["Sang-hwa", 0]
        ]
    },

    {
        question: "What name does Sang-hwa give for his unborn child?",
        answers: [
            ["Min-jun", 0],
            ["Su-yun", 1],
            ["Seok-jin", 0],
            ["Jin-hee", 0]
        ]
    },

    {
        question: "What ultimately forces the train to stop near East Daegu?",
        answers: [
            ["A zombie inside the driver's cabin", 0],
            ["Engine failure", 0],
            ["A blockage on the railway tracks", 1],
            ["A shortage of fuel", 0]
        ]
    },

    {
        question: "Who does Seok-woo encounter inside the motorman's cab after boarding the new train?",
        answers: [
            ["Ki-chul", 0],
            ["Yong-guk", 0],
            ["Sang-hwa", 0],
            ["Yon-suk", 1]
        ]
    },

    {
        question: "What song does Su-an sing near the end of the film?",
        answers: [
            ["Aloha ʻOe", 1],
            ["Danny Boy", 0],
            ["Amazing Grace", 0],
            ["Auld Lang Syne", 0]
        ]
    },

    {
        question: "Why do the soldiers at the end hesitate to shoot Su-an and Seong-kyeong?",
        answers: [
            ["They see a military train behind them", 0],
            ["They hear Su-an singing", 1],
            ["They recognize Seok-woo", 0],
            ["They receive an order from Busan", 0]
        ]
    }

];


let currentQuestion = 0;
let selectedAnswers = new Array(questions.length).fill(null);


// ===============================
// ELEMENTS
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
    quizScreen.classList.remove("hidden");
    resultScreen.classList.add("hidden");

    homeInfo.classList.add("hidden");
    suggestionsCard.classList.add("hidden");

    progressBar.style.width = "0%";

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
// NAVIGATION
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


    // SCREEN VISIBILITY

    quizScreen.classList.add("hidden");
    startScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    homeInfo.classList.remove("hidden");
    suggestionsCard.classList.remove("hidden");


    // SCORE

    document.getElementById("final-score").textContent =
        `${score}%`;


    // RESULT BREAKDOWN

    document.getElementById("correct-count").textContent =
        correctAnswers;

    document.getElementById("incorrect-count").textContent =
        incorrectAnswers;

    document.getElementById("total-count").textContent =
        totalQuestions;

    document.getElementById("accuracy-percent").textContent =
        `${accuracy}%`;


    // RESULT LEVEL

    let title;
    let description;
    let knowledge;
    let icon;


    if (score <= 20) {

        title = "🧟 Train Newcomer";

        description =
            "The infected have only just boarded. It may be time to get back on the train and experience the fight for survival again.";

        knowledge = "Casual Viewer";

        icon = "🧟";

    } else if (score <= 40) {

        title = "🚆 Train Survivor";

        description =
            "You remember some of the major events and characters, but several details from the journey to Busan slipped through the cracks.";

        knowledge = "Casual Fan";

        icon = "🚆";

    } else if (score <= 60) {

        title = "🧟 Zombie Survivor";

        description =
            "Not bad! You remember many of the movie's major characters, events and survival details.";

        knowledge = "Good Fan";

        icon = "🧟";

    } else if (score <= 80) {

        title = "🚄 Busan Survivor";

        description =
            "Impressive! You have a strong memory for Seok-woo, Su-an, the survivors and their fight to reach Busan.";

        knowledge = "Dedicated Fan";

        icon = "🚄";

    } else if (score <= 96) {

        title = "🧟 Train to Busan Expert";

        description =
            "Excellent! You remember most of the important characters, events, zombie behavior and survival details from Train to Busan.";

        knowledge = "Expert Fan";

        icon = "🧟";

    } else {

        title = "👑 Train to Busan Master";

        description =
            "Perfect score! You remembered practically every major detail about the passengers, the outbreak and their desperate journey to Busan.";

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
        "https://apocalypsequizzes.com/train-to-busan-quiz/";

    const shareText =
        `🧟 I scored ${finalScore} on the Train to Busan Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU remember Train to Busan?`;

    const shareData = {
        title: "Train to Busan Quiz",
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


    // CLOSE AFTER CLICKING A MENU LINK

    siteMenu.querySelectorAll("a").forEach(
        function (link) {

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

        }
    );

}
