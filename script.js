/*
    Spec:
        - Defaut grid size x /x with color Black
        - Reset button 
        - Set grid Size button
        - Palette Color selec
        - Random color button

*/

//init defaut grid gamePad
const gamePad = document.getElementById("draw-area")
gamePad.style.width = "500px"
gamePad.style.height = "500px"

const cells = document.getElementsByClassName("grid-cell")


makeGrid(16)

//init color black


gamePad.addEventListener("mouseover", changeColor)





//functions

function makeGrid(rows) {
    //clear what should existe first
    
    
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

function changeColor(e){
    let color = selectColor()
    if(e.target.className == "container") () => { return }
    e.target.style.background = color
}

function resetGrid(){
    makeGrid(16)
}

function selectColor(){
    return colorPicker = document.querySelector("#color-picker").value
}

function resetToBlack() {
    return colorPicker = document.querySelector("#color-picker").value="#000000"
}
    