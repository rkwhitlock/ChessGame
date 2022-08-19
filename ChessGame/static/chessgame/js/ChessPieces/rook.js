class Rook extends ChessPiece {
  constructor(link, color) {
    super.link = link;
    super.color = color;
    super.name = color + ' Rook';

    for (let i = 1; i < 8; i++) {
      const rookUpRule = new Rule(true, '+' + i, '+0');
      super.rules.push(rookUpRule);
      const rookDownRule = new Rule(true, '-' + i, '+0');
      super.rules.push(rookDownRule);
      const rookRightRule = new Rule(true, '+0', '+' + i);
      super.rules.push(rookRightRule);
      const rookLeftRule = new Rule(true, '+0', '-' + i);
      super.rules.push(rookLeftRule);
    }
  }
}
