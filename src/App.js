import React, { useState } from 'react';
import './App.css';

const App = () => {
  // State to store the current value of the calculation
  const [input, setInput] = useState('');

  // Function to handle button clicks
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Function to handle evaluation of the expression
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString()); // Evaluate the input and update the input
    } catch (error) {
      setInput('Error'); // If evaluation fails, display 'Error'
    }
  };

  // Function to handle clearing the input
  const handleClear = () => {
    setInput('');
  };

  // Function to handle backspace (delete last character)
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="screen">
        <input
          type="text"
          value={input}
          readOnly
          className="screen-input"
        />
      </div>
      <div className="button-container">
        <button onClick={() => handleClear()} className="button">C</button>
        <button onClick={() => handleBackspace()} className="button">←</button>
        <button onClick={() => handleClick('/')} className="button">/</button>
        <button onClick={() => handleClick('*')} className="button">*</button>

        <button onClick={() => handleClick('7')} className="button">7</button>
        <button onClick={() => handleClick('8')} className="button">8</button>
        <button onClick={() => handleClick('9')} className="button">9</button>
        <button onClick={() => handleClick('-')} className="button">-</button>

        <button onClick={() => handleClick('4')} className="button">4</button>
        <button onClick={() => handleClick('5')} className="button">5</button>
        <button onClick={() => handleClick('6')} className="button">6</button>
        <button onClick={() => handleClick('+')} className="button">+</button>

        <button onClick={() => handleClick('1')} className="button">1</button>
        <button onClick={() => handleClick('2')} className="button">2</button>
        <button onClick={() => handleClick('3')} className="button">3</button>
        <button onClick={() => handleEvaluate()} className="button">=</button>

        <button onClick={() => handleClick('0')} className="button">0</button>
        <button onClick={() => handleClick('.')} className="button">.</button>
      </div>
    </div>
  );
};

export default App;
