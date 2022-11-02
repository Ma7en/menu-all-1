


/*  
===============================================
===============================================
*/

/* start menu 1 */

// link active
let m1LinkColor = document.querySelectorAll(".menu-1 .nav__link")

function colorLink() {
    m1LinkColor.forEach(l => l.classList.remove("active-link"));

    this.classList.add("active-link");
}

m1LinkColor.forEach(l => l.addEventListener("click", colorLink));


// show and hidde menu
let m2showMenu = (toggleId, navbarId) => {
    let toggle = document.querySelector(".menu-1 #nav-toggle"),
        navbar = document.querySelector(".menu-1 #nav");

    if(toggle && navbar) {
        toggle.addEventListener("click", () => {
            /* show menu */
            navbar.classList.toggle("show-menu");

            toggle.classList.toggle("rotate-icon");
        });
    }

}

m2showMenu('nav-toggle', 'nav');



/* end menu 1 */

/*  
===============================================
===============================================
*/

/* start menu 3 */



/* end menu 3 */

/*  
===============================================
===============================================
*/

/* start menu 5 */
let m5hamburger_menu = document.querySelector(".menu-5 .hamburger-menu");
let m5container = document.querySelector(".menu-5 .cont");

m5hamburger_menu.addEventListener("click", () => {
    m5container.classList.toggle("active");
});



/* end menu 5 */

/*  
===============================================
===============================================
*/

/* start menu 6 */

let m6menBtn = document.querySelector(".menu-6 #menu-btn");
let m6navbar = document.querySelector(".menu-6 #navbar");
let m6menu = document.querySelector(".menu-6 .menu_6");
let m6offset = 50;

m6menBtn.addEventListener("click", () => {
    m6menu.classList.toggle("menu-open");
});

window.addEventListener("scroll", () => {
    if(pageXOffset > m6offset) {
        m6navbar.classList.add("navbar-active");
    } else {
        m6navbar.classList.remove("navbar-active");
    }
});



/* end menu 6 */

/*  
===============================================
===============================================
*/

/* start menu 7 */

let m7toggleButton = document.querySelector(".menu-7 #floating-toggle");

let m7activeMenu = () => {
    m7toggleButton.classList.toggle("active");
}

m7toggleButton.addEventListener("click", m7activeMenu);




/* end menu 7 */

/*  
===============================================
===============================================
*/

/* start menu 8 */

let m8toggleBtn = document.querySelector(".menu-8 #fl-toggle"); 

m8toggleBtn.addEventListener("click", () => {
    m8toggleBtn.classList.toggle("active");
});



/* end menu 8 */


/*  
===============================================
===============================================
*/

/* start menu 9 */

let m9menu = document.querySelector(".menu-9 .menu_9");
let m9menuToggle = document.querySelector(".menu-9 .toggle");

m9menuToggle.addEventListener("click", () => {
    m9menu.classList.toggle("active");
    m9menuToggle.classList.toggle("active");
});

let m9list = document.querySelectorAll(".menu-9 .menu_9 li");
function m9activeLink() {
    m9list.forEach((item) => {
        item.classList.remove("active");
        this.classList.add("active");
    });
}

m9list.forEach((item) => item.addEventListener("click", m9activeLink));



/* end menu 9 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start menu 5 */



/* end menu 5 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start menu 6 */



/* end menu 6 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start menu 7 */



/* end menu 7 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start menu 8 */



/* end menu 8 */

/*  
===============================================
===============================================
*/

