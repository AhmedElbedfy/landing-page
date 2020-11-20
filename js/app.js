/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const allAnchor = document.getElementsByTagName("a"),
    sections = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

function buildNav() {

    const ul = document.getElementById('navbar__list');

    for (let i = 0; i < sections.length; i++) {

        const anchor = document.createElement('a');
        const anchorList = document.createElement('li');

        anchor.textContent = "Section " + (i + 1);
        anchor.classList.add('menu__link');
        anchor.id = "aSection" + (i + 1)

        // Scroll to section on link click
        anchor.setAttribute("href", "#section" + (i + 1))

        anchorList.appendChild(anchor);

        ul.appendChild(anchorList);

    }

}




// Add class 'active' to section when near top of viewport

function activeSection() {
    setTimeout(window.onscroll = () => { hoverActiveSection() }, 0)

    function hoverActiveSection() {
        for (let i = 0; i < sections.length; i++) {

            const anchor = allAnchor[i],
                section = sections[i],
                rect = section.getBoundingClientRect();

            if (rect.top < 278 && rect.bottom > 255) {
                section.classList.add("your-active-class");
                anchor.classList.add("anchor-focus");
            } else {
                section.classList.remove("your-active-class");
                anchor.classList.remove("anchor-focus");
            }
        }
    }
}

// Scroll to anchor ID using scrollTO event

for (let i = 0; i < allAnchor.length; i++) {
    allAnchor.addEventListener("click", (e) => e.preventDefault());
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

buildNav()


// Up Button Scroll to the top

const upButton = document.getElementById("up-button");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upButton.style.display = "block";
    } else {
        upButton.style.display = "none";
    }
}

upButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// Set sections as active

activeSection()

