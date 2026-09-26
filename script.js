/* =========================================
   NOVA AGENCY
   JAVASCRIPT
========================================= */
/* =========================================
   1. MOBILE NAVIGATION
========================================= */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
}
/* Close mobile menu when a link is clicked */
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});
/* =========================================
   2. NAVBAR SCROLL EFFECT
========================================= */
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
/* =========================================
   3. SCROLL REVEAL ANIMATION
========================================= */
const revealElements = document.querySelectorAll(
    ".service-card, .project, .process-item, .testimonial, .about-content"
);
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);
revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});
/* =========================================
   4. PROJECT IMAGE HOVER CURSOR EFFECT
========================================= */
const projects = document.querySelectorAll(".project");
projects.forEach(project => {
    project.addEventListener("mousemove", event => {
        const rect = project.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        project.style.setProperty("--mouse-x", `${x}px`);
        project.style.setProperty("--mouse-y", `${y}px`);
    });
});
/* =========================================
   5. CURRENT YEAR
========================================= */
const yearElement = document.querySelector(".footer-bottom p");
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent =
        `© ${currentYear} NOVA Agency. All rights reserved.`;
}
/* =========================================
   6. SMOOTH BUTTON FEEDBACK
========================================= */
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.setProperty("--button-scale", "1.02");
    });
    button.addEventListener("mouseleave", () => {
        button.style.setProperty("--button-scale", "1");
    });
});
/* =========================================
   7. PAGE LOADED
========================================= */
window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});