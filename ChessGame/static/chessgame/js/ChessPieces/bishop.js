class Bishop extends ChessPiece {
  constructor(position, link, color) {
    super();
    super.link = link;
    super.color = color;
    super.name = color + ' Bishop';
    super.position = position;

    for (let i = 1; i < 8; i++) {
      const bishopUpRightRule = new Rule(true, '+' + i, '+' + i);
      this.rules.push(bishopUpRightRule);
      const bishopUpLeftRule = new Rule(true, '+' + i, '-' + i);
      this.rules.push(bishopUpLeftRule);
      const bishopDownRightRule = new Rule(true, '-' + i, '+' + i);
      this.rules.push(bishopDownRightRule);
      const bishopDownLeftRule = new Rule(true, '-' + i, '-' + i);
      this.rules.push(bishopDownLeftRule);
    }
  }
}
