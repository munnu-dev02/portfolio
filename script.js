// Theme Toggle
const themeBtn = document.getElementById("darkModeBtn");

themeBtn?.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  themeBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Typing Effect
const roles = ["Web Developer", "Frontend Developer", "JavaScript Developer", "React Learner"];
const typingEl = document.getElementById("typing");

let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;

function handleTyping() {
  const currentRole = roles[roleIdx];
  
  if (isDeleting) {
    charIdx--;
  } else {
    charIdx++;
  }

  typingEl.textContent = currentRole.substring(0, charIdx);

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIdx === currentRole.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    roleIdx = (roleIdx + 1) % roles.length;
    speed = 300;
  }

  setTimeout(handleTyping, speed);
}

handleTyping();

// Scroll to Top
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Project Modal
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDescription");
const modalImg = document.getElementById("modalImage");
const modalGithub = document.getElementById("modalGithub");
const closeBtn = document.querySelector(".close");

function openModal(title, description, image, github) {
  modalTitle.textContent = title;
  modalDesc.textContent = description;
  modalImg.src = image;
  modalGithub.href = github;
  modal.style.display = "block";
}

closeBtn?.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Mobile Navigation
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Contact Form (EmailJS)
emailjs.init("HPvOeaw34C7bKkm2B");

const contactForm = document.getElementById("contactForm");

contactForm?.addEventListener("submit", async function(e) {
  e.preventDefault();
  
  try {
    await emailjs.sendForm("service_j6mn2sh", "template_jiny92p", this);
    this.reset();
    console.log("Message sent successfully");
  } catch (err) {
    console.error("Failed to send message:", err);
  }
});