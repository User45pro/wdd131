// WDD 131 - W03 Country Page: Mexico
// Footer dates and the wind chill calculation (metric units).

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Static weather values, matching what the page displays.
const temperature = 5; // °C
const windSpeed = 10; // km/h

function calculateWindChill(t, s) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
}

// Wind chill is only viable at 10 °C or less with wind above 4.8 km/h.
let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
  windChill = `${calculateWindChill(temperature, windSpeed)} °C`;
}

document.getElementById("windchill").textContent = windChill;
