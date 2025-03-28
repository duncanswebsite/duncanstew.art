document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".custom-cursor");

    if (!cursor) return; // Ensure cursor element exists

    // Ensure the cursor follows the mouse properly
    document.addEventListener("mousemove", (e) => {
        const offsetX = e.pageX; // Horizontal mouse position
        const offsetY = e.pageY; // Vertical mouse position

        // Adjust cursor position to follow the mouse with centering
        cursor.style.left = `${offsetX}px`;
        cursor.style.top = `${offsetY}px`;
    });

    // Handle hover effect for clickable elements (buttons, links, etc.)
    const clickableElements = document.querySelectorAll("button, a");

    clickableElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            cursor.style.width = "40px";  // Enlarge cursor on hover
            cursor.style.height = "40px"; // Enlarge cursor on hover
        });

        element.addEventListener("mouseleave", () => {
            cursor.style.width = "20px";  // Reset cursor size when leaving
            cursor.style.height = "20px"; // Reset cursor size when leaving
        });
    });
});
