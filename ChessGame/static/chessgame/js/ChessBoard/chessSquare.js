class ChessSquare {
  highlighted = false;

  highlight = () => {
    this.highlighted = !this.highlighted;
  };

  display = (color) => {
    const chessSquare = document.createElement('div');
    chessSquare.className = 'square';
    chessSquare.style.backgroundColor = color;
    if (this.highlighted) {
      chessSquare.style.backgroundColor = '#dfbee8';
    }
    return {
      chessSquare,
    };
  };
}
