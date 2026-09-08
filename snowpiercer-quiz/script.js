const questions = [

    // QUESTION 1
    {
        question: "What catastrophic event caused the world to freeze?",
        answers: [
            ["A nuclear war", 0],
            ["A massive volcanic eruption", 0],
            ["A collision with an asteroid", 0],
            ["The release of CW-7 to combat global warming", 2]
        ]
    },

    // QUESTION 2
    {
        question: "Who built/manufactured Snowpiercer?",
        answers: [
            ["The International Peacekeeping Forces", 0],
            ["Wilford Industries", 2],
            ["The United States government", 0],
            ["Melanie's research team", 0]
        ]
    },

    // QUESTION 3
    {
        question: "How many cars did Snowpiercer originally have?",
        answers: [
            ["1,001", 2],
            ["879", 0],
            ["994", 0],
            ["1,034", 0]
        ]
    },

    // QUESTION 4
    {
        question: "How long after the Freeze does the TV series begin?",
        answers: [
            ["3 years", 0],
            ["5 years", 0],
            ["10 years", 0],
            ["7 years", 2]
        ]
    },

    // QUESTION 5
    {
        question: "Approximately how cold is the outside world after the Freeze?",
        answers: [
            ["−40°C to −60°C", 0],
            ["−70°C to −90°C", 0],
            ["−160°C to −190°C", 0],
            ["−110°C to −140°C", 2]
        ]
    },

    // QUESTION 6
    {
        question: "What was Layton's profession before the Freeze?",
        answers: [
            ["Train conductor", 0],
            ["Security officer", 0],
            ["Chicago homicide detective", 2],
            ["Engineer", 0]
        ]
    },

    // QUESTION 7
    {
        question: "Who is the powerful leader of Snowpiercer when the series begins?",
        answers: [
            ["Melanie Cavill", 2],
            ["Ruth Wardell", 0],
            ["Josie Wellstead", 0],
            ["LJ Folger", 0]
        ]
    },

    // QUESTION 8
    {
        question: "Whose murder was Layton originally brought in to investigate?",
        answers: [
            ["Edward Folger", 0],
            ["Kevin McMahon", 0],
            ["Erik Sotto", 0],
            ["Sean Wise", 2]
        ]
    },

    // QUESTION 9
    {
        question: "Why does Melanie recruit Layton to investigate the murders?",
        answers: [
            ["He was Wilford's former assistant", 0],
            ["He is the only surviving person known to have homicide detective skills", 2],
            ["He knows the train's engineering systems", 0],
            ["He was a former Breachman", 0]
        ]
    },

    // QUESTION 10
    {
        question: "Who is ultimately revealed as the mastermind behind the murders investigated by Layton?",
        answers: [
            ["LJ Folger", 2],
            ["Melanie Cavill", 0],
            ["Ruth Wardell", 0],
            ["Pike", 0]
        ]
    },

    // QUESTION 11
    {
        question: "Why was Nikki Genêt placed in the Drawers?",
        answers: [
            ["She attacked Melanie", 0],
            ["She was wrongly blamed for Edward's murder", 2],
            ["She stole Kronole", 0],
            ["She attempted to escape Snowpiercer", 0]
        ]
    },

    // QUESTION 12
    {
        question: "What is Kronole?",
        answers: [
            ["A type of food", 0],
            ["A chemical used in the Engine", 0],
            ["A sleeping gas", 0],
            ["An illegal street drug made from the suspension drug", 2]
        ]
    },

    // QUESTION 13
    {
        question: "Who is involved in trading Kronole in the Tail during Layton's investigation?",
        answers: [
            ["Oz", 2],
            ["Pike", 0],
            ["Roche", 0],
            ["Miles", 0]
        ]
    },

    // QUESTION 14
    {
        question: "What is the connection between Kronole and the Drawers' suspension drug?",
        answers: [
            ["Kronole is an antidote to it", 0],
            ["They are completely unrelated", 0],
            ["Kronole is used to wake people from the Drawers", 0],
            ["Kronole is made from the suspension drug", 2]
        ]
    },

    // QUESTION 15
    {
        question: "What is the purpose of the Drawers?",
        answers: [
            ["To store food supplies", 0],
            ["To place people into long-term suspended animation", 2],
            ["To punish criminals through isolation", 0],
            ["To repair injured passengers", 0]
        ]
    },

    // QUESTION 16
    {
        question: "What is the primary role of the Breachmen?",
        answers: [
            ["Guard the First Class", 0],
            ["Manage agricultural production", 0],
            ["Investigate crimes", 0],
            ["Maintain and repair the train's exterior systems", 2]
        ]
    },

    // QUESTION 17
    {
        question: "Why is Bess Till initially assigned to work in the Tail?",
        answers: [
            ["She is punished for mistreating Layton", 2],
            ["She volunteers for the position", 0],
            ["She is promoted to Tail security", 0],
            ["She loses a bet with Roche", 0]
        ]
    },

    // QUESTION 18
    {
        question: "What does Miss Audrey oversee aboard Snowpiercer?",
        answers: [
            ["Ag-Sec", 0],
            ["The Night Car", 2],
            ["The Drawers", 0],
            ["The Engine", 0]
        ]
    },

    // QUESTION 19
    {
        question: "What is the primary purpose of Ag-Sec?",
        answers: [
            ["Medical treatment", 0],
            ["Security and law enforcement", 0],
            ["Agricultural and food production", 2],
            ["Train maintenance", 0]
        ]
    },

    // QUESTION 20
    {
        question: "What are the protein bars given to the Tailies made from?",
        answers: [
            ["Fish protein", 0],
            ["Soybeans", 0],
            ["Insects", 2],
            ["Algae", 0]
        ]
    },

    // QUESTION 21
    {
        question: "Which young Tailie becomes an apprentice engineer aboard Snowpiercer?",
        answers: [
            ["Miles Chapman", 2],
            ["Strong Boy", 0],
            ["Z-Wreck", 0],
            ["Santiago", 0]
        ]
    },

    // QUESTION 22
    {
        question: "What is Jinju Seong's official role aboard Snowpiercer?",
        answers: [
            ["Head of Engineering", 0],
            ["Head of Security", 0],
            ["Agriculture Officer", 2],
            ["Head of Hospitality", 0]
        ]
    },

    // QUESTION 23
    {
        question: "What was Pike's criminal background before the Freeze?",
        answers: [
            ["Drug trafficking", 0],
            ["Smuggling", 0],
            ["Armed robbery", 2],
            ["Murder", 0]
        ]
    },

    // QUESTION 24
    {
        question: "How many cars were disconnected during the First Snowpiercer War?",
        answers: [
            ["4", 0],
            ["7", 2],
            ["5", 0],
            ["10", 0]
        ]
    },

    // QUESTION 25
    {
        question: "What is the name of the second major train associated with Mr. Wilford?",
        answers: [
            ["Wilford One", 0],
            ["Big Alice", 2],
            ["New Eden", 0],
            ["Eternal Express", 0]
        ]
    },

    // QUESTION 26
    {
        question: "What was Big Alice originally intended to be?",
        answers: [
            ["A military train", 0],
            ["A passenger train", 0],
            ["A secondary supply train", 2],
            ["A prison train", 0]
        ]
    },

    // QUESTION 27
    {
        question: "How many people originally survived aboard Big Alice?",
        answers: [
            ["200", 2],
            ["100", 0],
            ["150", 0],
            ["300", 0]
        ]
    },

    // QUESTION 28
    {
        question: "How many cars does Big Alice have when it arrives and connects to Snowpiercer?",
        answers: [
            ["20", 0],
            ["30", 0],
            ["43", 0],
            ["40", 2]
        ]
    },

    // QUESTION 29
    {
        question: "Who is revealed to be Melanie's daughter and living with Wilford?",
        answers: [
            ["Zarah Fahrami", 0],
            ["Liana Layton", 0],
            ["Nikki Genêt", 0],
            ["Alexandra \"Alex\" Cavill", 2]
        ]
    },

    // QUESTION 30
    {
        question: "What does \"Wilford's Rolling Gulag\" refer to?",
        answers: [
            ["A prison train outside Snowpiercer", 0],
            ["A group of Tailies", 0],
            ["The combined Snowpiercer and Big Alice under Wilford's control", 2],
            ["A military base", 0]
        ]
    },

    // QUESTION 31
    {
        question: "What is the name of Layton and Zarah's daughter?",
        answers: [
            ["Alexandra", 0],
            ["Liana", 2],
            ["Nikki", 0],
            ["Asha", 0]
        ]
    },

    // QUESTION 32
    {
        question: "Who was Layton's wife before the series?",
        answers: [
            ["Zarah Fahrami", 2],
            ["Josie Wellstead", 0],
            ["Ruth Wardell", 0],
            ["Miss Audrey", 0]
        ]
    },

    // QUESTION 33
    {
        question: "Approximately how many cars does Melanie say are \"just like\" the greenhouse car in the agricultural section?",
        answers: [
            ["131", 2],
            ["50", 0],
            ["87", 0],
            ["200", 0]
        ]
    },

    // QUESTION 34
    {
        question: "How long had Melanie been pretending to be Mr. Wilford when the series begins?",
        answers: [
            ["3 years", 0],
            ["5 years", 0],
            ["7 years", 2],
            ["10 years", 0]
        ]
    },

    // QUESTION 35
    {
        question: "How many cars does the Pirate Train initially consist of?",
        answers: [
            ["6", 0],
            ["10", 2],
            ["8", 0],
            ["12", 0]
        ]
    },

    // QUESTION 36
    {
        question: "How many cars remained on Snowpiercer after the group left for New Eden?",
        answers: [
            ["779", 0],
            ["979", 0],
            ["1,001", 0],
            ["879", 2]
        ]
    },

    // QUESTION 37
    {
        question: "Where does Layton discover Asha?",
        answers: [
            ["A nuclear power plant in North Korea", 2],
            ["An abandoned military bunker in Russia", 0],
            ["A research station in Canada", 0],
            ["A hospital in Japan", 0]
        ]
    },

    // QUESTION 38
    {
        question: "How many people initially survived in the nuclear facility where Asha was found?",
        answers: [
            ["12", 0],
            ["24", 0],
            ["34", 2],
            ["44", 0]
        ]
    },

    // QUESTION 39
    {
        question: "Where is New Eden located?",
        answers: [
            ["South America", 0],
            ["Northern Europe", 0],
            ["The Horn of Africa", 2],
            ["Southeast Asia", 0]
        ]
    },

    // QUESTION 40
    {
        question: "Approximately how long does Snowpiercer take to complete one full revolution around the Earth?",
        answers: [
            ["133 days", 2],
            ["90 days", 0],
            ["100 days", 0],
            ["180 days", 0]
        ]
    },

    // QUESTION 41
    {
        question: "How long does Alexandra say Snowpiercer can remain stopped before the cold overwhelms the train?",
        answers: [
            ["5 minutes", 0],
            ["13 minutes", 2],
            ["20 minutes", 0],
            ["30 minutes", 0]
        ]
    },

    // QUESTION 42
    {
        question: "Who is accidentally left behind when the Pirate Train separates from Snowpiercer?",
        answers: [
            ["Ruth", 2],
            ["Josie", 0],
            ["Zarah", 0],
            ["Audrey", 0]
        ]
    },

    // QUESTION 43
    {
        question: "Who becomes the elected leader of New Eden after Layton steps down?",
        answers: [
            ["Melanie Cavill", 0],
            ["Josie Wellstead", 0],
            ["Bess Till", 0],
            ["Ruth Wardell", 2]
        ]
    },

    // QUESTION 44
    {
        question: "Who leads the International Peacekeeping Forces operation that takes control of Snowpiercer in Season 4?",
        answers: [
            ["Joseph Wilford", 0],
            ["Doctor Nima Rousseau", 0],
            ["Admiral Anton Milius", 2],
            ["Bennett Knox", 0]
        ]
    },

    // QUESTION 45
    {
        question: "What is the Silo in Season 4?",
        answers: [
            ["A military bunker in Djibouti", 2],
            ["A former agricultural facility", 0],
            ["An abandoned train station", 0],
            ["A nuclear power plant", 0]
        ]
    },

    // QUESTION 46
    {
        question: "What is Gemini?",
        answers: [
            ["A new suspension drug", 0],
            ["A chemical compound designed to break down CW-7", 2],
            ["A weapon developed by the IPF", 0],
            ["A new train engine", 0]
        ]
    },

    // QUESTION 47
    {
        question: "What is the main intended purpose of the Gemini project?",
        answers: [
            ["To restart Snowpiercer's engine", 0],
            ["To break down CW-7 and help end the Freeze", 2],
            ["To create a new suspension drug", 0],
            ["To destroy Big Alice", 0]
        ]
    },

    // QUESTION 48
    {
        question: "How does Javi use technology to help Snowpiercer navigate its environment?",
        answers: [
            ["He uses radio broadcasts from other survivors", 0],
            ["He manually maps every railway line", 0],
            ["He uses drones to search for survivors", 0],
            ["He controls satellites and uses computer algorithms to predict conditions", 2]
        ]
    },

    // QUESTION 49
    {
        question: "What specifically causes Big Alice to derail while approaching New Eden?",
        answers: [
            ["A landslide", 0],
            ["A damaged/unsafe section of track", 2],
            ["An avalanche", 0],
            ["An explosion", 0]
        ]
    },

    // QUESTION 50
    {
        question: "How did the world come to an end in Snowpiercer?",
        answers: [
            ["Nuclear war destroyed civilization", 0],
            ["A virus killed most of humanity", 0],
            ["CW-7 was released to combat global warming and caused a catastrophic freeze", 2],
            ["A solar storm destroyed the planet", 0]
        ]
    }

];

let currentQuestion = 0;

// Stores the selected answer index for every question.
// null = unanswered
let selectedAnswers = new Array(questions.length).fill(null);


// ===============================
// ELEMENTS
// ===============================

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

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");


// ===============================
// BUTTON EVENTS
// ===============================

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
shareButton.addEventListener("click", shareResult);
challengeButton.addEventListener("click", shareResult);

backButton.addEventListener("click", goBack);
nextButton.addEventListener("click", goNext);


// ===============================
// START QUIZ
// ===============================

function startQuiz() {

    currentQuestion = 0;

    // Reset all answers
    selectedAnswers =
        new Array(questions.length).fill(null);

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    homeInfo.classList.add("hidden");

    showQuestion();
}


// ===============================
// SHOW QUESTION
// ===============================

function showQuestion() {

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent =
        current.question;

    answersContainer.innerHTML = "";


    // Progress
    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width =
        `${progress}%`;


    // Create answer buttons
    current.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "answer";

        button.type = "button";

        button.textContent =
            answer[0];


        // =====================================
        // RESTORE PREVIOUSLY SELECTED ANSWER
        // =====================================

        if (
            selectedAnswers[currentQuestion] === index
        ) {

            button.classList.add("selected");

            // Force selected appearance
            button.style.backgroundColor = "#444";
            button.style.borderColor = "#ffffff";
            button.style.color = "#ffffff";
            button.style.fontWeight = "700";
            button.style.boxShadow =
                "0 0 0 2px rgba(255,255,255,0.25)";
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

    // Save answer
    selectedAnswers[currentQuestion] =
        answerIndex;


    // Highlight selected answer immediately
    const buttons =
        answersContainer.querySelectorAll(".answer");


    buttons.forEach((button, index) => {

        if (index === answerIndex) {

            button.classList.add("selected");

            button.style.backgroundColor = "#444";
            button.style.borderColor = "#ffffff";
            button.style.color = "#ffffff";
            button.style.fontWeight = "700";
            button.style.boxShadow =
                "0 0 0 2px rgba(255,255,255,0.25)";

        } else {

            button.classList.remove("selected");

            button.style.backgroundColor = "";
            button.style.borderColor = "";
            button.style.color = "";
            button.style.fontWeight = "";
            button.style.boxShadow = "";

        }

    });


    updateNavigation();


    // =====================================
    // AUTOMATICALLY MOVE TO NEXT QUESTION
    // =====================================

    if (
        currentQuestion <
        questions.length - 1
    ) {

        const questionAtSelection =
            currentQuestion;


        setTimeout(() => {

            // Only advance if user is still
            // on the same question
            if (
                currentQuestion ===
                    questionAtSelection &&

                selectedAnswers[
                    questionAtSelection
                ] === answerIndex
            ) {

                currentQuestion++;

                showQuestion();

            }

        }, 150);
    }
}


// ===============================
// NEXT BUTTON
// ===============================

function goNext() {

    // =====================================
    // FINAL QUESTION = SUBMIT
    // =====================================

    if (
        currentQuestion ===
        questions.length - 1
    ) {

        const allAnswered =
            selectedAnswers.every(
                answer => answer !== null
            );


        if (allAnswered) {

            showResult();

        }

        return;
    }


    // Don't allow unanswered question
    if (
        selectedAnswers[currentQuestion] === null
    ) {

        return;

    }


    currentQuestion++;

    showQuestion();
}


// ===============================
// BACK BUTTON
// ===============================

function goBack() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }
}


// ===============================
// UPDATE NAVIGATION
// ===============================

function updateNavigation() {

    const isFirst =
        currentQuestion === 0;

    const isLast =
        currentQuestion ===
        questions.length - 1;


    const currentAnswered =
        selectedAnswers[currentQuestion] !== null;


    const allAnswered =
        selectedAnswers.every(
            answer => answer !== null
        );


    // =====================================
    // BACK BUTTON
    // =====================================

    backButton.disabled =
        isFirst;


    // =====================================
    // FINAL QUESTION
    // =====================================

    if (isLast) {

        nextButton.textContent =
            "SUBMIT";


        nextButton.disabled =
            !allAnswered;


        if (allAnswered) {

            nextButton.classList.add(
                "submit-ready"
            );

        } else {

            nextButton.classList.remove(
                "submit-ready"
            );

        }

    } else {

        nextButton.textContent =
            "Next →";


        nextButton.disabled =
            !currentAnswered;


        nextButton.classList.remove(
            "submit-ready"
        );
    }
}


// ===============================
// CALCULATE SCORE
// ===============================

function calculateScore() {

    let score = 0;


    selectedAnswers.forEach(
        (answerIndex, questionIndex) => {

            if (answerIndex === null) {

                return;

            }


            score +=
                questions[
                    questionIndex
                ].answers[
                    answerIndex
                ][1];

        }
    );


    return score;
}


// ===============================
// SHOW RESULT
// ===============================

function showResult() {

    // Calculate score only when submitted
    const score =
        calculateScore();


    homeInfo.classList.remove("hidden");

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");


    document.getElementById(
        "final-score"
    ).textContent = score;


    let title;
    let description;
    let survival;
    let icon;


    // ===============================
    // RESULT LEVELS
    // ===============================

    if (score <= 20) {

        title =
            "☠️ Frozen Casualty";

        description =
            "Your knowledge of Snowpiercer is still pretty limited. You might not survive long aboard the eternal train.";

        survival =
            "You'd struggle aboard Snowpiercer";

        icon =
            "☠️";


    } else if (score <= 40) {

        title =
            "❄️ Freeze Survivor";

        description =
            "You know some of the major characters and events, but there is still plenty of Snowpiercer you haven't mastered.";

        survival =
            "Survive the early Freeze";

        icon =
            "❄️";


    } else if (score <= 60) {

        title =
            "🚆 Snowpiercer Passenger";

        description =
            "You've got a solid knowledge of Snowpiercer. You know Layton, Melanie, Wilford and many of the major events.";

        survival =
            "Survive aboard the train";

        icon =
            "🚆";


    } else if (score <= 80) {

        title =
            "🛡️ Train Survivor";

        description =
            "You know Snowpiercer very well. The major characters, factions, conflicts and events are clearly familiar territory.";

        survival =
            "Survive the train and the Freeze";

        icon =
            "🛡️";


    } else if (score <= 94) {

        title =
            "🔥 Snowpiercer Veteran";

        description =
            "Impressive. Your knowledge of Snowpiercer is strong enough to make you a serious veteran of the eternal train.";

        survival =
            "Lead the survivors";

        icon =
            "🔥";


    } else {

        title =
            "🚆 Snowpiercer Expert";

        description =
            "You know Snowpiercer inside and out. From the Freeze and Tailies to Big Alice, New Eden and Gemini, almost nothing escaped your memory.";

        survival =
            "You know the entire journey";

        icon =
            "🚆";
    }


    // ===============================
    // DISPLAY RESULT
    // ===============================

    document.getElementById(
        "result-title"
    ).textContent = title;


    document.getElementById(
        "result-description"
    ).textContent = description;


    document.getElementById(
        "survival-time"
    ).textContent = survival;


    const resultIcon =
        document.getElementById("result-icon");


    if (resultIcon) {

        resultIcon.textContent =
            icon;

    }


    progressBar.style.width =
        "100%";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
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


    progressBar.style.width =
        "0%";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ===============================
// SHARE RESULT
// ===============================

async function shareResult() {

    const title =
        document.getElementById(
            "result-title"
        ).textContent;


    const survival =
        document.getElementById(
            "survival-time"
        ).textContent;


    const finalScore =
        document.getElementById(
            "final-score"
        ).textContent;


    const shareText =
        `🚆 I scored ${finalScore}/100 on the Snowpiercer Quiz!\n\n` +
        `${title}\n` +
        `${survival}\n\n` +
        `How well do YOU know Snowpiercer?`;


    const shareData = {

        title:
            "How Well Do You Know Snowpiercer?",

        text:
            shareText,

        url:
            "https://apocalypsequizzes.com/snowpiercer-quiz/"

    };


    try {

        if (navigator.share) {

            await navigator.share(
                shareData
            );

        } else {

            await navigator.clipboard.writeText(
                shareText +
                "\n\nhttps://apocalypsequizzes.com/snowpiercer-quiz/"
            );


            alert(
                "Your result has been copied! You can paste it anywhere."
            );

        }

    } catch (error) {

        console.log(
            "Sharing cancelled."
        );

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