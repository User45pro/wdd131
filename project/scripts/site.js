// WDD 131 - W06 Project
// Footer dates and the menu button, used on every page.

const levelKey = "cve-level";

function showFooterDates() {
  document.getElementById("currentyear").textContent = `${new Date().getFullYear()}`;
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
}

function setUpMenu() {
  const nav = document.getElementById("siteNav");
  const menuButton = document.getElementById("menuButton");

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    if (isOpen) {
      menuButton.textContent = `✕`;
      menuButton.setAttribute("aria-label", "Close the menu");
      menuButton.setAttribute("aria-expanded", "true");
    } else {
      menuButton.textContent = `☰`;
      menuButton.setAttribute("aria-label", "Open the menu");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

showFooterDates();
setUpMenu();
