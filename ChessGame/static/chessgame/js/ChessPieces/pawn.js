class Pawn extends ChessPiece {
  hasMoved = false;

  constructor(position, link, color, board) {
    super();
    this.link = link;
    this.color = color;
    this.name = color + 'Pawn';
    this.position = position;
    super.board = board;
    super.checkSquare = this.checkSquare;
  }

  checkSquare = (square) => {
    const squarePosition = square.position;
    if (this.color === 'Black') {
      if (!this.hasMoved) {
        if (
          this.position[1] === squarePosition[1] &&
          !square.hasPiece &&
          this.position[0] - squarePosition[0] === 2
        ) {
          this.squares[squarePosition[0]][squarePosition[1]] = true;
          return;
        }
      }
      if (
        this.position[1] === squarePosition[1] &&
        !square.hasPiece &&
        this.position[0] - squarePosition[0] === 1
      ) {
        this.squares[squarePosition[0]][squarePosition[1]] = true;
      } else if (
        square.hasPiece &&
        this.position[0] - squarePosition[0] === 1 &&
        (squarePosition[1] - this.position[1] === 1 ||
          this.position[1] - squarePosition[1] === 1) &&
        square.chessPiece.color === !this.color
      ) {
        this.squares[squarePosition[0]][squarePosition[1]] = true;
      } else {
        this.squares[squarePosition[0]][squarePosition[1]] = false;
      }
    } else {
      if (!this.hasMoved) {
        if (
          this.position[1] === squarePosition[1] &&
          !square.hasPiece &&
          this.position[0] - squarePosition[0] === -2
        ) {
          this.squares[squarePosition[0]][squarePosition[1]] = true;
          return;
        }
      }
      if (
        this.position[1] === squarePosition[1] &&
        !square.hasPiece &&
        this.position[0] - squarePosition[0] === -1
      ) {
        this.squares[squarePosition[0]][squarePosition[1]] = true;
      } else if (
        square.hasPiece &&
        squarePosition[0] - this.position[0] === 1 &&
        (squarePosition[1] - this.position[1] === 1 ||
          this.position[1] - squarePosition[1] === 1) &&
        square.chessPiece.color === !this.color
      ) {
        this.squares[squarePosition[0]][squarePosition[1]] = true;
      } else {
        this.squares[squarePosition[0]][squarePosition[1]] = false;
      }
    }
  };

  markUnavailableSquare = (position) => {
    this.squares[position[0]][position[1]] = false;
  };
}
