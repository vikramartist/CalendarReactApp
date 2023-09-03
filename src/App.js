import "./styles.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  let date = new Date();
  date = date.setDate(date.getDate() + count);
  const handleStep = (val) => {
    return val === "+" ? setStep((s) => s + 1) : setStep((s) => s - 1);
  };

  const handleCount = (val) => {
    return val === "+" ? setCount((i) => i + step) : setCount((i) => i - step);
  };

  return (
    <div className="App">
      <div className="steps">
        <button onClick={() => handleStep("-")}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => handleStep("+")}>+</button>
      </div>
      <div className="count">
        <button onClick={() => handleCount("-")}>-</button>
        <p>Count: {count}</p>
        <button onClick={() => handleCount("+")}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count === 1
            ? `${count} day from today is `
            : count === -1
            ? `${Math.abs(count)} day ago was `
            : count < -1
            ? `${Math.abs(count)} days ago was `
            : `${count} days from today is `}
        </span>
        <span>{new Date(date).toDateString()}</span>
      </p>
    </div>
  );
}
