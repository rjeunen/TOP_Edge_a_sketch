let defaultGridSize = 16;
let gridSize = defaultGridSize * defaultGridSize;
let defaultFlexItem = (100 / defaultGridSize) + "%";

const gridItem = document.querySelectorAll("div.gridItem");
const gameBoard = document.querySelector("#gameBoard");
const eraseButton = document.querySelector("#eraseButton");
const colorButton = document.querySelector("#colorButton");
const gridReset = document.querySelector("#gridReset");
const newGridSize = document.querySelector("#newGridSize");

//creating div's
function createDiv(){
    let div = document.createElement("div");
    //div.style.border = "1px solid red"; // testing purposes
    div.style.flex = defaultFlexItem; //bepaald percentage van een div
    gameBoard.appendChild(div);
}

function deleteGrid(){
    while (gameBoard.firstChild){
        gameBoard.removeChild(gameBoard.firstChild);
    }
}

function createGrid(){
    for(let i = 0; i < gridSize; i++){
        createDiv();
    }
}

gameBoard.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "blue";
});

eraseButton.addEventListener("click", () => {
    gameBoard.addEventListener("mouseover", (event) =>{
        event.target.style.backgroundColor = "";
    })
})

colorButton.addEventListener("click", () => {
    gameBoard.addEventListener("mouseover", (event) =>{
        event.target.style.backgroundColor = "blue";
    })
})

gridReset.addEventListener("click", () => {
    deleteGrid();
    createGrid();
})

newGridSize.addEventListener("click", () => {
    let userInput = prompt("Please enter a number for the desired grid size:");

    if(userInput < 0 || userInput > 100){
        userInput = prompt("You did not enter a valid number, please enter a number between 0 and 100");
    }

    gridSize = userInput * userInput;
    defaultFlexItem = (100 / userInput) + "%";
    deleteGrid();
    createGrid();
})

createGrid();

/**
 * randomize RGB colors when hovering
 * a darkening effect - every div is 10% darker then the one before.
 * More CSS
 */