/* ===============================
   MOBILE MENU
================================ */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");

    });

}


/* ===============================
   CLOSE MOBILE MENU
================================ */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        const icon = menuBtn?.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

});


/* ===============================
   DARK / LIGHT MODE
================================ */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("light")) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

        }

    });

}


/* ===============================
   ACTIVE NAVIGATION
================================ */

const sections =
    document.querySelectorAll("section[id]");

const links =
    document.querySelectorAll("nav a");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    links.forEach(link => {

                        link.classList.remove("active");

                    });


                    const active =
                        document.querySelector(
                            `nav a[href="#${entry.target.id}"]`
                        );

                    if (active) {

                        active.classList.add("active");

                    }

                }

            });

        },

        {
            rootMargin:
                "-35% 0px -55% 0px"
        }

    );


sections.forEach(section => {

    observer.observe(section);

});


/* ===============================
   SCROLL REVEAL
================================ */

const revealItems =
    document.querySelectorAll(
        ".glass-card, .skill, .project"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealItems.forEach(item => {

    item.classList.add("reveal");

    revealObserver.observe(item);

});
