// WDD 131 - W06 Project
// Fills the class list in the request form.

const courseSelect = document.getElementById("course");
const formHint = document.getElementById("formHint");

function buildOption(course) {
  const option = document.createElement("option");
  option.value = course.id;
  option.textContent = `${course.name} (${course.level}) - ${course.days} at ${course.time}`;
  return option;
}

function describeChoice(course) {
  return `Good choice. ${course.name} runs ${course.days} at ${course.time} and lasts ${course.minutes} minutes.`;
}

courses.forEach((course) => {
  courseSelect.appendChild(buildOption(course));
});

const storedLevel = localStorage.getItem(levelKey);
const suggestion = courses.find((course) => course.level === storedLevel);

if (suggestion) {
  courseSelect.value = suggestion.id;
  formHint.textContent = `Last time you picked the ${storedLevel} level, so I left that class ready for you. You can change it.`;
} else {
  formHint.textContent = `Not sure which one? Pick the closest and we will fix it in the free class.`;
}

courseSelect.addEventListener("change", () => {
  const picked = courses.find((course) => course.id === courseSelect.value);

  if (picked) {
    localStorage.setItem(levelKey, picked.level);
    formHint.textContent = describeChoice(picked);
  }
});
