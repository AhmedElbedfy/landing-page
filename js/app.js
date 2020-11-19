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

const allAnchor = document.getElementsByTagName("a");
const sections = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

for (let i = 0; i < allAnchor.length; i++) {
    allAnchor.addEventListener("click", (e) => e.preventDefault());
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

function buildNav() {

    const ul = document.getElementById('navbar__list');

    for (let i = 0; i < sections.length; i++) {
        console.log(sections[i]);

        const anchor = document.createElement('a');
        const anchorList = document.createElement('li');

        anchor.textContent = "Section " + (i + 1);
        anchor.classList.add('menu__link');
        anchor.setAttribute("href", "#section" + (i + 1))

        anchorList.appendChild(anchor);

        ul.appendChild(anchorList);

        console.log(anchorList);
        console.log(anchor);

    }

}

buildNav()


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


