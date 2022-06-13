const container = document.querySelector(".container");
const span = document.querySelector("h2 span");

// to create 10 divs and append random numbers to the respective boxes

let boxes = document.createElement("div");
let randomNumbers = Math.ceil(Math.random() * 10);
let text = document.createTextNode(randomNumbers);
boxes.appendChild(text);
container.appendChild(boxes);


