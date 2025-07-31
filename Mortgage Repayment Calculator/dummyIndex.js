function mortgageCalculator() {
  const loanAmount = 0;
  const annualRate = 0;
  const termYears = 0;
  const monthlyPayment = 0;
  const totalPayment = 0;
  const totalInterest = 0;

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount);
    const annualInterestRate = parseFloat(annualRate) / 100;
    const numberOfYears = parseFloat(termYears);

    if (
      !principal ||
      !annualInterestRate ||
      !numberOfYears ||
      principal <= 0 ||
      annualInterestRate < 0 ||
      numberOfYears <= 0
    ) {
      monthlyPayment = 0;
      totalPayment = 0;
      totalInterest = 0;
      return;
    }

    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = numberOfYears * 12;

    // Monthly payment formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
    const monthlyPaymentCalc =
      (principal *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    const totalPaymentCalc = monthlyPaymentCalc * numberOfPayments;
    const totalInterestCalc = totalPaymentCalc - principal;

    monthlyPayment = monthlyPaymentCalc;
    totalPayment = totalPaymentCalc;
    totalInterest = totalInterestCalc;
  };

  calculateMortgage();
}
