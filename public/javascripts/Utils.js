export function formatOdds(odds) {
  return odds > 0 ? "+" + odds : odds;
}

export function convertMoneylineToDecimal(moneyLine) {
  moneyLine = parseFloat(moneyLine);
  if (moneyLine < 0) {
      return (100 - moneyLine) / -moneyLine;
  }
  else if (moneyLine > 0) {
      return (100 + moneyLine) / 100;
  }
}

export function impliedProability(moneyLine) {
  return 1 / convertMoneylineToDecimal(moneyLine);
}

export function winProfit(wager, moneyLine) {
  if (typeof wager !== 'undefined') {
    var profit = wager * (convertMoneylineToDecimal(moneyLine) - 1.0);
    return profit;
  }
}
