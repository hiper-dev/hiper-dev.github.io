document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded!");

    const sections = document.querySelectorAll(".glass");
    
    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const sectionPos = section.getBoundingClientRect().top;
            if (sectionPos < window.innerHeight * 0.9) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                       } else {
                section.style.opacity = "0";
                section.style.transform = "translateY(50px)";
            }
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
