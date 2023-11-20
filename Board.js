const Cell = require("./Cell.js");

class Board {
  constructor() {
    this.cells = Array.from({ length: 9 }, () => new Cell());
  }

  isEmpty(cellNumber) {
    return this.cells[cellNumber].isEmpty();
  }

  printBoard() {
    console.log("\nCurrent Board:");
    for (let i = 0; i < 3; i++) {
      const row = this.cells.slice(i * 3, i * 3 + 3).map(cell => cell.mark).join(" | ");
      console.log(" " + row);
      if (i !== 2) {
        console.log("-----------");
      }
    }
  }

  analyse() {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      const cells = this.cells;

      if (cells[a].mark === cells[b].mark && cells[b].mark === cells[c].mark && cells[a].mark !== ".") {
        return [cells[a].mark, "Win"];
      }
    }

    if (this.cells.every(cell => cell.mark !== ".")) {
      return ["", "Draw"];
    }

    return ["", ""];
  }
}

module.exports = Board;
