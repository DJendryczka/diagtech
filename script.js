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

  // Simple Dot Runner - catches dots from text
  let runnerActive = false;

  const messageTextarea = document.getElementById('message');
  
  if (messageTextarea) {
    messageTextarea.addEventListener('input', function(e) {
      const text = e.target.value;
      
      if (text.includes('.') && !runnerActive) {
        spawnTextDotRunner();
      }
    });
  }

  function spawnTextDotRunner() {
    if (runnerActive) return;
    runnerActive = true;

    const textareaRect = messageTextarea.getBoundingClientRect();
    
    // Find position of last dot in text
    const text = messageTextarea.value;
    const lastDotIndex = text.lastIndexOf('.');
    
    if (lastDotIndex === -1) {
      runnerActive = false;
      return;
    }

    // Get textarea computed styles for accurate measurements
    const computedStyle = window.getComputedStyle(messageTextarea);
    const fontSize = parseFloat(computedStyle.fontSize);
    const lineHeight = parseFloat(computedStyle.lineHeight) || fontSize * 1.2;
    const paddingLeft = parseFloat(computedStyle.paddingLeft);
    const paddingTop = parseFloat(computedStyle.paddingTop);

    // Calculate approximate position of the dot in textarea
    const textBeforeDot = text.substring(0, lastDotIndex);
    const lines = textBeforeDot.split('\n');
    const currentLine = lines.length - 1;
    const currentCol = lines[lines.length - 1].length;
    
    // Estimate character width based on font size
    const charWidth = fontSize * 0.6; // approximate character width
    
    // Calculate dot position relative to viewport
    const dotX = textareaRect.left + paddingLeft + (currentCol * charWidth);
    const dotY = textareaRect.top + paddingTop + (currentLine * lineHeight);

    // Create simple runner
    const runner = document.createElement('div');
    runner.className = 'simple-runner active';
    runner.innerHTML = `
      <div class="runner-head"></div>
      <div class="runner-body"></div>
      <div class="runner-arms"></div>
      <div class="runner-legs"></div>
    `;

    // Position runner at start (left side of textarea)
    const startX = textareaRect.left - 30;
    const startY = dotY;

    runner.style.position = 'fixed';
    runner.style.left = startX + 'px';
    runner.style.top = startY + 'px';

    document.body.appendChild(runner);

    // Animate runner to dot position
    setTimeout(() => {
      runner.style.left = dotX + 'px';
      runner.style.top = dotY + 'px';
    }, 100);

    // Catch the dot and remove it from text
    setTimeout(() => {
      // Remove the dot from textarea text
      const newText = text.substring(0, lastDotIndex) + text.substring(lastDotIndex + 1);
      messageTextarea.value = newText;
      
      // Runner runs away to the right
      setTimeout(() => {
        runner.style.left = (window.innerWidth + 30) + 'px';
        
        setTimeout(() => {
          document.body.removeChild(runner);
          runnerActive = false;
        }, 800);
      }, 200);

    }, 800);
  }
});
