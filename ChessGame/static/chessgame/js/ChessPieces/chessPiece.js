class ChessPiece {
  link = null;
  position = new Array(2);
  name;
  rules = new Array(0);
  captured = false;
  color;

  setPosition = (position) => {
    this.position = position;
  };

  capture = () => {
    this.captured = true;
  };

  display = () => {
    const chessPiece = document.createElement('img');
    chessPiece.src = this.link;
    chessPiece.className = 'piece';
    return {
      chessPiece,
    };
  };
}
