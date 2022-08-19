class Knight extends ChessPiece {
  constructor(link, color) {
    super.link = link;
    super.color = color;
    super.name = color + ' Knight';

    for (let i = 1; i < 3; i++) {
      for (let j = 1; j < 3; j++) {
        for (let k = 1; k < 3; k++) {
          columnSign = j % 2 == 0 ? '-' : '+';
          rowSign = k % 2 == 0 ? '-' : '+';
          const knightRule = new Rule(columnSign + i, rowSign + (3 - i));
          super.rules.push(knightRule);
        }
      }
    }
  }
}
