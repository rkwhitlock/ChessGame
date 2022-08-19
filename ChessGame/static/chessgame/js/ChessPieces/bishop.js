class Bishop extends ChessPiece {
  constructor(link, color) {
    super.link = link;
    super.color = color;
    super.name = color + ' Bishop';

    for (let i = 1; i < 8; i++) {
      const bishopUpRightRule = new Rule(true, '+' + i, '+' + i);
      super.rules.push(bishopUpRightRule);
      const bishopUpLeftRule = new Rule(true, '+' + i, '-' + i);
      super.rules.push(bishopUpLeftRule);
      const bishopDownRightRule = new Rule(true, '-' + i, '+' + i);
      super.rules.push(bishopDownRightRule);
      const bishopDownLeftRule = new Rule(true, '-' + i, '-' + i);
      super.rules.push(bishopDownLeftRule);
    }
  }
}
