class Bishop extends ChessPiece {
  constructor(position, link, color, board) {
    super();
    super.link = link;
    super.color = color;
    super.name = color + ' Bishop';
    super.position = position;
    super.board = board;
  }

  checkAvailableSquares = () => {
    this.availableSquares = new Array(0);
    let rowPosition = this.position[0] + 1;
    let columnPosition = this.position[1] + 1;
    while (rowPosition < 8 && columnPosition < 8) {
      if (!this.board.grid[rowPosition][columnPosition].hasPiece) {
        this.availableSquares.push(new Array(rowPosition, columnPosition));
      } else if (
        this.board.grid[rowPosition][columnPosition].chessPiece.color !==
        this.color
      ) {
        this.availableSquares.push(new Array(rowPosition, columnPosition));
        break;
      } else {
        break;
      }
      rowPosition += 1;
      columnPosition += 1;
    }
    rowPosition = this.position[0] - 1;
    columnPosition = this.position[1] + 1;
    while (rowPosition > -1 && columnPosition < 8) {
      if (!this.board.grid[rowPosition][columnPosition].hasPiece) {
        this.availableSquares.push(new Array(rowPosition, columnPosition));
      } else if (
        this.board.grid[rowPosition][columnPosition].chessPiece.color !==
        this.color
      ) {
        this.availableSquares.push(new Array(rowPosition, columnPosition));
        break;
      } else {
        break;
      }
      rowPosition -= 1;
      columnPosition += 1;
    }
    rowPosition = this.position[0] + 1;
    columnPosition = this.position[1] - 1;
    while (rowPosition < 8 && columnPosition > -1) {
      if (!this.board.grid[rowPosition][columnPosition].hasPiece) {
        this.availableSquares.push(new Array(rowPosition, columnPosition));
      } else if (
        this.board.grid[rowPosition][columnPosition].chessPiece.color !==
        this.color
      ) {
        this.availableSquares.push(new Array(rowPosition, columnPosition));
        break;
      } else {
        break;
      }
      rowPosition += 1;
      columnPosition -= 1;
    }
    rowPosition = this.position[0] - 1;
    columnPosition = this.position[1] - 1;
    while (rowPosition > -1 && columnPosition > -1) {
      if (!this.board.grid[rowPosition][columnPosition].hasPiece) {
        this.availableSquares.push(new Array(rowPosition, columnPosition));
      } else if (
        this.board.grid[rowPosition][columnPosition].chessPiece.color !==
        this.color
      ) {
        this.availableSquares.push(new Array(rowPosition, columnPosition));
        break;
      } else {
        break;
      }
      rowPosition -= 1;
      columnPosition -= 1;
    }
  };
}
