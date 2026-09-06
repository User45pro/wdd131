// WDD 131 - W01
// Fills in the copyright year and the last modified date in the footer.

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
