/* ===============================
GLOBAL SITE MENU
=============================== */

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

/* ===============================
CATEGORY ACCORDIONS
=============================== */

document.addEventListener(
"DOMContentLoaded",
function () {

    const buttons =
        document.querySelectorAll(
            ".category-toggle"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const dropdownId =
                        button.getAttribute(
                            "aria-controls"
                        );

                    const dropdown =
                        document.getElementById(
                            dropdownId
                        );


                    if (!dropdown) {
                        return;
                    }


                    const isOpen =
                        button.getAttribute(
                            "aria-expanded"
                        ) === "true";


                    button.setAttribute(
                        "aria-expanded",
                        String(!isOpen)
                    );


                    dropdown.hidden =
                        isOpen;

                }
            );

        }
    );

}

);
