class ChessSquare {
  highlighted = false;
  chessPiece = null;
  position;

  constructor(position) {
    this.position = position;
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

  display = (color) => {
    const chessSquare = document.createElement('div');
    chessSquare.className = 'square';
    chessSquare.style.backgroundColor = color;
    if (this.highlighted) {
      chessSquare.style.backgroundColor = '#dfbee8';
    }
    if (!!this.chessPiece) {
      chessSquare.append(this.chessPiece);
    }
    return {
      chessSquare,
    };
  };
}
