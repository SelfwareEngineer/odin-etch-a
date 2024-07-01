const content = document.querySelector("#content");

createGrid(16);

function createGrid(gridSize) {
  for (let i = 1; i <= gridSize; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("gridSquare");
    newDiv.id = `gridSquare${i}`;
    content.appendChild(newDiv);
  }
}
