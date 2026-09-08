const questions = [

    {
        question: "When Jake Green first returns to Jericho, how long has he been away from his hometown?",
        answers: [
            ["Seven years", 0],
            ["Three years", 0],
            ["Five years", 1],
            ["Ten years", 0]
        ]
    },

    {
        question: "Who was serving as Jericho's sheriff when the series began?",
        answers: [
            ["Jimmy Taylor", 0],
            ["Sheriff Dawes", 1],
            ["Bill Kohler", 0],
            ["Jake Green", 0]
        ]
    },

    {
        question: "Who was Emily Sullivan's estranged father and leader of an armed group?",
        answers: [
            ["Jonah Prowse", 1],
            ["Robert Hawkins", 0],
            ["Mitchell Cafferty", 0],
            ["Constantino", 0]
        ]
    },

    {
        question: "Which Jericho resident is one of the town's largest farmers and an important source of food?",
        answers: [
            ["Stanley Richmond", 1],
            ["Dale Turner", 0],
            ["Johnston Green", 0],
            ["Eric Green", 0]
        ]
    },

    {
        question: "Who takes over Gracie's store after her death?",
        answers: [
            ["Dale Turner", 1],
            ["Stanley Richmond", 0],
            ["Jonah Prowse", 0],
            ["Mitch Cafferty", 0]
        ]
    },

    {
        question: "What resource does Jericho possess that becomes especially important in its trade relationship with New Bern?",
        answers: [
            ["Coal", 0],
            ["Copper", 0],
            ["Salt", 1],
            ["Oil", 0]
        ]
    },

    {
        question: "Why do Jake and Eric travel to Rogue River?",
        answers: [
            ["To recover fuel", 0],
            ["To find missing Marines", 0],
            ["To trade ammunition", 0],
            ["To retrieve antibiotics needed for Johnston", 1]
        ]
    },

    {
        question: "Which city does the mushroom cloud seen by Jericho's residents come from at the beginning of the series?",
        answers: [
            ["Denver", 1],
            ["Wichita", 0],
            ["Kansas City", 0],
            ["Topeka", 0]
        ]
    },

    {
        question: "Which two countries does the Cheyenne government officially blame for the nuclear attacks?",
        answers: [
            ["Russia and China", 0],
            ["North Korea and Iran", 1],
            ["Iran and Pakistan", 0],
            ["China and North Korea", 0]
        ]
    },

    {
        question: "Which corporation becomes deeply intertwined with the new Allied States government?",
        answers: [
            ["Ravenwood", 0],
            ["Jennings & Rall", 1],
            ["Black Jack Industries", 0],
            ["Hudson Energy", 0]
        ]
    },

    {
        question: "What does Stanley do after Bonnie's death?",
        answers: [
            ["Leaves Jericho permanently", 0],
            ["Kills John Goetz in retaliation", 1],
            ["Joins Ravenwood", 0],
            ["Turns the investigation over to Constantino", 0]
        ]
    },

    {
        question: "Which virus is spreading toward Jericho in Season 2?",
        answers: [
            ["Hudson River virus", 1],
            ["Mississippi Fever", 0],
            ["Colorado virus", 0],
            ["Rocky Mountain virus", 0]
        ]
    },

    {
        question: "What does John Smith ultimately intend to do with the bomb?",
        answers: [
            ["Destroy the Republic of Texas", 0],
            ["Force Hawkins to become president", 0],
            ["Restore the United States by threatening Congress", 0],
            ["Destroy Cheyenne and Jennings & Rall as retaliation", 1]
        ]
    },

    {
        question: "Which country sends an airdrop of supplies to Jericho?",
        answers: [
            ["Russia", 0],
            ["China", 1],
            ["Canada", 0],
            ["Germany", 0]
        ]
    },

    {
        question: "What unusual discovery makes Jake and Hawkins suspicious about the supposed Chinese aid?",
        answers: [
            ["The food is radioactive", 0],
            ["The parachutes carry microchip tags associated with the U.S. military", 1],
            ["The packages contain American weapons", 0],
            ["The aircraft transmit military codes", 0]
        ]
    },

    {
        question: "Which state emerged as a major independent power after the collapse of the United States?",
        answers: [
            ["California", 0],
            ["Texas", 1],
            ["Florida", 0],
            ["New York", 0]
        ]
    },

    {
        question: "Who was Robert Hawkins secretly working for before settling in Jericho?",
        answers: [
            ["Ravenwood", 0],
            ["The CIA", 1],
            ["Jennings & Rall", 0],
            ["The Republic of Texas", 0]
        ]
    },

    {
        question: "How many American cities were hit by nuclear attacks?",
        answers: [
            ["15", 0],
            ["20", 0],
            ["23", 1],
            ["25", 0]
        ]
    },

    {
        question: "Who was the leader of the Ravenwood mercenaries?",
        answers: [
            ["Major Edward Beck", 0],
            ["John Goetz", 1],
            ["Thomas Valente", 0],
            ["John Smith", 0]
        ]
    },

    {
        question: "Which trading post do Jake, Johnston, Heather, and Dale visit to obtain supplies and windmill parts?",
        answers: [
            ["New Bern", 0],
            ["Black Jack Fairground", 1],
            ["Rogue River", 0],
            ["Crossroads", 0]
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

        // Restore previous answer
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

    // Convert 20-question score to percentage
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

        title = "🌱 New Arrival";
        description =
            "The bombs may have changed America forever, but your knowledge of Jericho is just beginning. Time to return to town and test yourself again.";
        knowledge = "Casual Viewer";
        icon = "🌱";

    } else if (score <= 40) {

        title = "🏚️ Jericho Survivor";
        description =
            "You remember some of the story, characters and major events, but quite a few details were lost along the way.";
        knowledge = "Casual Fan";
        icon = "🏚️";

    } else if (score <= 60) {

        title = "🛡️ Jericho Militia Member";
        description =
            "Not bad! You remember the major characters, locations and events of Jericho, with some details still missing.";
        knowledge = "Good Fan";
        icon = "🛡️";

    } else if (score <= 80) {

        title = "☢️ Nuclear Survivor";
        description =
            "Impressive! You know the world of Jericho, its characters and its post-nuclear America pretty well.";
        knowledge = "Dedicated Fan";
        icon = "☢️";

    } else if (score <= 96) {

        title = "🇺🇸 Jericho Expert";
        description =
            "Excellent! You remember most of the important details, characters, factions and events from the series.";
        knowledge = "Expert Fan";
        icon = "🇺🇸";

    } else {

        title = "🧠 Jericho Encyclopedia";
        description =
            "Perfect score! You remember practically every detail of Jericho and its post-nuclear world.";
        knowledge = "Ultimate Fan";
        icon = "🧠";
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

    const shareText =
        `☢️ I scored ${finalScore} on the Jericho Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU know Jericho?`;

    const shareData = {
        title: "Jericho Quiz",
        text: shareText,
        url: "https://apocalypsequizzes.com/jericho-quiz/"
    };

    try {

        if (navigator.share) {

            await navigator.share(shareData);

        } else {

            await navigator.clipboard.writeText(
                shareText +
                "\n\nhttps://apocalypsequizzes.com/jericho-quiz/"
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