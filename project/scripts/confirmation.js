// WDD 131 - W06 Project
// Shows what the visitor asked for and counts the requests.

const requestKey = "cve-requests";
const greeting = document.getElementById("greeting");
const summary = document.getElementById("summary");
const countNote = document.getElementById("countNote");
const answers = new URLSearchParams(window.location.search);

function describeCourse(id) {
  const match = courses.find((course) => course.id === id);

  if (match) {
    return `${match.name} (${match.level}), ${match.days} at ${match.time}`;
  }

  return "We will choose the class together in the free lesson";
}

function addRow(term, value) {
  const name = document.createElement("dt");
  const detail = document.createElement("dd");
  name.textContent = `${term}`;
  detail.textContent = `${value}`;
  summary.appendChild(name);
  summary.appendChild(detail);
}

function greetVisitor() {
  const fullName = answers.get("fullName");

  if (fullName) {
    const firstName = fullName.trim().split(" ")[0];
    greeting.textContent = `Thank you, ${firstName}. Your request is on my list and I answer the same day.`;
  } else {
    greeting.textContent = `Thank you. Your request is on my list and I answer the same day.`;
  }
}

function buildSummary() {
  addRow("Class", describeCourse(answers.get("course")));

  const goal = answers.get("goal");

  if (goal) {
    addRow("You need English for", goal);
  }

  const days = answers.getAll("days");

  if (days.length > 0) {
    addRow("You can attend", days.join(", "));
  }

  const startDate = answers.get("startDate");

  if (startDate) {
    addRow("You want to start", startDate);
  }

  const email = answers.get("email");

  if (email) {
    addRow("I will write to", email);
  }
}

function countRequest() {
  const alreadySaved = Number(localStorage.getItem(requestKey));
  let total = 1;

  if (alreadySaved > 0) {
    total = alreadySaved + 1;
  }

  localStorage.setItem(requestKey, `${total}`);

  if (total === 1) {
    countNote.textContent = `This is your first free class request from this device.`;
  } else {
    countNote.textContent = `You have asked for a free class ${total} times from this device. If I have not answered yet, write to me on WhatsApp.`;
  }
}

greetVisitor();
buildSummary();
countRequest();
