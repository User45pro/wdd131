// WDD 131 - W05 review confirmation
// Counts each completed review with localStorage.

let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount += 1;
localStorage.setItem("reviewCount", reviewCount);
document.getElementById("reviewCount").textContent = reviewCount;

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
