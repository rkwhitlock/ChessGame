class ChessPiece {
  link;
  position = new Array(2);
  name;
  rules = new Array();
  captured = false;
  color;

  constructor(position) {
    this.position = position;
  }

  setPosition = (position) => {
    this.position = position;
  };

  capture = () => {
    this.captured = true;
  };

  display = () => {
    const chessPiece = document.createElement('img');
    chessPiece.src = link;
    chessPiece.className = 'piece';
  };
}
