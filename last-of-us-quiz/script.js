let currentQuestion = 0;

let selectedAnswers =
    new Array(questions.length).fill(null);


// =====================================================
// ELEMENTS
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
// BUTTON EVENTS
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
        ((currentQuestion + 1) /
            questions.length) * 100;


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
                currentQuestion ===
                    questionAtSelection &&

                selectedAnswers[
                    questionAtSelection
                ] === answerIndex &&

                currentQuestion <
                    questions.length - 1
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
        currentQuestion ===
        questions.length - 1
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
        currentQuestion ===
        questions.length - 1;


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

    } else {

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
// CALCULATE CORRECT ANSWERS
// =====================================================

function calculateCorrectAnswers() {

    let correctAnswers = 0;


    selectedAnswers.forEach(
        (answerIndex, questionIndex) => {

            if (answerIndex === null) {
                return;
            }


            /*
             * Your Last of Us question bank uses:
             *
             * correct answer = 2
             * incorrect answer = 0
             *
             * Therefore a value of 2 means correct.
             */

            if (
                questions[questionIndex]
                    .answers[answerIndex][1] === 2
            ) {

                correctAnswers++;

            }

        }
    );


    return correctAnswers;
}


// =====================================================
// SHOW RESULT
// =====================================================

function showResult() {

    const correctAnswers =
        calculateCorrectAnswers();


    const totalQuestions =
        questions.length;


    const incorrectAnswers =
        totalQuestions -
        correctAnswers;


    const score =
        Math.round(
            (correctAnswers /
                totalQuestions) * 100
        );


    const accuracy =
        score;


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


    document.getElementById(
        "final-score"
    ).textContent =
        `${score}%`;


    // =================================================
    // RESULT BREAKDOWN
    // =================================================

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


    // =================================================
    // RESULT LEVEL
    // =================================================

    let title;
    let description;
    let knowledge;
    let icon;


    if (score <= 20) {

        title =
            "☠️ FEDRA Casualty";


        description =
            "Your knowledge of The Last of Us is still pretty limited. You might not last long outside the QZ.";


        knowledge =
            "Casual Viewer";


        icon =
            "☠️";


    } else if (score <= 40) {

        title =
            "🧟 Infected Survivor";


        description =
            "You know some of the major characters and events, but there is still plenty of The Last of Us you haven't mastered.";


        knowledge =
            "Casual Fan";


        icon =
            "🧟";


    } else if (score <= 60) {

        title =
            "🛡️ Jackson Survivor";


        description =
            "You've got a solid knowledge of The Last of Us. You know Joel, Ellie, the Fireflies and many of the major events.";


        knowledge =
            "Good Fan";


        icon =
            "🛡️";


    } else if (score <= 80) {

        title =
            "🏹 WLF Survivor";


        description =
            "You know The Last of Us very well. The major characters, factions, conflicts and events are clearly familiar territory.";


        knowledge =
            "Dedicated Fan";


        icon =
            "🏹";


    } else if (score <= 94) {

        title =
            "🔥 Firefly Veteran";


        description =
            "Impressive. Your knowledge of The Last of Us is strong enough to make you a serious survivor in the post-apocalyptic world.";


        knowledge =
            "Expert Fan";


        icon =
            "🔥";


    } else {

        title =
            "🍄 Cordyceps Expert";


        description =
            "You know The Last of Us inside and out. From the outbreak and Boston to Jackson, Seattle and the Fireflies, almost nothing escaped your memory.";


        knowledge =
            "Ultimate Fan";


        icon =
            "🍄";

    }


    // =================================================
    // DISPLAY RESULT
    // =================================================

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


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =====================================================
// RESTART
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
        "https://apocalypsequizzes.com/last-of-us-quiz/";


    const shareText =
        `🍄 I scored ${finalScore} on The Last of Us Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU know The Last of Us?`;


    const shareData = {

        title:
            "The Last of Us Quiz",

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


    // =================================================
    // OPEN / CLOSE WITH HAMBURGER
    // =================================================

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


    // =================================================
    // CLOSE WHEN CLICKING OUTSIDE
    // =================================================

    document.addEventListener(
        "click",
        function (event) {

            if (
                !siteMenu.hidden &&

                !siteMenu.contains(
                    event.target
                ) &&

                !menuToggle.contains(
                    event.target
                )
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


    // =================================================
    // CLOSE AFTER CLICKING MENU LINK
    // =================================================

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
