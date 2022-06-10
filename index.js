const container = document.querySelector(".container");
const span = document.querySelector("h2 span");
let markedId = -1;
//to create 10 div
function divs(){
    for(let i = 0; i< 10; i++){
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
           //mark it
           if(markedId === -1){
                markedId = e.target.id;
                firstClickBox.classList.add("marked");
           }
            
        
})
     
    }
}
divs();

  