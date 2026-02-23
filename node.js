
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
   
    


}