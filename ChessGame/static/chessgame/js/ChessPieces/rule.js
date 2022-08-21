class Rule {
  canCapture;
  rowOp;
  columnOp;

  constructor(canCapture, rowOp, columnOp) {
    this.canCapture = canCapture;
    this.rowOp = rowOp;
    this.columnOp = columnOp;
  }
}
