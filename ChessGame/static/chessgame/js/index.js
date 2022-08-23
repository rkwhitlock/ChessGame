body = () => {
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = '../css/style.css';

  const chessBoardStyle = document.createElement('link');
  chessBoardStyle.rel = 'stylesheet';
  chessBoardStyle.type = 'text/css';
  chessBoardStyle.href = '../css/ChessBoard/chessboard.css';

  const main = document.getElementById('main');
  const centerContainer = document.createElement('div');
  centerContainer.className = 'centerPurple';
  main.append(centerContainer);

  startGame(centerContainer);
};

window.onload = () => {
  body();
};
