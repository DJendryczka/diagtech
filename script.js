document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");
  const mainContainer = document.querySelector(".main-container");

  // Function to scroll to a specific section
  window.scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      mainContainer.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Smooth scrolling in mainContainer
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      scrollToSection(targetId);
    });
  });

  // Set active class on page load
  const setActiveOnLoad = () => {
    const current = sections[0].getAttribute("id");
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

  // Contact form uses FormSubmit.co - no JavaScript needed!

  // Add smooth animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    observerOptions
  );

  // Observe service items and contact elements
  document.querySelectorAll(".service-item, .contact-item").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});
