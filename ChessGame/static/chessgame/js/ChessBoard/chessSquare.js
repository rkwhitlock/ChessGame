class ChessSquare {
  highlighted = false;
  chessPiece = null;
  position;
  chessSquare;
  color;
  hasPiece = false;
  board;

  constructor(position, color, board) {
    this.position = position;
    this.color = color;
    this.board = board;
  }

  setChessPiece = (chessPiece, hasPiece) => {
    this.chessPiece = chessPiece;
    this.hasPiece = hasPiece;
  };

  display = () => {
    this.chessSquare = document.createElement('div');
    this.chessSquare.className = 'square';
    this.chessSquare.style.backgroundColor = this.color;
    if (this.highlighted && !this.board.pawnReplace) {
      this.chessSquare.style.backgroundColor = '#e851c5';
      this.chessSquare.onclick = this.onClick;
    } else {
      this.chessSquare.onclick = null;
    }
    if (!!this.chessPiece) {
      const { pieceContainer } = this.chessPiece.display();
      this.chessSquare.append(pieceContainer);
    }
    const chessSquare = this.chessSquare;
    return {
      chessSquare,
    };
  };

  onClick = () => {
    if (this.board.selectedPiece.name.includes('Pawn')) {
      if (!!this.board.enPassantPiece) {
        if (
          this.board.enPassantPiece.position[1] === this.position[1] &&
          ((this.board.enPassantPiece.position[0] + 1 === this.position[0] &&
            this.board.selectedPiece.color === 'White') ||
            (this.board.enPassantPiece.position[0] - 1 === this.position[0] &&
              this.board.selectedPiece.color === 'Black'))
        ) {
          if (this.board.enPassantPiece.color === 'White') {
            this.board.grid[this.board.enPassantPiece.position[0]][
              this.board.enPassantPiece.position[1]
            ].setChessPiece(null, false);
          } else {
            this.board.grid[this.board.enPassantPiece.position[0]][
              this.board.enPassantPiece.position[1]
            ].setChessPiece(null, false);
          }
          this.board.enPassantPiece.capture();
        }
      }
      if (this.position[0] === 0 || this.position[0] === 7) {
        console.log('?');
        if (this.board.selectedPiece.color === 'White') {
          console.log(this.board.blackCaptured);
          for (let i = 0; i < this.board.blackCaptured.length; i++) {
            this.board.blackCaptured[i].overlay.style.display = 'block';
            this.board.blackCaptured[i].pieceContainer.onclick =
              this.board.blackCaptured[i].pawnCapturedOnClick;
          }
        } else {
          for (let i = 0; i < this.board.whiteCaptured.length; i++) {
            this.board.whiteCaptured[i].overlay.style.display = 'block';
            this.board.whiteCaptured[i].pieceContainer.onclick =
              this.board.whiteCaptured[i].pawnCapturedOnClick;
          }
        }
        this.board.pawnReplace = true;
      }
    }

    if (this.hasPiece) {
      if (this.chessPiece.name === 'Black King') {
        this.board.won = 'White';
      } else if (this.chessPiece.name === 'White King') {
        this.board.won = 'Black';
      }
      this.chessPiece.capture();
    }

    if (
      this.board.selectedPiece.name === 'Black King' &&
      this.position[0] === 7 &&
      this.position[1] === 1 &&
      this.board.selectedPiece.notMoved
    ) {
      this.castle();
    } else if (
      this.board.selectedPiece.name === 'White King' &&
      this.position[0] === 0 &&
      this.position[1] === 1 &&
      this.board.selectedPiece.notMoved
    ) {
      this.castle();
    }

    this.board.enPassantPiece = null;

    if (this.board.selectedPiece.name.includes('Pawn')) {
      if (this.board.selectedPiece.notMoved) {
        if (
          this.position[0] ===
          this.board.selectedPiece.moveForward(
            this.board.selectedPiece.position[0],
            2
          )
        ) {
          this.board.enPassantPiece = this.board.selectedPiece;
        }
      }
    }

    if (
      this.board.selectedPiece.name.includes('Rook') ||
      this.board.selectedPiece.name.includes('King') ||
      this.board.selectedPiece.name.includes('Pawn')
    ) {
      this.board.selectedPiece.notMoved = false;
    }

    const previousPiecePosition = this.board.selectedPiece.position;
    this.board.selectedPiece.position = this.position;
    this.board.grid[previousPiecePosition[0]][
      previousPiecePosition[1]
    ].setChessPiece(null, false);
    this.setChessPiece(this.board.selectedPiece, true);

    if (this.board.selectedPiece.name.includes('King')) {
      if (this.board.playerTurn === 'White') {
        this.board.whiteKingPos = this.position;
      } else {
        this.board.blackKingPos = this.position;
      }
    }

    if (this.board.checkForCheckmate()) {
      this.board.won = this.board.playerTurn;
    }

    this.board.selectedPiece.checkOpponentInCheck();

    this.board.playerTurn =
      this.board.playerTurn === 'White' ? 'Black' : 'White';

    this.board.update();

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.board.grid[i][j].highlighted = false;
      }
    }
    this.board.update();
    this.board.selectedPiece.overlay.style.display = 'none';
  };

  castle = () => {
    if (this.board.playerTurn === 'White') {
      this.board.grid[0][2].setChessPiece(
        this.board.grid[0][0].chessPiece,
        true
      );
      this.board.grid[0][0].setChessPiece(null, false);
      this.board.grid[0][2].chessPiece.position = new Array(0, 2);
    } else {
      this.board.grid[7][2].setChessPiece(
        this.board.grid[7][0].chessPiece,
        true
      );
      this.board.grid[7][0].setChessPiece(null, false);
      this.board.grid[7][2].chessPiece.position = new Array(7, 2);
    }
  };
}
