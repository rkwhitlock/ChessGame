class Pawn extends ChessPiece {
  hasMoved = false;

  constructor(position, link, color, board) {
    super();
    this.link = link;
    this.color = color;
    this.name = color + ' Pawn';
    this.position = position;
    this.board = board;
    super.checkSquare = this.checkSquare;
    super.color = color;
  }

  checkAvailableSquares = () => {
    if (
      (this.color === 'Black' && this.position[0] === 6) ||
      (this.color === 'White' && this.position[0] === 1)
    ) {
      if (
        !this.board.grid[this.moveForward(this.position[0], 1)][
          this.position[1]
        ].hasPiece
      ) {
        this.squares[this.moveForward(this.position[0], 1)][
          this.position[1]
        ] = true;
        if (
          !this.board.grid[this.moveForward(this.position[0], 2)][
            this.position[1]
          ].hasPiece
        ) {
          this.squares[this.moveForward(this.position[0], 2)][
            this.position[1]
          ] = true;
        }
      }
    }
    try {
      if (
        !this.board.grid[this.moveForward(this.position[0], 1)][
          this.position[1]
        ].hasPiece
      ) {
        this.squares[this.moveForward(this.position[0], 1)][
          this.position[1]
        ] = true;
      }
    } catch (TypeError) {}
    try {
      if (
        this.board.grid[this.moveForward(this.position[0], 1)][
          this.position[1] + 1
        ].hasPiece &&
        this.board.grid[this.moveForward(this.position[0], 1)][
          this.position[1] + 1
        ].chessPiece.color !== this.color
      ) {
        this.squares[this.moveForward(this.position[0], 1)][
          this.position[1] + 1
        ] = true;
      }
    } catch (TypeError) {}
    try {
      if (
        this.board.grid[this.moveForward(this.position[0], 1)][
          this.position[1] - 1
        ].hasPiece &&
        this.board.grid[this.moveForward(this.position[0], 1)][
          this.position[1] - 1
        ].chessPiece.color !== this.color
      ) {
        this.squares[this.moveForward(this.position[0], 1)][
          this.position[1] - 1
        ] = true;
      }
    } catch (TypeError) {}
  };
}
