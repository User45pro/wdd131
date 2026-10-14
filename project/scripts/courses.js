// WDD 131 - W06 Project
// Builds the class cards and filters them by level.

const filterKey = "cve-filter";
const courseList = document.getElementById("courseList");
const resultCount = document.getElementById("resultCount");
const filterButtons = document.querySelectorAll(".filter-button");

function buildTopics(topics) {
  return topics.map((topic) => `<li>${topic}</li>`).join("");
}

function buildCourseCard(course) {
  return `<li class="course">
    <img src="${course.badge}" alt="Badge for the ${course.level} level" width="72" height="72" loading="lazy">
    <h3>${course.name}</h3>
    <p class="level-tag">${course.level}</p>
    <dl class="course-facts">
      <dt>Days</dt>
      <dd>${course.days}</dd>
      <dt>Time</dt>
      <dd>${course.time}</dd>
      <dt>Length</dt>
      <dd>${course.minutes} minutes</dd>
      <dt>Class size</dt>
      <dd>${course.group}</dd>
    </dl>
    <p>${course.summary}</p>
    <ul class="topics">${buildTopics(course.topics)}</ul>
  </li>`;
}

function pickCourses(level) {
  if (level === "all") {
    return courses;
  }

  return courses.filter((course) => course.level === level);
}

function showCourses(level) {
  const chosen = pickCourses(level);

  if (chosen.length === 0) {
    courseList.innerHTML = `<li class="course">
      <h3>No class at that level this term</h3>
      <p>Ask for a free first class and we will open one when there are three students.</p>
    </li>`;
  } else {
    courseList.innerHTML = chosen.map(buildCourseCard).join("");
  }

  resultCount.textContent = `Showing ${chosen.length} of ${courses.length} classes.`;
}

function markChosenFilter(level) {
  filterButtons.forEach((button) => {
    if (button.dataset.level === level) {
      button.classList.add("chosen");
      button.setAttribute("aria-pressed", "true");
    } else {
      button.classList.remove("chosen");
      button.setAttribute("aria-pressed", "false");
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const level = button.dataset.level;
    localStorage.setItem(filterKey, level);
    markChosenFilter(level);
    showCourses(level);
  });
});

const savedFilter = localStorage.getItem(filterKey) || "all";
markChosenFilter(savedFilter);
showCourses(savedFilter);
