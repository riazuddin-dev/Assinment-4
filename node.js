
//  Job Application Tracker


//  Job Data

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

let total = document.getElementById("total");
let interviewCount = document.getElementById("Interview");
let rejectedCount = document.getElementById("Rejected");

let allCardSection = document.getElementById("all-cards");


// conunt funtion 

function calculateCount() {
  total.innerText = jobs.length;
  interviewCount.innerText = jobs.filter(j => j.status === "interview").length;
  rejectedCount.innerText = jobs.filter(j => j.status === "rejected").length;
}

calculateCount();


//  toggol system


const allBtn = document.getElementById("fastBtn");
const interviewBtn = document.getElementById("secountBtn");
const rejectedBtn = document.getElementById("thardBtn");

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

// render funtion 
function renderCards() {

  const cards = document.querySelectorAll(".job-card");

  cards.forEach(card => {

    const id = card.dataset.id;
    const job = jobs.find(j => j.id === id);

    if (currentTab === "all") {
      card.style.display = "block";
    }

    else if (currentTab === "interview") {
      card.style.display = job.status === "interview" ? "block" : "none";
    }

    else if (currentTab === "rejected") {
      card.style.display = job.status === "rejected" ? "block" : "none";
    }

  });

  calculateCount();
}

renderCards();

// Add Interview
allCardSection.addEventListener("click", function (event) {

  const button = event.target.closest("button");
  if (!button) return;

  const card = button.closest(".job-card");
  if (!card) return;

  const id = card.dataset.id;
  const job = jobs.find(j => j.id === id);

  if (button.classList.contains("interview-btn")) {
    job.status = job.status === "interview" ? "all" : "interview";
    renderCards();
  }

  if (button.classList.contains("rejected-btn")) {
    job.status = job.status === "rejected" ? "all" : "rejected";
    renderCards();
  }

});



// add status update

const statusElement = card.querySelector(".not-AppliedBtn");

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