class ChessBoard {
  grid;

  display = () => {
    this.grid = new Array(8);

    for (let i = 0; i < this.grid.length; i++) {
      this.grid[i] = new Array(8);
    }

    const chessBoard = document.createElement('div');
    chessBoard.className = 'board';

    for (let i = 0; i < 8; i++) {
      const chessRow = document.createElement('div');
      chessRow.className = 'row';
      chessBoard.append(chessRow);
      console.log(chessRow);
      console.log(chessBoard);
      let color = i % 2 === 0 ? 'white' : 'black';
      for (let j = 0; j < 8; j++) {
        const square = new ChessSquare();
        console.log(square);
        const { chessSquare } = square.display(color);
        console.log(chessSquare);
        chessRow.append(chessSquare);
        console.log(chessRow);
        this.grid[i][j] = chessSquare;
        color = color === 'white' ? 'black' : 'white';
      }
    }

    return {
      chessBoard,
    };
  };
}
