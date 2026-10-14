// WDD 131 - W06 Project
// The level picker on the home page.

const levelAdvice = {
  beginner: {
    title: "You are starting again.",
    text: "We go slowly and you speak from the first class, even if it is only three words."
  },
  intermediate: {
    title: "You understand more than you say.",
    text: "The class is mostly you talking, and I write down every mistake so we can fix it."
  },
  advanced: {
    title: "You already speak.",
    text: "Now we work on the details: the sounds, the speed, and the words that make you sound natural."
  }
};

const levelButtons = document.querySelectorAll(".level-button");
const adviceBox = document.getElementById("levelAdvice");

function showAdvice(level) {
  const chosen = levelAdvice[level];

  if (!chosen) {
    adviceBox.textContent = `Pick the one that sounds like you and I will tell you where to start.`;
    return;
  }

  const firstClass = courses.find((course) => course.level === level);
  adviceBox.innerHTML = `<strong>${chosen.title}</strong> ${chosen.text} Start with <a href="courses.html">${firstClass.name}</a>, ${firstClass.days} at ${firstClass.time}, ${firstClass.minutes} minutes.`;
}

function markChosenButton(level) {
  levelButtons.forEach((button) => {
    if (button.dataset.level === level) {
      button.classList.add("chosen");
      button.setAttribute("aria-pressed", "true");
    } else {
      button.classList.remove("chosen");
      button.setAttribute("aria-pressed", "false");
    }
  });
}

function chooseLevel(level) {
  localStorage.setItem(levelKey, level);
  markChosenButton(level);
  showAdvice(level);
}

levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chooseLevel(button.dataset.level);
  });
});

const savedLevel = localStorage.getItem(levelKey);

if (savedLevel) {
  markChosenButton(savedLevel);
  showAdvice(savedLevel);
} else {
  showAdvice("");
}
