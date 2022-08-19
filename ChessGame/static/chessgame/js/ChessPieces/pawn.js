class Pawn extends ChessPiece {
  constructor(link, color) {
    super.link = link;
    super.color = color;
    super.name = color + 'Pawn';

    const pawnUpRule = new Rule(false, '+1', '+0');
    const pawnCaptureRule = new Rule(true, '+1', '+1');
    super.rules.push(pawnUpRule);
    super.rules.push(pawnCaptureRule);
  }
}
