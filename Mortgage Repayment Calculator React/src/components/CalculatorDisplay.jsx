import React from "react";
import illustrationEmptySvg from "../assets/images/illustration-empty.svg";

export default function CalculatorDisplay() {
  return (
    <>
      <div className="repayments-display-container">
        <img src={illustrationEmptySvg} alt="Repayments" />
        <h2 className="repayments-empty-heading">Results shown here</h2>
        <p className="repayments-empty-body">
          Complete the form and click "Calculate repayments" to see what your
          monthly repayments would be.
        </p>
      </div>
    </>
  );
}
