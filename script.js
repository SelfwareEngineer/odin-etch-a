const content = document.querySelector("#content");

createGrid(16);

function createGrid(gridSize) {
  for (let i = 1; i <= gridSize; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridSquare.id = `gridSquare${i}`;
    gridSquare.style.width = `${100 / Math.sqrt(gridSize)}%`;
    gridSquare.style.height = gridSquare.style.width;
    content.appendChild(gridSquare);
  }
}
