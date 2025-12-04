document.addEventListener("DOMContentLoaded", () => {
  // Newsletter signup form
  const signupForm = document.querySelector(".signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for subscribing to VegLean meal ideas!");
      signupForm.reset();
    });
  }

  // Contact form
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for reaching out! We'll get back to you soon.");
      contactForm.reset();
    });
  }
});
