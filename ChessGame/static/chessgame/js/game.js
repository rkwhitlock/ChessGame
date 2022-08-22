const board = new ChessBoard();
let playerTurn = board.playerTurn;

startGame = (centerContainer) => {
  const { chessBoard } = board.startGameDisplay();
  centerContainer.append(chessBoard);

  playerContainer = document.createElement('div');
  playerContainer.className = 'playerContainer';
  playerContainer.innerHTML = 'Player: ' + playerTurn;
  document.getElementById('right-margin').append(playerContainer);
};

playGame = () => {};
