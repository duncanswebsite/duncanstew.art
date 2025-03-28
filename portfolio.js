document.addEventListener("DOMContentLoaded", () => {
    // Custom cursor
    const cursor = document.querySelector(".custom-cursor");

    if (!cursor) return; // Ensure cursor element exists

    // Ensure the cursor follows the mouse properly
    document.addEventListener("mousemove", (e) => {
        const offsetX = e.pageX; // Horizontal mouse position
        const offsetY = e.pageY; // Vertical mouse position

        // Adjust cursor position to follow the mouse with centering
        cursor.style.left = `${offsetX - cursor.offsetWidth / 2}px`;
        cursor.style.top = `${offsetY - cursor.offsetHeight / 2}px`;
    });

    // Handle hover effect for clickable elements (buttons, links, etc.)
    const clickableElements = document.querySelectorAll("button, a");

    clickableElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            cursor.style.transform = "scale(2)"; // Enlarge cursor
            element.classList.add("invert-color"); // Apply color inversion on hover
        });

        element.addEventListener("mouseleave", () => {
            cursor.style.transform = "scale(1)"; // Reset cursor size when leaving
            element.classList.remove("invert-color"); // Reset color inversion
        });
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger"); // Make sure the hamburger icon has this class
    const menu = document.querySelector(".nav-list"); // Make sure the nav list has this class

    if (hamburger && menu) {
        // Ensure the menu is hidden by default
        menu.classList.remove("show");  // In case the class is accidentally added

        hamburger.addEventListener("click", () => {
            menu.classList.toggle("show"); // Toggle the menu visibility on click
        });
    }
});
