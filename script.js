document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("light-theme");

    // Smooth background transition
    document.body.style.transition = "background 0.5s ease, color 0.5s ease";

    // Rotate theme toggle button
    this.style.transition = "transform 0.3s ease";
    this.style.transform = "rotate(360deg)";
    setTimeout(() => {
        this.style.transform = "rotate(0deg)";
    }, 300);

    // Glow effect for 1 second
    document.body.classList.add("glow-effect");
    setTimeout(() => {
        document.body.classList.remove("glow-effect");
    }, 1000);

    // Text animation: Zoom and fade
    let textSection = document.querySelector(".intro-section");
    textSection.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    textSection.style.transform = "scale(1.05)";
    textSection.style.opacity = "0.5";
    setTimeout(() => {
        textSection.style.transform = "scale(1)";
        textSection.style.opacity = "1";
    }, 500);

    // Background gradient animation
    if (document.body.classList.contains("light-theme")) {
        document.body.style.background = "linear-gradient(135deg, #ffffff, #d3d3d3)";
    } else {
        document.body.style.background = "linear-gradient(135deg, #1a0a1e, #2e003e)";
    }
});
