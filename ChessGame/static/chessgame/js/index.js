body = () => {
  const centerContainer = document.createElement('div');

  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = '../css/style.css';

  const chessBoardStyle = document.createElement('link');
  chessBoardStyle.rel = 'stylesheet';
  chessBoardStyle.type = 'text/css';
  chessBoardStyle.href = '../css/ChessBoard/chessboard.css';

  centerContainer.className = 'centerPurple';
  let main = document.getElementById('main');
  main.append(centerContainer);

  const board = new ChessBoard();

  const { chessBoard } = board.display();
  centerContainer.append(chessBoard);
  console.log(chessBoard);
  console.log(centerContainer);
};

window.onload = () => {
  body();
};
