const questions = [
    {
        question: "Who plays the Watchman?",
        answers: [
            "Hayato Isomura",
            "Ken Watanabe",
            "Tsuyoshi Abe",
            "Kento Yamazaki"
        ],
        correct: 1
    },
    {
        question: "How many teams participate in Zombie Hunt?",
        answers: [
            "4",
            "2",
            "8",
            "3"
        ],
        correct: 0
    },
    {
        question: "How does Ann help Arisu return to the Borderland?",
        answers: [
            "She gives him a Citizen visa",
            "She takes him to the Joker arena",
            "She gives him a tracking device",
            "She temporarily stops his heart with a drug"
        ],
        correct: 3
    },
    {
        question: "What happens when the buzzer is pressed?",
        answers: [
            "A player loses a life",
            "The Bingo board changes",
            "The tower rotates",
            "Balls are released from above"
        ],
        correct: 3
    },
    {
        question: "Who are Yuna and Itsuki?",
        answers: [
            "Former Citizens",
            "Ryuji's students",
            "Brother and sister",
            "Married survivors"
        ],
        correct: 2
    },
    {
        question: "What happens when a player gives an incorrect answer in Sacred Fortunes?",
        answers: [
            "Flaming arrows are fired according to the difference between their answer and the correct answer",
            "They are immediately eliminated by a laser",
            "They are given another fortune slip",
            "They lose one point"
        ],
        correct: 0
    },
    {
        question: "What is the name of the first Joker tournament game?",
        answers: [
            "Sacred Fortunes",
            "Dead or Alive",
            "Zombie Hunt",
            "Old Maid"
        ],
        correct: 3
    },
    {
        question: "How many participants are registered for the final game, Future Sugoroku?",
        answers: [
            "12",
            "8",
            "9",
            "10"
        ],
        correct: 3
    },
    {
        question: "What clue can indicate that a train car contains poisonous gas?",
        answers: [
            "Red seats",
            "A dead canary in a cage",
            "Broken windows",
            "Brighter lights"
        ],
        correct: 1
    },
    {
        question: "What is the only card remaining at the beginning of Season 3?",
        answers: [
            "Joker",
            "Ace of Hearts",
            "Two of Jokers",
            "King of Jokers"
        ],
        correct: 0
    },
    {
        question: "What determines which side wins Zombie Hunt?",
        answers: [
            "Which side reaches the safe room first",
            "Which side eliminates every opponent",
            "Which side has the majority at the end",
            "Which side collects the most cards"
        ],
        correct: 2
    },
    {
        question: "How many fortune slips are involved in Sacred Fortunes?",
        answers: [
            "12",
            "5",
            "10",
            "7"
        ],
        correct: 2
    },
    {
        question: "What happens if the can is not returned before the time limit?",
        answers: [
            "Everyone automatically clears the game",
            "The can disappears",
            "The round resets",
            "The can explodes"
        ],
        correct: 3
    },
    {
        question: "Which character participates in Old Maid?",
        answers: [
            "Ryuji",
            "Banda",
            "Arisu",
            "Usagi"
        ],
        correct: 0
    },
    {
        question: "What do the screens inside the rooms show?",
        answers: [
            "The location of the Joker",
            "Players' visa history",
            "Possible futures",
            "Previous games"
        ],
        correct: 2
    },
    {
        question: "How much time has passed since Arisu and Usagi returned from the Borderland?",
        answers: [
            "Three years",
            "Ten years",
            "Five years",
            "One year"
        ],
        correct: 2
    },
    {
        question: "What happens if a Shotgun Card is used against a human?",
        answers: [
            "Both players are eliminated",
            "The human becomes a zombie",
            "The human loses all cards",
            "Nothing happens"
        ],
        correct: 3
    },
    {
        question: "During which game do Arisu and Usagi first see each other in Season 3?",
        answers: [
            "Future Sugoroku",
            "Runaway Train",
            "Sacred Fortunes",
            "Zombie Hunt"
        ],
        correct: 1
    },
    {
        question: "What does Nobu hope to become?",
        answers: [
            "Teacher",
            "Doctor",
            "Engineer",
            "Lawyer"
        ],
        correct: 0
    },
    {
        question: "How many Zombie Cards are initially in play?",
        answers: [
            "8",
            "4",
            "1",
            "2"
        ],
        correct: 1
    },
    {
        question: "Where is the special FREE-space buzzer located?",
        answers: [
            "Inside an elevator",
            "Halfway up the tower",
            "At the top of Tokyo Tower",
            "At the entrance"
        ],
        correct: 2
    },
    {
        question: "When do Arisu and Usagi finally reunite during the Joker tournament?",
        answers: [
            "During the second game",
            "During the semifinal",
            "After the first game",
            "During the final game"
        ],
        correct: 3
    },
    {
        question: "Can a player use the Vaccine Card on themselves?",
        answers: [
            "No",
            "Yes, at any time",
            "Only after becoming a zombie",
            "Yes, once"
        ],
        correct: 0
    },
    {
        question: "What is the main objective of Tokyo Bingo Tower?",
        answers: [
            "Complete a Bingo line",
            "Find the Joker",
            "Reach the highest floor without stopping",
            "Capture another player"
        ],
        correct: 0
    },
    {
        question: "How many neutralizing-agent canisters does each player receive?",
        answers: [
            "5",
            "1",
            "7",
            "2"
        ],
        correct: 0
    },
    {
        question: "Who becomes a Citizen and attempts to bring Arisu and Usagi back to the Borderland?",
        answers: [
            "Banda",
            "Aguni",
            "Kuina",
            "Chishiya"
        ],
        correct: 0
    },
    {
        question: "What must players do with the fortune slips?",
        answers: [
            "Collect matching symbols",
            "Decipher their messages correctly",
            "Match their colors",
            "Arrange them by number"
        ],
        correct: 1
    },
    {
        question: "How does Usagi's group ultimately escape the train?",
        answers: [
            "They climb onto the roof",
            "They reach the engine",
            "They jump onto another train",
            "They use the emergency brake"
        ],
        correct: 2
    },
    {
        question: "What determines how many players can pass through a door?",
        answers: [
            "A dice roll",
            "The player's wristband",
            "Previous scores",
            "Remaining points"
        ],
        correct: 0
    },
    {
        question: "What is the name of the final game?",
        answers: [
            "Possible Futures",
            "Future Sugoroku",
            "Borderland",
            "Joker's Maze"
        ],
        correct: 1
    }
];


let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(questions.length).fill(null);
let quizStarted = false;


/* START QUIZ */

function startQuiz() {
    quizStarted = true;

    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    currentQuestion = 0;
    score = 0;
    userAnswers.fill(null);

    showQuestion();
}


/* SHOW QUESTION */

function showQuestion() {
    const question = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("question").textContent = question.question;

    const answersContainer = document.getElementById("answers");

    answersContainer.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer";
        button.textContent = answer;

        button.onclick = () => selectAnswer(index);

        if (userAnswers[currentQuestion] === index) {
            button.classList.add("selected");
        }

        answersContainer.appendChild(button);
    });

    updateNavigation();
}


/* SELECT ANSWER */

function selectAnswer(index) {
    userAnswers[currentQuestion] = index;

    const buttons = document.querySelectorAll(".answer");

    buttons.forEach((button, i) => {
        button.classList.toggle(
            "selected",
            i === index
        );
    });

    updateNavigation();
}


/* NEXT QUESTION */

function goNext() {
    if (userAnswers[currentQuestion] === null) {
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        calculateScore();
    }
}


/* PREVIOUS QUESTION */

function goBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}


/* NAVIGATION */

function updateNavigation() {
    const backButton = document.getElementById("back-button");
    const nextButton = document.getElementById("next-button");

    if (backButton) {
        backButton.style.display =
            currentQuestion === 0 ? "none" : "inline-block";
    }

    if (nextButton) {
        nextButton.textContent =
            currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next";
    }
}


/* CALCULATE SCORE */

function calculateScore() {
    score = 0;

    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });

    showResult();
}


/* SHOW RESULT */

function showResult() {

    const finalScore = Math.round(
        (score / questions.length) * 100
    );

    let title = "";
    let description = "";
    let knowledge = "";

    if (finalScore <= 20) {

        title = "Borderland Newcomer";

        description =
            "The Borderland is still a mystery to you. Maybe it's time to enter the games again and see how much you remember.";

        knowledge = "Beginner";

    } else if (finalScore <= 40) {

        title = "Game Participant";

        description =
            "You remember some of Arisu's journey and the major games, but the Borderland still has plenty of surprises for you.";

        knowledge = "Casual Fan";

    } else if (finalScore <= 60) {

        title = "Borderland Player";

        description =
            "Not bad! You remember many of the important characters, games and events from Season 3.";

        knowledge = "Fan";

    } else if (finalScore <= 80) {

        title = "Borderland Survivor";

        description =
            "Impressive! You know the major games, characters and twists of Alice in Borderland Season 3 very well.";

        knowledge = "Dedicated Fan";

    } else if (finalScore <= 96) {

        title = "Face Card Expert";

        description =
            "Excellent! You remember most of the important details and twists from Season 3.";

        knowledge = "Expert";

    } else {

        title = "Borderland Master";

        description =
            "Perfect score! You survived Season 3 and remembered practically every question thrown at you.";

        knowledge = "Master";

    }


    document.getElementById("quiz-container").style.display = "none";

    const resultContainer = document.getElementById("result-container");

    resultContainer.style.display = "block";

    document.getElementById("score").textContent =
        `${score} / ${questions.length}`;

    document.getElementById("percentage").textContent =
        `${finalScore}%`;

    document.getElementById("result-title").textContent =
        title;

    document.getElementById("result-description").textContent =
        description;

    document.getElementById("knowledge-level").textContent =
        knowledge;

    window.finalQuizScore = finalScore;
    window.finalQuizTitle = title;
    window.finalKnowledge = knowledge;
}


/* RESTART QUIZ */

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    userAnswers.fill(null);

    document.getElementById("result-container").style.display =
        "none";

    document.getElementById("quiz-container").style.display =
        "block";

    showQuestion();
}


/* SHARE RESULT */

function shareResult() {

    const finalScore = window.finalQuizScore;
    const title = window.finalQuizTitle;
    const knowledge = window.finalKnowledge;

    const quizUrl =
        "https://apocalypsequizzes.com/alice-in-borderland-season-3-quiz/";

    const shareText =
        `🃏 I scored ${finalScore} on the Alice in Borderland Season 3 Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU know Alice in Borderland Season 3?`;

    const shareData = {
        title: "Alice in Borderland Season 3 Quiz",
        text: shareText,
        url: quizUrl
    };

    if (navigator.share) {

        navigator.share(shareData).catch(() => {});

    } else {

        const fullText =
            `${shareText}\n\n${quizUrl}`;

        navigator.clipboard.writeText(fullText).then(() => {

            alert("Result copied to clipboard!");

        }).catch(() => {

            alert(fullText);

        });
    }
}