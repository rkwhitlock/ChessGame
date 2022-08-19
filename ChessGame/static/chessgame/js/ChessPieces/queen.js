class Queen extends ChessPiece {
  constructor(link, color) {
    super.link = link;
    super.color = color;
    super.name = color + ' Queen';

    for (let i = 1; i < 8; i++) {
      const queenUpRightRule = new Rule(true, '+' + i, '+' + i);
      super.rules.push(queenUpRightRule);
      const queenUpLeftRule = new Rule(true, '+' + i, '-' + i);
      super.rules.push(queenUpLeftRule);
      const queenDownRightRule = new Rule(true, '-' + i, '+' + i);
      super.rules.push(queenDownRightRule);
      const queenDownLeftRule = new Rule(true, '-' + i, '-' + i);
      super.rules.push(queenDownLeftRule);
      const queenUpRule = new Rule(true, '+' + i, '+0');
      super.rules.push(queenUpRule);
      const queenDownRule = new Rule(true, '-' + i, '+0');
      super.rules.push(queenDownRule);
      const queenRightRule = new Rule(true, '+0', '+' + i);
      super.rules.push(queenightRule);
      const queenLeftRule = new Rule(true, '+0', '-' + i);
      super.rules.push(queenLeftRule);
    }
  }
}
