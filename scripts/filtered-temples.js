// WDD 131 - W04 Picture Album Enhancement
// Builds the temple cards from an array of objects, filters them from the menu,
// fills in the footer dates and runs the responsive hamburger menu.

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Three more temples (data checked on ChurchofJesusChristTemples.org)
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 58005,
    imageUrl: "https://user45pro.github.io/wdd131/images/temples/san-diego-california.jpg"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "https://user45pro.github.io/wdd131/images/temples/laie-hawaii.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://user45pro.github.io/wdd131/images/temples/salt-lake-utah.jpg"
  }
];

const cardsContainer = document.getElementById("temple-cards");
const filterStatus = document.getElementById("filter-status");
const navLinks = document.querySelectorAll("#site-nav a");
const menuButton = document.getElementById("menu-button");
const header = document.querySelector("header");

// The dedicated value starts with the year, for example "1888, May, 21".
function dedicatedYear(temple) {
  return parseInt(temple.dedicated.split(",")[0], 10);
}

function createTempleCard(temple) {
  const card = document.createElement("figure");
  card.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><span class="label">Location:</span> ${temple.location}</p>
    <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
    <p><span class="label">Size:</span> ${temple.area.toLocaleString("en-US")} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" width="400" height="250" loading="lazy">
  `;
  return card;
}

function displayTemples(list, description) {
  cardsContainer.innerHTML = "";
  list.forEach((temple) => cardsContainer.appendChild(createTempleCard(temple)));
  filterStatus.textContent = `${description}: ${list.length} of ${temples.length} temples`;
}

const filters = {
  home: { description: "All temples", run: () => temples },
  old: { description: "Built before 1900", run: () => temples.filter((temple) => dedicatedYear(temple) < 1900) },
  new: { description: "Built after 2000", run: () => temples.filter((temple) => dedicatedYear(temple) > 2000) },
  large: { description: "Larger than 90,000 sq ft", run: () => temples.filter((temple) => temple.area > 90000) },
  small: { description: "Smaller than 10,000 sq ft", run: () => temples.filter((temple) => temple.area < 10000) }
};

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    navLinks.forEach((item) => {
      item.classList.remove("active");
      item.removeAttribute("aria-current");
    });
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
    const filter = filters[link.dataset.filter];
    displayTemples(filter.run(), filter.description);
    setMenu(false);
  });
});

displayTemples(filters.home.run(), filters.home.description);

// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu
function setMenu(isOpen) {
  header.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Close the navigation menu" : "Open the navigation menu");
}

menuButton.addEventListener("click", () => setMenu(!header.classList.contains("open")));
