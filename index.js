const container = document.querySelector(".container");
const span = document.querySelector("h2 span");

let mistakes = 0;
// to create 10 divs and append random numbers to the respective boxes
for(let i = 0; i < 10; i++){
  let boxes = document.createElement("div");
  let randomNumbers = Math.ceil(Math.random() * 10);
  let text = document.createTextNode(randomNumbers);
  boxes.appendChild(text);
  container.appendChild(boxes);

  // create id to each box
boxes.id = i;
//console.log(boxes);

// click a box
boxes.addEventListener("click", (e) => {
  //mark the clicked box with id
  let clickBox = document.getElementById(e.target.id);
  clickBox.classList.toggle("marked");

  // get the clicked boxes but only 2
       const allBoxes = document.querySelectorAll(".marked");
      allBoxes.forEach((box) => {
        if (allBoxes.length > 2) {
          box.classList.remove("marked");
        }
      });
      for (let i = 0; i < allBoxes.length; i++) {
        const box1 = allBoxes[0];
        const box2 = allBoxes[1];
        if (allBoxes.length > 1 && box1.innerText === box2.innerText) {
          box1.remove();
          box2.remove();
        }/* else if(box1.innerText !== box2.innerText){
          mistakes ++;
        }
          
         */  /*  need to Worker */
      }

});
console.log("The mistakes are : ", mistakes)
}

function scoreMistakes() {
  let score = document.querySelector("h2");
  console.log(score);
  score.textContent = `${mistakes}`;
  return score;
}
