class Pawn extends ChessPiece {
  notMoved = true;

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
    this.availableSquares = new Array(0);
    if (this.notMoved) {
      if (
        !this.board.grid[this.moveForward(this.position[0], 1)][
          this.position[1]
        ].hasPiece
      ) {
        this.availableSquares.push(
          new Array(this.moveForward(this.position[0], 1), this.position[1])
        );
        if (
          !this.board.grid[this.moveForward(this.position[0], 2)][
            this.position[1]
          ].hasPiece
        ) {
          this.availableSquares.push(
            new Array(this.moveForward(this.position[0], 2), this.position[1])
          );
        }
      }
    } else {
      try {
        if (
          !this.board.grid[this.moveForward(this.position[0], 1)][
            this.position[1]
          ].hasPiece
        ) {
          this.availableSquares.push(
            new Array(this.moveForward(this.position[0], 1), this.position[1])
          );
        }
      } catch (TypeError) {}
    }
    try {
      if (
        this.board.grid[this.moveForward(this.position[0], 1)][
          this.position[1] + 1
        ].hasPiece &&
        this.board.grid[this.moveForward(this.position[0], 1)][
          this.position[1] + 1
        ].chessPiece.color !== this.color
      ) {
        this.availableSquares.push(
          new Array(this.moveForward(this.position[0], 1), this.position[1] + 1)
        );
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
        this.availableSquares.push(
          new Array(this.moveForward(this.position[0], 1), this.position[1] - 1)
        );
      }
    } catch (TypeError) {}

    if (!!this.board.enPassantPiece) {
      if (
        this.board.enPassantPiece.position[0] === this.position[0] &&
        (this.board.enPassantPiece.position[1] - 1 === this.position[1] ||
          this.board.enPassantPiece.position[1] + 1 === this.position[1])
      ) {
        this.availableSquares.push(
          new Array(
            this.moveForward(this.board.enPassantPiece.position[0], 1),
            this.board.enPassantPiece.position[1]
          )
        );
      }
    }
  };
}
