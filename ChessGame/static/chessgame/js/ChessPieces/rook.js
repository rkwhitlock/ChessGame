class Rook extends ChessPiece {
  constructor(position, link, color) {
    super();
    super.link = link;
    super.color = color;
    super.name = color + ' Rook';
    super.position = position;

    for (let i = 1; i < 8; i++) {
      const rookUpRule = new Rule(true, '+' + i, '+0');
      this.rules.push(rookUpRule);
      const rookDownRule = new Rule(true, '-' + i, '+0');
      this.rules.push(rookDownRule);
      const rookRightRule = new Rule(true, '+0', '+' + i);
      this.rules.push(rookRightRule);
      const rookLeftRule = new Rule(true, '+0', '-' + i);
      this.rules.push(rookLeftRule);
    }
  }
}
