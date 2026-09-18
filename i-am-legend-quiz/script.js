const questions = [

    {
        question: "What is Robert Neville's military rank?",
        answers: [
            ["Colonel", 0],
            ["Captain", 0],
            ["Major", 0],
            ["Lieutenant Colonel", 1]
        ]
    },

    {
        question: "What is Neville's primary scientific profession?",
        answers: [
            ["Virologist", 1],
            ["Epidemiologist", 0],
            ["Genetic engineer", 0],
            ["Microbiologist", 0]
        ]
    },

    {
        question: "What is the name of Neville's dog?",
        answers: [
            ["Bella", 0],
            ["Lucy", 0],
            ["Sam", 1],
            ["Max", 0]
        ]
    },

    {
        question: "What was the name of Neville's daughter?",
        answers: [
            ["Madison", 0],
            ["Marley", 1],
            ["Mary", 0],
            ["Emma", 0]
        ]
    },

    {
        question: "Who is Anna?",
        answers: [
            ["Alice Krippin's daughter", 0],
            ["Neville's former colleague", 0],
            ["A scientist from the military", 0],
            ["An immune survivor who finds Neville", 1]
        ]
    },

    {
        question: "What is the name of the young boy traveling with Anna?",
        answers: [
            ["Ethan", 1],
            ["Caleb", 0],
            ["Jacob", 0],
            ["Tommy", 0]
        ]
    },

    {
        question: "Who developed the treatment that eventually became the source of the outbreak?",
        answers: [
            ["Zoe Neville", 0],
            ["Robert Neville", 0],
            ["Anna Montez", 0],
            ["Alice Krippin", 1]
        ]
    },

    {
        question: "What was the Krippin Virus originally designed to do?",
        answers: [
            ["Prevent influenza", 0],
            ["Increase immunity", 0],
            ["Cure cancer", 1],
            ["Cure HIV", 0]
        ]
    },

    {
        question: "Which existing virus was genetically modified to create the treatment?",
        answers: [
            ["Measles virus", 1],
            ["Ebola virus", 0],
            ["Influenza virus", 0],
            ["Rabies virus", 0]
        ]
    },

    {
        question: "In what year did the outbreak occur?",
        answers: [
            ["2008", 0],
            ["2010", 0],
            ["2007", 0],
            ["2009", 1]
        ]
    },

    {
        question: "Approximately what percentage of humanity was killed by the virus?",
        answers: [
            ["90%", 1],
            ["50%", 0],
            ["70%", 0],
            ["80%", 0]
        ]
    },

    {
        question: "What percentage of humans were naturally immune according to the film's explanation?",
        answers: [
            ["More than 20%", 0],
            ["Less than 1%", 1],
            ["5-10%", 0],
            ["1-5%", 0]
        ]
    },

    {
        question: "How was the Krippin Virus initially transmitted on a massive scale?",
        answers: [
            ["Through food", 0],
            ["Through insect bites", 0],
            ["Through contaminated water", 0],
            ["Through the air", 1]
        ]
    },

    {
        question: "What does the Alpha Darkseeker demonstrate that contradicts the idea that the infected have absolutely no intelligence?",
        answers: [
            ["He builds and uses a trap", 1],
            ["He operates Neville's laboratory", 0],
            ["He learns to drive", 0],
            ["He speaks to Neville", 0]
        ]
    },

    {
        question: "Why is the Alpha Darkseeker particularly interested in Neville's captured female?",
        answers: [
            ["He wants to kill her", 0],
            ["He wants the laboratory", 0],
            ["He wants to rescue her", 1],
            ["He wants Neville's blood", 0]
        ]
    },

    {
        question: "Where does Neville live?",
        answers: [
            ["Battery Park", 0],
            ["Washington Square Park", 1],
            ["Central Park", 0],
            ["Times Square", 0]
        ]
    },

    {
        question: "Where does Neville tell potential survivors to meet him?",
        answers: [
            ["Grand Central Terminal", 0],
            ["Times Square", 0],
            ["South Street Seaport", 1],
            ["Central Park", 0]
        ]
    },

    {
        question: "What time does Neville ask survivors to meet him?",
        answers: [
            ["Sunset", 0],
            ["Sunrise", 0],
            ["Noon", 1],
            ["8 a.m.", 0]
        ]
    },

    {
        question: "What is the name of the mannequin Neville becomes especially attached to?",
        answers: [
            ["Fred", 1],
            ["Frankie", 0],
            ["Frank", 0],
            ["Fredrick", 0]
        ]
    },

    {
        question: "Where does Neville encounter Fred?",
        answers: [
            ["At the South Street Seaport", 0],
            ["Inside his house", 0],
            ["Times Square", 0],
            ["Outside Grand Central Terminal", 1]
        ]
    },

    {
        question: "What happened to Neville's wife and daughter during the evacuation?",
        answers: [
            ["They died in a helicopter crash", 1],
            ["They escaped to Vermont", 0],
            ["They were taken by the military", 0],
            ["They were infected", 0]
        ]
    },

    {
        question: "What animal do Neville and Sam hunt in the abandoned city?",
        answers: [
            ["Boars", 0],
            ["Wolves", 0],
            ["Deer", 1],
            ["Wild horses", 0]
        ]
    },

    {
        question: "What kind of animals attack Neville and Sam after Neville is caught in the trap?",
        answers: [
            ["Infected dogs", 1],
            ["Infected lions", 0],
            ["Infected rats", 0],
            ["Infected wolves", 0]
        ]
    },

    {
        question: "How does Sam become infected?",
        answers: [
            ["She enters a Darkseeker nest", 0],
            ["She is bitten by an infected dog", 1],
            ["Neville accidentally injects her", 0],
            ["She drinks contaminated water", 0]
        ]
    },

    {
        question: "What does Neville primarily use for his early experiments?",
        answers: [
            ["Deer", 0],
            ["Darkseeker children", 0],
            ["Infected dogs", 0],
            ["Infected rats", 1]
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

        title = "🧬 I Am Legend Newcomer";
        description =
            "The world of Robert Neville is still a little hazy. It may be time to revisit I Am Legend and try again.";

        knowledge = "Casual Viewer";
        icon = "🧬";

    } else if (score <= 40) {

        title = "🐕 Survival Survivor";
        description =
            "You remember some of the major events and characters, but several details about Neville, Sam and the infected slipped through the cracks.";

        knowledge = "Casual Fan";
        icon = "🐕";

    } else if (score <= 60) {

        title = "🧪 Virus Survivor";
        description =
            "Not bad! You remember many of the movie's major events, characters, virus details and survival moments.";

        knowledge = "Good Fan";
        icon = "🧪";

    } else if (score <= 80) {

        title = "🌆 New York Survivor";
        description =
            "Impressive! You have a strong memory for Neville's life in New York, Sam, the Darkseekers and the search for a cure.";

        knowledge = "Dedicated Fan";
        icon = "🌆";

    } else if (score <= 96) {

        title = "🧬 Cure Expert";
        description =
            "Excellent! You remember most of the important characters, virus details, locations and events from I Am Legend.";

        knowledge = "Expert Fan";
        icon = "🧬";

    } else {

        title = "👑 I Am Legend Master";
        description =
            "Perfect score! You remembered practically every major detail about Robert Neville, Sam, the Krippin Virus and the fight for survival.";

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
        "https://apocalypsequizzes.com/i-am-legend-quiz/";

    const shareText =
        `🧬 I scored ${finalScore} on the I Am Legend Movie Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU remember I Am Legend?`;

    const shareData = {
        title: "I Am Legend Movie Quiz",
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