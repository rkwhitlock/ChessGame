class Bishop extends ChessPiece {
  constructor(position, link, color) {
    super();
    super.link = link;
    super.color = color;
    super.name = color + ' Bishop';
    super.position = position;
  }
}
