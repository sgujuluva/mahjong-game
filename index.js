const container = document.querySelector(".container");
const span = document.querySelector("h2 span");

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
            console.log(e.target.innerText)   
            let innerTextBox =e.target.innerText; // get text of 1st clicked box
            if(innerTextBox === e.target.innerText){
                box.remove();
            }
            
        
})
     
    }
}
divs();

  