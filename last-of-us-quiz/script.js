const questions = [

    // QUESTION 1
    {
        question: "Who was the leader of the Fireflies in The Last of Us?",
        answers: [
            ["Tess Servopoulos", 0],
            ["Marlene", 2],
            ["Maria Miller", 0],
            ["Kathleen Coghlan", 0]
        ]
    },

    // QUESTION 2
    {
        question: "Who was Joel's smuggling partner in Boston?",
        answers: [
            ["Tommy Miller", 0],
            ["Bill", 0],
            ["Tess Servopoulos", 2],
            ["Robert", 0]
        ]
    },

    // QUESTION 3
    {
        question: "What caused the outbreak in The Last of Us?",
        answers: [
            ["A mutated influenza virus", 0],
            ["A fungal infection caused by Cordyceps", 2],
            ["A failed government experiment", 0],
            ["A biological weapon released by the Fireflies", 0]
        ]
    },

    // QUESTION 4
    {
        question: "Who warned about the potential threat of fungi during a talk show?",
        answers: [
            ["Dr. Neuman", 2],
            ["Dr. Schoenheiss", 0],
            ["Dr. Ratna", 0],
            ["Dr. Anderson", 0]
        ]
    },

    // QUESTION 5
    {
        question: "Who becomes Ellie's romantic partner in Season 2?",
        answers: [
            ["Riley Abel", 0],
            ["Dina", 2],
            ["Maria Miller", 0],
            ["Yara", 0]
        ]
    },

    // QUESTION 6
    {
        question: "Who is Joel's younger brother?",
        answers: [
            ["Henry", 0],
            ["Tommy Miller", 2],
            ["Owen Moore", 0],
            ["Jesse", 0]
        ]
    },

    // QUESTION 7
    {
        question: "Who did Joel and Ellie meet on the road who lived alone in a remote area?",
        answers: [
            ["Bill", 2],
            ["David", 0],
            ["Frank", 0],
            ["Henry", 0]
        ]
    },

    // QUESTION 8
    {
        question: "Who was Bill's romantic partner?",
        answers: [
            ["Joel", 0],
            ["Frank", 2],
            ["Tommy", 0],
            ["Robert", 0]
        ]
    },

    // QUESTION 9
    {
        question: "How did Bill and Frank die?",
        answers: [
            ["They were killed by infected", 0],
            ["They were killed by raiders", 0],
            ["Frank died by suicide after becoming terminally ill, and Bill chose to die with him", 2],
            ["They were executed by FEDRA", 0]
        ]
    },

    // QUESTION 10
    {
        question: "What fake name was Ellie given by Marlene when she was being held by the Fireflies?",
        answers: [
            ["Riley", 0],
            ["Veronica", 2],
            ["Anna", 0],
            ["Sarah", 0]
        ]
    },

    // QUESTION 11
    {
        question: "Who killed Joel in Season 2?",
        answers: [
            ["Owen Moore", 0],
            ["Isaac Dixon", 0],
            ["Abby Anderson", 2],
            ["Jesse", 0]
        ]
    },

    // QUESTION 12
    {
        question: "What book does Ellie frequently read in The Last of Us?",
        answers: [
            ["Savage Starlight", 0],
            ["No Pun Intended: Volume Too", 2],
            ["The Joke Book", 0],
            ["Alice in Wonderland", 0]
        ]
    },

    // QUESTION 13
    {
        question: "Where was Ellie held at the end of Season 1?",
        answers: [
            ["Boston QZ", 0],
            ["Kansas City", 0],
            ["St. Mary's Hospital in Salt Lake City", 2],
            ["Jackson", 0]
        ]
    },

    // QUESTION 14
    {
        question: "How old was Ellie at the beginning of The Last of Us?",
        answers: [
            ["14", 0],
            ["16", 2],
            ["17", 0],
            ["19", 0]
        ]
    },

    // QUESTION 15
    {
        question: "How old was Joel when the Cordyceps outbreak began?",
        answers: [
            ["32", 0],
            ["34", 0],
            ["36", 2],
            ["40", 0]
        ]
    },

    // QUESTION 16
    {
        question: "How old was Sarah when the Cordyceps outbreak began?",
        answers: [
            ["8", 0],
            ["12", 0],
            ["14", 2],
            ["16", 0]
        ]
    },

    // QUESTION 17
    {
        question: "How many years after the outbreak does the main story begin?",
        answers: [
            ["10 years", 0],
            ["15 years", 0],
            ["20 years", 2],
            ["25 years", 0]
        ]
    },

    // QUESTION 18
    {
        question: "Who was Abby's father?",
        answers: [
            ["Jerry Anderson", 2],
            ["Isaac Dixon", 0],
            ["Bill", 0],
            ["Owen Moore", 0]
        ]
    },

    // QUESTION 19
    {
        question: "Who was the leader of the WLF?",
        answers: [
            ["Abby", 0],
            ["Isaac", 2],
            ["Owen", 0],
            ["Manny", 0]
        ]
    },

    // QUESTION 20
    {
        question: "Who was Ellie's best friend before she met Joel?",
        answers: [
            ["Dina", 0],
            ["Riley", 2],
            ["Yara", 0],
            ["Lev", 0]
        ]
    },

    // QUESTION 21
    {
        question: "What was Joel's occupation before the outbreak?",
        answers: [
            ["Doctor", 0],
            ["Soldier", 0],
            ["Construction worker", 2],
            ["Police officer", 0]
        ]
    },

    // QUESTION 22
    {
        question: "What was the name of the settlement where Tommy lived?",
        answers: [
            ["Boston QZ", 0],
            ["Jackson", 2],
            ["Seattle", 0],
            ["Salt Lake City", 0]
        ]
    },

    // QUESTION 23
    {
        question: "What is Joel's surname in the HBO TV adaptation?",
        answers: [
            ["Williams", 0],
            ["Anderson", 0],
            ["Jackson", 0],
            ["Miller", 2]
        ]
    },

    // QUESTION 24
    {
        question: "What is the name of Joel's daughter?",
        answers: [
            ["Sarah", 2],
            ["Tess", 0],
            ["Anna", 0],
            ["Maria", 0]
        ]
    },

    // QUESTION 25
    {
        question: "What unusual biological feature of Ellie is central to the Fireflies' interest in her?",
        answers: [
            ["She is resistant to all diseases", 0],
            ["She can control Cordyceps growth", 0],
            ["She can communicate with infected people", 0],
            ["She appears immune to Cordyceps infection", 2]
        ]
    },

    // QUESTION 26
    {
        question: "Where was Joel initially taking Ellie?",
        answers: [
            ["The Fireflies", 2],
            ["The Hunters", 0],
            ["Jackson's council", 0],
            ["FEDRA headquarters", 0]
        ]
    },

    // QUESTION 27
    {
        question: "Who is Ellie's mother, revealed in the TV series through a flashback?",
        answers: [
            ["Tess Servopoulos", 0],
            ["Anna Williams", 2],
            ["Maria Miller", 0],
            ["Marlene Johnson", 0]
        ]
    },

    // QUESTION 28
    {
        question: "Why did Tess stay behind at the State House?",
        answers: [
            ["She wanted to wait for the Fireflies", 0],
            ["She was infected and wanted to distract and destroy the approaching infected", 2],
            ["Joel ordered her to stay behind", 0],
            ["She wanted to protect the Fireflies' supplies", 0]
        ]
    },

    // QUESTION 29
    {
        question: "What is the name of the quarantine-zone leader who becomes a major antagonist in Season 1?",
        answers: [
            ["Kathleen", 2],
            ["Kim", 0],
            ["Marlene", 0],
            ["Maria", 0]
        ]
    },

    // QUESTION 30
    {
        question: "What is the first major building Joel, Ellie, and Tess enter after leaving the Boston quarantine zone?",
        answers: [
            ["A museum", 2],
            ["A university", 0],
            ["A radio station", 0],
            ["A hospital", 0]
        ]
    },

    // QUESTION 31
    {
        question: "What type of infected bites Tess during the museum sequence?",
        answers: [
            ["Clicker", 2],
            ["Bloater", 0],
            ["Stalker", 0],
            ["Runner", 0]
        ]
    },

    // QUESTION 32
    {
        question: "What happens to Sam after Henry discovers that Sam has been bitten?",
        answers: [
            ["Henry takes him to the Fireflies for treatment", 0],
            ["Sam turns into an infected, and Henry shoots him", 2],
            ["Sam runs away from the group", 0],
            ["Joel kills Sam before he can turn", 0]
        ]
    },

    // QUESTION 33
    {
        question: "What does David's group initially claim to be doing when they encounter Ellie?",
        answers: [
            ["Looking for Joel specifically", 0],
            ["Looking for medicine and supplies", 2],
            ["Searching for Fireflies", 0],
            ["Escaping from FEDRA", 0]
        ]
    },

    // QUESTION 34
    {
        question: "Which faction does Abby belong to when she arrives in Jackson at the start of Season 2?",
        answers: [
            ["Jackson patrol", 0],
            ["FEDRA", 0],
            ["Seraphites", 0],
            ["Washington Liberation Front", 2]
        ]
    },

    // QUESTION 35
    {
        question: "What does Sam use to communicate with Ellie while they are hiding in Kansas City?",
        answers: [
            ["A radio", 0],
            ["A notebook", 2],
            ["A comic", 0],
            ["A flashlight signal", 0]
        ]
    },

    // QUESTION 36
    {
        question: "What does Joel suffer during the attack at the university?",
        answers: [
            ["A gunshot wound to his shoulder", 0],
            ["A severe abdominal wound", 2],
            ["A broken arm", 0],
            ["A knife wound to his leg", 0]
        ]
    },

    // QUESTION 37
    {
        question: "What does David claim to be when he first speaks with Ellie?",
        answers: [
            ["A former doctor", 0],
            ["A preacher and leader", 2],
            ["A Firefly commander", 0],
            ["A traveling merchant", 0]
        ]
    },

    // QUESTION 38
    {
        question: "What does Joel do to Marlene after rescuing Ellie from the Firefly hospital?",
        answers: [
            ["He leaves her alive", 0],
            ["He gives her to FEDRA", 0],
            ["He takes her to Jackson", 0],
            ["He shoots her", 2]
        ]
    },

    // QUESTION 39
    {
        question: "What instrument does Ellie learn to play from Joel in Season 2?",
        answers: [
            ["Harmonica", 0],
            ["Piano", 0],
            ["Violin", 0],
            ["Guitar", 2]
        ]
    },

    // QUESTION 40
    {
        question: "During the Kansas City infected attack, what happens to Perry?",
        answers: [
            ["He escapes with Kathleen", 0],
            ["He joins Joel", 0],
            ["He is killed by a Bloater", 2],
            ["He is shot by Henry", 0]
        ]
    },

    // QUESTION 41
    {
        question: "Which organization controls much of Seattle in Season 2?",
        answers: [
            ["The Washington Liberation Front", 2],
            ["The Seraphites", 0],
            ["FEDRA", 0],
            ["The Fireflies", 0]
        ]
    },

    // QUESTION 42
    {
        question: "What is Isaac's position within the WLF in Season 2?",
        answers: [
            ["Its prisoner coordinator", 0],
            ["Its leader", 2],
            ["Its religious leader", 0],
            ["Its chief doctor", 0]
        ]
    },

    // QUESTION 43
    {
        question: "What was Isaac doing before becoming the leader of the WLF?",
        answers: [
            ["Leading the Seraphites", 0],
            ["Serving as a FEDRA officer", 2],
            ["Working as a Firefly medic", 0],
            ["Working as a Jackson patrolman", 0]
        ]
    },

    // QUESTION 44
    {
        question: "What physical feature is used to identify members of the Seraphites?",
        answers: [
            ["Red tattoos around the eyes", 0],
            ["Shaved heads", 0],
            ["Painted white hands", 0],
            ["Facial scars", 2]
        ]
    },

    // QUESTION 45
    {
        question: "What is the name of Abby's former romantic partner?",
        answers: [
            ["Jordan", 0],
            ["Owen", 2],
            ["Manny", 0],
            ["Isaac", 0]
        ]
    },

    // QUESTION 46
    {
        question: "At the end of Season 2, who is the first member of Ellie's group that Abby shoots when she reaches the theater?",
        answers: [
            ["Dina", 0],
            ["Tommy", 0],
            ["Jesse", 2],
            ["Ellie", 0]
        ]
    },

    // QUESTION 47
    {
        question: "What major event does Joel tell Ellie about the Fireflies that later causes conflict between them?",
        answers: [
            ["The Fireflies moved to Boston", 0],
            ["The Fireflies stopped looking for a cure", 2],
            ["The Fireflies joined the WLF", 0],
            ["The Fireflies abandoned Jackson", 0]
        ]
    },

    // QUESTION 48
    {
        question: "Why does Ellie become angry with Joel concerning what happened at the Firefly hospital?",
        answers: [
            ["She believes Joel abandoned her", 0],
            ["She wants to leave Jackson", 0],
            ["She suspects Joel lied to her about what happened", 2],
            ["She blames Tommy for the Fireflies' failure", 0]
        ]
    },

    // QUESTION 49
    {
        question: "How does Ellie reach the aquarium while searching for Abby?",
        answers: [
            ["By subway", 0],
            ["By helicopter", 0],
            ["By stolen truck", 0],
            ["By boat", 2]
        ]
    },

    // QUESTION 50
    {
        question: "In Season 2, what major personal revelation does Dina make to Ellie?",
        answers: [
            ["She is pregnant", 2],
            ["She has joined the WLF", 0],
            ["She knew Abby before Jackson", 0],
            ["She is planning to leave Jackson permanently", 0]
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
            "☠️ FEDRA Casualty";

        description =
            "Your knowledge of The Last of Us is still pretty limited. You might not last long outside the QZ.";

        survival =
            "You'd struggle in the apocalypse";

        icon =
            "☠️";


    } else if (score <= 40) {

        title =
            "🧟 Infected Survivor";

        description =
            "You know some of the major characters and events, but there is still plenty of The Last of Us you haven't mastered.";

        survival =
            "Survive the early outbreak";

        icon =
            "🧟";


    } else if (score <= 60) {

        title =
            "🛡️ Jackson Survivor";

        description =
            "You've got a solid knowledge of The Last of Us. You know Joel, Ellie, the Fireflies and many of the major events.";

        survival =
            "Survive most of the apocalypse";

        icon =
            "🛡️";


    } else if (score <= 80) {

        title =
            "🏹 WLF Survivor";

        description =
            "You know The Last of Us very well. The major characters, factions, conflicts and events are clearly familiar territory.";

        survival =
            "Survive the infected and factions";

        icon =
            "🏹";


    } else if (score <= 94) {

        title =
            "🔥 Firefly Veteran";

        description =
            "Impressive. Your knowledge of The Last of Us is strong enough to make you a serious survivor in the post-apocalyptic world.";

        survival =
            "Lead the survivors";

        icon =
            "🔥";


    } else {

        title =
            "🍄 Cordyceps Expert";

        description =
            "You know The Last of Us inside and out. From the outbreak and Boston to Jackson, Seattle and the Fireflies, almost nothing escaped your memory.";

        survival =
            "You know everything";

        icon =
            "🍄";
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
        `🍄 I scored ${finalScore}/100 on The Last of Us Quiz!\n\n` +
        `${title}\n` +
        `${survival}\n\n` +
        `How well do YOU know The Last of Us?`;


    const shareData = {

        title:
            "How Well Do You Know The Last of Us?",

        text:
            shareText,

        url:
            "https://apocalypsequizzes.com/last-of-us-quiz/"

    };


    try {

        if (navigator.share) {

            await navigator.share(
                shareData
            );

        } else {

            await navigator.clipboard.writeText(
                shareText +
                "\n\nhttps://apocalypsequizzes.com/last-of-us-quiz/"
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