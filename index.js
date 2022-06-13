const container = document.querySelector(".container");
const span = document.querySelector("h2 span");

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
  let selectBoxes = document.querySelectorAll(".marked");
  selectBoxes.forEach(selectBox => {
    if(selectBox.length > 2){
      boxes.classList.remove("marked");
    }
  });



  
});





}



