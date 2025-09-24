export default function formatEarnedText(amount) {
  switch (true) {
    case (amount < 150):
        return "more than $100";
    case (amount >= 150 && amount < 500):
        return "more than $300";
    case (amount >= 500 && amount < 1000):
        return "more than $500";
    case (amount >= 1000 && amount < 3000):
        return "more than $1.000";
    case (amount >= 3000 && amount < 5000):
        return "more than $3.000";
    case (amount >= 5000 && amount < 10000):
        return "more than $5.000";
    case (amount >= 10000 && amount < 15000):
        return "more than $10.000";
    case (amount >= 15000 && amount < 20000):
        return "more than $15.000";
    case (amount >= 20000 && amount < 30000):
        return "more than $20.000";
    case (amount >= 30000 && amount < 50000):
        return "more than $30.000";
    case (amount >= 50000 && amount < 80000):
        return "more than $50.000";
    case (amount >= 80000 && amount < 100000):
        return "more than $80.000";
    case (amount >= 100000):
        return "more than $100.000";
    default:
        return '-';
  }
}