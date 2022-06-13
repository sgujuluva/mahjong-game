const container = document.querySelector(".container");
const span = document.querySelector("h2 span");
let markedText = 0;
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
      let clickBox = document.getElementById(e.target.id);
      clickBox.classList.toggle("marked");
      //allboxes
      let allBoxes = document.querySelectorAll(".marked");
      allBoxes.forEach((box,index) => {
        if(allBoxes.length > 2){
          box.classList.remove("marked");
        }
      });

      // for loop to remove boxes
      for(let i = 0; i < allBoxes.length; i++){
        let box1 = allBoxes[0];
        let box2 = allBoxes[1];
        if(allBoxes.length > 1 && box1.innerText === box2.innerText){
          box1.remove();
          box2.remove();
        }
      }

    });
  }
}
divs();

// update mistakes
function scoreMistakes() {
  let score = document.querySelector("h2");
  console.log(score);
  score.textContent = `${mistakes}`;
}
