import React from "react";
import calculatorSvg from "../assets/images/icon-calculator.svg";

export default function Calculator() {
  return (
    <>
      <div className="heading-container">
        <h2 className="heading">Mortgage Calculator</h2>
        <p className="clear-all">Clear All</p>
      </div>
      <div className="form-container">
        <form className="calculator-form">
          <label htmlFor="mortgage-amount">Mortgage Amount</label>
          <input type="number" name="mortgage-amount" id="mortgageAmount" />
          <label htmlFor="mortgage-term">Mortgage Term</label>
          <input type="number" name="mortgage-term" id="mortgageTerm" />
          <label htmlFor="interest-rate">Interest Rate</label>
          <input type="number" name="interest-rate" id="interestRate" />
          <label htmlFor="mortgage-type">Mortgage Type</label>
          <input type="radio" name="repayment" id="repayment" />
          <label htmlFor="repayment-radio">Repayment</label>
          <input type="radio" name="interest-only" id="interestOnly" />
          <label htmlFor="interest-only-radio">Interest Only</label>
          <button type="submit">
            <img src={calculatorSvg} alt="Calculator icon" />
            Calculate Repayments
          </button>
        </form>
      </div>
    </>
  );
}
