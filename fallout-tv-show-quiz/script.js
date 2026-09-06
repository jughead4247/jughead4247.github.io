const questions = [

    {
        question: "What is Lucy's full name?",
        answers: [
            ["Lucy MacLean", 2],
            ["Lucy Howard", 0],
            ["Lucy Pearson", 0],
            ["Lucy Williams", 0]
        ]
    },

    {
        question: "Which Vault does Lucy live in?",
        answers: [
            ["Vault 31", 0],
            ["Vault 32", 0],
            ["Vault 33", 2],
            ["Vault 34", 0]
        ]
    },

    {
        question: "What position does Hank hold in Vault 33?",
        answers: [
            ["Security Officer", 0],
            ["Head Scientist", 0],
            ["Administrator", 0],
            ["Overseer", 2]
        ]
    },

    {
        question: "Who does Lucy marry at the beginning of the series?",
        answers: [
            ["Maximus", 0],
            ["Chet", 2],
            ["Reg", 0],
            ["Woody", 0]
        ]
    },

    {
        question: "Who attacks Vault 33 during Lucy's wedding?",
        answers: [
            ["Brotherhood of Steel", 0],
            ["NCR", 0],
            ["Raiders led by Moldaver", 2],
            ["The Enclave", 0]
        ]
    },

    {
        question: "What is The Ghoul's real name?",
        answers: [
            ["Cooper Howard", 2],
            ["Hank Howard", 0],
            ["Robert Cooper", 0],
            ["Cooper MacLean", 0]
        ]
    },

    {
        question: "What was Cooper Howard's occupation before the Great War?",
        answers: [
            ["Soldier", 0],
            ["Scientist", 0],
            ["Hollywood actor", 2],
            ["Vault-Tec engineer", 0]
        ]
    },

    {
        question: "Who is Cooper's daughter?",
        answers: [
            ["Lucy", 0],
            ["Janey", 2],
            ["Stephanie", 0],
            ["Betty", 0]
        ]
    },

    {
        question: "How many years pass between the Great War and the main events of the series?",
        answers: [
            ["About 100 years", 0],
            ["About 150 years", 0],
            ["About 200 years", 2],
            ["About 300 years", 0]
        ]
    },

    {
        question: "In what year does the main story take place?",
        answers: [
            ["2077", 0],
            ["2177", 0],
            ["2277", 0],
            ["2296", 2]
        ]
    },

    {
        question: "What does Lucy discover when she enters Vault 32?",
        answers: [
            ["A Brotherhood base", 0],
            ["A hidden laboratory", 0],
            ["Evidence that its inhabitants died long before the attack", 2],
            ["A working nuclear reactor", 0]
        ]
    },

    {
        question: "What unusual relationship exists between Vaults 31, 32, and 33?",
        answers: [
            ["They are all Brotherhood military bases", 0],
            ["They form a connected Vault-Tec experiment", 2],
            ["They are controlled by the NCR", 0],
            ["They were built by Robert House", 0]
        ]
    },

    {
        question: "What creature attacks Lucy shortly after she leaves the Vault?",
        answers: [
            ["Deathclaw", 0],
            ["Yao guai", 0],
            ["Ghoul", 0],
            ["Radroach", 2]
        ]
    },

    {
        question: "What is a ghoul?",
        answers: [
            ["A robot created by Vault-Tec", 0],
            ["A human mutated by radiation", 2],
            ["An alien species", 0],
            ["A genetically engineered soldier", 0]
        ]
    },

    {
        question: "What does The Ghoul use to prevent himself from becoming feral?",
        answers: [
            ["Rad-X", 0],
            ["Jet", 0],
            ["Vials", 2],
            ["Stimpaks", 0]
        ]
    },

    {
        question: "What is the name of the mutated two-headed cow-like creature?",
        answers: [
            ["Brahmin", 2],
            ["Radstag", 0],
            ["Bighorner", 0],
            ["Mirelurk", 0]
        ]
    },

    {
        question: "What happens to Titus?",
        answers: [
            ["He becomes an Elder", 0],
            ["He is killed by a Yao guai", 2],
            ["He joins the NCR", 0],
            ["He becomes a ghoul", 0]
        ]
    },

    {
        question: "Where did Rose take Lucy and Norm after leaving Vault 33?",
        answers: [
            ["Shady Sands", 2],
            ["New Vegas", 0],
            ["Griffith Observatory", 0],
            ["Vault 32", 0]
        ]
    },

    {
        question: "Who is Moldaver?",
        answers: [
            ["A Vault 33 Overseer", 0],
            ["A scientist and leader associated with the NCR", 2],
            ["A Brotherhood Elder", 0],
            ["A former Enclave soldier", 0]
        ]
    },

    {
        question: "What name does Moldaver use when Lucy first encounters her?",
        answers: [
            ["Lee Williams", 0],
            ["Kate Williams", 0],
            ["Lee Moldaver", 2],
            ["Kate MacLean", 0]
        ]
    },

    {
        question: "What does Wilzig give Lucy before he dies?",
        answers: [
            ["A Pip-Boy", 0],
            ["A cold fusion diode", 2],
            ["A Brotherhood helmet", 0],
            ["A Vault 31 access card", 0]
        ]
    },

    {
        question: "Who is Cooper's wife?",
        answers: [
            ["Rose MacLean", 0],
            ["Barb Howard", 2],
            ["Betty Pearson", 0],
            ["Moldaver", 0]
        ]
    },

    {
        question: "What is The Ghoul's main occupation in the wasteland?",
        answers: [
            ["Assassin", 0],
            ["Bounty hunter", 2],
            ["Contract killer", 0],
            ["Mercenary", 0]
        ]
    },

    {
        question: "Why does Lucy leave Vault 33?",
        answers: [
            ["She wants to become a Brotherhood knight", 0],
            ["She goes after her kidnapped father", 2],
            ["She is expelled", 0],
            ["She wants to find Robert House", 0]
        ]
    },

    {
        question: "Why is the Brotherhood pursuing Wilzig?",
        answers: [
            ["He stole a Power Armor suit", 0],
            ["He possesses the cold fusion technology they want", 2],
            ["He attacked their base", 0],
            ["He kidnapped Maximus", 0]
        ]
    },

    {
        question: "Where was Moldaver's main base of operations located?",
        answers: [
            ["Griffith Observatory", 2],
            ["Vault 32", 0],
            ["Shady Sands", 0],
            ["Vault 33", 0]
        ]
    },

    {
        question: "Who is the leader of the Brotherhood chapter featured in the series?",
        answers: [
            ["Elder Cleric Quintus", 2],
            ["Paladin Xander Harkness", 0],
            ["Knight Maximus", 0],
            ["Scribe Dane", 0]
        ]
    },

    {
        question: "What is Liberty Prime Alpha?",
        answers: [
            ["A Vault-Tec computer", 0],
            ["A giant combat robot", 2],
            ["A Deathclaw variant", 0],
            ["A Brotherhood airship", 0]
        ]
    },

    {
        question: "What does NCR stand for?",
        answers: [
            ["New California Republic", 2],
            ["National Combat Regiment", 0],
            ["New Capital Resistance", 0],
            ["Nuclear Containment Republic", 0]
        ]
    },

    {
        question: "Who was responsible for the destruction of Shady Sands?",
        answers: [
            ["Maximus", 0],
            ["Moldaver", 0],
            ["Hank MacLean", 2],
            ["Robert House", 0]
        ]
    },

    {
        question: "What technology does Moldaver use to provide clean energy?",
        answers: [
            ["Fusion cores", 0],
            ["Cold fusion", 2],
            ["Solar power", 0],
            ["Nuclear batteries", 0]
        ]
    },

    {
        question: "Who developed the cold fusion technology?",
        answers: [
            ["Barb Howard", 0],
            ["Robert House", 0],
            ["Lee Moldaver", 2],
            ["Bud Askins", 0]
        ]
    },

    {
        question: "What is the Mojave Wasteland?",
        answers: [
            ["A Vault-Tec laboratory", 0],
            ["A post-apocalyptic region centered around the Mojave Desert", 2],
            ["A Brotherhood military base", 0],
            ["An NCR prison", 0]
        ]
    },

    {
        question: "What technology does Mr. House use to maintain control over New Vegas?",
        answers: [
            ["Securitrons", 2],
            ["Deathclaws", 0],
            ["Brotherhood Power Armor", 0],
            ["Vault-Tec cryogenic pods", 0]
        ]
    },

    {
        question: "What is a Securitron?",
        answers: [
            ["A type of ghoul", 0],
            ["A robotic security machine", 2],
            ["A Vault overseer", 0],
            ["A mutant soldier", 0]
        ]
    },

    {
        question: "What poisonous mutated creature appears in the Mojave?",
        answers: [
            ["Cazador", 2],
            ["Radroach", 0],
            ["Brahmin", 0],
            ["Mole rat", 0]
        ]
    },

    {
        question: "What business empire made House wealthy?",
        answers: [
            ["Vault-Tec", 0],
            ["RobCo Industries", 2],
            ["NCR Mining", 0],
            ["Poseidon Energy", 0]
        ]
    },

    {
        question: "What technology did House develop to help protect Las Vegas?",
        answers: [
            ["An advanced missile-defense system", 2],
            ["Cryogenic pods", 0],
            ["Power Armor", 0],
            ["Cold fusion reactors", 0]
        ]
    },

    {
        question: "What device does Cooper deliver to the U.S. president in the pre-war storyline?",
        answers: [
            ["A Power Armor core", 0],
            ["The cold fusion diode", 2],
            ["A Pip-Boy", 0],
            ["A Securitron chip", 0]
        ]
    },

    {
        question: "What is Caesar's Legion?",
        answers: [
            ["A Brotherhood military faction", 0],
            ["A Roman-inspired militarized faction", 2],
            ["An NCR political faction", 0],
            ["A Vault-Tec security faction", 0]
        ]
    },

    {
        question: "Who is the mysterious Legate associated with the Legion?",
        answers: [
            ["The Lacerta Legate", 2],
            ["Elder Quintus", 0],
            ["Maximus", 0],
            ["Hank MacLean", 0]
        ]
    },

    {
        question: "What does the Lacerta Legate ultimately seek to do?",
        answers: [
            ["Claim Caesar's legacy and rule the Legion", 2],
            ["Join the Brotherhood", 0],
            ["Destroy Vault 33", 0],
            ["Find Moldaver", 0]
        ]
    },

    {
        question: "Who is Stephanie Harper?",
        answers: [
            ["A Vault 32 overseer", 2],
            ["A Brotherhood knight", 0],
            ["A member of the NCR", 0],
            ["A RobCo scientist", 0]
        ]
    },

    {
        question: "What surprising connection does Stephanie have with Hank?",
        answers: [
            ["She is his sister", 0],
            ["She was secretly married to him", 2],
            ["She is his daughter", 0],
            ["She is his former boss", 0]
        ]
    },

    {
        question: "What faction is Larry associated with?",
        answers: [
            ["The Brotherhood of Steel", 0],
            ["Caesar's Legion", 2],
            ["The NCR", 0],
            ["Vault-Tec", 0]
        ]
    },

    {
        question: "What technology is Hank developing for the Enclave?",
        answers: [
            ["Miniaturized mind-control technology", 2],
            ["Cold fusion reactors", 0],
            ["Securitron armies", 0],
            ["Power Armor", 0]
        ]
    },

    {
        question: "What happens when Hank uses his technology on people in the wasteland?",
        answers: [
            ["They become immune to radiation", 0],
            ["Their behavior and decisions can be manipulated", 2],
            ["They become ghouls", 0],
            ["They gain superhuman strength", 0]
        ]
    },

    {
        question: "What does the black Pip-Boy allow Stephanie to communicate with?",
        answers: [
            ["The Brotherhood", 0],
            ["The NCR", 0],
            ["The Enclave", 2],
            ["Vault 31", 0]
        ]
    },

    {
        question: "What major creature does Maximus fight near the end of Season 2?",
        answers: [
            ["Deathclaw", 2],
            ["Yao guai", 0],
            ["Mirelurk Queen", 0],
            ["Radscorpion", 0]
        ]
    },

    {
        question: "What type of mutated creature attacks the survivors in Vault 31?",
        answers: [
            ["Deathclaws", 0],
            ["Radroaches", 2],
            ["Cazadores", 0],
            ["Radscorpions", 0]
        ]
    }

];

let currentQuestion = 0;

let selectedAnswers =
    new Array(questions.length).fill(null);


// ===============================
// ELEMENTS
// ===============================

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


const questionNumber =
    document.getElementById("question-number");

const questionText =
    document.getElementById("question");

const answersContainer =
    document.getElementById("answers");

const progressBar =
    document.getElementById("progress-bar");


// ===============================
// BUTTON EVENTS
// ===============================

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


// ===============================
// START QUIZ
// ===============================

function startQuiz() {

    currentQuestion = 0;

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
                selectedAnswers[
                    currentQuestion
                ] === index
            ) {

                button.classList.add(
                    "selected"
                );


                button.style.backgroundColor =
                    "#444";

                button.style.borderColor =
                    "#ffffff";

                button.style.color =
                    "#ffffff";

                button.style.fontWeight =
                    "700";

                button.style.boxShadow =
                    "0 0 0 2px rgba(255,255,255,0.25)";
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


// ===============================
// SELECT ANSWER
// ===============================

function selectAnswer(answerIndex) {

    selectedAnswers[currentQuestion] =
        answerIndex;


    const buttons =
        answersContainer.querySelectorAll(
            ".answer"
        );


    buttons.forEach(
        (button, index) => {

            if (index === answerIndex) {

                button.classList.add(
                    "selected"
                );


                button.style.backgroundColor =
                    "#444";

                button.style.borderColor =
                    "#ffffff";

                button.style.color =
                    "#ffffff";

                button.style.fontWeight =
                    "700";

                button.style.boxShadow =
                    "0 0 0 2px rgba(255,255,255,0.25)";

            } else {

                button.classList.remove(
                    "selected"
                );


                button.style.backgroundColor =
                    "";

                button.style.borderColor =
                    "";

                button.style.color =
                    "";

                button.style.fontWeight =
                    "";

                button.style.boxShadow =
                    "";

            }

        }
    );


    updateNavigation();


    if (
        currentQuestion <
        questions.length - 1
    ) {

        const questionAtSelection =
            currentQuestion;


        setTimeout(
            () => {

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

            },
            150
        );

    }
}


// ===============================
// NEXT BUTTON
// ===============================

function goNext() {

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


    if (
        selectedAnswers[
            currentQuestion
        ] === null
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
// NAVIGATION
// ===============================

function updateNavigation() {

    const isFirst =
        currentQuestion === 0;


    const isLast =
        currentQuestion ===
        questions.length - 1;


    const currentAnswered =
        selectedAnswers[
            currentQuestion
        ] !== null;


    const allAnswered =
        selectedAnswers.every(
            answer => answer !== null
        );


    backButton.disabled =
        isFirst;


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

    const score =
        calculateScore();


    homeInfo.classList.add(
        "hidden"
    );


    quizScreen.classList.add(
        "hidden"
    );


    resultScreen.classList.remove(
        "hidden"
    );


    document.getElementById(
        "final-score"
    ).textContent =
        score;


    let title;
    let description;
    let knowledge;
    let icon;


    if (score <= 20) {

        title =
            "☢️ Vault Dweller Beginner";

        description =
            "You've barely stepped into the wasteland. There are still plenty of Fallout characters, factions and secrets waiting to be discovered.";

        knowledge =
            "Casual Viewer";

        icon =
            "☢️";


    } else if (score <= 40) {

        title =
            "🏚️ Vault Dweller";

        description =
            "You know the basics of the Fallout world, but the wasteland still has plenty of surprises for you.";

        knowledge =
            "Casual Fan";

        icon =
            "🏚️";


    } else if (score <= 60) {

        title =
            "🗡️ Wasteland Survivor";

        description =
            "You've survived the wasteland and remember many of its important characters, factions and events.";

        knowledge =
            "Good Fan";

        icon =
            "🗡️";


    } else if (score <= 80) {

        title =
            "⚔️ Seasoned Wastelander";

        description =
            "Impressive. You remember a lot of the Fallout universe, including many details that casual viewers miss.";

        knowledge =
            "Dedicated Fan";

        icon =
            "⚔️";


    } else if (score <= 94) {

        title =
            "☢️ Fallout Expert";

        description =
            "You know the wasteland extremely well. Characters, factions, locations and obscure details are clearly familiar territory.";

        knowledge =
            "Expert Fan";

        icon =
            "☢️";


    } else {

        title =
            "🧠 Fallout Encyclopedia";

        description =
            "You don't just know the Fallout TV show — you remember the tiny details. The wasteland would have a hard time surprising you.";

        knowledge =
            "Ultimate Fan";

        icon =
            "🧠";

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


    const resultIcon =
        document.getElementById(
            "result-icon"
        );


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


    const knowledge =
        document.getElementById(
            "knowledge-level"
        ).textContent;


    const finalScore =
        document.getElementById(
            "final-score"
        ).textContent;


    const shareText =
        `☢️ I scored ${finalScore}/100 on the Fallout TV Show Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU know the Fallout TV show?`;


    const shareData = {

        title:
            "Fallout TV Show Quiz",

        text:
            shareText,

        url:
            "https://apocalypsequizzes.com/fallout-tv-show-quiz/"

    };


    try {

        if (navigator.share) {

            await navigator.share(
                shareData
            );

        } else {

            await navigator.clipboard.writeText(
                shareText +
                "\n\nhttps://apocalypsequizzes.com/fallout-tv-show-quiz/"
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