// WDD 131 - W02 Picture Album
// Footer dates and the responsive hamburger menu.

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.getElementById("menu-button");
const header = document.querySelector("header");

menuButton.addEventListener("click", () => {
  const isOpen = header.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Close the navigation menu" : "Open the navigation menu");
});
