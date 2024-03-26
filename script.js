let defaultGridSize = 16;
let gridSize = defaultGridSize * defaultGridSize;
let defaultFlexItem = (100 / defaultGridSize) + "%";

const gridItem = document.querySelectorAll("div.gridItem");
const gameBoard = document.querySelector("#gameBoard");
const eraseButton = document.querySelector("#eraseButton");
const colorButton = document.querySelector("#colorButton");
const gridReset = document.querySelector("#gridReset");

//creating div's
function createDiv(){
    let div = document.createElement("div");
    div.style.border = "1px solid red";
    div.className = "gridItem";
    div.style.width = "100vw";
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

createGrid();

/*
next steps:
add function behind new grid size button
    -- prompt -- userInput = new size.
    -- DELETE function -- done
        
    -- probably rework needed after this button.
        -- in mijn create zit defaultFlexItem an deze kijkt naar de 16
        -- kan ik die default aanpassen?
        -- zo dat de aangepaste versie ook in de create functie zit?
    -- how grids are being calculated = "default" in function
*/