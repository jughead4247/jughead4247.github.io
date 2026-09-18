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
// CATEGORY ACCORDIONS
// =========================================

const categoryToggles =
    document.querySelectorAll(
        ".category-toggle"
    );


categoryToggles.forEach(
    function (toggle) {

        toggle.addEventListener(
            "click",
            function () {

                const targetId =
                    toggle.getAttribute(
                        "aria-controls"
                    );

                const dropdown =
                    document.getElementById(
                        targetId
                    );

                if (!dropdown) {
                    return;
                }


                const isOpen =
                    toggle.getAttribute(
                        "aria-expanded"
                    ) === "true";


                // CLOSE ALL OTHER CATEGORIES

                categoryToggles.forEach(
                    function (otherToggle) {

                        const otherId =
                            otherToggle.getAttribute(
                                "aria-controls"
                            );

                        const otherDropdown =
                            document.getElementById(
                                otherId
                            );

                        if (
                            otherToggle !== toggle &&
                            otherDropdown
                        ) {

                            otherToggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                            otherDropdown.hidden =
                                true;

                        }

                    }
                );


                // TOGGLE CURRENT CATEGORY

                if (isOpen) {

                    toggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    dropdown.hidden =
                        true;

                } else {

                    toggle.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                    dropdown.hidden =
                        false;

                }

            }
        );

    }
);



// =========================================
// PAGINATION SETTINGS
// =========================================

const QUIZZES_PER_PAGE = 20;



// =========================================
// URL HELPERS
// =========================================

function getPageParameter(
    categoryId
) {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const parameterName =
        categoryId.replace(
            "-quizzes",
            "-page"
        );


    const page =
        parseInt(
            params.get(parameterName),
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



function createCategoryURL(
    categoryId,
    page
) {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const parameterName =
        categoryId.replace(
            "-quizzes",
            "-page"
        );


    // Remove all category page parameters

    document
        .querySelectorAll(
            ".category-dropdown"
        )
        .forEach(
            function (dropdown) {

                const otherParameter =
                    dropdown.id.replace(
                        "-quizzes",
                        "-page"
                    );

                params.delete(
                    otherParameter
                );

            }
        );


    if (page > 1) {

        params.set(
            parameterName,
            page
        );

    }


    const queryString =
        params.toString();


    return queryString
        ? "/categories/?" + queryString
        : "/categories/";

}



// =========================================
// GET PAGINATION PARAMETER
// =========================================

function getPaginationParameter(
    categoryId
) {

    return categoryId.replace(
        "-quizzes",
        "-page"
    );

}



// =========================================
// DISPLAY CATEGORY PAGINATION
// =========================================

function displayCategoryPagination(
    dropdown,
    totalItems,
    currentPage
) {

    // REMOVE OLD PAGINATION

    const oldPagination =
        dropdown.querySelector(
            ".category-pagination-wrapper"
        );

    if (oldPagination) {

        oldPagination.remove();

    }


    const totalPages =
        Math.ceil(
            totalItems /
            QUIZZES_PER_PAGE
        );


    // NO PAGINATION NEEDED

    if (totalPages <= 1) {

        return;

    }


    const wrapper =
        document.createElement(
            "div"
        );

    wrapper.className =
        "pagination-wrapper category-pagination-wrapper";


    const pagination =
        document.createElement(
            "div"
        );

    pagination.className =
        "pagination";


    const categoryId =
        dropdown.id;



    // =========================================
    // FIRST PAGE
    // =========================================

    if (currentPage === 1) {

        const first =
            document.createElement(
                "span"
            );

        first.className =
            "pagination-btn disabled";

        first.textContent =
            "First Page";

        pagination.appendChild(
            first
        );

    } else {

        const first =
            document.createElement(
                "a"
            );

        first.className =
            "pagination-btn";

        first.href =
            createCategoryURL(
                categoryId,
                1
            );

        first.textContent =
            "First Page";

        pagination.appendChild(
            first
        );

    }



    // =========================================
    // BACK
    // =========================================

    if (currentPage === 1) {

        const back =
            document.createElement(
                "span"
            );

        back.className =
            "pagination-btn disabled";

        back.textContent =
            "Back";

        pagination.appendChild(
            back
        );

    } else {

        const back =
            document.createElement(
                "a"
            );

        back.className =
            "pagination-btn";

        back.href =
            createCategoryURL(
                categoryId,
                currentPage - 1
            );

        back.textContent =
            "Back";

        pagination.appendChild(
            back
        );

    }



    // =========================================
    // PAGE NUMBERS
    // =========================================

    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        if (
            page === currentPage
        ) {

            const current =
                document.createElement(
                    "span"
                );

            current.className =
                "pagination-btn active";

            current.textContent =
                page;

            pagination.appendChild(
                current
            );

        } else {

            const pageLink =
                document.createElement(
                    "a"
                );

            pageLink.className =
                "pagination-btn";

            pageLink.href =
                createCategoryURL(
                    categoryId,
                    page
                );

            pageLink.textContent =
                page;

            pagination.appendChild(
                pageLink
            );

        }

    }



    // =========================================
    // NEXT
    // =========================================

    if (
        currentPage >= totalPages
    ) {

        const next =
            document.createElement(
                "span"
            );

        next.className =
            "pagination-btn disabled";

        next.textContent =
            "Next";

        pagination.appendChild(
            next
        );

    } else {

        const next =
            document.createElement(
                "a"
            );

        next.className =
            "pagination-btn";

        next.href =
            createCategoryURL(
                categoryId,
                currentPage + 1
            );

        next.textContent =
            "Next";

        pagination.appendChild(
            next
        );

    }



    // =========================================
    // LAST PAGE
    // =========================================

    if (
        currentPage >= totalPages
    ) {

        const last =
            document.createElement(
                "span"
            );

        last.className =
            "pagination-btn disabled";

        last.textContent =
            "Last Page";

        pagination.appendChild(
            last
        );

    } else {

        const last =
            document.createElement(
                "a"
            );

        last.className =
            "pagination-btn";

        last.href =
            createCategoryURL(
                categoryId,
                totalPages
            );

        last.textContent =
            "Last Page";

        pagination.appendChild(
            last
        );

    }


    wrapper.appendChild(
        pagination
    );


    dropdown.appendChild(
        wrapper
    );

}



// =========================================
// PAGINATE ALL CATEGORY DROPDOWNS
// =========================================

function paginateCategories() {

    const dropdowns =
        document.querySelectorAll(
            ".category-dropdown"
        );


    dropdowns.forEach(
        function (dropdown) {

            // Get only the actual quiz links.
            // Pagination itself is excluded.

            const quizLinks =
                Array.from(
                    dropdown.querySelectorAll(
                        ":scope > a"
                    )
                );


            const totalItems =
                quizLinks.length;


            let currentPage =
                getPageParameter(
                    dropdown.id
                );


            const totalPages =
                Math.ceil(
                    totalItems /
                    QUIZZES_PER_PAGE
                );


            // Prevent invalid page numbers

            if (
                currentPage > totalPages
            ) {

                currentPage =
                    totalPages || 1;

            }


            const startIndex =
                (
                    currentPage - 1
                ) *
                QUIZZES_PER_PAGE;


            const endIndex =
                startIndex +
                QUIZZES_PER_PAGE;


            // SHOW / HIDE QUIZ LINKS

            quizLinks.forEach(
                function (
                    link,
                    index
                ) {

                    if (
                        index >= startIndex &&
                        index < endIndex
                    ) {

                        link.hidden =
                            false;

                    } else {

                        link.hidden =
                            true;

                    }

                }
            );


            // CREATE PAGINATION

            displayCategoryPagination(
                dropdown,
                totalItems,
                currentPage
            );


            // OPEN CATEGORY AUTOMATICALLY
            // IF IT HAS A PAGE PARAMETER

            const parameterName =
                getPaginationParameter(
                    dropdown.id
                );

            const params =
                new URLSearchParams(
                    window.location.search
                );


            if (
                params.has(parameterName)
            ) {

                const toggle =
                    document.querySelector(
                        '[aria-controls="' +
                        dropdown.id +
                        '"]'
                    );


                if (toggle) {

                    toggle.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                    dropdown.hidden =
                        false;

                }

            }

        }
    );

}



// =========================================
// INITIALIZE PAGINATION
// =========================================

paginateCategories();



// =========================================
// BROWSER BACK / FORWARD
// =========================================

window.addEventListener(
    "popstate",
    function () {

        // Rebuild pagination state

        paginateCategories();

    }
);
