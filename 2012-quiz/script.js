const questions = [

    {
        question: "Where does Adrian Helmsley meet Dr. Satnam Tsurutani to investigate the unusual effects affecting Earth?",
        answers: [
            ["Alaska", 0],
            ["Tibet", 0],
            ["India", 1],
            ["Yellowstone", 0]
        ]
    },

    {
        question: "How many enormous arks are planned for construction as part of the survival plan?",
        answers: [
            ["Six", 0],
            ["Nine", 1],
            ["Twelve", 0],
            ["Seven", 0]
        ]
    },

    {
        question: "What is the name of the Russian billionaire who employs Jackson?",
        answers: [
            ["Sasha Karpov", 0],
            ["Oleg Karpov", 0],
            ["Alec Karpov", 0],
            ["Yuri Karpov", 1]
        ]
    },

    {
        question: "What is Gordon Silberman's profession?",
        answers: [
            ["Doctor and plastic surgeon", 1],
            ["Geologist", 0],
            ["Pilot for Yuri Karpov", 0],
            ["Engineer", 0]
        ]
    },

    {
        question: "What ancient calendar does Charlie connect with the 2012 catastrophe?",
        answers: [
            ["Roman calendar", 0],
            ["Chinese lunar calendar", 0],
            ["Egyptian calendar", 0],
            ["Mesoamerican Long Count calendar", 1]
        ]
    },

    {
        question: "Who is the U.S. President when Adrian first reports the impending catastrophe?",
        answers: [
            ["Carl Anheuser", 0],
            ["Thomas Wilson", 1],
            ["James Gordon", 0],
            ["Adrian Helmsley", 0]
        ]
    },

    {
        question: "Where was the Antonov planned to refuel before continuing toward China?",
        answers: [
            ["Honolulu, Hawaii", 1],
            ["Tokyo, Japan", 0],
            ["Manila, Philippines", 0],
            ["Anchorage, Alaska", 0]
        ]
    },

    {
        question: "What huge aircraft do the survivors use to leave Las Vegas?",
        answers: [
            ["Boeing 747", 0],
            ["C-130 Hercules", 0],
            ["Airbus A380", 0],
            ["Antonov An-225", 1]
        ]
    },

    {
        question: "Approximately how many people is each ark designed to accommodate?",
        answers: [
            ["50,000", 0],
            ["500,000", 0],
            ["100,000", 1],
            ["10,000", 0]
        ]
    },

    {
        question: "What theory does Charlie Frost discuss with Jackson?",
        answers: [
            ["Nuclear winter", 0],
            ["Earth-crust displacement", 1],
            ["Solar-system collision", 0],
            ["Plate tectonics reversal", 0]
        ]
    },

    {
        question: "What is the name of Jackson Curtis's science-fiction book that Adrian recognizes?",
        answers: [
            ["Farewell Atlantis", 1],
            ["The Last Earth", 0],
            ["The Final Day", 0],
            ["2012: The Awakening", 0]
        ]
    },

    {
        question: "Who helps Jackson's group reach the arks after they are left behind by the Chinese helicopters?",
        answers: [
            ["Charlie Frost", 0],
            ["Satnam Tsurutani", 0],
            ["Nima", 1],
            ["Carl Anheuser", 0]
        ]
    },

    {
        question: "Which character is the First Daughter of the U.S. President?",
        answers: [
            ["Kate Wilson", 0],
            ["Lilly Wilson", 0],
            ["Aparna Wilson", 0],
            ["Laura Wilson", 1]
        ]
    },

    {
        question: "Who helps arrange the preservation and transportation of valuable cultural artifacts to the arks?",
        answers: [
            ["Laura Wilson", 1],
            ["Kate Curtis", 0],
            ["Tamara", 0],
            ["Aparna Tsurutani", 0]
        ]
    },

    {
        question: "Where does Jackson take Noah and Lilly camping?",
        answers: [
            ["Yosemite National Park", 0],
            ["Yellowstone National Park", 1],
            ["Grand Canyon National Park", 0],
            ["Zion National Park", 0]
        ]
    },

    {
        question: "Which ark does Jackson's group eventually enter?",
        answers: [
            ["Ark 2", 0],
            ["Ark 9", 0],
            ["Ark 4", 1],
            ["Ark 1", 0]
        ]
    },

    {
        question: "What is the name of Tamara's dog in 2012?",
        answers: [
            ["Caesar", 1],
            ["Charlie", 0],
            ["Oleg", 0],
            ["Sasha", 0]
        ]
    },

    {
        question: "How much does the movie say is charged for an ark ticket?",
        answers: [
            ["$500 million", 0],
            ["$1 billion", 0],
            ["€500 million", 0],
            ["€1 billion", 1]
        ]
    },

    {
        question: "Where does Jackson's group go to find a larger aircraft?",
        answers: [
            ["Denver", 0],
            ["Phoenix", 0],
            ["Las Vegas", 1],
            ["San Francisco", 0]
        ]
    },

    {
        question: "What is Dr. Satnam Tsurutani's profession?",
        answers: [
            ["Astrophysicist", 1],
            ["Volcanologist", 0],
            ["Seismologist", 0],
            ["Geologist", 0]
        ]
    },

    {
        question: "What is Dr. Adrian Helmsley's profession in 2012?",
        answers: [
            ["Meteorologist", 0],
            ["Geologist", 1],
            ["Astrophysicist", 0],
            ["Volcanologist", 0]
        ]
    },

    {
        question: "How long after the disaster does the film jump forward near the ending?",
        answers: [
            ["Two weeks", 0],
            ["Seven days", 0],
            ["Six months", 0],
            ["Twenty-seven days", 1]
        ]
    },

    {
        question: "Where are the surviving arks heading at the end of the movie?",
        answers: [
            ["South Africa", 1],
            ["Australia", 0],
            ["South America", 0],
            ["Antarctica", 0]
        ]
    },

    {
        question: "What is the final major destination mentioned in the movie?",
        answers: [
            ["New York", 0],
            ["Cape of Good Hope", 1],
            ["Tibet", 0],
            ["Yellowstone", 0]
        ]
    },

    {
        question: "Which mountain range is revealed as the new highest range after the catastrophe?",
        answers: [
            ["Himalayas", 0],
            ["Alps", 0],
            ["Drakensberg", 1],
            ["Andes", 0]
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

        title = "🌎 2012 Newcomer";
        description =
            "The world-ending events of 2012 are still a little hazy. It may be time to revisit Jackson Curtis's journey and try again.";
        knowledge = "Casual Viewer";
        icon = "🌎";

    } else if (score <= 40) {

        title = "✈️ Disaster Survivor";
        description =
            "You remember some of the major events and characters, but several details about the catastrophe and the survival plan slipped through the cracks.";
        knowledge = "Casual Fan";
        icon = "✈️";

    } else if (score <= 60) {

        title = "🌋 Earthquake Survivor";
        description =
            "Not bad! You remember many of the movie's major events, characters, locations and survival details.";
        knowledge = "Good Fan";
        icon = "🌋";

    } else if (score <= 80) {

        title = "🚢 Ark Survivor";
        description =
            "Impressive! You have a strong memory for Jackson's journey, the arks, the catastrophe and the people fighting to survive.";
        knowledge = "Dedicated Fan";
        icon = "🚢";

    } else if (score <= 96) {

        title = "🌍 2012 Expert";
        description =
            "Excellent! You remember most of the important characters, locations, survival plans and details from 2012.";
        knowledge = "Expert Fan";
        icon = "🌍";

    } else {

        title = "👑 2012 Master";
        description =
            "Perfect score! You remembered practically every major detail about the catastrophe, the arks and Jackson Curtis's fight for survival.";
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
        "https://apocalypsequizzes.com/2012-quiz/";

    const shareText =
        `🌎 I scored ${finalScore} on the 2012 Movie Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU remember the movie 2012?`;

    const shareData = {
        title: "2012 Movie Quiz",
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
