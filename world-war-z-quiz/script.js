const questions = [

{
    question: "What was Gerry Lane's former occupation?",
    answers: [
        ["Military officer", 0],
        ["Police officer", 0],
        ["United Nations investigator", 1],
        ["Doctor", 0]
    ]
},

{
    question: "Where does Gerry live with his family at the beginning of the movie?",
    answers: [
        ["Philadelphia", 1],
        ["Boston", 0],
        ["New York City", 0],
        ["California", 0]
    ]
},

{
    question: "Who is Gerry's wife?",
    answers: [
        ["Rachel Lane", 0],
        ["Sarah Lane", 0],
        ["Anna Lane", 0],
        ["Karin Lane", 1]
    ]
},

{
    question: "Who has asthma in Gerry Lane's family?",
    answers: [
        ["Connie Lane", 1],
        ["Gerry Lane", 0],
        ["Karin Lane", 0],
        ["Rachel Lane", 0]
    ]
},

{
    question: "In the Philadelphia outbreak, approximately how long does it take one bitten person to turn?",
    answers: [
        ["About 30 seconds", 0],
        ["About 12 seconds", 1],
        ["About 1 hour", 0],
        ["About 5 minutes", 0]
    ]
},

{
    question: "Who is the young boy Gerry's family takes with them after escaping Philadelphia?",
    answers: [
        ["Ethan", 0],
        ["Andrew", 0],
        ["Lucas", 0],
        ["Tommy", 1]
    ]
},

{
    question: "Who arranges the helicopter rescue for Gerry and his family?",
    answers: [
        ["Thierry Umutoni", 1],
        ["Captain Speke", 0],
        ["Jurgen Warmbrunn", 0],
        ["Dr. Andrew Fassbach", 0]
    ]
},

{
    question: "Where does Gerry's family initially escape to?",
    answers: [
        ["A military base", 0],
        ["An aircraft carrier", 0],
        ["A prison", 0],
        ["A U.S. Navy vessel", 1]
    ]
},

{
    question: "Which virologist was Gerry assigned to escort to South Korea?",
    answers: [
        ["Dr. Andrew Fassbach", 1],
        ["Captain Speke", 0],
        ["Thierry Umutoni", 0],
        ["Jurgen Warmbrunn", 0]
    ]
},

{
    question: "What facility does Gerry visit in South Korea?",
    answers: [
        ["A research laboratory", 0],
        ["A military base", 1],
        ["An airport", 0],
        ["A hospital", 0]
    ]
},

{
    question: "What term was used in an Indian military report to describe the infected in World War Z?",
    answers: [
        ["Pretas", 0],
        ["Pishachas", 0],
        ["Rakshasas", 1],
        ["Asuras", 0]
    ]
},

{
    question: "What is the \"Tenth Man\" rule that helped Israel prepare for the outbreak?",
    answers: [
        ["The tenth soldier must lead every emergency operation", 0],
        ["Every tenth citizen must undergo military training", 0],
        ["Ten intelligence agencies must approve every national security decision", 0],
        ["If nine analysts agree, the tenth must investigate the possibility that they are all wrong", 1]
    ]
},

{
    question: "Who was the Israeli intelligence officer who acted as the \"Tenth Man\" and took the reports of an unusual outbreak seriously?",
    answers: [
        ["Jurgen Warmbrunn", 1],
        ["Thierry Umutoni", 0],
        ["Dr. Andrew Fassbach", 0],
        ["Captain Speke", 0]
    ]
},

{
    question: "What ultimately caused Jerusalem to fall to the infected?",
    answers: [
        ["The military ran out of ammunition", 0],
        ["A bomb destroyed the city walls", 0],
        ["Loud singing attracted the infected, who then swarmed over the walls", 1],
        ["The infected used tunnels to enter the city", 0]
    ]
},

{
    question: "Who is the young woman Gerry helps escape from Jerusalem?",
    answers: [
        ["Rachel", 0],
        ["Segen", 1],
        ["Karin", 0],
        ["Anna", 0]
    ]
},

{
    question: "What does Gerry do after Segen is bitten?",
    answers: [
        ["He amputates her hand", 1],
        ["He shoots her", 0],
        ["He gives her medicine", 0],
        ["He leaves her behind", 0]
    ]
},

{
    question: "What causes the plane carrying Gerry and Segen to crash?",
    answers: [
        ["The aircraft runs out of fuel", 0],
        ["The plane is attacked by another aircraft", 0],
        ["The pilot is killed immediately", 0],
        ["An infected person appears aboard", 1]
    ]
},

{
    question: "Where does Gerry eventually arrive after the plane crash?",
    answers: [
        ["Nova Scotia", 0],
        ["South Korea", 0],
        ["Cardiff, Wales", 1],
        ["Jerusalem", 0]
    ]
},

{
    question: "What type of facility does Gerry reach?",
    answers: [
        ["A CDC facility", 0],
        ["A pharmaceutical company", 0],
        ["A university", 0],
        ["A WHO research facility", 1]
    ]
},

{
    question: "Who helps Gerry test his theory at the WHO research facility?",
    answers: [
        ["Thierry Umutoni", 0],
        ["Dr. Fernando Centeno", 1],
        ["Dr. Andrew Fassbach", 0],
        ["Jurgen Warmbrunn", 0]
    ]
},

{
    question: "What does Gerry realize about the infected while studying their behavior?",
    answers: [
        ["They cannot see", 0],
        ["They avoid people who are seriously ill or terminally sick", 1],
        ["They only attack in darkness", 0],
        ["They are attracted to healthy people", 0]
    ]
},

{
    question: "What does Gerry inject into himself to test his theory?",
    answers: [
        ["A sleeping drug", 0],
        ["A vaccine", 0],
        ["A pathogen", 1],
        ["A deadly virus created specifically for the experiment", 0]
    ]
},

{
    question: "What do the scientists call the strategy of using a pathogen to make people less attractive to the infected?",
    answers: [
        ["Neutralization", 0],
        ["Suppression", 0],
        ["Immunization", 0],
        ["Camouflage", 1]
    ]
},

{
    question: "Where is Gerry's family while he is investigating the outbreak?",
    answers: [
        ["A U.S. Navy vessel", 1],
        ["Philadelphia", 0],
        ["Jerusalem", 0],
        ["A refugee camp", 0]
    ]
},

{
    question: "What is the 2013 movie World War Z based on?",
    answers: [
        ["A comic book series called World War Z", 0],
        ["Max Brooks' novel World War Z", 1],
        ["A true story about a global pandemic", 0],
        ["A video game called World War Z", 0]
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

        title = "🧟 Outbreak Newcomer";
        description =
            "The infected caught you off guard. Time to rewatch World War Z and prepare for the next outbreak.";
        knowledge = "Casual Viewer";
        icon = "🧟";

    } else if (score <= 40) {

        title = "🏃 Outbreak Survivor";
        description =
            "You remember some of Gerry Lane's journey, but there are still plenty of World War Z details to discover.";
        knowledge = "Casual Fan";
        icon = "🏃";

    } else if (score <= 60) {

        title = "🧭 Field Survivor";
        description =
            "Not bad! You remember many of the important characters, locations and events from World War Z.";
        knowledge = "Good Fan";
        icon = "🧭";

    } else if (score <= 80) {

        title = "🧟‍♂️ Z-Day Expert";
        description =
            "Impressive! You know Gerry Lane's mission and the major events of World War Z very well.";
        knowledge = "Dedicated Fan";
        icon = "🧟‍♂️";

    } else if (score <= 96) {

        title = "🌍 World War Z Expert";
        description =
            "Excellent! You remember most of the important details, characters and twists from the movie.";
        knowledge = "Expert Fan";
        icon = "🌍";

    } else {

        title = "🏆 World War Z Master";
        description =
            "Perfect score! You survived the outbreak and remembered practically every detail thrown at you.";
        knowledge = "Ultimate Fan";
        icon = "🏆";
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
        "https://apocalypsequizzes.com/world-war-z-quiz/";

    const shareText =
        `🧟 I scored ${finalScore} on the World War Z Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU know World War Z?`;

    const shareData = {
        title: "World War Z Quiz",
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