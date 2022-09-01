class ChessPiece {
  link;
  position;
  name;
  color;
  chessPiece = document.createElement('img');
  board;
  overlay = document.createElement('div');
  check = false;
  availableSquares = new Array(0);
  indexInCapture;
  pieceContainer = document.createElement('div');

  constructor() {
    this.overlay.style.display = 'none';
    this.pieceContainer.className = 'pieceContainer';
    this.pieceContainer.append(this.overlay);
    this.pieceContainer.append(this.chessPiece);
  }

  capture = () => {
    this.position = null;
    if (this.color === 'White') {
      this.board.blackCaptured.push(this);
      this.indexInCapture = this.board.blackCaptured.length - 1;
      this.board.blackCapturedContainer.append(this.chessPiece);
    } else {
      this.board.whiteCaptured.push(this);
      this.indexInCapture = this.board.whiteCaptured.length - 1;
      this.board.whiteCapturedContainer.append(this.chessPiece);
    }
  };

  display = () => {
    this.overlay.className = 'overlay';
    this.overlay.id = 'Overlay ' + this.name;
    this.chessPiece.src = this.link;
    this.chessPiece.className = 'piece';
    if (
      this.board.playerTurn === this.color &&
      !this.captured &&
      !this.board.pawnReplacement
    ) {
      this.pieceContainer.onclick = this.onClick;
    } else {
      this.pieceContainer.onclick = null;
    }
    const pieceContainer = this.pieceContainer;
    return {
      pieceContainer,
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

    this.checkAvailableSquares();
    this.removeCheckSquares();
    for (let i = 0; i < this.availableSquares.length; i++) {
      this.board.grid[this.availableSquares[i][0]][
        this.availableSquares[i][1]
      ].highlighted = true;
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
    const oldPiece = this.board.grid[newPosition[0]][newPosition[1]].hasPiece
      ? this.board.grid[newPosition[0]][newPosition[1]].chessPiece
      : null;
    this.board.grid[oldPosition[0]][oldPosition[1]].setChessPiece(null, false);
    this.board.grid[newPosition[0]][newPosition[1]].setChessPiece(piece, true);

    if (piece.name === 'Black King') {
      this.board.blackKingPos = newPosition;
    }
    if (piece.name === 'White King') {
      this.board.whiteKingPos = newPosition;
    }

    this.checkOpponentInCheck();

    if (piece.name === 'Black King') {
      this.board.blackKingPos = oldPosition;
    }
    if (piece.name === 'White King') {
      this.board.whiteKingPos = oldPosition;
    }

    this.board.grid[oldPosition[0]][oldPosition[1]].setChessPiece(piece, true);
    this.board.grid[newPosition[0]][newPosition[1]].setChessPiece(
      oldPiece,
      !!oldPiece
    );
    if (
      this.position[0] === newPosition[0] &&
      this.position[1] === newPosition[1]
    ) {
      return true;
    }
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
          if (
            this.board.grid[j][k].hasPiece &&
            this.board.grid[j][k].chessPiece.color !== this.color
          ) {
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
    this.availableSquares = squaresToKeep;
  };

  pawnReplaceOnClick = () => {
    this.pieceContainer.append(this.chessPiece);
    this.position = this.board.selectedPiece.position;
    this.board.grid[this.position[0]][this.position[1]].setChessPiece(
      this,
      true
    );
    this.board.selectedPiece.capture();
    if (this.color === 'Black') {
      this.board.whiteCaptured.splice(this.indexInCapture, 1);
      this.board.whiteCapturedContainer.innerHTML = '';
      for (let i = 0; i < this.board.whiteCaptured.length; i++) {
        this.board.whiteCapturedContainer.append(
          this.board.whiteCaptured[i].chessPiece
        );
      }
    } else {
      this.board.blackCaptured.splice(this.indexInCapture, 1);
      this.board.blackCapturedContainer.innerHTML = '';
      for (let i = 0; i < this.board.blackCaptured.length; i++) {
        this.board.blackCapturedContainer.append(
          this.board.blackCaptured[i].chessPiece
        );
      }
    }

    if (this.board.selectedPiece.color === 'White') {
      for (let i = 0; i < this.board.blackCaptured.length; i++) {
        this.board.blackCaptured[i].chessPiece.onclick = null;
      }
    } else {
      for (let i = 0; i < this.board.whiteCaptured.length; i++) {
        this.board.whiteCaptured[i].chessPiece.onclick = null;
      }
    }

    this.chessPiece.onclick = null;

    this.board.pawnReplacement = false;
    this.board.update();
  };
}
