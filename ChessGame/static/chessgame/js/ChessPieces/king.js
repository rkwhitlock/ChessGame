class King extends ChessPiece {
  constructor(position, link, color, board) {
    super();
    super.link = link;
    super.color = color;
    super.name = color + ' King';
    super.position = position;
    super.board = board;
    super.checkSquare = this.checkSquare;
  }

  checkAvailableSquares = () => {
    try {
      if (
        !this.board.grid[this.position[0] + 1][this.position[1]].hasPiece ||
        this.board.grid[this.position[0] + 1][this.position[1]].chessPiece
          .color !== this.color
      ) {
        this.squares[this.position[0] + 1][this.position[1]] = true;
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] + 1][this.position[1] - 1].hasPiece ||
        this.board.grid[this.position[0] + 1][this.position[1] - 1].chessPiece
          .color !== this.color
      ) {
        this.squares[this.position[0] + 1][this.position[1] - 1] = true;
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] + 1][this.position[1] + 1].hasPiece ||
        this.board.grid[this.position[0] + 1][this.position[1] + 1].chessPiece
          .color !== this.color
      ) {
        this.squares[this.position[0] + 1][this.position[1] + 1] = true;
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0]][this.position[1] - 1].hasPiece ||
        this.board.grid[this.position[0]][this.position[1] - 1].chessPiece
          .color !== this.color
      ) {
        this.squares[this.position[0]][this.position[1] - 1] = true;
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0]][this.position[1] + 1].hasPiece ||
        this.board.grid[this.position[0]][this.position[1] + 1].chessPiece
          .color !== this.color
      ) {
        this.squares[this.position[0]][this.position[1] + 1] = true;
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] - 1][this.position[1] - 1].hasPiece ||
        this.board.grid[this.position[0] - 1][this.position[1] - 1].chessPiece
          .color !== this.color
      ) {
        this.squares[this.position[0] - 1][this.position[1] - 1] = true;
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] - 1][this.position[1]].hasPiece ||
        this.board.grid[this.position[0] - 1][this.position[1]].chessPiece
          .color !== this.color
      ) {
        this.squares[this.position[0] - 1][this.position[1]] = true;
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] - 1][this.position[1] + 1].hasPiece ||
        this.board.grid[this.position[0] - 1][this.position[1] + 1].chessPiece
          .color !== this.color
      ) {
        this.squares[this.position[0] - 1][this.position[1] + 1] = true;
      }
    } catch (TypeError) {}
  };
}
