const board = new ChessBoard();

startGame = (centerContainer) => {
  const { chessBoard } = board.startGameDisplay();
  centerContainer.append(chessBoard);

  document.getElementById('right-margin').append(board.whiteCapturedContainer);
  document.getElementById('right-margin').append(board.playerContainer);
  document.getElementById('right-margin').append(board.blackCapturedContainer);
};

playGame = () => {};
