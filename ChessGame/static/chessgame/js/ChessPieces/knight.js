class Knight extends ChessPiece {
  constructor(position, link, color, board) {
    super();
    super.link = link;
    super.color = color;
    super.name = color + ' Knight';
    super.position = position;
    super.board = board;
    super.checkSquare = this.checkSquare;
  }

  checkAvailableSquares = () => {
    this.availableSquares = new Array(0);
    try {
      if (
        !this.board.grid[this.position[0] + 1][this.position[1] + 2].hasPiece ||
        this.board.grid[this.position[0] + 1][this.position[1] + 2].chessPiece
          .color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.position[0] + 1, this.position[1] + 2)
        );
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] + 1][this.position[1] - 2].hasPiece ||
        this.board.grid[this.position[0] + 1][this.position[1] - 2].chessPiece
          .color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.position[0] + 1, this.position[1] - 2)
        );
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] - 1][this.position[1] + 2].hasPiece ||
        this.board.grid[this.position[0] - 1][this.position[1] + 2].chessPiece
          .color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.position[0] - 1, this.position[1] + 2)
        );
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] - 1][this.position[1] - 2].hasPiece ||
        this.board.grid[this.position[0] - 1][this.position[1] - 2].chessPiece
          .color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.position[0] - 1, this.position[1] - 2)
        );
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] + 2][this.position[1] + 1].hasPiece ||
        this.board.grid[this.position[0] + 2][this.position[1] + 1].chessPiece
          .color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.position[0] + 2, this.position[1] + 1)
        );
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] + 2][this.position[1] - 1].hasPiece ||
        this.board.grid[this.position[0] + 2][this.position[1] - 1].chessPiece
          .color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.position[0] + 2, this.position[1] - 1)
        );
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] - 2][this.position[1] + 1].hasPiece ||
        this.board.grid[this.position[0] - 2][this.position[1] + 1].chessPiece
          .color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.position[0] - 2, this.position[1] + 1)
        );
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] - 2][this.position[1] - 1].hasPiece ||
        this.board.grid[this.position[0] - 2][this.position[1] - 1].chessPiece
          .color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.position[0] - 2, this.position[1] - 1)
        );
      }
    } catch (TypeError) {}
  };
}
