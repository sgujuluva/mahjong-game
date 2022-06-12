const container = document.querySelector(".container");
const span = document.querySelector("h2 span");
let markedId = -1;
let markedText = 0;
let mistakes = 0;
//to create 10 div
function divs() {
  for (let i = 0; i < 10; i++) {
    let box = document.createElement("div");
    // generate random numbers
    let randomNumber = Math.ceil(Math.random() * 10);
    let textBox = document.createTextNode(randomNumber);
    box.appendChild(textBox);
    container.appendChild(box);
    //to create id
    box.id = i;
    // click div
    box.addEventListener("click", (e) => {
     
// select the 1st box with id
let firstClickBox = document.getElementById(e.target.id);
let firstClickBoxText = firstClickBox.innerText;

// to select the first clicked box with the Id
if (markedId === -1) {
  firstClickBox.classList.add("marked");
  markedId = e.target.id;
 
  }else{ // if same box clicked again
    if(markedId === e.target.id){
      firstClickBox.classList.remove("marked");
      markedId = -1;
    }else{ // another box clicked
      if(firstClickBoxText === e.target.innerText){ // user clicked correct box
        removeBox(e.target.id,markedId)
      }
    }
  }
  
} ) 
  }
}
divs();
// remove the boxes which has same text
function removeBox(a, b) {
  let box1 = document.getElementById(a);
  let box2 = document.getElementById(b);
  box1.remove();
  box2.remove();
}
// update mistakes
function scoreMistakes(){
  let score = document.querySelector("h2");
  h2.innerText = "Remaining mistakes :" + mistakes;
}