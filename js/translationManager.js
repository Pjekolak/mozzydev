const translations = {
  en: {
    title: "Mozzy | Portfolio",
    about: "About Me",
    "about-content-1": "...123",
    "about-content-2": "..123.",
    skills: "Skills",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    react: "React",
    nodejs: "Node.js",
    mongodb: "MongoDB",
    python: "Python",
    flask: "Flask",
    experience: "Experience",
    "experience-content-1": "...",
    "experience-content-2": "",
    education: "Education",
    "education-content": "...",
    portfolio: "Moje Portfolio",
    "popup-link": "View Project",
    "popup-close": "Close",
    "footer-line1":
      '&copy; 2024 Mozzy | <a href="https://discord.gg/qQ3y95akmb">Kontakt</a>',
    "footer-line2": "",
  },
};
const translatableElements = document.querySelectorAll("[data-i18n]");
const languageToggle = document.getElementById("language-toggle");
const languageFlag = languageToggle.querySelector("img");
const body = document.body;
let currentLanguage = "en";
function translatePage() {
  setTimeout(() => {
    body.classList.remove("theme-animation");
  }, 1000);
  translatableElements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (key === "footer-line2" || "footer-line1") {
      element.innerHTML = translations[currentLanguage][key];
      return;
    }
    element.textContent = translations[currentLanguage][key];
    element.classList.add("lang-fade");
    body.classList.add("theme-animation");
  });
  if (currentLanguage === "en") {
    languageFlag.src =
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png";
    languageFlag.alt = "English";
    languageFlag.dataset.lang = "en";
  } else {
    languageFlag.src =
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/640px-Flag_of_Poland.svg.png";
    languageFlag.alt = "Polish";
    languageFlag.dataset.lang = "pl";
  }
}
languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "pl" : "en";
  translatePage();
});
translatePage();
document.addEventListener("click", () => {
  translatePage();
});
