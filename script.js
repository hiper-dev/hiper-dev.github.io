document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero-content", { opacity: 0, y: 50, duration: 1.5 });
    gsap.from("nav ul li", { opacity: 0, y: -20, duration: 0.8, stagger: 0.2 });

    document.querySelectorAll(".project").forEach((project, i) => {
        gsap.from(project, { opacity: 0, x: -50, duration: 1, delay: i * 0.3 });
    });
});

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
