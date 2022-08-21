class ChessBoard {
  grid;
  chessBoard;

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
        const square = new ChessSquare(position, color);
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
    this.grid[0][0].chessPiece = new Rook(
      new Array(0, 0),
      '../../static/chessgame/img/white-rook.png',
      'White'
    );
    this.grid[0][1].chessPiece = new Knight(
      new Array(0, 1),
      '../../static/chessgame/img/white-knight.png',
      'White'
    );
    this.grid[0][2].chessPiece = new Bishop(
      new Array(0, 2),
      '../../static/chessgame/img/white-bishop.png',
      'White'
    );
    this.grid[0][3].chessPiece = new King(
      new Array(0, 3),
      '../../static/chessgame/img/white-king.png',
      'White'
    );
    this.grid[0][4].chessPiece = new Queen(
      new Array(0, 4),
      '../../static/chessgame/img/white-queen.png',
      'White'
    );
    this.grid[0][5].chessPiece = new Bishop(
      new Array(0, 5),
      '../../static/chessgame/img/white-bishop.png',
      'White'
    );
    this.grid[0][6].chessPiece = new Knight(
      new Array(0, 6),
      '../../static/chessgame/img/white-knight.png',
      'White'
    );
    this.grid[0][7].chessPiece = new Rook(
      new Array(0, 7),
      '../../static/chessgame/img/white-rook.png',
      'White'
    );
    for (let i = 0; i < 8; i++) {
      this.grid[1][i].chessPiece = new Pawn(
        new Array(1, i),
        '../../static/chessgame/img/white-pawn.png',
        'White'
      );
    }
    for (let i = 0; i < 8; i++) {
      this.grid[6][i].chessPiece = new Pawn(
        new Array(6, i),
        '../../static/chessgame/img/black-pawn.png',
        'Black'
      );
    }
    this.grid[7][0].chessPiece = new Rook(
      new Array(7, 0),
      '../../static/chessgame/img/black-rook.png',
      'Black'
    );
    this.grid[7][1].chessPiece = new Knight(
      new Array(7, 1),
      '../../static/chessgame/img/black-knight.png',
      'Black'
    );
    this.grid[7][2].chessPiece = new Bishop(
      new Array(7, 2),
      '../../static/chessgame/img/black-bishop.png',
      'Black'
    );
    this.grid[7][3].chessPiece = new King(
      new Array(7, 3),
      '../../static/chessgame/img/black-king.png',
      'Black'
    );
    this.grid[7][4].chessPiece = new Queen(
      new Array(0, 4),
      '../../static/chessgame/img/black-queen.png',
      'Black'
    );
    this.grid[7][5].chessPiece = new Bishop(
      new Array(7, 5),
      '../../static/chessgame/img/black-bishop.png',
      'Black'
    );
    this.grid[7][6].chessPiece = new Knight(
      new Array(7, 6),
      '../../static/chessgame/img/black-knight.png',
      'Black'
    );
    this.grid[7][7].chessPiece = new Rook(
      new Array(7, 7),
      '../../static/chessgame/img/black-rook.png',
      'Black'
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
        console.log(chessSquare);
        console.log(chessRow);
        chessRow.append(chessSquare);
      }
    }
  };
}
