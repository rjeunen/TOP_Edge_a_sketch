let defaultGridSize = 16;
let gridSize = defaultGridSize * defaultGridSize;
let defaultFlexItem = (100 / defaultGridSize) + "%";

let gridItem = document.querySelectorAll("gridItem");
let gameBoard = document.querySelector("#gameBoard");
let eraseButton = document.querySelector("#eraseButton");
let colorButton = document.querySelector("#colorButton");

//creating div's
function createDiv(){
    let div = document.createElement("div");
    div.style.border = "1px solid red";
    div.className = "gridItem";
    div.style.width = "100vw";
    div.style.flex = defaultFlexItem; //bepaald percentage van een div
    gameBoard.appendChild(div);
}

for(let i = 0; i < gridSize; i++){
    createDiv();
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