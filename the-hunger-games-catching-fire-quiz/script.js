const questions = [

{
    question: "Who is appointed as the new Head Gamemaker?",
    answers: [
        ["Plutarch Heavensbee", 1],
        ["Beetee Latier", 0],
        ["Seneca Crane", 0],
        ["Haymitch Abernathy", 0]
    ]
},

{
    question: "From which district is Johanna Mason?",
    answers: [
        ["District 5", 0],
        ["District 7", 1],
        ["District 6", 0],
        ["District 8", 0]
    ]
},

{
    question: "From which district are Beetee and Wiress?",
    answers: [
        ["District 1", 0],
        ["District 2", 0],
        ["District 5", 0],
        ["District 3", 1]
    ]
},

{
    question: "Who is the new Head Peacekeeper of District 12?",
    answers: [
        ["Romulus Thread", 1],
        ["Brutus", 0],
        ["Gloss", 0],
        ["Darius", 0]
    ]
},

{
    question: "What is the black market in District 12 known as?",
    answers: [
        ["The Hub", 0],
        ["The Pit", 0],
        ["The Hob", 1],
        ["The Exchange", 0]
    ]
},

{
    question: "What is the 75th Hunger Games also called?",
    answers: [
        ["The First Rebellion", 0],
        ["The Victory Games", 0],
        ["The Capitol Games", 0],
        ["The Third Quarter Quell", 1]
    ]
},

{
    question: "Who is initially selected as District 12's male tribute?",
    answers: [
        ["Haymitch", 1],
        ["Peeta", 0],
        ["Gale", 0],
        ["Cinna", 0]
    ]
},

{
    question: "What does Peeta claim during his interview with Caesar?",
    answers: [
        ["Katniss has left him", 0],
        ["Katniss is pregnant", 1],
        ["He wants to become president", 0],
        ["He has joined the Peacekeepers", 0]
    ]
},

{
    question: "Who first realizes that the arena operates according to a clock-like pattern?",
    answers: [
        ["Finnick", 0],
        ["Peeta", 0],
        ["Wiress", 1],
        ["Johanna", 0]
    ]
},

{
    question: "What is located at the center of the arena?",
    answers: [
        ["The Cornucopia", 1],
        ["A mountain", 0],
        ["A giant tower", 0],
        ["A lake", 0]
    ]
},

{
    question: "What does Mags teach Katniss before the 75th Hunger Games?",
    answers: [
        ["How to throw a trident", 0],
        ["How to set a snare trap", 0],
        ["How to identify poisonous plants", 0],
        ["How to make a fishing hook", 1]
    ]
},

{
    question: "What kind of creatures attack Peeta and the others in the jungle?",
    answers: [
        ["Mutated gorillas", 0],
        ["Mutated mandrills", 1],
        ["Mutated baboons", 0],
        ["Mutated chimpanzees", 0]
    ]
},

{
    question: "Who kills Gloss?",
    answers: [
        ["Katniss", 0],
        ["Peeta", 0],
        ["Johanna", 1],
        ["Beetee", 0]
    ]
},

{
    question: "How often does the lightning strike the tree?",
    answers: [
        ["Every twelve hours", 1],
        ["Every hour", 0],
        ["Every six hours", 0],
        ["Once a day at random", 0]
    ]
},

{
    question: "What does Haymitch tell Katniss to remember when she is confused about who she can trust?",
    answers: [
        ["\"Trust Peeta.\"", 0],
        ["\"Remember who the real enemy is.\"", 1],
        ["\"Follow the mockingjay.\"", 0],
        ["\"Stay near the Cornucopia.\"", 0]
    ]
},

{
    question: "What does Peeta draw in the training center?",
    answers: [
        ["Rue", 1],
        ["A mockingjay", 0],
        ["District 12", 0],
        ["President Snow", 0]
    ]
},

{
    question: "Whose name does Katniss write on the dummy during her training demonstration?",
    answers: [
        ["President Snow", 0],
        ["Romulus Thread", 0],
        ["Plutarch Heavensbee", 0],
        ["Seneca Crane", 1]
    ]
},

{
    question: "What weapon does Johanna use during the Games?",
    answers: [
        ["A trident", 0],
        ["An axe", 1],
        ["A spear", 0],
        ["A bow", 0]
    ]
},

{
    question: "What gift does Peeta give Katniss on the beach?",
    answers: [
        ["A pearl", 1],
        ["A seashell", 0],
        ["A silver locket", 0],
        ["A bracelet", 0]
    ]
},

{
    question: "What does Effie give Haymitch before the Quarter Quell?",
    answers: [
        ["A silver watch", 0],
        ["A gold necklace", 0],
        ["A pocket watch", 0],
        ["A gold bracelet", 1]
    ]
},

{
    question: "What nicknames does Johanna use for Beetee and Wiress?",
    answers: [
        ["Nuts and Volts", 1],
        ["Sparks and Wires", 0],
        ["Brain and Bolt", 0],
        ["Sparks and Nuts", 0]
    ]
},

{
    question: "What are the invisible electromagnetic barriers in the arena called?",
    answers: [
        ["Energy shields", 0],
        ["Electric barriers", 0],
        ["Force fields", 1],
        ["Magnetic walls", 0]
    ]
},

{
    question: "What is the name of Finnick Odair's love interest?",
    answers: [
        ["Mags", 0],
        ["Annie", 1],
        ["Johanna", 0],
        ["Wiress", 0]
    ]
},

{
    question: "What does Katniss's wedding dress transform into during the Quarter Quell?",
    answers: [
        ["A hawk", 0],
        ["A phoenix", 0],
        ["A raven", 0],
        ["A mockingjay", 1]
    ]
},

{
    question: "What is the area where the Hunger Games victors live in District 12 called?",
    answers: [
        ["Victor's Village", 1],
        ["Tribute Square", 0],
        ["Victory District", 0],
        ["Capitol Village", 0]
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

    document.getElementById("suggestions-card").classList.add("hidden");

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

    const totalQuestions = questions.length;

    const incorrectAnswers =
        totalQuestions - correctAnswers;

    const score = Math.round(
        (correctAnswers / totalQuestions) * 100
    );

    const accuracy = score;

    homeInfo.classList.remove("hidden");
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    document.getElementById("final-score").textContent =
        `${score}%`;

    document.getElementById("correct-count").textContent =
        correctAnswers;

    document.getElementById("incorrect-count").textContent =
        incorrectAnswers;

    document.getElementById("total-count").textContent =
        totalQuestions;

    document.getElementById("accuracy-percent").textContent =
        `${accuracy}%`;

    document.getElementById("suggestions-card").classList.remove("hidden");

    let title;
    let description;
    let knowledge;
    let icon;

    if (score <= 20) {

        title = "🌱 Capitol Newcomer";

        description =
            "The Quarter Quell caught you off guard. It may be time to revisit The Hunger Games: Catching Fire and try again.";

        knowledge = "Casual Viewer";
        icon = "🌱";

    } else if (score <= 40) {

        title = "🔥 District Survivor";

        description =
            "You remember some of Katniss's journey, but several details about the Quarter Quell, the victors and the Capitol slipped through the cracks.";

        knowledge = "Casual Fan";
        icon = "🔥";

    } else if (score <= 60) {

        title = "🏹 Tribute Survivor";

        description =
            "Not bad! You remember many of the movie's major events, characters and the fight against the Capitol.";

        knowledge = "Good Fan";
        icon = "🏹";

    } else if (score <= 80) {

        title = "🐦 Mockingjay Ally";

        description =
            "Impressive! You have a strong memory for Katniss, Peeta, the Quarter Quell and the growing rebellion.";

        knowledge = "Dedicated Fan";
        icon = "🐦";

    } else if (score <= 96) {

        title = "🏹 Catching Fire Expert";

        description =
            "Excellent! You remember most of the important characters, events, locations and revelations in Catching Fire.";

        knowledge = "Expert Fan";
        icon = "🏹";

    } else {

        title = "👑 Quarter Quell Master";

        description =
            "Perfect score! You remembered practically every major detail about Katniss, Peeta, the victors and the rebellion against the Capitol.";

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

function restartQuiz() {

    currentQuestion = 0;

    selectedAnswers =
        new Array(questions.length).fill(null);

    resultScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    homeInfo.classList.remove("hidden");

    document.getElementById("suggestions-card").classList.add("hidden");

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
        "https://apocalypsequizzes.com/the-hunger-games-catching-fire-quiz/";

    const shareText =
        `🔥 I scored ${finalScore} on The Hunger Games: Catching Fire Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU remember The Hunger Games: Catching Fire?`;

    const shareData = {
        title: "The Hunger Games: Catching Fire Quiz",
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
