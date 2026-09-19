const questions = [

    {
        question: "In The Tomorrow War, what is Dan Forester's profession at the beginning of the movie?",
        answers: [
            ["High-school biology teacher", 1],
            ["Medical researcher", 0],
            ["University physicist", 0],
            ["Army combat instructor", 0]
        ]
    },

    {
        question: "What is the name commonly given to the alien creatures attacking humanity?",
        answers: [
            ["Night Crawlers", 0],
            ["White Spikes", 1],
            ["Ice Wraiths", 0],
            ["Razorbacks", 0]
        ]
    },

    {
        question: "What is the name of Dan's wife?",
        answers: [
            ["Muri", 0],
            ["Norah", 0],
            ["Emmy", 1],
            ["James", 0]
        ]
    },

    {
        question: "What is the name of Dan's daughter?",
        answers: [
            ["Lucy", 0],
            ["Nora", 0],
            ["Emmy", 0],
            ["Muri", 1]
        ]
    },

    {
        question: "What is the name of Dan's father?",
        answers: [
            ["James Forester", 1],
            ["Slade Forester", 0],
            ["Martin Forester", 0],
            ["Robert Forester", 0]
        ]
    },

    {
        question: "What was Charlie's profession before he was drafted into the future war?",
        answers: [
            ["Professor of engineering at the University of Miami and research director at a private laboratory", 0],
            ["Department chair at Georgia Tech and Director of R&D at Wallace Technology", 1],
            ["Department head at Boston University and senior researcher at a technology company", 0],
            ["Physics professor at Stanford University and director of a government research program", 0]
        ]
    },

    {
        question: "Who plays Dan Forester?",
        answers: [
            ["Sam Worthington", 0],
            ["Chris Evans", 0],
            ["Chris Pratt", 1],
            ["John Krasinski", 0]
        ]
    },

    {
        question: "Who plays Muri Forester?",
        answers: [
            ["Bryce Dallas Howard", 0],
            ["Emily Blunt", 0],
            ["Jessica Chastain", 0],
            ["Yvonne Strahovski", 1]
        ]
    },

    {
        question: "What physical feature gives the White Spikes their name?",
        answers: [
            ["Their sharp, spike-like appendages", 1],
            ["Their pale, armor-like outer bodies", 0],
            ["Their bright, reflective eyes", 0],
            ["Their hard, crystalline-looking heads", 0]
        ]
    },

    {
        question: "What military unit had Dan previously served in?",
        answers: [
            ["Navy SEALs", 0],
            ["Green Berets", 1],
            ["Army Rangers", 0],
            ["Marine Corps", 0]
        ]
    },

    {
        question: "What major sporting event is being watched when the future soldiers arrive?",
        answers: [
            ["Olympics", 0],
            ["Super Bowl", 0],
            ["World Cup", 1],
            ["World Series", 0]
        ]
    },

    {
        question: "Where do the future soldiers appear when they first reveal themselves?",
        answers: [
            ["At an airport", 0],
            ["In front of the White House", 0],
            ["Inside a stadium", 0],
            ["On a football field", 1]
        ]
    },

    {
        question: "What year do the soldiers claim to have come from?",
        answers: [
            ["2051", 1],
            ["2050", 0],
            ["2048", 0],
            ["2055", 0]
        ]
    },

    {
        question: "What does Dan's wife Emmy do professionally?",
        answers: [
            ["Doctor", 0],
            ["Therapist", 1],
            ["Scientist", 0],
            ["Teacher", 0]
        ]
    },

    {
        question: "What device is attached to Dan during the draft process?",
        answers: [
            ["A neural implant", 0],
            ["A GPS collar", 0],
            ["A tracking bracelet", 1],
            ["A medical monitor", 0]
        ]
    },

    {
        question: "Why does Dorian repeatedly volunteer to fight in the future war?",
        answers: [
            ["He wants to become a military officer and build a career in the armed forces", 0],
            ["He hopes to find a cure for his illness by joining the future war effort", 0],
            ["He is required to enlist again because the government orders him to return", 0],
            ["He has cancer and prefers fighting over spending his remaining time in a hospital", 1]
        ]
    },

    {
        question: "What is the initial destination of Dan's first jump to the future?",
        answers: [
            ["Miami Beach", 1],
            ["Los Angeles Beach", 0],
            ["Baltimore Harbor", 0],
            ["Liberty Island, New York City", 0]
        ]
    },

    {
        question: "According to the soldiers, which part of a White Spike is vulnerable to gunfire?",
        answers: [
            ["Its eyes", 0],
            ["Its belly", 1],
            ["Its tail", 0],
            ["Its legs", 0]
        ]
    },

    {
        question: "What is Muri Forester's military rank in the future?",
        answers: [
            ["General", 0],
            ["Major", 0],
            ["Colonel", 1],
            ["Captain", 0]
        ]
    },

    {
        question: "How old was Muri when Dan died in the original future timeline?",
        answers: [
            ["12", 0],
            ["14", 0],
            ["18", 0],
            ["16", 1]
        ]
    },

    {
        question: "Where is the JumpLink located in the future?",
        answers: [
            ["On a fortified offshore oil platform", 1],
            ["Inside a military bunker in Miami", 0],
            ["Under the Pentagon", 0],
            ["Inside a submarine", 0]
        ]
    },

    {
        question: "What is the time-travel device used to transport people between the present and future called?",
        answers: [
            ["FutureLink", 0],
            ["JumpLink", 1],
            ["TimeGate", 0],
            ["Chrono Portal", 0]
        ]
    },

    {
        question: "When did the White Spikes first emerge and begin attacking humanity?",
        answers: [
            ["2040", 0],
            ["2035", 0],
            ["2048", 1],
            ["2051", 0]
        ]
    },

    {
        question: "What does Dan find on a White Spike claw that helps his investigation?",
        answers: [
            ["Human blood", 0],
            ["Radioactive material", 0],
            ["Ice crystals", 0],
            ["Volcanic ash", 1]
        ]
    },

    {
        question: "Who helps Dan identify the volcanic material found on the White Spike?",
        answers: [
            ["Martin", 1],
            ["James Forester", 0],
            ["Charlie", 0],
            ["Dorian", 0]
        ]
    },

    {
        question: "What was the origin of the volcanic ash found on a White Spike?",
        answers: [
            ["Mount Vesuvius in 79 AD", 0],
            ["The Millennium Eruption of 946 AD", 1],
            ["Krakatoa in 1883", 0],
            ["Mount St. Helens in 1980", 0]
        ]
    },

    {
        question: "What eventually causes the White Spikes to be released?",
        answers: [
            ["A volcanic eruption", 0],
            ["A nuclear explosion", 0],
            ["Melting polar ice", 1],
            ["An earthquake", 0]
        ]
    },

    {
        question: "Where does Dan's team travel to investigate the suspected origin?",
        answers: [
            ["Southern Russia", 0],
            ["Greenland", 0],
            ["Alaska", 0],
            ["Northern Russia", 1]
        ]
    },

    {
        question: "What does the team discover frozen beneath the ice?",
        answers: [
            ["An alien spacecraft", 1],
            ["A White Spike nest only", 0],
            ["A future military base", 0],
            ["A second JumpLink", 0]
        ]
    },

    {
        question: "Who stays behind to help destroy the alien spacecraft?",
        answers: [
            ["Charlie", 0],
            ["Dorian", 1],
            ["Dan", 0],
            ["James", 0]
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

        title = "👽 Future War Newcomer";
        description =
            "The White Spikes and the future war are still a little hazy. It may be time to revisit The Tomorrow War and try again.";

        knowledge = "Casual Viewer";
        icon = "👽";

    } else if (score <= 40) {

        title = "🪖 Drafted Survivor";
        description =
            "You remember some of the major events and characters, but several details about Dan, Muri and the White Spikes slipped through the cracks.";

        knowledge = "Casual Fan";
        icon = "🪖";

    } else if (score <= 60) {

        title = "🧬 White Spike Survivor";
        description =
            "Not bad! You remember many of the movie's major events, characters, future-war missions and alien details.";

        knowledge = "Good Fan";
        icon = "🧬";

    } else if (score <= 80) {

        title = "🚀 Future War Veteran";
        description =
            "Impressive! You have a strong memory for Dan's missions, Muri, the JumpLink and the fight against the White Spikes.";

        knowledge = "Dedicated Fan";
        icon = "🚀";

    } else if (score <= 96) {

        title = "🔬 White Spike Expert";
        description =
            "Excellent! You remember most of the important characters, future-war events, White Spike details and the discovery of their origin.";

        knowledge = "Expert Fan";
        icon = "🔬";

    } else {

        title = "👑 Tomorrow War Master";
        description =
            "Perfect score! You remembered practically every major detail about Dan, Muri, the White Spikes, the JumpLink and the final battle.";

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
        "https://apocalypsequizzes.com/tomorrow-war-quiz/";

    const shareText =
        `👽 I scored ${finalScore} on The Tomorrow War Movie Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU remember The Tomorrow War?`;

    const shareData = {
        title: "The Tomorrow War Movie Quiz",
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