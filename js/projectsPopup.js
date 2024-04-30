const projectItems = document.querySelectorAll(".project-item");
const projectPopup = document.getElementById("project-popup");
const projectPopupTitle = projectPopup.querySelector(".project-popup-title");
const projectPopupDescription = projectPopup.querySelector(
  ".project-popup-description"
);
const projectPopupTech = projectPopup.querySelector(".project-popup-tech");
const projectPopupScreenshots = projectPopup.querySelector(
  ".project-popup-screenshots"
);
const projectPopupLink = projectPopup.querySelector(".project-popup-link a");
const projectPopupClose = projectPopup.querySelector(".project-popup-close");
const projects = [
  {
    id: 1,
    en: {
      title: "Widzowie Faduuza",
      description:
        "Serwer discord stworzony dla TikTok'era Faduuz.",
      tech: "Serwer oferuje wiele funkcji ułatwiających zarządzanie i organizację, takie jak weryfikacja, autorole, tickety, strefy zabaw i statystyki. Dzięki nim możemy kontrolować dostęp do serwera, automatycznie nadawać role użytkownikom, efektywnie zarządzać zgłoszeniami, zapewnić przestrzeń do interakcji oraz śledzić aktywność użytkowników. Te narzędzia sprawiają, że serwer jest przyjazny dla użytkowników i łatwy w obsłudze.",
      link: "https://discord.gg/8VTc7q8v6y",
      screenshots: [
        "",
        "",
      ],
    },
  },
  {
    id: 2,
    en: {
      title: "Luna Shop",
      description:
        "Serwer discord w stylu market.",
      tech: "Serwer w stylu Market, łatwy w obsłudze i przejrzysty. Zawiera zaawansowany system ticketów i klarowne informacje. Wszystko jest w pełni zautomatyzowane, zapewniając wygodę użytkowania.",
      link: "https://discord.gg/aDhZ8naHMr",
      screenshots: [
        "",
        "",
      ],
    },
  },
  {
    id: 3,
    en: {
      title: "CHMURKOWO",
      description:
        "Serwer Community stworzony z myślą o społeczności.",
      tech: "Ten Discord oferuje szeroki zakres funkcji ułatwiających zarządzanie i organizację. Dzięki weryfikacji, autorolom, tickietom, strefom zabaw i statystykom, kontroluje dostęp, automatycznie nadaje role, efektywnie zarządza zgłoszeniami, zapewnia przestrzeń do interakcji oraz śledzi aktywność użytkowników. Te funkcje sprawiają, że serwer jest przyjazny dla użytkowników i łatwy w obsłudze, co przekłada się na pozytywne doświadczenia dla wszystkich uczestników społeczności.",
      link: "https://discord.gg/qQ3y95akmb",
      screenshots: [
        "",
        "",
      ],
    },
  },
];
projectItems.forEach((item) => {
  item.addEventListener("click", () => {
    const projectId = parseInt(item.getAttribute("data-project-id"));
    const project = projects.find((project) => project.id === projectId);
    const language = currentLanguage;
    console.log(language);
    console.log(project[language].title);
    projectPopupTitle.textContent = project[language].title;
    projectPopupDescription.textContent = project[language].description;
    projectPopupTech.textContent = project[language].tech;
    projectPopupLink.href = project[language].link;
    projectPopupScreenshots.innerHTML = "";
    project[language].screenshots.forEach((screenshot) => {
      const img = document.createElement("img");
      img.src = screenshot;
      projectPopupScreenshots.appendChild(img);
    });
    projectPopup.classList.add("show");
  });
});
projectPopupClose.addEventListener("click", () => {
  projectPopup.classList.remove("show");
});
projectPopup.addEventListener("click", (e) => {
  if (e.target === projectPopup) {
    projectPopup.classList.remove("show");
  }
});
