const questions = [

{
question: "Who is the leader of District 13?",
answers: [
["President Snow", 0],
["Boggs", 0],
["Alma Coin", 1],
["Plutarch Heavensbee", 0]
]
},

{
question: "What was Plutarch's position before secretly supporting the rebellion?",
answers: [
["Peacekeeper commander", 0],
["Head Gamemaker", 1],
["Capitol physician", 0],
["District governor", 0]
]
},

{
question: "What is Boggs's primary role in District 13?",
answers: [
["Communications engineer", 0],
["Propaganda director", 0],
["Head of security and military commander", 1],
["Head of medical operations", 0]
]
},

{
question: "Which two other surviving victors are brought to District 13 with Katniss?",
answers: [
["Finnick and Beetee", 1],
["Peeta and Johanna", 0],
["Haymitch and Beetee", 0],
["Annie and Finnick", 0]
]
},

{
question: "What role does Prim take on in District 13?",
answers: [
["Propaganda director", 0],
["Engineer", 0],
["Soldier", 0],
["Medical worker", 1]
]
},

{
question: "Who operates the Capitol communications technology for the rebels?",
answers: [
["Pollux", 0],
["Beetee", 1],
["Castor", 0],
["Finnick", 0]
]
},

{
question: "Who leads Katniss's propaganda film crew?",
answers: [
["Prim", 0],
["Johanna", 0],
["Cressida", 1],
["Effie", 0]
]
},

{
question: "What was Cressida's occupation before joining the rebellion?",
answers: [
["Capitol filmmaker", 1],
["District 13 doctor", 0],
["Peacekeeper", 0],
["Capitol television host", 0]
]
},

{
question: "Which member of Cressida's crew is a former Capitol citizen who cannot speak?",
answers: [
["Boggs", 0],
["Pollux", 1],
["Castor", 0],
["Messalla", 0]
]
},

{
question: "Who originally designed Katniss's iconic Mockingjay costume?",
answers: [
["Alma Coin", 0],
["Cinna", 1],
["Plutarch Heavensbee", 0],
["Effie Trinket", 0]
]
},

{
question: "Which two female victors are also among the people rescued from the Capitol?",
answers: [
["Annie and Cashmere", 0],
["Wiress and Johanna", 0],
["Johanna Mason and Annie Cresta", 1],
["Enobaria and Cashmere", 0]
]
},

{
question: "Where are the captured victors being held?",
answers: [
["The Capitol's Tribute Center", 1],
["The old Hunger Games arena", 0],
["District 2's military base", 0],
["President Snow's private mansion", 0]
]
},

{
question: "What does the rebellion discover has been done to Peeta?",
answers: [
["He has joined District 13 voluntarily", 0],
["He has lost his memory naturally", 0],
["He has been physically cloned", 0],
["He has been hijacked", 1]
]
},

{
question: "Where does Katniss go with the film crew to make one of her first major propaganda appearances?",
answers: [
["District 5", 0],
["District 8", 1],
["District 7", 0],
["District 2", 0]
]
},

{
question: "Who is the resistance leader from District 8 who meets Katniss at the hospital?",
answers: [
["Commander Boggs", 0],
["Commander Jackson", 0],
["Commander Paylor", 1],
["Commander Lyme", 0]
]
},

{
question: "What does Katniss say in her emotional propaganda speech after the hospital bombing?",
answers: [
["Fight or die.", 0],
["Fire is catching.", 1],
["We are the rebels.", 0],
["I am the Mockingjay.", 0]
]
},

{
question: "Which district carries out the operation against the Capitol's electricity supply?",
answers: [
["District 7", 0],
["District 11", 0],
["District 5", 1],
["District 3", 0]
]
},

{
question: "What does Katniss find inside her destroyed home in District 12?",
answers: [
["A white rose", 1],
["A Capitol weapon", 0],
["A letter from Peeta", 0],
["A Mockingjay pin", 0]
]
},

{
question: "How many people from District 12 survived the Capitol's destruction of the district?",
answers: [
["1,000", 0],
["915", 1],
["617", 0],
["875", 0]
]
},

{
question: "Which song does Katniss sing while filming a propaganda propos in the ruins of District 12?",
answers: [
["Safe & Sound", 0],
["Rue's Lament", 0],
["Deep in the Meadow", 0],
["The Hanging Tree", 1]
]
},

{
question: 'Where is Katniss when she records "The Hanging Tree"?',
answers: [
["The Capitol", 0],
["District 8", 0],
["The ruins of District 12", 1],
["District 13", 0]
]
},

{
question: "What does Katniss discover outside after the Capitol's attack on District 13?",
answers: [
["White roses", 1],
["Capitol flags", 0],
["Mockingjay symbols", 0],
["Peeta's jacket", 0]
]
},

{
question: "According to Beetee, what type of arrows are the red ones?",
answers: [
["Tracking arrows", 0],
["Explosive arrows", 1],
["Incendiary arrows", 0],
["Regular arrows", 0]
]
},

{
question: "Who is the resistance leader from District 2 who supports the rebellion?",
answers: [
["Commander Boggs", 0],
["Commander Paylor", 0],
["Commander Lyme", 1],
["Commander Jackson", 0]
]
},

{
question: "What is the name of Prim Everdeen's cat?",
answers: [
["Buttercup", 1],
["Pumpkin", 0],
["Whiskers", 0],
["Snowball", 0]
]
}

];


let currentQuestion = 0;

let selectedAnswers =
    new Array(questions.length).fill(null);


const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const homeInfo =
    document.getElementById("home-info");


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


/* =====================================================
   SUGGESTED QUIZZES
   ===================================================== */

const suggestionsCard =
    document.getElementById("suggestions-card");


/* =====================================================
   EVENT LISTENERS
   ===================================================== */

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


/* =====================================================
   START QUIZ
   ===================================================== */

function startQuiz() {

    currentQuestion = 0;

    selectedAnswers =
        new Array(questions.length).fill(null);

    startScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    homeInfo.classList.add("hidden");


    if (suggestionsCard) {

        suggestionsCard.classList.add("hidden");

    }


    showQuestion();

}


/* =====================================================
   SHOW QUESTION
   ===================================================== */

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


/* =====================================================
   SELECT ANSWER
   ===================================================== */

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


/* =====================================================
   NEXT QUESTION
   ===================================================== */

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


/* =====================================================
   BACK QUESTION
   ===================================================== */

function goBack() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

}


/* =====================================================
   NAVIGATION
   ===================================================== */

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


/* =====================================================
   CALCULATE SCORE
   ===================================================== */

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


/* =====================================================
   SHOW RESULT
   ===================================================== */

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


    quizScreen.classList.add(
        "hidden"
    );


    resultScreen.classList.remove(
        "hidden"
    );


    homeInfo.classList.remove(
        "hidden"
    );


    /* SHOW SUGGESTED QUIZZES */

    if (suggestionsCard) {

        suggestionsCard.classList.remove(
            "hidden"
        );

    }


    document.getElementById(
        "final-score"
    ).textContent =
        `${score}%`;


    const correctCount =
        document.getElementById(
            "correct-count"
        );


    const incorrectCount =
        document.getElementById(
            "incorrect-count"
        );


    const totalCount =
        document.getElementById(
            "total-count"
        );


    const accuracyPercent =
        document.getElementById(
            "accuracy-percent"
        );


    if (correctCount) {

        correctCount.textContent =
            correctAnswers;

    }


    if (incorrectCount) {

        incorrectCount.textContent =
            incorrectAnswers;

    }


    if (totalCount) {

        totalCount.textContent =
            totalQuestions;

    }


    if (accuracyPercent) {

        accuracyPercent.textContent =
            `${accuracy}%`;

    }


    let title;
    let description;
    let knowledge;
    let icon;


    if (score <= 20) {

        title =
            "🏹 Capitol Outsider";


        description =
            "The rebellion may have caught you off guard. It might be time to revisit The Hunger Games: Mockingjay – Part 1 and try again.";


        knowledge =
            "Casual Viewer";


        icon =
            "🏹";


    } else if (score <= 40) {

        title =
            "🔥 District Survivor";


        description =
            "You remember some of Katniss's journey, but several details about District 13, the rebellion and the Capitol slipped through the cracks.";


        knowledge =
            "Casual Fan";


        icon =
            "🔥";


    } else if (score <= 60) {

        title =
            "🕊️ Mockingjay Ally";


        description =
            "Not bad! You remember many of the movie's major events, characters and the growing rebellion against the Capitol.";


        knowledge =
            "Good Fan";


        icon =
            "🕊️";


    } else if (score <= 80) {

        title =
            "⚔️ Rebel Veteran";


        description =
            "Impressive! You have a strong memory for Katniss, District 13, the victors and the rebellion against the Capitol.";


        knowledge =
            "Dedicated Fan";


        icon =
            "⚔️";


    } else if (score <= 96) {

        title =
            "🧠 Mockingjay Expert";


        description =
            "Excellent! You remember most of the important characters, events, locations and revelations in Mockingjay – Part 1.";


        knowledge =
            "Expert Fan";


        icon =
            "🧠";


    } else {

        title =
            "👑 Mockingjay Master";


        description =
            "Perfect score! You remembered practically every major detail about Katniss, the rebellion, District 13 and the fight against the Capitol.";


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

}


/* =====================================================
   RESTART QUIZ
   ===================================================== */

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


    if (suggestionsCard) {

        suggestionsCard.classList.add(
            "hidden"
        );

    }


    progressBar.style.width =
        "0%";

}


/* =====================================================
   SHARE RESULT
   ===================================================== */

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
        "https://apocalypsequizzes.com/the-hunger-games-mockingjay-part-1-quiz/";


    const shareText =
        `🏹 I scored ${finalScore} on The Hunger Games: Mockingjay – Part 1 Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU remember The Hunger Games: Mockingjay – Part 1?`;


    const shareData = {

        title:
            "The Hunger Games: Mockingjay – Part 1 Quiz",

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


/* =====================================================
   GLOBAL SITE MENU
   ===================================================== */

const menuToggle =
    document.getElementById(
        "menu-toggle"
    );


const siteMenu =
    document.getElementById(
        "site-menu"
    );


if (menuToggle && siteMenu) {

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
