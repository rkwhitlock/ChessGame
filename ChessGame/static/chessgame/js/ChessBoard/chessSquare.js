class ChessSquare {
  highlighted = false;
  chessPiece = new ChessPiece() | null;
  position;
  chessSquare;
  color;
  hasPiece = false;

  constructor(position, color) {
    this.position = position;
    this.color = color;
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
    }
    if (!!this.chessPiece.link) {
      const { chessPiece, overlay } = this.chessPiece.display();
      this.chessSquare.append(overlay);
      this.chessSquare.append(chessPiece);
    }
    const chessSquare = this.chessSquare;
    return {
      chessSquare,
    };
  };
}
