//init defaut grid gamePad
const gamePad = document.getElementById("draw-area");
gamePad.style.width = "500px";
gamePad.style.height = "500px";

//init with a 16*16 grids
makeGrid(16);

const cells = document.getElementsByClassName("grid-cell");

//EVENTS LISTENERS :
    
    //buttons listeners
    const btnResetGrid = document.getElementById("reset-grid");
    btnResetGrid.addEventListener("click", resetGrid);

    const btnResetColor = document.getElementById("reset-color");
    btnResetColor.addEventListener("click", resetToBlack);

    //switch Listeners
    const switchConfetti = document.getElementById("confetti-checkbox");
    const switchGrey = document.getElementById("grey-checkbox");
    
    //Managed switch between us
    // switchConfetti.addEventListener("click", switchManaged);
    // switchGrey.addEventListener("click", switchManaged);
    
    /// reste la gestion des switchs (un seul actif à la fois)
    // gestion de la color greyToBlack
   
   

// modif color on gamePad cells
gamePad.addEventListener("mouseover", changeColor)


//functions
function makeGrid(rows) {
    //THANKS TO THE LAST STUDENT .....
    for (i = 0; i < (rows * rows); i++) {
        // Create a new div element
        const newDiv = document.createElement("div");

        // Add the new div element to the gridConainer element and give it a class
        gamePad.appendChild(newDiv).className = "grid-cell";
        gamePad.appendChild(newDiv).id = `cell-${i}`;
        
        // Building the grid
        gamePad.style.gridTemplateRows = `repeat(${rows}, minmax(0, 1fr))`;
        gamePad.style.gridTemplateColumns = `repeat(${rows}, minmax(0, 1fr))`;
    }
}

function resetGrid(){   
    //user prompt
    let value 
    while (value = prompt("Please enter how many squares by side you want", 16)){
        if (isNaN(value)) {
            alert('Please give us a number')
            console.log('if: '+value)
        } else if (value > 150 || value <= 0) {
            alert('Please the number must be between 0 and 150')
        } else {
             //clean and call grid creation function
             gamePad.innerHTML =''
             gamePad.style=""
             gamePad.style.width = "500px"
             gamePad.style.height = "500px"
             makeGrid(value)
             
             //forced reset off switchs
             switchConfetti.checked=false
             switchGrey.checked=false

             return
        }
    }
}


function changeColor(e){
    let color = selectColor()
    if(e.target.className == "container") {
        return
    }
        e.target.style.background = color
}

function selectColor(){
    if(switchConfetti.checked === true) {
        return randomColor()
    } else if(switchGrey.checked === true){
        return greyToBlack()   
    } else {
        return colorPicker = document.querySelector("#color-picker").value
    }   
}

function randomColor(){
    let color = '#'
    let charAllows = 'ABCDEF0123456789'

    for (let i = 0; i < 6; i++) {
        color += charAllows.charAt(Math.floor(Math.random() * 16));
    }
    return color
}

function greyToBlack(){
    alert('coucou c grey !')
}

function resetToBlack() {
    return colorPicker = document.querySelector("#color-picker").value="#000000"
}