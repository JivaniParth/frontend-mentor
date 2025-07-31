import React from "react";
import Calculator from "./components/Calculator";
import CalculatorDisplay from "./components/CalculatorDisplay";

export default function App() {
  return (
    <>
      <div className="mortgage-calculator">
        <Calculator />
        <CalculatorDisplay />
      </div>
    </>
  );
}
