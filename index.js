const GRID_MEASURE = 512; 

let eraseMod = false;

const grid = document.querySelector(".grid");
const colorPicker = document.querySelector("#color-picker")
const gridSizeSlider = document.querySelector("#size-slider")
const eraserToggle = document.querySelector("#eraser-toggle")
const clearButton = document.querySelector("#clear-button")
const rainbowToggle = document.querySelector("#rainbow-mode-toggle")

colorPicker.addEventListener("change", (e) => color = e.target.value)
gridSizeSlider.addEventListener("change",  createGrid)
eraserToggle.addEventListener("click", () => {eraseMod = !eraseMod; eraserToggle.classList.toggle("option-items-active")} )
clearButton.addEventListener("click", createGrid)


color = colorPicker.value;
createGrid()

function createGrid() {
  const gridSize = gridSizeSlider.value;
  const oldCells = document.querySelectorAll(".cell");
  oldCells.forEach((e) => {
    e.remove()
  })
  for (let i = 0; i < gridSize**2; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", handleCell);
    cell.addEventListener("mousedown", handleCell);
    cell.style.cssText = `width: ${GRID_MEASURE / gridSize}px; height: ${GRID_MEASURE / gridSize}px;`;
    grid.appendChild(cell)
  }
}

function handleCell(e) {
  
  
    if (e.buttons == 1 || e.buttons == 3) {
      if (!eraseMod) {
        e.currentTarget.style.backgroundColor = color;
        return
      }
      e.currentTarget.style.backgroundColor = "#DBDBDB"
    } 
  } 




