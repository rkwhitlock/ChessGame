class King extends ChessPiece {
  constructor(position, link, color) {
    super();
    super.link = link;
    super.color = color;
    super.name = color + 'King';
    super.position = position;

    const kingUpRule = new Rule(true, '+1', '+0');
    this.rules.push(kingUpRule);
    const kingUpLeftRule = new Rule(true, '+1', '-1');
    this.rules.push(kingUpLeftRule);
    const kingUpRightRule = new Rule(true, '+1', '+1');
    this.rules.push(kingUpRightRule);
    const kingLeftRule = new Rule(true, '+0', '-1');
    this.rules.push(kingLeftRule);
    const kingRightRule = new Rule(true, '+0', '+1');
    this.rules.push(kingRightRule);
    const kingDownRule = new Rule(true, '-1', '+0');
    this.rules.push(kingDownRule);
    const kingDownLeftRule = new Rule(true, '-1', '-1');
    this.rules.push(kingDownLeftRule);
    const kingDownRightRule = new Rule(true, '-1', '+1');
    this.rules.push(kingDownRightRule);
  }
}
