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
// contact.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  if (!form) return;

  form.addEventListener("submit", function () {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      messageBox.style.color = "red";
      messageBox.innerText = "Please fill out all fields.";
      return;
    }

    messageBox.style.color = "green";
    messageBox.innerText = `Thank you, ${name}! Redirecting... ✅`;

    /* ❗IMPORTANT:
       DO NOT use e.preventDefault()
       Let FormSubmit handle redirect */
  });
});


// Hamburger menu toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("nav-open");
});

//Close nav when clicking a link (optional)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("nav-open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("nav-open");
  });

  // close after link click
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-open");
    });
  });
});










