class ChessSquare {
  highlighted = false;
  chessPiece = new ChessPiece();
  position;
  chessSquare;
  color;

  constructor(position, color) {
    this.position = position;
    this.color = color;
  }

  highlight = () => {
    this.highlighted = true;
  };

  unhighlight = () => {
    this.highlighted = false;
  };

  setChessPiece = (chessPiece) => {
    this.chessPiece = chessPiece;
  };

  display = () => {
    this.chessSquare = document.createElement('div');
    this.chessSquare.className = 'square';
    this.chessSquare.style.backgroundColor = this.color;
    if (this.highlighted) {
      this.chessSquare.style.backgroundColor = '#dfbee8';
    }
    if (!!this.chessPiece.link) {
      const { chessPiece } = this.chessPiece.display();
      console.log(chessPiece);
      this.chessSquare.append(chessPiece);
    }
    const chessSquare = this.chessSquare;
    return {
      chessSquare,
    };
  };
}
