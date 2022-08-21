startGame = (centerContainer) => {
  const board = new ChessBoard();

  const { chessBoard } = board.startGameDisplay();
  centerContainer.append(chessBoard);
};
