const questions = [

    {
        question: "What is the major discovery that gives survivors a potential weapon against the creatures?",
        answers: [
            ["The creatures are afraid of fire", 0],
            ["The creatures cannot survive sunlight", 0],
            ["High-frequency feedback can weaken the creatures", 1],
            ["The creatures can be controlled by radio signals", 0]
        ]
    },

    {
        question: "What injury does Marcus suffer while travelling?",
        answers: [
            ["A bear-trap injury", 1],
            ["A broken arm", 0],
            ["A knife wound", 0],
            ["A gunshot wound", 0]
        ]
    },

    {
        question: "Who plays Marcus Abbott?",
        answers: [
            ["John Krasinski", 0],
            ["Noah Jupe", 1],
            ["Cillian Murphy", 0],
            ["Djimon Hounsou", 0]
        ]
    },

    {
        question: "Why does Evelyn leave the foundry?",
        answers: [
            ["To find Regan", 0],
            ["To find food", 0],
            ["To visit Lee’s grave", 0],
            ["To find medical supplies and oxygen", 1]
        ]
    },

    {
        question: "Where does Regan go to broadcast the signal?",
        answers: [
            ["A radio station", 1],
            ["A lighthouse", 0],
            ["A television station", 0],
            ["A military bunker", 0]
        ]
    },

    {
        question: "Where does the baseball game take place?",
        answers: [
            ["A military base", 0],
            ["An abandoned field", 0],
            ["A city park", 1],
            ["A school stadium", 0]
        ]
    },

    {
        question: "What happened to Emmett's wife?",
        answers: [
            ["She was killed during the initial invasion", 0],
            ["She was killed at the marina", 0],
            ["She escaped to an island", 0],
            ["She died from illness", 1]
        ]
    },

    {
        question: "Who goes after Regan when she leaves the foundry?",
        answers: [
            ["Evelyn", 0],
            ["Emmett", 1],
            ["Marcus", 0],
            ["Lee", 0]
        ]
    },

    {
        question: "Approximately how many days after the invasion does the main story take place?",
        answers: [
            ["383 days", 0],
            ["89 days", 0],
            ["474 days", 1],
            ["219 days", 0]
        ]
    },

    {
        question: "What does Regan search for inside the train?",
        answers: [
            ["A first-aid kit", 1],
            ["A weapon", 0],
            ["Food", 0],
            ["A radio", 0]
        ]
    },

    {
        question: "What event is taking place when the film begins?",
        answers: [
            ["A town festival", 0],
            ["A baseball game", 1],
            ["A school graduation", 0],
            ["A football game", 0]
        ]
    },

    {
        question: "What does Evelyn use to distract the creature at the foundry?",
        answers: [
            ["A car horn", 0],
            ["A fire alarm", 0],
            ["An oxygen tank", 1],
            ["A radio", 0]
        ]
    },

    {
        question: "Which islands does Regan believe the radio signal is coming from?",
        answers: [
            ["The Shelter Islands", 0],
            ["The Manhattan Islands", 0],
            ["The Long Island Islands", 0],
            ["The Norwalk Islands", 1]
        ]
    },

    {
        question: "What happened to Emmett's sons?",
        answers: [
            ["They died during the invasion", 1],
            ["They escaped to an island", 0],
            ["They disappeared months later", 0],
            ["They joined the military", 0]
        ]
    },

    {
        question: "Where do Regan and Emmett go to find a boat?",
        answers: [
            ["A fishing village", 0],
            ["A marina", 1],
            ["A military harbor", 0],
            ["A river dock", 0]
        ]
    },

    {
        question: "Who directed A Quiet Place Part II?",
        answers: [
            ["James Wan", 0],
            ["Jordan Peele", 0],
            ["Matt Reeves", 0],
            ["John Krasinski", 1]
        ]
    },

    {
        question: "What does Emmett ask Regan how to say in sign language?",
        answers: [
            ["Hide", 0],
            ["Stop", 0],
            ["Dive", 1],
            ["Run", 0]
        ]
    },

    {
        question: "Why did survivors believe the island was safe from the creatures?",
        answers: [
            ["The creatures could not swim", 1],
            ["The island had no electricity", 0],
            ["The military protected it", 0],
            ["The island was heavily fortified", 0]
        ]
    },

    {
        question: "What song does Marcus hear repeatedly on the radio?",
        answers: [
            ["Dream Lover", 0],
            ["Beyond the Sea", 1],
            ["Somewhere Over the Rainbow", 0],
            ["Blue Moon", 0]
        ]
    },

    {
        question: "Where was Emmett living when the Abbotts found him?",
        answers: [
            ["In an abandoned railway station", 0],
            ["In an underground military bunker", 0],
            ["In an abandoned hospital", 0],
            ["In an abandoned steel foundry", 1]
        ]
    },

    {
        question: "Why does Regan leave the foundry?",
        answers: [
            ["She wants to find the island", 1],
            ["She wants to contact the military", 0],
            ["She wants to find food", 0],
            ["She wants to find her father", 0]
        ]
    },

    {
        question: "Where do Lee and Regan take shelter when the initial attack begins?",
        answers: [
            ["A police station", 0],
            ["A hospital", 0],
            ["A local store", 1],
            ["A church", 0]
        ]
    },

    {
        question: "What is Emmett's relationship with Lee?",
        answers: [
            ["They were military colleagues", 0],
            ["They were former friends", 1],
            ["They were neighbours who barely knew each other", 0],
            ["They were brothers", 0]
        ]
    },

    {
        question: "What does Regan use to kill the weakened creature on the island?",
        answers: [
            ["A shotgun", 0],
            ["An axe", 0],
            ["A metal rod", 1],
            ["A knife", 0]
        ]
    },

    {
        question: "How does a creature eventually reach the island?",
        answers: [
            ["It arrives on a drifting boat", 1],
            ["It swims across the water", 0],
            ["It can breathe underwater, so walked underwater", 0],
            ["A rival community deliberately brings it", 0]
        ]
    }

];


let currentQuestion = 0;

let selectedAnswers =
    new Array(questions.length).fill(null);


// =====================================================
// DOM ELEMENTS
// =====================================================

const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const homeInfo =
    document.getElementById("home-info");

const suggestionsCard =
    document.getElementById("suggestions-card");


const startButton =
    document.getElementById("start-btn");

const restartButton =
    document.getElementById("restart-btn");

const shareButton =
    document.getElementById("share-btn");

const challengeButton =
    document.getElementById("challenge-btn");


const backButton =
    document.getElementById("back-btn");

const nextButton =
    document.getElementById("next-btn");

const submitButton =
    document.getElementById("submit-btn");


const questionNumber =
    document.getElementById("question-number");

const questionText =
    document.getElementById("question");

const answersContainer =
    document.getElementById("answers");

const progressBar =
    document.getElementById("progress-bar");


// =====================================================
// EVENT LISTENERS
// =====================================================

startButton.addEventListener(
    "click",
    startQuiz
);

restartButton.addEventListener(
    "click",
    restartQuiz
);

shareButton.addEventListener(
    "click",
    shareResult
);

challengeButton.addEventListener(
    "click",
    shareResult
);

backButton.addEventListener(
    "click",
    goBack
);

nextButton.addEventListener(
    "click",
    goNext
);

submitButton.addEventListener(
    "click",
    showResult
);


// =====================================================
// START QUIZ
// =====================================================

function startQuiz() {

    currentQuestion = 0;

    selectedAnswers =
        new Array(questions.length).fill(null);


    startScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    homeInfo.classList.add("hidden");

    suggestionsCard.classList.add("hidden");


    progressBar.style.width = "0%";


    showQuestion();

}


// =====================================================
// SHOW QUESTION
// =====================================================

function showQuestion() {

    const current =
        questions[currentQuestion];


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    questionText.textContent =
        current.question;


    answersContainer.innerHTML = "";


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;


    progressBar.style.width =
        `${progress}%`;


    current.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.className =
                "answer";

            button.type =
                "button";

            button.textContent =
                answer[0];


            if (
                selectedAnswers[currentQuestion] === index
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.addEventListener(
                "click",
                () => {
                    selectAnswer(index);
                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );


    updateNavigation();

}


// =====================================================
// SELECT ANSWER
// =====================================================

function selectAnswer(answerIndex) {

    selectedAnswers[currentQuestion] =
        answerIndex;


    const buttons =
        answersContainer.querySelectorAll(
            ".answer"
        );


    buttons.forEach(
        (button, index) => {

            button.classList.toggle(
                "selected",
                index === answerIndex
            );

        }
    );


    updateNavigation();


    const questionAtSelection =
        currentQuestion;


    setTimeout(
        () => {

            if (
                currentQuestion === questionAtSelection &&
                selectedAnswers[questionAtSelection] === answerIndex &&
                currentQuestion < questions.length - 1
            ) {

                currentQuestion++;

                showQuestion();

            }

        },
        180
    );

}


// =====================================================
// NEXT
// =====================================================

function goNext() {

    if (
        selectedAnswers[currentQuestion] === null
    ) {

        return;

    }


    if (
        currentQuestion === questions.length - 1
    ) {

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


// =====================================================
// BACK
// =====================================================

function goBack() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

}


// =====================================================
// UPDATE NAVIGATION
// =====================================================

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


    backButton.disabled =
        isFirst;


    if (isLast) {

        nextButton.classList.add(
            "hidden"
        );

        submitButton.classList.remove(
            "hidden"
        );


        submitButton.disabled =
            !allAnswered;


        submitButton.textContent =
            allAnswered
                ? "SUBMIT"
                : "Answer All Questions";

    }

    else {

        submitButton.classList.add(
            "hidden"
        );

        nextButton.classList.remove(
            "hidden"
        );


        nextButton.textContent =
            "Next →";


        nextButton.disabled =
            !currentAnswered;

    }

}


// =====================================================
// CALCULATE SCORE
// =====================================================

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


// =====================================================
// SHOW RESULT
// =====================================================

function showResult() {

    const correctAnswers =
        calculateScore();


    const totalQuestions =
        questions.length;


    const incorrectAnswers =
        totalQuestions - correctAnswers;


    const score =
        Math.round(
            (correctAnswers / totalQuestions) * 100
        );


    const accuracy =
        score;


    // -------------------------------
    // SCREEN VISIBILITY
    // -------------------------------

    quizScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.remove(
        "hidden"
    );

    homeInfo.classList.remove(
        "hidden"
    );

    suggestionsCard.classList.remove(
        "hidden"
    );


    // -------------------------------
    // SCORE
    // -------------------------------

    document.getElementById(
        "final-score"
    ).textContent =
        `${score}%`;


    // -------------------------------
    // RESULT BREAKDOWN
    // -------------------------------

    document.getElementById(
        "correct-count"
    ).textContent =
        correctAnswers;


    document.getElementById(
        "incorrect-count"
    ).textContent =
        incorrectAnswers;


    document.getElementById(
        "total-count"
    ).textContent =
        totalQuestions;


    document.getElementById(
        "accuracy-percent"
    ).textContent =
        `${accuracy}%`;


    // -------------------------------
    // RESULT LEVEL
    // -------------------------------

    let title;

    let description;

    let knowledge;

    let icon;


    if (score <= 20) {

        title =
            "🔇 Silent Newcomer";

        description =
            "The world of A Quiet Place Part II is still a little hazy. It may be time to revisit the film and try again.";

        knowledge =
            "Casual Viewer";

        icon =
            "🔇";

    }

    else if (score <= 40) {

        title =
            "🏚️ Foundry Survivor";

        description =
            "You remember some of the major events and characters, but several details about the survivors and creatures slipped through the cracks.";

        knowledge =
            "Casual Fan";

        icon =
            "🏚️";

    }

    else if (score <= 60) {

        title =
            "👂 Sound Survivor";

        description =
            "Not bad! You remember many of the movie's major events, characters, survival methods and creature details.";

        knowledge =
            "Good Fan";

        icon =
            "👂";

    }

    else if (score <= 80) {

        title =
            "🏝️ Island Survivor";

        description =
            "Impressive! You have a strong memory for the survivors, key events, radio signal and the creatures' weakness.";

        knowledge =
            "Dedicated Fan";

        icon =
            "🏝️";

    }

    else if (score <= 96) {

        title =
            "📻 Signal Expert";

        description =
            "Excellent! You remember most of the important characters, survival strategies, major events and details about the creatures.";

        knowledge =
            "Expert Fan";

        icon =
            "📻";

    }

    else {

        title =
            "👑 A Quiet Place Master";

        description =
            "Perfect score! You remembered practically every major detail about the survivors, their journey and the creatures.";

        knowledge =
            "Ultimate Fan";

        icon =
            "👑";

    }


    document.getElementById(
        "result-title"
    ).textContent =
        title;


    document.getElementById(
        "result-description"
    ).textContent =
        description;


    document.getElementById(
        "knowledge-level"
    ).textContent =
        knowledge;


    document.getElementById(
        "result-icon"
    ).textContent =
        icon;


    progressBar.style.width =
        "100%";


    // Scroll to result

    resultScreen.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =====================================================
// RESTART QUIZ
// =====================================================

function restartQuiz() {

    currentQuestion = 0;


    selectedAnswers =
        new Array(questions.length).fill(null);


    resultScreen.classList.add(
        "hidden"
    );

    quizScreen.classList.add(
        "hidden"
    );

    startScreen.classList.remove(
        "hidden"
    );

    homeInfo.classList.remove(
        "hidden"
    );

    suggestionsCard.classList.add(
        "hidden"
    );


    progressBar.style.width =
        "0%";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =====================================================
// SHARE RESULT
// =====================================================

async function shareResult() {

    const title =
        document.getElementById(
            "result-title"
        ).textContent;


    const knowledge =
        document.getElementById(
            "knowledge-level"
        ).textContent;


    const finalScore =
        document.getElementById(
            "final-score"
        ).textContent;


    const quizUrl =
        "https://apocalypsequizzes.com/a-quiet-place-part-II-quiz/";


    const shareText =
        `🔇 I scored ${finalScore} on the A Quiet Place Part II Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU remember A Quiet Place Part II?`;


    const shareData = {

        title:
            "A Quiet Place Part II Quiz",

        text:
            shareText,

        url:
            quizUrl

    };


    try {

        if (navigator.share) {

            await navigator.share(
                shareData
            );

        }

        else {

            await navigator.clipboard.writeText(
                shareText +
                "\n\n" +
                quizUrl
            );


            alert(
                "Your result has been copied! You can paste it anywhere."
            );

        }

    }

    catch (error) {

        console.log(
            "Sharing cancelled."
        );

    }

}


// =====================================================
// GLOBAL SITE MENU
// =====================================================

const menuToggle =
    document.getElementById(
        "menu-toggle"
    );

const siteMenu =
    document.getElementById(
        "site-menu"
    );


if (menuToggle && siteMenu) {


    // -------------------------------
    // OPEN / CLOSE WITH HAMBURGER
    // -------------------------------

    menuToggle.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            const isOpen =
                menuToggle.getAttribute(
                    "aria-expanded"
                ) === "true";


            siteMenu.hidden =
                isOpen;


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

        }
    );


    // -------------------------------
    // CLOSE WHEN CLICKING OUTSIDE
    // -------------------------------

    document.addEventListener(
        "click",
        function (event) {

            if (
                !siteMenu.hidden &&
                !siteMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                siteMenu.hidden =
                    true;


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            }

        }
    );


    // -------------------------------
    // CLOSE AFTER MENU LINK
    // -------------------------------

    siteMenu
        .querySelectorAll("a")
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        siteMenu.hidden =
                            true;


                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );


                        menuToggle.setAttribute(
                            "aria-label",
                            "Open navigation"
                        );

                    }
                );

            }
        );

}
