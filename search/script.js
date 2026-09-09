// =========================================
// GLOBAL SITE MENU
// =========================================

const menuToggle =
    document.getElementById("menu-toggle");

const siteMenu =
    document.getElementById("site-menu");

if (menuToggle && siteMenu) {

    // OPEN / CLOSE WITH HAMBURGER

    menuToggle.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const isOpen =
                menuToggle.getAttribute(
                    "aria-expanded"
                ) === "true";

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

        }
    );


    // CLOSE WHEN CLICKING OUTSIDE

    document.addEventListener(
        "click",
        function (event) {

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

        }
    );


    // CLOSE AFTER CLICKING A MENU LINK

    siteMenu
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

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
            );

        });

}



// =========================================
// SEARCH DATA
// =========================================

const quizzes = [

    {
        title: "Zombie Apocalypse Quiz",

        description:
            "Test your knowledge and instincts about surviving a zombie apocalypse.",

        categories:
            "zombie apocalypse zombies undead zombie outbreak infection virus pandemic survival survival skills emergency disaster preparedness post-apocalyptic apocalypse food water shelter weapons zombies attack",

        url:
            "https://apocalypsequizzes.com/zombie-quiz/"
    },


    {
        title: "Ultimate Zombie Apocalypse Survival Test",

        description:
            "Put your survival skills, decisions, and preparation to the ultimate zombie apocalypse test.",

        categories:
            "zombie apocalypse survival test zombie survival undead outbreak infection pandemic emergency preparedness disaster survival skills shelter food water weapons first aid escape strategy post-apocalyptic survival",

        url:
            "https://apocalypsequizzes.com/ultimate-zombie-survival-test/"
    },


    {
        title: "How Prepared Are You for the Apocalypse?",

        description:
            "Find out how prepared you are for different apocalypse scenarios.",

        categories:
            "apocalypse preparedness survival preparation emergency disaster survival skills emergency kit food water shelter first aid supplies power blackout communication evacuation disaster planning zombie apocalypse nuclear apocalypse pandemic natural disaster post-apocalyptic",

        url:
            "https://apocalypsequizzes.com/apocalypse-preparedness-quiz/"
    },


    {
        title: "Nuclear Apocalypse Survival Quiz",

        description:
            "Test your knowledge of nuclear survival, fallout, shelter, and post-apocalyptic decisions.",

        categories:
            "nuclear apocalypse nuclear war nuclear bomb nuclear attack radiation fallout nuclear fallout nuclear winter radiation poisoning fallout shelter bunker EMP atomic bomb survival apocalypse disaster preparedness shelter supplies food water emergency nuclear disaster",

        url:
            "https://apocalypsequizzes.com/nuclear-apocalypse-quiz/"
    },


    {
        title: "The Walking Dead Knowledge Quiz",

        description:
            "Test your knowledge of The Walking Dead, its story, characters, and events.",

        categories:
            "The Walking Dead TWD zombie TV show zombies walkers undead apocalypse survival Rick Grimes Daryl Dixon Michonne Negan Carol Maggie Glenn Carl Shane Hershel Merle Alexandria Hilltop Kingdom Commonwealth Saviors Whisperers Governor Woodbury Atlanta prison survivors",

        url:
            "https://apocalypsequizzes.com/walking-dead-knowledge/"
    },


    {
        title: "The 100 Knowledge Quiz",

        description:
            "Test your knowledge of The 100 and its characters, story, and post-apocalyptic world.",

        categories:
            "The 100 TV show The 100 series Clarke Griffin Bellamy Blake Octavia Blake Raven Reyes Murphy Lexa Abby Kane Jaha Ark Arkadia Grounders Mount Weather Skaikru Wonkru Nightblood Praimfaya Sanctum Primes Eligius bunker apocalypse survival nuclear radiation",

        url:
            "https://apocalypsequizzes.com/the-100-knowledge/"
    },


    {
        title: "Silo Quiz",

        description:
            "Test your knowledge of Silo, its characters, secrets, factions, and major events across the series.",

        categories:
            "Silo TV show Silo series Juliette Nichols Bernard Sims Holston Allison George Lukas Walker Solo Martha underground bunker silo vault post-apocalyptic apocalypse outside cleaning relics IT department sheriff mechanical hard drive uprising survival",

        url:
            "https://apocalypsequizzes.com/silo-quiz/"
    },


    {
        title: "Resident Evil Quiz",

        description:
            "Test your knowledge of Resident Evil, zombies, monsters, characters, and its dangerous world.",

        categories:
            "Resident Evil RE biohazard zombie horror survival horror video game movie Raccoon City Leon Kennedy Claire Redfield Jill Valentine Chris Redfield Albert Wesker Ada Wong Ethan Winters Umbrella Corporation T-virus G-virus virus outbreak zombies Nemesis Tyrant STARS Spencer Mansion",

        url:
            "https://apocalypsequizzes.com/resident-evil-quiz/"
    },


    {
        title: "Love and Monsters Quiz",

        description:
            "Test your knowledge of the post-apocalyptic world, monsters, and story of Love and Monsters.",

        categories:
            "Love and Monsters movie zombie apocalypse monster apocalypse post-apocalyptic survival Joel Dawson Aimee Clyde Minnow Boy Dog monsters bunker underground colony surface survival journey creatures giant monsters frogs ants worms crabs apocalypse",

        url:
            "https://apocalypsequizzes.com/love-and-monsters-quiz/"
    },


    {
        title: "iZombie Quiz",

        description:
            "Test your knowledge of iZombie, its characters, story, zombies, and TV world.",

        categories:
            "iZombie TV show zombie series Liv Moore Olivia Moore Ravi Chakrabarti Major Lilywhite Blaine DeBeers Clive Babineaux Peyton Seattle zombies brains zombie outbreak infection Max Rager Fillmore Graves medical examiner police detective zombie cure visions",

        url:
            "https://apocalypsequizzes.com/izombie-quiz/"
    },


    {
        title: "The Walking Dead Characters Quiz",

        description:
            "How well do you know the characters of The Walking Dead?",

        categories:
            "The Walking Dead characters TWD characters Rick Grimes Daryl Dixon Michonne Negan Carol Peletier Maggie Rhee Glenn Rhee Carl Grimes Judith Shane Hershel Governor Merle Abraham Eugene Rosita Sasha Tara Ezekiel Alpha Beta Lydia Dwight Morgan Walking Dead survivors zombies walkers",

        url:
            "https://apocalypsequizzes.com/walking-dead-characters-quiz/"
    },


    {
        title: "Plague Outbreak Survival Quiz",

        description:
            "Test your knowledge and survival decisions during a dangerous plague outbreak.",

        categories:
            "plague outbreak survival disease pandemic epidemic infection virus bacteria contagion quarantine outbreak response public health survival disaster preparedness biological outbreak plague pandemic survival skills emergency supplies medicine food water shelter hygiene infection control",

        url:
            "https://apocalypsequizzes.com/plague-survival-quiz/"
    },


    {
        title: "Westworld Quiz",

        description:
            "Test your knowledge of Westworld, its characters, hosts, story, and mysterious world.",

        categories:
            "Westworld TV show Westworld series robots androids hosts artificial intelligence AI Dolores Abernathy Bernard Lowe Maeve Millay William Man in Black Robert Ford Arnold Charlotte Hale Teddy hosts park theme park sentience consciousness Rehoboam technology robots rebellion",

        url:
            "https://apocalypsequizzes.com/westworld-quiz/"
    },


    {
        title: "The Last of Us Quiz",

        description:
            "Test your knowledge of The Last of Us, Joel, Ellie, the Fireflies, Jackson, Seattle, the WLF, and the infected.",

        categories:
            "The Last of Us TLOU zombie TV show apocalypse survival Joel Ellie Cordyceps infected Fireflies Jackson Seattle WLF Washington Liberation Front Seraphites Abby Anderson Tommy Dina Tess Bill Frank Marlene Riley David Isaac Jesse Owen FEDRA Clicker Bloater Runner Stalker outbreak pandemic fungus infection",

        url:
            "https://apocalypsequizzes.com/last-of-us-quiz/"
    },


    {
        title: "Fallout TV Show Quiz",

        description:
            "Test your knowledge of Fallout, its characters, Vaults, factions, story, and post-apocalyptic world.",

        categories:
            "Fallout TV show Fallout series Lucy MacLean Cooper Howard Ghoul Hank MacLean Maximus Moldaver Vault 33 Vault 32 Vault 31 Vaults Brotherhood of Steel NCR New California Republic Shady Sands Enclave RobCo Mr House Securitron Great War wasteland post-apocalyptic apocalypse survival radiation nuclear war cold fusion",

        url:
            "https://apocalypsequizzes.com/fallout-tv-show-quiz/"
    },


    {
        title: "The Last Ship Quiz",

        description:
            "Test your knowledge of The Last Ship, Tom Chandler, Mike Slattery, the Nathan James, Dr. Rachel Scott, the Red Flu, and major events throughout the series.",

        categories:
            "The Last Ship TV show The Last Ship series Tom Chandler Mike Slattery Nathan James Rachel Scott Red Flu virus pandemic apocalypse survival Navy naval destroyer Eric Dane Adam Baldwin Rhona Mitra Danny Green Kara Foster Tex Nolan Quincy Tophet Sean Ramsey Jeffrey Michener Allison Shaw Takehaya Wolf Taylor Azima Kandie Niels Sørensen Giorgio Vellek Gustavo Barros Halsey Dr Rachel Scott Captain Chandler U.S. Navy Russian Vyerni Immunes vaccine outbreak pandemic post-apocalyptic",

        url:
            "https://apocalypsequizzes.com/the-last-ship-quiz/"
    },


    {
        title: "Z Nation Quiz",

        description:
            "Test your knowledge of Z Nation, its characters, zombies, survivors, and post-apocalyptic story.",

        categories:
            "Z Nation Z Nation TV show zombie zombies apocalypse post-apocalyptic survival undead Murphy Warren Addy Addy Carver Doc 10K Citizen Z Cassandra Mack Garnett Vasquez Lucy Kaya Simon Escorpion George Newmerica New America Z Weed zombie virus outbreak pandemic survivors zombie apocalypse television series",

        url:
            "https://apocalypsequizzes.com/z-nation-quiz/"
    },


    {
        title: "Station Eleven Quiz",

        description:
            "Test your knowledge of Station Eleven, its characters, the Georgia Flu, the Traveling Symphony, and its post-pandemic world.",

        categories:
            "Station Eleven Station Eleven TV show series pandemic plague Georgia Flu virus outbreak pandemic apocalypse post-apocalyptic survival Kirsten Raymonde Jeevan Chaudhary Arthur Leander Miranda Carroll Tyler Leander Prophet Clark Thompson Frank Chaudhary Sarah Traveling Symphony Museum of Civilization Severn City Airport Alex Elizabeth Colton Pingtree David Cody Hamlet King Lear Station Eleven novel",

        url:
            "https://apocalypsequizzes.com/station-eleven-quiz/"
    },


    {
        title: "Jericho Quiz",

        description:
            "Test your knowledge of Jericho, Jake Green, Robert Hawkins, Johnston Green, the nuclear attacks, Ravenwood, Jennings & Rall, and the post-nuclear world.",

        categories:
            "Jericho Jericho TV show Jericho series Jake Green Robert Hawkins Johnston Green Eric Green Stanley Richmond Emily Sullivan Ravenwood Jennings Rall nuclear attacks nuclear bombs nuclear war nuclear apocalypse nuclear explosion post-nuclear America post-apocalyptic apocalypse survival Kansas town sheriff mayor military government conspiracy terrorism nuclear fallout radiation disaster",

        url:
            "https://apocalypsequizzes.com/jericho-quiz/"
    },


    {
        title: "Snowpiercer Quiz",

        description:
            "Test your knowledge of Snowpiercer, Layton, Melanie Cavill, Mr. Wilford, Snowpiercer, Big Alice, the Freeze, New Eden, and major events throughout the series.",

        categories:
            "Snowpiercer Snowpiercer TV show Snowpiercer series Layton Andre Layton Melanie Cavill Mr Wilford Wilford Alexandra Cavill Big Alice Snowpiercer train Tailies Tail Breachmen Freeze CW-7 climate change apocalypse post-apocalyptic survival New Eden Pirate Train Night Car Ag-Sec Kronole Miles Pike Ruth Zarah Liana Asha Javi Milius Gemini Silo Djibouti revolution survivors train cars Wilford Industries Train Traincar snow freez",

        url:
            "https://apocalypsequizzes.com/snowpiercer-quiz/"
    },


    {
        title: "Fear the Walking Dead Quiz",

        description:
            "Think you know the survivors, communities, factions, locations and major events of Fear the Walking Dead? Test your knowledge and see how much of the series you really remember.",

        categories:
            "Fear the Walking Dead FTWD zombie TV show zombies walkers apocalypse survival Madison Clark Travis Manawa Alicia Clark Nick Clark Strand Morgan Jones June Dorie Dwight Sherry Daniel Salazar Luciana Galvez Victor Strand Virginia Teddy PADRE ranch dam stadium hotel communities factions locations survivors",

        url:
            "https://apocalypsequizzes.com/fear-the-walking-dead-quiz/"
    }

];



// =========================================
// SEARCH ELEMENTS
// =========================================

const searchInput =
    document.getElementById(
        "quiz-search-input"
    );

const searchForm =
    document.getElementById(
        "quiz-search"
    );

const searchGrid =
    document.getElementById(
        "search-grid"
    );

const resultsHeader =
    document.getElementById(
        "search-results-header"
    );

const noResults =
    document.getElementById(
        "no-results"
    );



// =========================================
// PAGINATION SETTINGS
// =========================================

const RESULTS_PER_PAGE = 20;



// =========================================
// GET URL PARAMETERS
// =========================================

const urlParams =
    new URLSearchParams(
        window.location.search
    );



function getSearchQuery() {

    return (
        urlParams.get("q") || ""
    )
        .toLowerCase()
        .trim();

}



function getCurrentPage() {

    const page =
        parseInt(
            urlParams.get("page"),
            10
        );

    if (
        isNaN(page) ||
        page < 1
    ) {

        return 1;

    }

    return page;

}



// =========================================
// CREATE SEARCH URL
// =========================================

function createSearchURL(
    query,
    page
) {

    const params =
        new URLSearchParams();


    if (query !== "") {

        params.set(
            "q",
            query
        );

    }


    if (page > 1) {

        params.set(
            "page",
            page
        );

    }


    const queryString =
        params.toString();


    return queryString
        ? "/search/?" + queryString
        : "/search/";

}



// =========================================
// DISPLAY PAGINATION
// =========================================

function displayPagination(
    totalResults,
    currentPage,
    query
) {

    const totalPages =
        Math.ceil(
            totalResults /
            RESULTS_PER_PAGE
        );


    // REMOVE OLD PAGINATION

    const oldPagination =
        document.querySelector(
            ".search-pagination-wrapper"
        );

    if (oldPagination) {

        oldPagination.remove();

    }


    // NO PAGINATION NEEDED

    if (totalPages <= 1) {

        return;

    }


    const wrapper =
        document.createElement("div");

    wrapper.className =
        "pagination-wrapper search-pagination-wrapper";


    const pagination =
        document.createElement("div");

    pagination.className =
        "pagination";


    // FIRST PAGE

    if (currentPage === 1) {

        const first =
            document.createElement("span");

        first.className =
            "pagination-btn disabled";

        first.textContent =
            "First Page";

        pagination.appendChild(first);

    } else {

        const first =
            document.createElement("a");

        first.className =
            "pagination-btn";

        first.href =
            createSearchURL(
                query,
                1
            );

        first.textContent =
            "First Page";

        pagination.appendChild(first);

    }


    // BACK

    if (currentPage === 1) {

        const back =
            document.createElement("span");

        back.className =
            "pagination-btn disabled";

        back.textContent =
            "Back";

        pagination.appendChild(back);

    } else {

        const back =
            document.createElement("a");

        back.className =
            "pagination-btn";

        back.href =
            createSearchURL(
                query,
                currentPage - 1
            );

        back.textContent =
            "Back";

        pagination.appendChild(back);

    }


    // PAGE NUMBERS

    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        if (page === currentPage) {

            const current =
                document.createElement("span");

            current.className =
                "pagination-btn active";

            current.textContent =
                page;

            pagination.appendChild(
                current
            );

        } else {

            const pageLink =
                document.createElement("a");

            pageLink.className =
                "pagination-btn";

            pageLink.href =
                createSearchURL(
                    query,
                    page
                );

            pageLink.textContent =
                page;

            pagination.appendChild(
                pageLink
            );

        }

    }


    // NEXT

    if (
        currentPage >= totalPages
    ) {

        const next =
            document.createElement("span");

        next.className =
            "pagination-btn disabled";

        next.textContent =
            "Next";

        pagination.appendChild(next);

    } else {

        const next =
            document.createElement("a");

        next.className =
            "pagination-btn";

        next.href =
            createSearchURL(
                query,
                currentPage + 1
            );

        next.textContent =
            "Next";

        pagination.appendChild(next);

    }


    // LAST PAGE

    if (
        currentPage >= totalPages
    ) {

        const last =
            document.createElement("span");

        last.className =
            "pagination-btn disabled";

        last.textContent =
            "Last Page";

        pagination.appendChild(last);

    } else {

        const last =
            document.createElement("a");

        last.className =
            "pagination-btn";

        last.href =
            createSearchURL(
                query,
                totalPages
            );

        last.textContent =
            "Last Page";

        pagination.appendChild(last);

    }


    wrapper.appendChild(
        pagination
    );


    searchGrid.parentNode.appendChild(
        wrapper
    );

}



// =========================================
// DISPLAY QUIZZES
// =========================================

function displayQuizzes(
    results,
    query
) {

    searchGrid.innerHTML = "";


    // NO RESULTS

    if (results.length === 0) {

        noResults.hidden = false;

        resultsHeader.textContent =
            "No quizzes found";

        displayPagination(
            0,
            1,
            query
        );

        return;

    }


    noResults.hidden = true;


    const totalResults =
        results.length;


    const totalPages =
        Math.ceil(
            totalResults /
            RESULTS_PER_PAGE
        );


    let currentPage =
        getCurrentPage();


    // PREVENT INVALID PAGE NUMBERS

    if (
        currentPage > totalPages
    ) {

        currentPage =
            totalPages;

    }


    const startIndex =
        (
            currentPage - 1
        ) *
        RESULTS_PER_PAGE;


    const endIndex =
        startIndex +
        RESULTS_PER_PAGE;


    const pageResults =
        results.slice(
            startIndex,
            endIndex
        );


    // RESULTS HEADER

    resultsHeader.textContent =
        "Showing " +
        (
            startIndex + 1
        ) +
        "–" +
        (
            startIndex +
            pageResults.length
        ) +
        " of " +
        totalResults +
        " quizzes";


    // CREATE CARDS

    pageResults.forEach(
        function (quiz) {

            const card =
                document.createElement("a");

            card.className =
                "search-card";

            card.href =
                quiz.url;


            card.innerHTML = `

                <div class="search-card-content">

                    <h2>
                        ${quiz.title}
                    </h2>

                </div>

            `;


            searchGrid.appendChild(
                card
            );

        }
    );


    // PAGINATION

    displayPagination(
        totalResults,
        currentPage,
        query
    );

}



// =========================================
// PERFORM SEARCH
// =========================================

function performSearch(
    updateURL = true
) {

    const query =
        searchInput.value
            .toLowerCase()
            .trim();


    // UPDATE URL WHEN SEARCHING

    if (updateURL) {

        const newURL =
            createSearchURL(
                query,
                1
            );

        window.history.pushState(
            {},
            "",
            newURL
        );

    }


    // SEARCH ALL QUIZZES

    let results;


    if (query === "") {

        results =
            quizzes;

    } else {

        results =
            quizzes.filter(
                function (quiz) {

                    const searchableText =
                        (
                            quiz.title +
                            " " +
                            quiz.description +
                            " " +
                            quiz.categories
                        ).toLowerCase();


                    return searchableText.includes(
                        query
                    );

                }
            );

    }


    displayQuizzes(
        results,
        query
    );

}



// =========================================
// SEARCH FORM
// =========================================

searchForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        performSearch(true);

    }
);



// =========================================
// LIVE SEARCH
// =========================================

searchInput.addEventListener(
    "input",
    function () {

        performSearch(true);

    }
);



// =========================================
// BROWSER BACK / FORWARD
// =========================================

window.addEventListener(
    "popstate",
    function () {

        const query =
            getSearchQuery();

        searchInput.value =
            query;


        let results;


        if (query === "") {

            results =
                quizzes;

        } else {

            results =
                quizzes.filter(
                    function (quiz) {

                        const searchableText =
                            (
                                quiz.title +
                                " " +
                                quiz.description +
                                " " +
                                quiz.categories
                            ).toLowerCase();


                        return searchableText.includes(
                            query
                        );

                    }
                );

        }


        displayQuizzes(
            results,
            query
        );

    }
);



// =========================================
// INITIAL PAGE LOAD
// =========================================

const initialQuery =
    getSearchQuery();

searchInput.value =
    initialQuery;


let initialResults;


if (initialQuery === "") {

    initialResults =
        quizzes;

} else {

    initialResults =
        quizzes.filter(
            function (quiz) {

                const searchableText =
                    (
                        quiz.title +
                        " " +
                        quiz.description +
                        " " +
                        quiz.categories
                    ).toLowerCase();


                return searchableText.includes(
                    initialQuery
                );

            }
        );

}


displayQuizzes(
    initialResults,
    initialQuery
);
