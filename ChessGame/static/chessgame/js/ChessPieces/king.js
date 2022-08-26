class King extends ChessPiece {
  notMoved = true;
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
    this.availableSquares = new Array(0);
    try {
      if (
        !this.board.grid[this.position[0] + 1][this.position[1]].hasPiece ||
        this.board.grid[this.position[0] + 1][this.position[1]].chessPiece
          .color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.position[0] + 1, this.position[1])
        );
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] + 1][this.position[1] - 1].hasPiece ||
        this.board.grid[this.position[0] + 1][this.position[1] - 1].chessPiece
          .color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.position[0] + 1, this.position[1] - 1)
        );
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] + 1][this.position[1] + 1].hasPiece ||
        this.board.grid[this.position[0] + 1][this.position[1] + 1].chessPiece
          .color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.position[0] + 1, this.position[1] + 1)
        );
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0]][this.position[1] - 1].hasPiece ||
        this.board.grid[this.position[0]][this.position[1] - 1].chessPiece
          .color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.position[0], this.position[1] - 1)
        );
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0]][this.position[1] + 1].hasPiece ||
        this.board.grid[this.position[0]][this.position[1] + 1].chessPiece
          .color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.position[0], this.position[1] + 1)
        );
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] - 1][this.position[1] - 1].hasPiece ||
        this.board.grid[this.position[0] - 1][this.position[1] - 1].chessPiece
          .color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.position[0] - 1, this.position[1] - 1)
        );
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] - 1][this.position[1]].hasPiece ||
        this.board.grid[this.position[0] - 1][this.position[1]].chessPiece
          .color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.position[0] - 1, this.position[1])
        );
      }
    } catch (TypeError) {}
    try {
      if (
        !this.board.grid[this.position[0] - 1][this.position[1] + 1].hasPiece ||
        this.board.grid[this.position[0] - 1][this.position[1] + 1].chessPiece
          .color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.position[0] - 1, this.position[1] + 1)
        );
      }
    } catch (TypeError) {}

    if (this.color === 'Black') {
      if (
        this.board.grid[7][0].hasPiece &&
        !this.board.grid[7][1].hasPiece &&
        !this.board.grid[7][2].hasPiece &&
        this.notMoved
      ) {
        if (
          this.board.grid[7][0].chessPiece.name.includes('Rook') &&
          this.board.grid[7][0].chessPiece.notMoved
        ) {
          this.availableSquares.push(new Array(7, 1));
        }
      }
    } else {
      if (
        this.board.grid[0][0].hasPiece &&
        !this.board.grid[0][1].hasPiece &&
        !this.board.grid[0][2].hasPiece &&
        this.notMoved
      ) {
        if (
          this.board.grid[0][0].chessPiece.name.includes('Rook') &&
          this.board.grid[0][0].chessPiece.notMoved
        ) {
          this.availableSquares.push(new Array(0, 1));
        }
      }
    }
  };
}
