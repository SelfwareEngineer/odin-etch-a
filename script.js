const content = document.querySelector("#content");
const gridContainer = document.querySelector("#gridContainer");
let gridSize = 16;

createGrid(gridSize);

function createGrid(gridSize) {
  gridSize = gridSize ** 2;
  for (let i = 1; i <= gridSize; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridSquare.id = `gridSquare${i}`;
    gridSquare.style.width = `${100 / Math.sqrt(gridSize)}%`;
    gridSquare.style.height = gridSquare.style.width;
    gridContainer.appendChild(gridSquare);
  }
}

function getNewGridSize(prompt_msg = "Enter a new grid size (max 100)") {
  let newGridSize = Number(prompt(prompt_msg));

  if (isNaN(newGridSize)) {
    newGridSize = getNewGridSize("Please enter a number.");
  } else if (newGridSize > 100) {
    newGridSize = getNewGridSize("Please enter a number less than 100");
  }
  return newGridSize;
}

document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("gridSquare")) {
    e.target.style.backgroundColor = "black";
  }
});

document.addEventListener("click", (e) => {
  if (e.target.id === "changeGridSize") {
    const newGridSize = getNewGridSize();

    while (gridContainer.lastChild) {
      gridContainer.removeChild(gridContainer.lastChild);
    }

    createGrid(newGridSize);
  } else if (e.target.id === "clearGrid") {
    allGridSquares = document.querySelectorAll(".gridSquare");
    allGridSquares.forEach((i) => {
      i.style.backgroundColor = "#9dbbe9";
    });
  }
});
