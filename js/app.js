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
 *  ## Student Note
 * 
 *  ## I USE THIS PAGES IN ORDER TO COMPLATE THE PTOJECT
 * 
 *  I watch this video to understand how to determine if something in viewport or not
 *  getBoundingClientRect() in JavaScript DOM --> https://www.youtube.com/watch?v=MKpZadkuT-0
 *  
 *  I read this page to understand onscroll event listener
 *  onscroll Event --> https://www.w3schools.com/Jsref/event_onscroll.asp
 *
 *  I read this page to see example of scroll to top button
 *  How To Create a Scroll To Top Button --> https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
 * 
 *  I read this page to understand Element.scrollIntoView() method
 *  Element.scrollIntoView() --> https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
 * 
*/

/**
 * Define Global Variables
 *
*/

const nav = document.querySelector("nav"),
    allAnchor = document.getElementsByTagName("a"),
    upButton = document.getElementById("up-button"),
    sections = document.getElementsByTagName("section");

let displayNone;

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

    const ul = document.getElementById("navbar__list"),
        fragment = document.createDocumentFragment();

    for (let i = 0; i < sections.length; i++) {

        const anchor = document.createElement("a");
        const anchorList = document.createElement("li");

        anchor.textContent = "Section " + (i + 1);
        anchor.classList.add("menu__link");

        anchorList.appendChild(anchor);
        fragment.appendChild(anchorList);

    }

    ul.appendChild(fragment);

}

// Hide fixed navigation bar while not scrolling

// show nav if scolling for to secand than hide it
function ifScrolling() {
    nav.style.display = "block";
    displayNone = setTimeout(() => {
        nav.style.display = "none"
    }, 2000);
}

function hideNav() {
    clearTimeout(displayNone);
    // function always block on the top 
    // ifScrolling only work if user scrolling down by 20 from top
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        ifScrolling();
    } else {
        nav.style.display = "block";
    }
}

// Make Section Collapse Function

function collapseSection() {
    const h2 = document.getElementsByTagName("h2");
    const sectionsContent = document.querySelectorAll(".section-content");
    for (let i = 0; i < h2.length; i++) {
        const sectionContent = sectionsContent[i];
        h2[i].addEventListener("click", () => {
            if (sectionContent.style.display === "block") {
                sectionContent.style.display = "none"
            } else {
                sectionContent.style.display = "block";
            }
        })
    }
}

// Add class 'active' to section when near top of viewport

function hoverActiveSection() {
    for (let i = 0; i < sections.length; i++) {

        const anchor = allAnchor[i],
            section = sections[i],
            rect = section.getBoundingClientRect(); // get section Coordinates

        // detect if the coordinates of the section is in viewport
        if (rect.top < 290 && rect.bottom > 286) {
            section.classList.add("your-active-class");
            anchor.classList.add("anchor-focus");
        } else {
            section.classList.remove("your-active-class");
            anchor.classList.remove("anchor-focus");
        }
    }
}

// Scroll to Selected Section using ScrollIntoView method & Stop links default action

function scrollTo() {
    for (let i = 0; i < allAnchor.length; i++) {
        allAnchor[i].addEventListener("click", (e) => {
            e.preventDefault();
            const section = "section" + (i + 1);
            const selectedSection = document.getElementById(section);
            selectedSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        });
    }
}

// Up Button Scroll to the top

function scrollButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upButton.style.display = "block";
    } else {
        upButton.style.display = "none";
    }
}

upButton.addEventListener("click", () => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    document.documentElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
})

/**
 * End Main Functions
 * Begin Events
 *
*/

// Collapse Section

collapseSection();

// Build menu 

window.onload = buildNav(), scrollTo();

// Detecting Scroll

window.onscroll = () => {
    hoverActiveSection();
    scrollButton();
    hideNav();
}
