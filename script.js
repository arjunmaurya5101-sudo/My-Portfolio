console.log("Welcome to Arjun Maurya's Portfolio!");

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigation clicked:", link.textContent);
    });
});
