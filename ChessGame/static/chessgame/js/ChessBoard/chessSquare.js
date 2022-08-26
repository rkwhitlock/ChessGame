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

    if (
      this.board.selectedPiece.name.includes('Rook') ||
      this.board.selectedPiece.name.includes('King')
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
      this.board.grid[0][1].setChessPiece(this.board.selectedPiece, true);
      this.board.grid[0][2].setChessPiece(
        this.board.grid[0][0].chessPiece,
        true
      );
      this.board.grid[0][0].setChessPiece(null, false);
      this.board.grid[0][3].setChessPiece(null, false);
      this.board.selectedPiece.position = new Array(0, 1);
      this.board.grid[0][2].chessPiece.position = new Array(0, 2);
    } else {
      this.board.grid[7][1].setChessPiece(this.board.selectedPiece, true);
      this.board.grid[7][2].setChessPiece(
        this.board.grid[7][0].chessPiece,
        true
      );
      this.board.grid[7][0].setChessPiece(null, false);
      this.board.grid[7][3].setChessPiece(null, false);
      this.board.selectedPiece.position = new Array(7, 1);
      this.board.grid[7][2].chessPiece.position = new Array(7, 2);
    }
  };
}
