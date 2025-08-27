//Smooth Scrolling

document.querySelectorAll(' a[href^="#"] ').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    document.querySelector("nav");

    const navbarHeight = document.querySelector("nav").offsetHeight;
    const targetPosition = targetElement.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

//Scroll Spy
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && screenY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.add("text-slate-50");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.remove("text-slate-50");
      link.classList.add("text-[#06b6d4]", "font-semibold");
    }
  });
});

//Reg Exp

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const form = document.querySelector("form");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

const nameRegex = /^.{3,}$/;
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

nameInput.addEventListener("blur", () => {
  if (!nameRegex.test(nameInput.value.trim())) {
    nameInput.classList.add("border-red-500");
    nameError.classList.remove("hidden");
  } else {
    nameInput.classList.remove("border-red-500");

    nameInput.classList.add("hidden");
  }
});

emailInput.addEventListener("blur", () => {
  if (!emailRegex.test(emailInput.value.trim())) {
    emailInput.classList.add("border-red-500");
    emailError.classList.remove("hidden");
  } else {
    emailInput.classList.remove("border-red-500");

    emailInput.classList.add("hidden");
  }
});
