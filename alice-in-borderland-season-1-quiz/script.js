const questions = [

{
    question: "What is Arisu's main hobby before entering the Borderland?",
    answers: [
        ["Sports", 0],
        ["Video games", 1],
        ["Photography", 0],
        ["Music", 0]
    ]
},

{
    question: "Who are Arisu's two closest friends at the beginning of the series?",
    answers: [
        ["Chishiya and Tatta", 0],
        ["Karube and Chota", 1],
        ["Aguni and Niragi", 0],
        ["Ann and Kuina", 0]
    ]
},

{
    question: "Where do Arisu, Karube and Chota hide from the police?",
    answers: [
        ["A train station", 0],
        ["A shopping mall", 0],
        ["A public restroom", 1],
        ["A hotel", 0]
    ]
},

{
    question: "What is the name of the first game Arisu and his friends enter?",
    answers: [
        ["Tag", 0],
        ["Dead or Alive", 1],
        ["Hide and Seek", 0],
        ["Distance", 0]
    ]
},

{
    question: "What type of games do Spades represent?",
    answers: [
        ["Intelligence", 0],
        ["Teamwork", 0],
        ["Physical challenges", 1],
        ["Psychological challenges", 0]
    ]
},

{
    question: "Who is the skilled mountain climber Arisu encounters during Tag?",
    answers: [
        ["Ann", 0],
        ["Usagi", 1],
        ["Kuina", 0],
        ["Mira", 0]
    ]
},

{
    question: "What happens when the Wolf makes eye contact with another player?",
    answers: [
        ["The other player dies", 0],
        ["Their roles switch", 1],
        ["Both become Wolves", 0],
        ["The game ends", 0]
    ]
},

{
    question: "Which card represents Hide and Seek?",
    answers: [
        ["Four of Hearts", 0],
        ["Seven of Hearts", 1],
        ["Ten of Hearts", 0],
        ["Seven of Clubs", 0]
    ]
},

{
    question: "Where does the Distance game begin?",
    answers: [
        ["Inside a bus on an underground highway", 1],
        ["Inside a hotel", 0],
        ["At an apartment complex", 0],
        ["At a factory", 0]
    ]
},

{
    question: "What dangerous animal pursues the players?",
    answers: [
        ["Bear", 0],
        ["Tiger", 0],
        ["Panther", 1],
        ["Wolf", 0]
    ]
},

{
    question: "Who is the self-proclaimed king of the Beach?",
    answers: [
        ["Aguni", 0],
        ["Chishiya", 0],
        ["Hatter", 1],
        ["Niragi", 0]
    ]
},

{
    question: "Who commands the Beach's Militants?",
    answers: [
        ["Hatter", 0],
        ["Aguni", 1],
        ["Chishiya", 0],
        ["Ann", 0]
    ]
},

{
    question: "What was Tatta's profession before joining the Beach?",
    answers: [
        ["Mechanic", 1],
        ["Doctor", 0],
        ["Cook", 0],
        ["Security officer", 0]
    ]
},

{
    question: "Which card represents Light Bulb?",
    answers: [
        ["Four of Diamonds", 1],
        ["Four of Clubs", 0],
        ["Six of Spades", 0],
        ["Ten of Clubs", 0]
    ]
},

{
    question: "What is the main puzzle in Light Bulb?",
    answers: [
        ["Finding a hidden key", 0],
        ["Determining which switch controls a light bulb", 1],
        ["Finding the exit", 0],
        ["Defeating an enemy", 0]
    ]
},

{
    question: "Which game takes place at a power plant?",
    answers: [
        ["Human Elevator", 0],
        ["Hunting Competition", 1],
        ["Light Bulb", 0],
        ["Beast Hunter", 0]
    ]
},

{
    question: "What do the players have to do in Beast Hunter?",
    answers: [
        ["Find a hidden card", 0],
        ["Defeat dangerous animals and earn points", 1],
        ["Solve a puzzle", 0],
        ["Find the exit within a building", 0]
    ]
},

{
    question: "Which game involves players hanging onto the bottom of an elevator?",
    answers: [
        ["Hunting Competition", 0],
        ["Human Elevator", 1],
        ["Beast Hunter", 0],
        ["Bingo", 0]
    ]
},

{
    question: "Who shoots Hatter?",
    answers: [
        ["Niragi", 0],
        ["Chishiya", 0],
        ["Aguni", 1],
        ["Arisu", 0]
    ]
},

{
    question: "Who works with Chishiya on the card-theft plan?",
    answers: [
        ["Kuina", 1],
        ["Ann", 0],
        ["Tatta", 0],
        ["Niragi", 0]
    ]
},

{
    question: "What numbered card is still needed to complete the Beach's collection?",
    answers: [
        ["Seven of Hearts", 0],
        ["Ten of Clubs", 0],
        ["Ten of Hearts", 1],
        ["Four of Diamonds", 0]
    ]
},

{
    question: "What is the name of the Ten of Hearts game?",
    answers: [
        ["Tag", 0],
        ["Witch Hunt", 1],
        ["Hide and Seek", 0],
        ["Distance", 0]
    ]
},

{
    question: "Who fights the Last Boss?",
    answers: [
        ["Ann", 0],
        ["Kuina", 1],
        ["Usagi", 0],
        ["Arisu", 0]
    ]
},

{
    question: "Who is ultimately revealed to be the Witch?",
    answers: [
        ["Asahi", 0],
        ["Momoka", 1],
        ["Ann", 0],
        ["Aguni", 0]
    ]
},

{
    question: "Who reveals herself to be a Dealer?",
    answers: [
        ["Ann", 0],
        ["Asahi", 1],
        ["Kuina", 0],
        ["Mira", 0]
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

// Convert 25-question score to percentage
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

    title = "🌱 Borderland Newcomer";
    description =
        "The Borderland is still a mystery to you. Maybe it's time to enter the games again and see how much you remember.";
    knowledge = "Casual Viewer";
    icon = "🌱";

} else if (score <= 40) {

    title = "🎮 Game Participant";
    description =
        "You remember some of Arisu's journey and the major games, but the Borderland still has plenty of surprises for you.";
    knowledge = "Casual Fan";
    icon = "🎮";

} else if (score <= 60) {

    title = "🏖️ Beach Member";
    description =
        "Not bad! You remember many of the important characters, games and events from Season 1.";
    knowledge = "Good Fan";
    icon = "🏖️";

} else if (score <= 80) {

    title = "♠️ Borderland Survivor";
    description =
        "Impressive! You know the major games, characters and twists of Alice in Borderland Season 1 very well.";
    knowledge = "Dedicated Fan";
    icon = "♠️";

} else if (score <= 96) {

    title = "🃏 Face Card Expert";
    description =
        "Excellent! You remember most of the important details and twists from Season 1.";
    knowledge = "Expert Fan";
    icon = "🃏";

} else {

    title = "👑 Borderland Master";
    description =
        "Perfect score! You survived Season 1 and remembered practically every question thrown at you.";
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

const shareText =
    `🃏 I scored ${finalScore} on the Alice in Borderland Season 1 Quiz!\n\n` +
    `${title}\n` +
    `Knowledge level: ${knowledge}\n\n` +
    `How well do YOU know Alice in Borderland Season 1?`;

const shareData = {
    title: "Alice in Borderland Season 1 Quiz",
    text: shareText,
    url: "https://apocalypsequizzes.com/alice-in-borderland-season-1-quiz/"
};

try {

    if (navigator.share) {

        await navigator.share(shareData);

    } else {

        await navigator.clipboard.writeText(
            shareText +
            "\n\nhttps://apocalypsequizzes.com/alice-in-borderland-season-1-quiz/"
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
