document.addEventListener("DOMContentLoaded", () => {
  // GSAP Entry Animations
  const tl = gsap.timeline();

  // 1. Initial background appearance
  tl.from(".glow-overlay", {
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  });

  // 2. Navbar slide down
  tl.from(
    ".navbar",
    {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    },
    "-=1.5",
  );

  // 3. Profile Card slide from left
  tl.from(
    ".profile-card",
    {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    },
    "-=0.5",
  );

  // 4. Hero Text Animations
  tl.from(
    ".hero-title",
    {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.8",
  );

  tl.from(
    ".hero-description",
    {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.7",
  );

  // 5. Section titles and about card
  tl.from(
    ".section-title",
    {
      y: 20,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.5",
  );

  tl.from(
    ".about-card",
    {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    },
    "-=0.6",
  );

  // Hover effects (optional manual control or CSS is enough, but adding subtle GSAP is cool)
  const navItems = document.querySelectorAll(".nav-links li");
  navItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, { scale: 1.1, duration: 0.3 });
    });
    item.addEventListener("mouseleave", () => {
      gsap.to(item, { scale: 1, duration: 0.3 });
    });
  });

  // Profile photo hover
  const profileImg = document.querySelector(".profile-image-container");
  if (profileImg) {
    profileImg.addEventListener("mouseenter", () => {
      gsap.to(profileImg, {
        boxShadow: "0 0 30px rgba(129, 75, 246, 0.6)",
        duration: 0.4,
      });
    });
    profileImg.addEventListener("mouseleave", () => {
      gsap.to(profileImg, {
        boxShadow: "0 0 15px rgba(129, 75, 246, 0.3)",
        duration: 0.4,
      });
    });
  }
});
