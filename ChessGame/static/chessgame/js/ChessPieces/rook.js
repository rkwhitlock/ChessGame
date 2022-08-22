class Rook extends ChessPiece {
  constructor(position, link, color, board) {
    super();
    super.link = link;
    super.color = color;
    super.name = color + ' Rook';
    super.position = position;
    super.board = board;
    super.checkSquare = this.checkSquare;
  }

  checkAvailableSquares = () => {
    let rowPosition = this.position[0] + 1;
    while (rowPosition < 8) {
      if (!this.board.grid[rowPosition][this.position[1]].hasPiece) {
        this.squares[rowPosition][this.position[1]] = true;
      } else if (
        this.board.grid[rowPosition][this.position[1]].chessPiece.color !==
        this.color
      ) {
        this.squares[rowPosition][this.position[1]] = true;
        break;
      } else {
        break;
      }
      rowPosition += 1;
    }
    rowPosition = this.position[0] - 1;
    while (rowPosition > -1) {
      if (!this.board.grid[rowPosition][this.position[1]].hasPiece) {
        this.squares[rowPosition][this.position[1]] = true;
      } else if (
        this.board.grid[rowPosition][this.position[1]].chessPiece.color !==
        this.color
      ) {
        this.squares[rowPosition][this.position[1]] = true;
        break;
      } else {
        break;
      }
      rowPosition -= 1;
    }
    let columnPosition = this.position[1] + 1;
    while (columnPosition < 8) {
      if (!this.board.grid[this.position[0]][columnPosition].hasPiece) {
        this.squares[this.position[0]][columnPosition] = true;
      } else if (
        this.board.grid[this.position[0]][columnPosition].chessPiece.color !==
        this.color
      ) {
        this.squares[this.position[0]][columnPosition] = true;
        break;
      } else {
        break;
      }
      columnPosition += 1;
    }
    columnPosition = this.position[1] - 1;
    while (columnPosition > -1) {
      if (!this.board.grid[this.position[0]][columnPosition].hasPiece) {
        this.squares[this.position[0]][columnPosition] = true;
      } else if (
        this.board.grid[this.position[0]][columnPosition].chessPiece.color !==
        this.color
      ) {
        this.squares[this.position[0]][columnPosition] = true;
        break;
      } else {
        break;
      }
      columnPosition -= 1;
    }
  };
}
