
let InterviewList=[];

let RejectedList=[];





let total = document.getElementById("total");

let Interview = document.getElementById("Interview");

let Rejected = document.getElementById("Rejected");

const allCardSection = document.getElementById("all-cards");




function calculetCount() {
  total.innerText = allCardSection.children.length;

  Interview.innerText=InterviewList.length;

  Rejected.innerText=InterviewList.length;
}
calculetCount();



// trogoling section ....

const fastFilterBtn=document.getElementById("fastBtn");
const secountFilterBtn=document.getElementById("secountBtn")
const thardBtnFilterBtn=document.getElementById("thardBtn")


function togglestyle(id){

fastFilterBtn.classList.remove("btn-info")

secountFilterBtn.classList.remove("btn-info")

thardBtnFilterBtn.classList.remove("btn-info")
fastFilterBtn.classList.add("btn-outline")

secountFilterBtn.classList.add("btn-outline")

thardBtnFilterBtn.classList.add("btn-outline")





   
    const slected = document.getElementById(id)
   
slected.classList.add("btn-info")









}