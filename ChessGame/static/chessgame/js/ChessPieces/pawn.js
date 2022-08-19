class Pawn extends ChessPiece {
  constructor(position, link, color) {
    super();
    super.link = link;
    super.color = color;
    super.name = color + 'Pawn';
    super.position = position;

    const pawnUpRule = new Rule(false, '+1', '+0');
    const pawnCaptureRule = new Rule(true, '+1', '+1');
    this.rules.push(pawnUpRule);
    this.rules.push(pawnCaptureRule);
  }
}
