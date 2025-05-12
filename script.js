document.addEventListener("DOMContentLoaded", function () {
    // Contact Form Validation
    const form = document.querySelector("#contactForm");

    form.addEventListener("submit", function (event) {
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();
        let errors = [];

        if (!name) errors.push("Name is required.");
        if (!email.includes("@")) errors.push("Please enter a valid email.");
        if (!message) errors.push("Message cannot be empty.");

        if (errors.length > 0) {
            event.preventDefault();
            alert(errors.join("\n")); // Show multiple errors at once
        }
    });

    // Smooth Scroll Effect for Navigation
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").replace(".html", "");
            const targetElement = document.querySelector(`#${targetId}`);

            if (targetElement) {
                window.scrollTo({ top: targetElement.offsetTop - 50, behavior: "smooth" });
            }
        });
    });

    // Fade-in Animation for Content
    document.querySelectorAll("main, header, footer").forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";

        setTimeout(() => {
            section.style.transition = "opacity 1s, transform 1s";
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }, 500);
    });
});

