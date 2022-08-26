class ChessBoard {
  grid;
  chessBoard;
  playerTurn = 'White';
  selectedPiece;
  playerContainer = document.createElement('div');
  whiteCaptured = document.createElement('div');
  blackCaptured = document.createElement('div');
  won = null;
  whiteKingPos;
  blackKingPos;
  enPassantPiece;
  enPassantClicked = false;

  constructor() {
    this.playerContainer.className = 'playerContainer';
    this.playerContainer.innerHTML = 'Player: ' + this.playerTurn;
    this.whiteCaptured.className = 'capturedContainer';
    this.blackCaptured.className = 'capturedContainer';
  }

  startGameDisplay = () => {
    this.grid = new Array(8);

    for (let i = 0; i < this.grid.length; i++) {
      this.grid[i] = new Array(8);
    }

    this.chessBoard = document.createElement('div');
    this.chessBoard.className = 'board';

    for (let i = 0; i < 8; i++) {
      const chessRow = document.createElement('div');
      chessRow.className = 'row';
      this.chessBoard.append(chessRow);
      let color = i % 2 === 0 ? '#f5d5a2' : '#7352a1';
      for (let j = 0; j < 8; j++) {
        const position = new Array(2);
        position[0] = i;
        position[1] = j;
        const square = new ChessSquare(position, color, this);
        const { chessSquare } = square.display();
        chessRow.append(chessSquare);
        this.grid[i][j] = square;
        color = color === '#7352a1' ? '#f5d5a2' : '#7352a1';
      }
    }

    this.insertStartingPieces();
    const chessBoard = this.chessBoard;

    return {
      chessBoard,
    };
  };

  insertStartingPieces = () => {
    this.grid[0][0].setChessPiece(
      new Rook(
        new Array(0, 0),
        '../../static/chessgame/img/white-rook.png',
        'White',
        this
      ),
      true
    );
    this.grid[0][1].setChessPiece(
      new Knight(
        new Array(0, 1),
        '../../static/chessgame/img/white-knight.png',
        'White',
        this
      ),
      true
    );
    this.grid[0][2].setChessPiece(
      new Bishop(
        new Array(0, 2),
        '../../static/chessgame/img/white-bishop.png',
        'White',
        this
      ),
      true
    );
    this.grid[0][3].setChessPiece(
      new King(
        new Array(0, 3),
        '../../static/chessgame/img/white-king.png',
        'White',
        this
      ),
      true
    );
    this.whiteKingPos = new Array(0, 3);
    this.grid[0][4].setChessPiece(
      new Queen(
        new Array(0, 4),
        '../../static/chessgame/img/white-queen.png',
        'White',
        this
      ),
      true
    );
    this.grid[0][5].setChessPiece(
      new Bishop(
        new Array(0, 5),
        '../../static/chessgame/img/white-bishop.png',
        'White',
        this
      ),
      true
    );
    this.grid[0][6].setChessPiece(
      new Knight(
        new Array(0, 6),
        '../../static/chessgame/img/white-knight.png',
        'White',
        this
      ),
      true
    );
    this.grid[0][7].setChessPiece(
      new Rook(
        new Array(0, 7),
        '../../static/chessgame/img/white-rook.png',
        'White',
        this
      ),
      true
    );
    for (let i = 0; i < 8; i++) {
      this.grid[1][i].setChessPiece(
        new Pawn(
          new Array(1, i),
          '../../static/chessgame/img/white-pawn.png',
          'White',
          this
        ),
        true
      );
    }
    for (let i = 0; i < 8; i++) {
      this.grid[6][i].setChessPiece(
        new Pawn(
          new Array(6, i),
          '../../static/chessgame/img/black-pawn.png',
          'Black',
          this
        ),
        true
      );
    }
    this.grid[7][0].setChessPiece(
      new Rook(
        new Array(7, 0),
        '../../static/chessgame/img/black-rook.png',
        'Black',
        this
      ),
      true
    );
    this.grid[7][1].setChessPiece(
      new Knight(
        new Array(7, 1),
        '../../static/chessgame/img/black-knight.png',
        'Black',
        this
      ),
      true
    );
    this.grid[7][2].setChessPiece(
      new Bishop(
        new Array(7, 2),
        '../../static/chessgame/img/black-bishop.png',
        'Black',
        this
      ),
      true
    );
    this.grid[7][3].setChessPiece(
      new King(
        new Array(7, 3),
        '../../static/chessgame/img/black-king.png',
        'Black',
        this
      ),
      true
    );
    this.blackKingPos = new Array(7, 3);
    this.grid[7][4].setChessPiece(
      new Queen(
        new Array(7, 4),
        '../../static/chessgame/img/black-queen.png',
        'Black',
        this
      ),
      true
    );
    this.grid[7][5].setChessPiece(
      new Bishop(
        new Array(7, 5),
        '../../static/chessgame/img/black-bishop.png',
        'Black',
        this
      ),
      true
    );
    this.grid[7][6].setChessPiece(
      new Knight(
        new Array(7, 6),
        '../../static/chessgame/img/black-knight.png',
        'Black',
        this
      ),
      true
    );
    this.grid[7][7].setChessPiece(
      new Rook(
        new Array(7, 7),
        '../../static/chessgame/img/black-rook.png',
        'Black',
        this
      ),
      true
    );

    this.update();
  };

  update = () => {
    this.chessBoard.innerHTML = '';

    for (let i = 0; i < 8; i++) {
      const chessRow = document.createElement('div');
      chessRow.className = 'row';
      this.chessBoard.append(chessRow);
      for (let j = 0; j < 8; j++) {
        const { chessSquare } = this.grid[i][j].display();
        chessRow.append(chessSquare);
      }
    }

    this.playerContainer.innerHTML = 'Player: ' + this.playerTurn;
    if (!!this.won) {
      this.gameOver();
    }

    this.updateCheck();
  };

  updateCheck = () => {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.grid[i][j].hasPiece) {
          this.grid[i][j].chessPiece.checkOpponentInCheck();
        }
      }
    }
  };

  gameOver = () => {
    document.getElementById('body').innerHTML = '';
    const win = document.createElement('div');
    win.className = 'winContainer';
    win.innerHTML = this.won + ' Won!';
    document.getElementById('body').append(win);
  };

  checkForCheckmate = () => {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (
          this.grid[i][j].hasPiece &&
          this.grid[i][j].chessPiece.color !== this.playerTurn
        ) {
          this.grid[i][j].chessPiece.checkAvailableSquares();
          this.grid[i][j].chessPiece.removeCheckSquares();
          if (this.grid[i][j].chessPiece.availableSquares.length !== 0) {
            return false;
          }
        }
      }
    }
    return true;
  };
}
