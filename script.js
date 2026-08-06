// =========================
// Dark Mode Toggle
// =========================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkModeBtn.innerHTML="☀️ Light Mode";
    }else{
        darkModeBtn.innerHTML="🌙 Dark Mode";
    }

});

// =========================
// Typing Animation
// =========================

const words = [
    "Web Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "React Learner"
];

let wordIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect(){

    if(charIndex < words[wordIndex].length){

        typing.innerHTML += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }else{

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typing.innerHTML = words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }else{

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

        setTimeout(typeEffect,300);

    }

}

typeEffect();

// =========================
// Scroll To Top Button
// =========================

const topBtn = document.getElementById("topBtn");

// Show button after scrolling
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

// Scroll to top
topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// Project Modal
// ===============================

const modal = document.getElementById("projectModal");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalImage = document.getElementById("modalImage");
const modalGithub = document.getElementById("modalGithub");

const closeBtn = document.querySelector(".close");

function openModal(title, description, image, github){

    modal.style.display = "block";

    modalTitle.innerHTML = title;

    modalDescription.innerHTML = description;

    modalImage.src = image;

    modalGithub.href = github;

}

closeBtn.onclick = function(){

    modal.style.display = "none";

}

window.onclick = function(event){

    if(event.target == modal){

        modal.style.display = "none";

    }

}

// =========================
// Responsive Menu
// =========================

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {

    nav.classList.toggle("active");

});

// =========================
// Contact Form EmailJS
// =========================

// EmailJS Initialize
emailjs.init("HPvOeaw34C7bKkm2B");

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_j6mn2sh",
        "template_jiny92p",
        this
    )
    .then(function () {

        alert("✅ Message Sent Successfully!");

        contactForm.reset();

    })
    .catch(function (error) {

        console.log(error);

        alert("❌ Failed to Send Message.");

    });

});