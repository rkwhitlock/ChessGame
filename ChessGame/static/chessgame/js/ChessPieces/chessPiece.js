class ChessPiece {
  link = null;
  position;
  name;
  captured = false;
  color;
  chessPiece;
  squares = new Array(8);
  board;
  checkSquare;

  constructor() {
    for (let i = 0; i < this.squares.length; i++) {
      this.squares[i] = new Array(8);
    }
    if (this.color === 'Black') {
      this.forwardDirection = '-';
    } else {
      this.forwardDirection = '+';
    }
  }

  capture = () => {
    this.captured = true;
  };

  display = () => {
    this.chessPiece = document.createElement('img');
    this.chessPiece.src = this.link;
    this.chessPiece.className = 'piece';
    this.chessPiece.onclick = this.onClick;
    const chessPiece = this.chessPiece;
    return {
      chessPiece,
    };
  };

  onClick = () => {
    this.checkAvailableSquares();
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.squares[i][j]) {
          this.board.grid[i][j].highlighted = true;
        } else {
          this.board.grid[i][j].highlighted = false;
        }
      }
    }
    this.board.update();
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.squares[i][j] = false;
      }
    }
  };

  checkAvailableSquares = () => {};

  moveForward = (x, y) => {
    if (this.color === 'White') {
      return x + y;
    } else {
      return x - y;
    }
  };
}
