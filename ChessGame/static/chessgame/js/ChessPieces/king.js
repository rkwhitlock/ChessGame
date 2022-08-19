class Pawn extends ChessPiece {
  constructor(link, color) {
    super.link = link;
    super.color = color;
    super.name = color + 'King';

    const kingUpRule = new Rule(true, '+1', '+0');
    super.rules.push(kingUpRule);
    const kingUpLeftRule = new Rule(true, '+1', '-1');
    super.rules.push(kingUpLeftRule);
    const kingUpRightRule = new Rule(true, '+1', '+1');
    super.rules.push(kingUpRightRule);
    const kingLeftRule = new Rule(true, '+0', '-1');
    super.rules.push(kingLeftRule);
    const kingRightRule = new Rule(true, '+0', '+1');
    super.rules.push(kingRightRule);
    const kingDownRule = new Rule(true, '-1', '+0');
    super.rules.push(kingDownRule);
    const kingDownLeftRule = new Rule(true, '-1', '-1');
    super.rules.push(kingDownLeftRule);
    const kingDownRightRule = new Rule(true, '-1', '+1');
    super.rules.push(kingDownRightRule);
  }
}
