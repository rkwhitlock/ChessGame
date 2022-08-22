class ChessPiece {
  link;
  position;
  name;
  captured = false;
  color;
  chessPiece = document.createElement('img');
  squares = new Array(8);
  board;
  checkSquare;
  overlay = document.createElement('div');

  constructor() {
    for (let i = 0; i < this.squares.length; i++) {
      this.squares[i] = new Array(8);
    }
    if (this.color === 'Black') {
      this.forwardDirection = '-';
    } else {
      this.forwardDirection = '+';
    }
    this.overlay.style.display = 'none';
  }

  capture = () => {
    this.captured = true;
    this.position = null;
  };

  display = () => {
    this.overlay.className = 'overlay';
    this.overlay.id = 'Overlay ' + this.name;
    this.chessPiece.src = this.link;
    this.chessPiece.className = 'piece';
    if (this.board.playerTurn === this.color && !this.captured) {
      this.chessPiece.onclick = this.onClick;
    } else {
      this.chessPiece.onclick = null;
    }
    const chessPiece = this.chessPiece;
    const overlay = this.overlay;
    return {
      chessPiece,
      overlay,
    };
  };

  onClick = () => {
    const allOverlay = document.querySelectorAll('.overlay');
    allOverlay.forEach((overlay) => {
      overlay.style.display = 'none';
    });

    this.board.selectedPiece = this;

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
    this.overlay.style.display = 'block';
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
