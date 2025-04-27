document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");
  const mainContainer = document.querySelector(".main-container");

  // Smooth scrolling in mainContainer
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        mainContainer.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Set active class on page load
  const setActiveOnLoad = () => {
    const current = sections[0].getAttribute("id"); // Default to the first section
    navLinks.forEach((link) => {
      const linkId = link.getAttribute("href").substring(1);
      link.classList.toggle("active", linkId === current);
    });
  };
  setActiveOnLoad();

  // Update active class on scroll
  mainContainer.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (mainContainer.scrollTop >= sectionTop - section.clientHeight / 3) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      const linkId = link.getAttribute("href").substring(1);
      link.classList.toggle("active", linkId === current);
    });
  });
});
