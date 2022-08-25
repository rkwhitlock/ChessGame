class ChessPiece {
  link;
  position;
  name;
  captured = false;
  color;
  chessPiece = document.createElement('img');
  board;
  overlay = document.createElement('div');
  check = false;
  availableSquares = new Array(0);

  constructor() {
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

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.board.grid[i][j].highlighted = false;
      }
    }

    if (
      (this.board.playerTurn === 'White' &&
        (!this.board.whiteInCheck || this.name === 'White King')) ||
      (this.board.playerTurn === 'Black' &&
        (!this.board.blackInCheck || this.name === 'Black King'))
    ) {
      this.checkAvailableSquares();
      this.removeCheckSquares();
      for (let i = 0; i < this.availableSquares.length; i++) {
        this.board.grid[this.availableSquares[i][0]][
          this.availableSquares[i][1]
        ].highlighted = true;
      }
    }
    this.overlay.style.display = 'block';
    this.board.update();
    this.availableSquares = new Array(0);
  };

  checkAvailableSquares = () => {};

  moveForward = (x, y) => {
    if (this.color === 'White') {
      return x + y;
    } else {
      return x - y;
    }
  };

  checkOpponentInCheck = () => {
    this.checkAvailableSquares();
    for (let i = 0; i < this.availableSquares.length; i++) {
      if (
        (this.availableSquares[i][0] == this.board.blackKingPos[0] &&
          this.availableSquares[i][1] == this.board.blackKingPos[1]) ||
        (this.availableSquares[i][0] == this.board.whiteKingPos[0] &&
          this.availableSquares[i][1] == this.board.whiteKingPos[1])
      ) {
        this.check = true;
        return;
      }
    }
    this.check = false;
  };

  preventCheck = (piece, newPosition, oldPosition) => {
    console.log(newPosition);
    console.log(newPosition[0]);
    console.log(newPosition[1]);
    console.log(this.board.grid[newPosition[0]][newPosition[1]]);
    const oldPiece = this.board.grid[newPosition[0]][newPosition[1]].hasPiece
      ? this.board.grid[newPosition[0]][newPosition[1]].chessPiece
      : null;
    this.board.grid[oldPosition[0]][oldPosition[1]].setChessPiece(null, false);
    this.board.grid[newPosition[0]][newPosition[1]].setChessPiece(piece, true);

    this.checkOpponentInCheck();

    this.board.grid[oldPosition[0]][oldPosition[1]].setChessPiece(piece, true);
    this.board.grid[newPosition[0]][newPosition[1]].setChessPiece(
      oldPiece,
      !!oldPiece
    );
    if (this.check) {
      this.checkOpponentInCheck();
      return false;
    } else {
      this.checkOpponentInCheck();
      return true;
    }
  };

  removeCheckSquares = () => {
    const squaresToKeep = new Array(0);
    for (let i = 0; i < this.availableSquares.length; i++) {
      squaresToKeep.push(this.availableSquares[i]);
      let remove = false;
      for (let j = 0; j < 8; j++) {
        for (let k = 0; k < 8; k++) {
          if (this.board.grid[j][k].hasPiece) {
            console.log('ava', this.availableSquares[i]);
            if (
              !this.board.grid[j][k].chessPiece.preventCheck(
                this,
                this.availableSquares[i],
                this.position
              )
            ) {
              remove = true;
            }
          }
        }
      }
      if (remove) {
        squaresToKeep.pop();
      }
    }
    console.log(squaresToKeep);
    this.availableSquares = squaresToKeep;
  };
}
