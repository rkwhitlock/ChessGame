class Queen extends ChessPiece {
  constructor(position, link, color) {
    super();
    super.link = link;
    super.color = color;
    super.name = color + ' Queen';
    super.position = position;

    for (let i = 1; i < 8; i++) {
      const queenUpRightRule = new Rule(true, '+' + i, '+' + i);
      this.rules.push(queenUpRightRule);
      const queenUpLeftRule = new Rule(true, '+' + i, '-' + i);
      this.rules.push(queenUpLeftRule);
      const queenDownRightRule = new Rule(true, '-' + i, '+' + i);
      this.rules.push(queenDownRightRule);
      const queenDownLeftRule = new Rule(true, '-' + i, '-' + i);
      this.rules.push(queenDownLeftRule);
      const queenUpRule = new Rule(true, '+' + i, '+0');
      this.rules.push(queenUpRule);
      const queenDownRule = new Rule(true, '-' + i, '+0');
      this.rules.push(queenDownRule);
      const queenRightRule = new Rule(true, '+0', '+' + i);
      this.rules.push(queenRightRule);
      const queenLeftRule = new Rule(true, '+0', '-' + i);
      this.rules.push(queenLeftRule);
    }
  }
}
