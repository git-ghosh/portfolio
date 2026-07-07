console.log("NEW main.js loaded");
console.log("Portfolio Started 🚀");
// Scroll Progress Bar

window.addEventListener("scroll", () => {

    const winScroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    document.getElementById("progress-bar").style.width =
        scrolled + "%";

});

// Back To Top

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.onclick = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

}

// Dark Mode

const themeBtn = document.getElementById("theme-toggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("light");

};
// Typing Animation

new Typed("#typing",{

    strings:[

        "Computer Science Student",

        "Web Developer",

        "Linux Enthusiast",

        "Cybersecurity Learner",

        "Video Editor"

    ],

    typeSpeed:60,

    backSpeed:40,

    loop:true

});
// =========================
// Loading Screen
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1800);

});
