const questions = [

{
    question: "Which action clears the Dead or Alive game?",
    answers: [
        ["Reach the rooftop", 0],
        ["Find a hidden card", 0],
        ["Choose the correct door", 1],
        ["Defeat another player", 0]
    ]
},

{
    question: "In Tag, what must players do inside the safe zone to clear the game?",
    answers: [
        ["Remain hidden until time expires", 0],
        ["Find a playing card", 0],
        ["Defeat the Tagger", 0],
        ["Press two switches simultaneously", 1]
    ]
},

{
    question: "In Hide and Seek, what causes the wolf and sheep roles to switch?",
    answers: [
        ["Eye contact", 1],
        ["Touching another player", 0],
        ["Crossing the finish line", 0],
        ["Hearing the wolf's voice", 0]
    ]
},

{
    question: "In Distance, what must players do to clear the game?",
    answers: [
        ["Escape before the bus moves", 0],
        ["Safely reach the goal", 1],
        ["Defeat the panther", 0],
        ["Find the correct card", 0]
    ]
},

{
    question: "In Distance, where is the goal located?",
    answers: [
        ["At the end of the tunnel", 0],
        ["Inside the bus they started in", 1],
        ["At a train station", 0],
        ["Inside a warehouse", 0]
    ]
},

{
    question: "What is the main puzzle in Light Bulb?",
    answers: [
        ["Determine which switch controls the bulb", 1],
        ["Repair the electrical wires", 0],
        ["Find a hidden battery", 0],
        ["Locate an emergency exit", 0]
    ]
},

{
    question: "Where does the Beast Hunter game take place?",
    answers: [
        ["A hospital", 0],
        ["An underground tunnel", 0],
        ["A power plant", 0],
        ["An amusement park", 1]
    ]
},

{
    question: "In Human Elevator, what must players do to survive?",
    answers: [
        ["Repair the elevator controls", 0],
        ["Reach the top of the elevator shaft", 0],
        ["Hold onto the bottom of the elevator", 1],
        ["Find a hidden exit", 0]
    ]
},

{
    question: "What is the main objective of Witch Hunt?",
    answers: [
        ["Escape from the hotel", 0],
        ["Find the Witch and burn her body", 1],
        ["Defeat the dealer", 0],
        ["Find a hidden playing card", 0]
    ]
},

{
    question: "Where does the Tag game take place?",
    answers: [
        ["An amusement park", 0],
        ["A subway station", 0],
        ["An apartment complex", 1],
        ["A hospital", 0]
    ]
},

{
    question: "Where does the Distance game begin?",
    answers: [
        ["Inside a subway train", 0],
        ["Inside a shopping mall", 0],
        ["Inside a bus on an underground highway", 1],
        ["Inside an amusement park", 0]
    ]
},

{
    question: "Which playing card is associated with Bingo at the Match Factory?",
    answers: [
        ["Six of Spades", 0],
        ["Ten of Clubs", 1],
        ["Two of Clubs", 0],
        ["Ten of Hearts", 0]
    ]
},

{
    question: "Which playing card is associated with Hunting Competition?",
    answers: [
        ["Five of Spades", 0],
        ["Seven of Hearts", 0],
        ["Two of Clubs", 1],
        ["Six of Spades", 0]
    ]
},

{
    question: "What is the time limit for Witch Hunt?",
    answers: [
        ["1 hour", 0],
        ["3 hours", 0],
        ["30 minutes", 0],
        ["2 hours", 1]
    ]
},

{
    question: "In Osmosis, which team wins when the game ends?",
    answers: [
        ["The team with more points", 1],
        ["The team that eliminates the most players", 0],
        ["The team with the most cards", 0],
        ["The team that reaches the opposing base first", 0]
    ]
},

{
    question: "In Osmosis, how many points can a team gain by touching the opposing team's base?",
    answers: [
        ["5,000", 0],
        ["20,000", 0],
        ["10,000", 1],
        ["1,000", 0]
    ]
},

{
    question: "What is unusual about entering the King of Spades game?",
    answers: [
        ["Only Face Card players can enter", 0],
        ["Players must volunteer", 0],
        ["Players must register inside a central building", 0],
        ["People not already in another game automatically become participants", 1]
    ]
},

{
    question: "In Checkmate, what happens to a player who is captured?",
    answers: [
        ["They are eliminated", 0],
        ["They lose points", 0],
        ["They switch to the opposing team", 1],
        ["They become a spectator", 0]
    ]
},

{
    question: "What advantage does the Jack of Hearts have in Solitary Confinement?",
    answers: [
        ["He can control the timer", 0],
        ["He can lie about the suits", 1],
        ["He can change the suit on his collar", 0],
        ["He can see every player's collar", 0]
    ]
},

{
    question: "What happens when a player gives the wrong suit in Solitary Confinement?",
    answers: [
        ["The collar activates explosively", 1],
        ["The player loses one point", 0],
        ["The collar changes color", 0],
        ["The player is moved to another room", 0]
    ]
},

{
    question: "What number range can players choose in the Beauty Contest?",
    answers: [
        ["1–100", 0],
        ["0–50", 0],
        ["0–100", 1],
        ["1–50", 0]
    ]
},

{
    question: "What happens when a player's score reaches -10 in the Beauty Contest?",
    answers: [
        ["They lose their next turn", 0],
        ["They receive a penalty", 0],
        ["They are moved to another game", 0],
        ["Game Over", 1]
    ]
},

{
    question: "What game does the Queen of Hearts make Arisu play?",
    answers: [
        ["Checkmate", 0],
        ["Croquet", 1],
        ["Old Maid", 0],
        ["Chess", 0]
    ]
},

{
    question: "How many rounds of Croquet must players complete in the Queen of Hearts game?",
    answers: [
        ["Two", 0],
        ["Five", 0],
        ["Three", 1],
        ["One", 0]
    ]
},

{
    question: "What happens if a player draws the Joker from another player's hand in Old Maid?",
    answers: [
        ["They are eliminated", 1],
        ["They gain a point", 0],
        ["They must draw another card", 0],
        ["They become the dealer", 0]
    ]
},

{
    question: "How many fortune slips are involved in Sacred Fortunes?",
    answers: [
        ["7", 0],
        ["12", 0],
        ["5", 0],
        ["10", 1]
    ]
},

{
    question: "How much time does a player have for each fortune slip in Sacred Fortunes?",
    answers: [
        ["2 minutes", 0],
        ["1 minute", 1],
        ["30 seconds", 0],
        ["5 minutes", 0]
    ]
},

{
    question: "What happens when a player gives an incorrect answer in Sacred Fortunes?",
    answers: [
        ["They lose one point", 0],
        ["They receive another fortune slip", 0],
        ["Flaming arrows are fired according to the difference between their answer and the correct answer", 1],
        ["They are immediately eliminated by a laser", 0]
    ]
},

{
    question: "How many ordinary cards does each player initially have in Zombie Hunt?",
    answers: [
        ["6", 0],
        ["10", 0],
        ["5", 0],
        ["7", 1]
    ]
},

{
    question: "What happens when a Zombie Card defeats a human player in Zombie Hunt?",
    answers: [
        ["The player becomes infected", 1],
        ["The player loses all cards", 0],
        ["The player is eliminated immediately", 0],
        ["The player becomes immune", 0]
    ]
},

{
    question: "What does the Shotgun Card do in Zombie Hunt?",
    answers: [
        ["It gives the player extra points", 0],
        ["It restores a zombie", 0],
        ["It infects a human player", 0],
        ["It eliminates a zombie", 1]
    ]
},

{
    question: "What does the Vaccine Card do in Zombie Hunt?",
    answers: [
        ["It doubles the player's score", 0],
        ["It prevents infection or restores an infected player", 1],
        ["It eliminates another player", 0],
        ["It provides immunity from every attack", 0]
    ]
},

{
    question: "What is the main environmental hazard in Runaway Train?",
    answers: [
        ["Radiation", 0],
        ["Poison gas", 1],
        ["Flooding", 0],
        ["Fire", 0]
    ]
},

{
    question: "How many neutralizing-agent canisters does each player receive in Runaway Train?",
    answers: [
        ["4", 0],
        ["8", 0],
        ["5", 1],
        ["3", 0]
    ]
},

{
    question: "What clue can indicate that a train carriage contains poisonous gas?",
    answers: [
        ["A dead canary in a cage", 1],
        ["Broken windows", 0],
        ["Brighter lights", 0],
        ["Red seats", 0]
    ]
},

{
    question: "What restriction applies to the neutralizing-agent canisters in Runaway Train?",
    answers: [
        ["Players can share them freely", 0],
        ["Only one canister may be used", 0],
        ["Canisters must be discarded after each carriage", 0],
        ["A player cannot use another participant's canisters", 1]
    ]
},

{
    question: "What happens if the can in Kick the Can is not returned before the time limit?",
    answers: [
        ["The can disappears", 0],
        ["The round resets", 0],
        ["The can explodes", 1],
        ["The elevator stops", 0]
    ]
},

{
    question: "How many rooms are in Future Sugoroku?",
    answers: [
        ["20", 0],
        ["25", 1],
        ["16", 0],
        ["30", 0]
    ]
},

{
    question: "How many points does each player start with in Future Sugoroku?",
    answers: [
        ["12", 0],
        ["20", 0],
        ["15", 1],
        ["10", 0]
    ]
},

{
    question: "What do the screens inside the rooms show in Future Sugoroku?",
    answers: [
        ["Possible futures", 1],
        ["Previous games", 0],
        ["The location of the exit", 0],
        ["Players' visa history", 0]
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

        title = "🌱 Borderland Newcomer";
        description =
            "The rules of the Borderland games are still a mystery to you. It may be time to study the games and try again.";
        knowledge = "Casual Viewer";
        icon = "🌱";

    } else if (score <= 40) {

        title = "🎮 Game Participant";
        description =
            "You remember some of the Borderland's deadly challenges, but many game rules and mechanics still have you guessing.";
        knowledge = "Casual Fan";
        icon = "🎮";

    } else if (score <= 60) {

        title = "🏖️ Borderland Player";
        description =
            "Not bad! You remember many of the games, their objectives and some of the rules that kept the players alive.";
        knowledge = "Good Fan";
        icon = "🏖️";

    } else if (score <= 80) {

        title = "♠️ Borderland Survivor";
        description =
            "Impressive! You have a strong memory for the games, rules, hazards and challenges faced throughout Alice in Borderland.";
        knowledge = "Dedicated Fan";
        icon = "♠️";

    } else if (score <= 96) {

        title = "🃏 Face Card Expert";
        description =
            "Excellent! You remember most of the important game mechanics, rules and details from the Borderland.";
        knowledge = "Expert Fan";
        icon = "🃏";

    } else {

        title = "👑 Borderland Master";
        description =
            "Perfect score! You remembered practically every deadly rule, objective and game mechanic thrown at you.";
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
        "https://apocalypsequizzes.com/alice-in-borderland-games-quiz/";

    const shareText =
        `🃏 I scored ${finalScore} on the Alice in Borderland Games Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU know the deadly games of Alice in Borderland?`;

    const shareData = {
        title: "Alice in Borderland Games Quiz",
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