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
    if (this.highlighted) {
      this.chessSquare.style.backgroundColor = '#e851c5';
      this.chessSquare.onclick = this.onClick;
    } else {
      this.chessSquare.onclick = null;
    }
    if (!!this.chessPiece) {
      const { chessPiece, overlay } = this.chessPiece.display();
      this.chessSquare.append(overlay);
      this.chessSquare.append(chessPiece);
    }
    const chessSquare = this.chessSquare;
    return {
      chessSquare,
    };
  };

  onClick = () => {
    if (this.hasPiece) {
      if (this.chessPiece.name === 'Black King') {
        this.board.won = 'White';
      } else if (this.chessPiece.name === 'White King') {
        this.board.won = 'Black';
      }
      this.chessPiece.capture();
      if (this.chessPiece.color === 'White') {
        this.board.blackCaptured.append(this.chessPiece.chessPiece);
      } else {
        this.board.whiteCaptured.append(this.chessPiece.chessPiece);
      }
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

    this.board.selectedPiece.checkAvailableSquares();
    this.board.selectedPiece.checkOpponentInCheck();
    if (this.board.selectedPiece.check) {
      if (this.board.playerTurn === 'White') {
        this.board.blackInCheck = true;
      } else {
        this.board.whiteInCheck = true;
      }
    }

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
}
