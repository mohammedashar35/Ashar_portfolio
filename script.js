// Typing Effect
const typedText = document.getElementById("typed-text");
const textArray = ["Web Developer", "Python Enthusiast", "ML Explorer", "Problem Solver"];
let arrayIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < textArray[arrayIndex].length) {
    typedText.textContent += textArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    arrayIndex = (arrayIndex + 1) % textArray.length;
    setTimeout(typeEffect, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// Smooth scroll
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Dark / Light Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
    document.getElementById("formMessage").innerText = `Thank you, ${name}! Your message has been sent.`;
    this.reset();
  } else {
    document.getElementById("formMessage").innerText = "Please fill out all fields.";
  }

});
// ===== Mobile nav toggle =====
const navToggle = document.createElement("div");
navToggle.classList.add("nav-toggle");
navToggle.innerHTML = '<i class="fa fa-bars"></i>';
document.querySelector("nav").prepend(navToggle);

const navLinks = document.querySelector("nav ul.nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("nav-open");
});

// Close nav when a link is clicked
document.querySelectorAll("nav ul.nav-links li a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("nav-open");
  });
});
