//  Job Application Tracker 


//  job section 

let jobs = [
  { id: "1", status: "all" },
  { id: "2", status: "all" },
  { id: "3", status: "all" },
  { id: "4", status: "all" },
  { id: "5", status: "all" },
  { id: "6", status: "all" },
  { id: "7", status: "all" },
  { id: "8", status: "all" }
];

let currentTab = "all";



//  DOM ELEMENTS
 
let total = document.getElementById("total");
let interviewCount = document.getElementById("Interview");
let rejectedCount = document.getElementById("Rejected");

let allCardSection = document.getElementById("all-cards");
let emptyState = document.getElementById("empty-state");

// 🔥 NEW ADD (1/8 COUNTER)
let jobCount = document.getElementById("job-count");
let totalCount = document.getElementById("total-count");

const allBtn = document.getElementById("fastBtn");
const interviewBtn = document.getElementById("secountBtn");
const rejectedBtn = document.getElementById("thardBtn");



//  COUNT FUNCTION

function calculateCount() {
  total.innerText = jobs.length;
  interviewCount.innerText = jobs.filter(j => j.status === "interview").length;
  rejectedCount.innerText = jobs.filter(j => j.status === "rejected").length;
}



//  TAB STYLE FUNCTION

function toggleStyle(activeId) {

  const buttons = [allBtn, interviewBtn, rejectedBtn];

  buttons.forEach(btn => {
    btn.classList.remove("btn-info");
    btn.classList.add("btn-outline");
  });

  const selected = document.getElementById(activeId);
  selected.classList.remove("btn-outline");
  selected.classList.add("btn-info");
}



//  RENDER FUNCTION

function renderCards() {

  const cards = document.querySelectorAll(".job-card");
  let visibleCount = 0;

  cards.forEach(card => {

    const id = card.dataset.id;
    const job = jobs.find(j => j.id === id);
    const statusElement = card.querySelector(".not-AppliedBtn");

    if (!job) return;

    // STATUS UPDATE
    if (job.status === "interview") {
      statusElement.innerText = "Interview";
      statusElement.className = "btn btn-success btn-sm w-[113px] not-AppliedBtn";
    }

    else if (job.status === "rejected") {
      statusElement.innerText = "Rejected";
      statusElement.className = "btn btn-error btn-sm w-[113px] not-AppliedBtn";
    }

    else {
      statusElement.innerText = "Not Applied";
      statusElement.className = "btn btn-info btn-sm w-[113px] not-AppliedBtn";
    }

    // FILTER SYSTEM
    if (currentTab === "all") {
      card.style.display = "block";
      visibleCount++;
    }

    else if (currentTab === "interview") {
      if (job.status === "interview") {
        card.style.display = "block";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    }

    else if (currentTab === "rejected") {
      if (job.status === "rejected") {
        card.style.display = "block";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    }

  });

  // 🔥 NEW ADD (1/8 SYSTEM HERE)
  if (jobCount && totalCount) {
    jobCount.innerText = visibleCount;
    totalCount.innerText = jobs.length;
  }

  // EMPTY STATE
  if (visibleCount === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  calculateCount();
}



//  TAB EVENTS

allBtn.addEventListener("click", function () {
  currentTab = "all";
  toggleStyle("fastBtn");
  renderCards();
});

interviewBtn.addEventListener("click", function () {
  currentTab = "interview";
  toggleStyle("secountBtn");
  renderCards();
});

rejectedBtn.addEventListener("click", function () {
  currentTab = "rejected";
  toggleStyle("thardBtn");
  renderCards();
});



// EVENT DELEGATION

allCardSection.addEventListener("click", function (event) {

  const button = event.target.closest("button");
  if (!button) return;

  const card = button.closest(".job-card");
  if (!card) return;

  const id = card.dataset.id;
  const job = jobs.find(j => j.id === id);

  if (!job) return;

  // Interview Toggle
  if (button.classList.contains("interview-btn")) {
    job.status = job.status === "interview" ? "all" : "interview";
    renderCards();
  }

  // Rejected Toggle
  if (button.classList.contains("rejected-btn")) {
    job.status = job.status === "rejected" ? "all" : "rejected";
    renderCards();
  }

  // Delete
  if (button.classList.contains("delete-btn")) {
    card.remove();
    jobs = jobs.filter(j => j.id !== id);
    renderCards();
  }

});



renderCards();