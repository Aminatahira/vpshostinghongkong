// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Animate hamburger menu
      const spans = mobileToggle.querySelectorAll("span");
      spans.forEach((span, index) => {
        if (navMenu.classList.contains("active")) {
          if (index === 0)
            span.style.transform = "rotate(45deg) translate(5px, 5px)";
          if (index === 1) span.style.opacity = "0";
          if (index === 2)
            span.style.transform = "rotate(-45deg) translate(7px, -6px)";
        } else {
          span.style.transform = "";
          span.style.opacity = "";
        }
      });
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const spans = mobileToggle.querySelectorAll("span");
        spans.forEach((span) => {
          span.style.transform = "";
          span.style.opacity = "";
        });
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !mobileToggle.contains(event.target) &&
        !navMenu.contains(event.target)
      ) {
        navMenu.classList.remove("active");
        const spans = mobileToggle.querySelectorAll("span");
        spans.forEach((span) => {
          span.style.transform = "";
          span.style.opacity = "";
        });
      }
    });
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Fade in animation on scroll
function fadeInOnScroll() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible");
    }
  });
}

// Add fade-in class to sections
window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("fade-in");
  });

  // Check if elements are in view on load
  fadeInOnScroll();
});

window.addEventListener("scroll", fadeInOnScroll);

// Pricing card hover effects
document.addEventListener("DOMContentLoaded", function () {
  const pricingCards = document.querySelectorAll(".pricing-card");

  pricingCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      if (this.classList.contains("featured")) {
        this.style.transform = "scale(1.05)";
      } else {
        this.style.transform = "translateY(0) scale(1)";
      }
    });
  });
});

// FAQ Accordion functionality (if needed)
function createFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector("h4");
    const answer = item.querySelector("p");

    if (question && answer) {
      // Hide answers initially
      answer.style.display = "none";
      question.style.cursor = "pointer";
      question.style.userSelect = "none";

      // Add click event
      question.addEventListener("click", function () {
        const isOpen = answer.style.display === "block";

        // Close all other FAQ items
        faqItems.forEach((otherItem) => {
          const otherAnswer = otherItem.querySelector("p");
          if (otherAnswer && otherAnswer !== answer) {
            otherAnswer.style.display = "none";
          }
        });

        // Toggle current item
        answer.style.display = isOpen ? "none" : "block";
      });
    }
  });
}

// Call FAQ accordion function if you want accordion behavior
// createFAQAccordion();

// Form validation (if forms are added later)
function validateForm(formElement) {
  const inputs = formElement.querySelectorAll(
    "input[required], select[required], textarea[required]",
  );
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "#ff4444";
      isValid = false;
    } else {
      input.style.borderColor = "";
    }

    // Email validation
    if (input.type === "email" && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        input.style.borderColor = "#ff4444";
        isValid = false;
      }
    }
  });

  return isValid;
}

// Loading state for buttons
function addButtonLoadingState() {
  const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Only add loading state for external links
      if (this.href && !this.href.startsWith("#")) {
        const originalText = this.textContent;
        this.textContent = "Loading...";
        this.style.opacity = "0.7";
        this.style.pointerEvents = "none";

        // Reset after 3 seconds (in case of slow loading)
        setTimeout(() => {
          this.textContent = originalText;
          this.style.opacity = "";
          this.style.pointerEvents = "";
        }, 3000);
      }
    });
  });
}

// Initialize button loading states
document.addEventListener("DOMContentLoaded", addButtonLoadingState);

// Performance optimization: Lazy load images (if any are added)
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Initialize lazy loading if supported
if ("IntersectionObserver" in window) {
  document.addEventListener("DOMContentLoaded", lazyLoadImages);
}

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
  // Placeholder for analytics tracking
  console.log("Event tracked:", eventName, eventData);

  // Example: Google Analytics
  // if (typeof gtag !== 'undefined') {
  //     gtag('event', eventName, eventData);
  // }
}

// Track button clicks
document.addEventListener("DOMContentLoaded", function () {
  const ctaButtons = document.querySelectorAll(".btn-primary, .btn-secondary");

  ctaButtons.forEach((button) => {
    button.addEventListener("click", function () {
      trackEvent("button_click", {
        button_text: this.textContent.trim(),
        button_url: this.href || "no-url",
      });
    });
  });
});

console.log("Hong Kong VPS Hosting website loaded successfully!");
