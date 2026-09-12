// About image entrance and hover animations
const aboutImageCard = document.querySelector("#about-image-card");
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (aboutImageCard && !reducedMotion) {
  const replayBounce = () => {
    aboutImageCard.classList.remove("is-bouncing");
    void aboutImageCard.offsetWidth;
    aboutImageCard.classList.add("is-bouncing");
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        aboutImageCard.classList.add("is-visible");
        observer.disconnect();
      }
    },
    { threshold: 0.35 },
  );

  observer.observe(aboutImageCard);
  aboutImageCard.addEventListener("mouseenter", replayBounce);
  aboutImageCard.addEventListener("animationend", (event) => {
    if (event.animationName === "about-bounce") {
      aboutImageCard.classList.remove("is-bouncing");
    }
  });
}

// Project category toggle behavior
const projectFilters = document.querySelectorAll(".project-filter");
const projectPanels = document.querySelectorAll(".project-panel");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

projectFilters.forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    const selectedFilter = filterButton.dataset.filter;

    projectFilters.forEach((button) => {
      const isSelected = button === filterButton;
      button.classList.toggle("bg-brand", isSelected);
      button.classList.toggle("text-white", isSelected);
      button.classList.toggle("text-slate-400", !isSelected);
      button.setAttribute("aria-selected", String(isSelected));
    });

    projectPanels.forEach((panel) => {
      const isSelectedPanel = panel.id === `${selectedFilter}-projects`;
      panel.classList.toggle("hidden", !isSelectedPanel);
      panel.classList.toggle("grid", isSelectedPanel);
      panel.setAttribute("aria-hidden", String(!isSelectedPanel));
    });
  });
});
