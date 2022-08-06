let numRows = 8;
let numColumns = 8;
const boardEl = document.getElementById("board");

renderRowsAndColumns(numRows, numColumns);

function renderRowsAndColumns(rows, columns) {
  for (let i = 0; i < rows; i++) {
    boardEl.append(renderSquare());
    for (let j = 0; j < columns; j++) {
      boardEl.append(renderSquare());
    }
  }
}

function renderSquare() {
  const squareEl = document.createElement("div");
  squareEl.classList.add("square");
  return squareEl;
}
