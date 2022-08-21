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

  checkSquare = (square) => {
    const squarePosition = square.position;
    if (square.hasPiece) {
      if (square.chessPiece.color != this.color) {
        if (squarePosition[0] === this.position[0]) {
          this.squares[squarePosition[0]][squarePosition[1]] = true;
        } else if (squarePosition[1] === this.position[1]) {
          this.squares[squarePosition[0]][squarePosition[1]] = true;
        } else {
          this.squares[squarePosition[0]][squarePosition[1]] = false;
        }
      } else {
        this.squares[squarePosition[0]][squarePosition[1]] = false;
      }
    } else {
      if (squarePosition[0] === this.position[0]) {
        this.squares[squarePosition[0]][squarePosition[1]] = true;
      } else if (squarePosition[1] === this.position[1]) {
        this.squares[squarePosition[0]][squarePosition[1]] = true;
      } else {
        this.squares[squarePosition[0]][squarePosition[1]] = false;
      }
    }
  };
}
