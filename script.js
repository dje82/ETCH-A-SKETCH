//init defaut grid gamePad
const gamePad = document.getElementById("draw-area");
gamePad.style.width = "500px";
gamePad.style.height = "500px";

//init with a 16*16 grids
makeGrid(16);

// modif color on gamePad cells
gamePad.addEventListener("mouseover", changeColor)



//EVENTS LISTENERS :

//buttons listeners
const btnResetGrid = document.getElementById("reset-grid");
btnResetGrid.addEventListener("click", resetGrid);

const btnResetColor = document.getElementById("reset-color");
btnResetColor.addEventListener("click", resetToBlack);

//switch Listeners
const switchConfetti = document.getElementById("confetti-checkbox");
const switchGrey = document.getElementById("shadow-checkbox");



//functions
function makeGrid(rows) {
    //THANKS TO THE LAST STUDENT .....
    for (i = 0; i < (rows * rows); i++) {
        // Create a new div element
        const newDiv = document.createElement("div");

        // Add the new div element to the gridConainer element and give it a class
        gamePad.appendChild(newDiv).className = "grid-cell";
        gamePad.appendChild(newDiv).id = `cell-${i}`;
        //set opacity to 1 (used for )
        gamePad.appendChild(newDiv).style.opacity = 1;

        // Building the grid
        gamePad.style.gridTemplateRows = `repeat(${rows}, minmax(0, 1fr))`;
        gamePad.style.gridTemplateColumns = `repeat(${rows}, minmax(0, 1fr))`;

    }
}

function resetGrid() {
    //user prompt
    let value
    while (value = prompt("Please enter how many squares by side you want", 16)) {
        if (isNaN(value)) {
            alert('Please give us a number')
            console.log('if: ' + value)
        } else if (value > 150 || value <= 0) {
            alert('Please the number must be between 0 and 150')
        } else {
            //clean and call grid creation function
            gamePad.innerHTML = ''
            gamePad.style = ""
            gamePad.style.width = "500px"
            gamePad.style.height = "500px"
            makeGrid(value)

            //forced reset off switchs
            switchConfetti.checked = false
            switchGrey.checked = false

            return
        }
    }
}

function changeColor(e) {
    let color = selectColor()
    if (e.target.className == "container") {
        return
    }
    if (switchGrey.checked === true) {
        console.log(e.target.style.opacity)
        e.target.style.opacity = e.target.style.opacity - 0.2;
    }
    e.target.style.background = color;
    if (switchGrey.checked === false) {
        e.target.style.opacity = 1;
    }

}

function selectColor() {
    if (switchConfetti.checked === true) {
        return randomColor()
    } else {
        return colorPicker = document.querySelector("#color-picker").value
    }
}

function randomColor() {
    let color = '#'
    let charAllows = 'ABCDEF0123456789'

    for (let i = 0; i < 6; i++) {
        color += charAllows.charAt(Math.floor(Math.random() * 16));
    }
    return color
}

function decreaseOpacity(value) {
    console.log('function decrese opacity')
    let opacity = value;
    opacity = opacity - 0.2;
    return opacity
}

function resetToBlack() {
    return colorPicker = document.querySelector("#color-picker").value = "#000000"
}