const questions = [

    {
        question: "What is Ray Ferrier's occupation?",
        answers: [
            ["Longshoreman and crane operator", 1],
            ["Truck driver", 0],
            ["Police officer", 0],
            ["Construction engineer", 0]
        ]
    },

    {
        question: "Where does Ray live when the film begins?",
        answers: [
            ["Brooklyn, New York", 0],
            ["Philadelphia, Pennsylvania", 0],
            ["Boston, Massachusetts", 0],
            ["Bayonne, New Jersey", 1]
        ]
    },

    {
        question: "Who is the main protagonist of War of the Worlds?",
        answers: [
            ["Tim Ferrier", 0],
            ["Harlan Ogilvy", 0],
            ["Robbie Ferrier", 0],
            ["Ray Ferrier", 1]
        ]
    },

    {
        question: "Who plays Rachel Ferrier?",
        answers: [
            ["Abigail Breslin", 0],
            ["Dakota Fanning", 1],
            ["Emily Blunt", 0],
            ["AnnaSophia Robb", 0]
        ]
    },

    {
        question: "How old is Rachel at the beginning of the film?",
        answers: [
            ["14 years old", 0],
            ["12 years old", 0],
            ["8 years old", 0],
            ["10 years old", 1]
        ]
    },

    {
        question: "Where is Mary Ann going when she drops Rachel and Robbie off with Ray?",
        answers: [
            ["Washington", 0],
            ["Boston", 1],
            ["New York", 0],
            ["Philadelphia", 0]
        ]
    },

    {
        question: "Where does Ray work?",
        answers: [
            ["At a railway station", 0],
            ["At a New York-area port", 1],
            ["At a construction site", 0],
            ["At an airport", 0]
        ]
    },

    {
        question: "Who is Ray's mechanic friend?",
        answers: [
            ["Harlan", 0],
            ["Manny", 1],
            ["Tim", 0],
            ["Robbie", 0]
        ]
    },

    {
        question: "What part does Ray suggest replacing on the minivan?",
        answers: [
            ["The starter motor", 0],
            ["The alternator", 0],
            ["The battery", 0],
            ["The solenoid", 1]
        ]
    },

    {
        question: "What unusual weather phenomenon occurs before the invasion begins?",
        answers: [
            ["A hurricane", 0],
            ["A tornado", 0],
            ["A lightning storm", 1],
            ["A hailstorm", 0]
        ]
    },

    {
        question: "What are the alien war machines commonly called?",
        answers: [
            ["Crawlers", 0],
            ["Harvesters", 0],
            ["Walkers", 0],
            ["Tripods", 1]
        ]
    },

    {
        question: "What does the Tripod use to attack people?",
        answers: [
            ["A heat ray", 1],
            ["Sonic waves", 0],
            ["Plasma missiles", 0],
            ["Machine guns", 0]
        ]
    },

    {
        question: "Where does Ray take his children for temporary shelter?",
        answers: [
            ["Harlan's basement", 0],
            ["A police station", 0],
            ["Mary Ann's empty house", 1],
            ["A military bunker", 0]
        ]
    },

    {
        question: "What crashes into the neighborhood the next morning?",
        answers: [
            ["A military jet", 0],
            ["A cargo ship", 0],
            ["A helicopter", 0],
            ["A Boeing 747", 1]
        ]
    },

    {
        question: "What does the news crew show Ray that reveals the invasion is worldwide?",
        answers: [
            ["A map of evacuation routes", 0],
            ["Footage of Tripods attacking other cities", 1],
            ["Satellite images of Earth", 0],
            ["A message from the military", 0]
        ]
    },

    {
        question: "What does the news report suggest about the Tripods' presence?",
        answers: [
            ["They arrived underground through tunnels", 0],
            ["They were hidden there by the military", 0],
            ["They were built by humans underground", 0],
            ["The characters believe they had been buried underground long before the invasion", 1]
        ]
    },

    {
        question: "How do the alien pilots supposedly reach their Tripods?",
        answers: [
            ["They arrive in spacecraft", 0],
            ["They emerge from underground tunnels", 0],
            ["They descend with the lightning", 1],
            ["They teleport into them", 0]
        ]
    },

    {
        question: "Where are Ray and his children trying to reach?",
        answers: [
            ["Chicago", 0],
            ["New York", 0],
            ["Boston", 1],
            ["Washington", 0]
        ]
    },

    {
        question: "Which river do Ray and the children cross by ferry?",
        answers: [
            ["Hudson River", 1],
            ["Connecticut River", 0],
            ["Delaware River", 0],
            ["Mississippi River", 0]
        ]
    },

    {
        question: "What protects the Tripods from conventional weapons?",
        answers: [
            ["Energy shields", 1],
            ["Regenerative armor", 0],
            ["Metal armor", 0],
            ["Cloaking technology", 0]
        ]
    },

    {
        question: "What do the aliens harvest from humans?",
        answers: [
            ["Water and minerals", 0],
            ["Hair and skin", 0],
            ["Blood and tissue", 1],
            ["Bones and organs", 0]
        ]
    },

    {
        question: "What strange red vegetation spreads across the landscape?",
        answers: [
            ["Red flowers", 0],
            ["Red vines", 0],
            ["Red moss", 0],
            ["Red weed", 1]
        ]
    },

    {
        question: "What are the aliens using human blood and tissue for?",
        answers: [
            ["Fertilizing the red vegetation", 1],
            ["Producing fuel", 0],
            ["Feeding the Tripods", 0],
            ["Creating medicine", 0]
        ]
    },

    {
        question: "Who is Harlan Ogilvy?",
        answers: [
            ["A television reporter", 0],
            ["A scientist", 0],
            ["A former ambulance driver", 1],
            ["A military commander", 0]
        ]
    },

    {
        question: "What causes Harlan to have a mental breakdown?",
        answers: [
            ["Seeing Robbie with the military", 0],
            ["Discovering Ray's identity", 0],
            ["Losing his food", 0],
            ["Seeing the aliens harvest human blood and tissue", 1]
        ]
    },

    {
        question: "What does Ray use to attack the alien probe?",
        answers: [
            ["An axe", 1],
            ["A baseball bat", 0],
            ["A shotgun", 0],
            ["A knife", 0]
        ]
    },

    {
        question: "What does Ray find on an abandoned military vehicle?",
        answers: [
            ["A radio", 0],
            ["A rifle", 0],
            ["Rocket launcher", 0],
            ["Hand grenades", 1]
        ]
    },

    {
        question: "How does Ray destroy the Tripod from the inside?",
        answers: [
            ["He attacks its control system", 0],
            ["He detonates grenades inside it", 1],
            ["He cuts its power cables", 0],
            ["He shoots the alien", 0]
        ]
    },

    {
        question: "What ultimately kills the aliens?",
        answers: [
            ["The red weed", 0],
            ["Earth's microorganisms", 1],
            ["The military", 0],
            ["Nuclear weapons", 0]
        ]
    },

    {
        question: "Where does Ray finally reunite with Mary Ann?",
        answers: [
            ["At her parents' house", 1],
            ["At a military base", 0],
            ["At an airport", 0],
            ["At a hospital", 0]
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

        title = "👽 Invasion Newcomer";
        description =
            "The Tripods and the alien invasion are still a little hazy. It may be time to revisit War of the Worlds and try again.";

        knowledge = "Casual Viewer";
        icon = "👽";

    } else if (score <= 40) {

        title = "🏃 Escape Survivor";
        description =
            "You remember some of the major events and characters, but several details about Ray, Rachel and the Tripods slipped through the cracks.";

        knowledge = "Casual Fan";
        icon = "🏃";

    } else if (score <= 60) {

        title = "👽 Tripod Survivor";
        description =
            "Not bad! You remember many of the movie's major events, characters, the invasion and the alien threat.";

        knowledge = "Good Fan";
        icon = "👽";

    } else if (score <= 80) {

        title = "⚡ Invasion Veteran";
        description =
            "Impressive! You have a strong memory for Ray's journey, the Tripods, the invasion and the fight for survival.";

        knowledge = "Dedicated Fan";
        icon = "⚡";

    } else if (score <= 96) {

        title = "🔬 War of the Worlds Expert";
        description =
            "Excellent! You remember most of the important characters, events, Tripod details and how the invasion unfolds.";

        knowledge = "Expert Fan";
        icon = "🔬";

    } else {

        title = "👑 War of the Worlds Master";
        description =
            "Perfect score! You remembered practically every major detail about Ray, Rachel, the Tripods and the alien invasion.";

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
        "https://apocalypsequizzes.com/war-of-the-worlds-quiz/";

    const shareText =
        `👽 I scored ${finalScore} on the War of the Worlds Movie Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU remember War of the Worlds?`;

    const shareData = {
        title: "War of the Worlds Movie Quiz",
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