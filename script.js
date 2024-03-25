let defaultGridSize = 16;
let gridSize = defaultGridSize * defaultGridSize;
let defaultFlexItem = (100 / defaultGridSize) + "%";

console.log(typeof flexItem);

let gameBoard = document.querySelector("#gameBoard");

//creating div's
function createDiv(){
    let div = document.createElement("div");
    div.style.border = "1px solid red";
    div.style.width = "100vw";
    div.style.flex = defaultFlexItem; //bepaald percentage van een div
    gameBoard.appendChild(div);
}

for(let i = 0; i < gridSize; i++){
    createDiv();
}

