import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import calculatorSvg from "./assets/images/icon-calculator.svg";
import illustrationEmptySvg from "./assets/images/illustration-empty.svg";

export default function App() {
  return (
    <>
      <div className="mortgage">
        <div className="mortgage-calculator flex justify-center">
          <div className="mortgage-calculator-main w-1/2 p-2.5">
            <div className="heading-container flex justify-between items-center">
              <h5 className="heading">Mortgage Calculator</h5>
              <p className="clear-all-text">Clear All</p>
            </div>

            <div className="form-container flex flex-col justify-around">
              <form className="calculator-form">
                <div className="form-group flex flex-col">
                  <label htmlFor="mortgage-amount">Mortgage Amount</label>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      £
                    </span>
                    <input
                      type="number"
                      class="form-control"
                      aria-label="Mortgage Amount"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>

                <div className="form-term-rate-group">
                  <div className="form-group flex flex-col mr-2.5">
                    <label htmlFor="mortgage-term">Mortgage Term</label>
                    <div class="input-group mb-3">
                      <input
                        type="number"
                        class="form-control"
                        aria-label="Mortgage Term"
                        aria-describedby="basic-addon1"
                      />
                      <span class="input-group-text" id="basic-addon1">
                        years
                      </span>
                    </div>
                  </div>

                  <div className="form-group flex flex-col ml-2.5">
                    <label htmlFor="interest-rate">Interest Rate</label>
                    <div class="input-group mb-3">
                      <input
                        type="number"
                        class="form-control"
                        aria-label="Interest Rate"
                        aria-describedby="basic-addon1"
                      />
                      <span class="input-group-text" id="basic-addon1">
                        %
                      </span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="mortgage-type">Mortgage Type</label>

                  <div className="form-radio-group">
                    <input type="radio" name="repayment" id="repayment" />
                    <label htmlFor="repayment-radio">Repayment</label>
                  </div>

                  <div className="form-radio-group">
                    <input
                      type="radio"
                      name="interest-only"
                      id="interestOnly"
                    />
                    <label htmlFor="interest-only-radio">Interest Only</label>
                  </div>
                </div>

                <button type="submit">
                  <img src={calculatorSvg} alt="Calculator icon" />
                  <p>Calculate Repayments</p>
                </button>
              </form>
            </div>
          </div>

          <div className="mortgage-calculator-display text-white w-1/2 flex justify-center flex-col items-center">
            <img src={illustrationEmptySvg} alt="Repayments" />

            <h5 className="repayments-empty-heading">Results shown here</h5>

            <p className="repayments-empty-body">
              Complete the form and click "Calculate repayments" to see what
              your monthly repayments would be.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
