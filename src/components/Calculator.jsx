import "./Calculator.css";
import React, { useState } from "react";

const Calculator = () => {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operations, setOperations] = useState("");

  const appendHandler = (event) => {
    const value = event.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
    console.log(value);
  };

  const deleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };

  const allDeleteHandler = () => {
    setCurrent("");
    setPrevious("");
    setOperations("");
  };

  const chooseOperationHandler = (event) => {
    if (current === "") return;
    if (previous !== "") {
      let value = calculate();
      setPrevious(value);
    } else {
      setPrevious(current);
    }
    setCurrent("");
    setOperations(event.target.getAttribute("data"));
  };

  const equalHandler = () => {
    let value = calculate();
    if (value === undefined || value === null) return;
    setCurrent(value);
    setPrevious('')
    setOperations('')
  };

  const calculate = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operations) {
      case "%":
        result = previousNumber % currentNumber;
        break;
      case "/":
        result = previousNumber / currentNumber;
        break;
      case "*":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      case "%":
        result = previousNumber % currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

  return (
    <div className=" flex justify-center items-center  ">
      <div className="  p-4 bg-gradient-to-r from-purple-500  to-cyan-600 mt-44 lg:mt-10 md:mt-16 shadow-md border border-gray-300 rounded-lg">
        <div className=" h-[74px] mb-6 border-2 rounded-md border-[#f700ff] result-wrapper flex flex-col items-end justify-around bg-[#40ecff] p-2 my-2 text-[#0b0a0a]">
          <div className="previous text-xs">
            {previous} {operations}
          </div>
          <div className="current text-2xl font-semibold whitespace-pre-wrap">
            {!current ? 0 : current}
          </div>  
        </div>
        <div className="buttons grid grid-flow-row grid-cols-4 gap-3">
          <button onClick={allDeleteHandler} className=" button col-span-2 extra">
            AC
          </button>
          <button onClick={deleteHandler} className=" button extra">
            DEL
          </button>
          <button
            onClick={chooseOperationHandler}
            data={"%"}
            className=" button extra"
          >
            %
          </button>
          <button data={7} onClick={appendHandler} className=" button">
            7
          </button>
          <button data={8} onClick={appendHandler} className=" button">
            8
          </button>
          <button data={9} onClick={appendHandler} className=" button">
            9
          </button>
          <button
            onClick={chooseOperationHandler}
            data={"/"}
            className=" button extra"
          >
            /
          </button>
          <button data={4} onClick={appendHandler} className=" button">
            4
          </button>
          <button data={5} onClick={appendHandler} className=" button">
            5
          </button>
          <button data={6} onClick={appendHandler} className=" button">
            6
          </button>
          <button
            onClick={chooseOperationHandler}
            data={"*"}
            className=" button extra"
          >
            *
          </button>
          <button data={1} onClick={appendHandler} className=" button">
            1
          </button>
          <button data={2} onClick={appendHandler} className=" button">
            2
          </button>
          <button data={3} onClick={appendHandler} className=" button">
            3
          </button>
          <button
            onClick={chooseOperationHandler}
            data={"+"}
            className=" button extra"
          >
            +
          </button>
          <button data={0} onClick={appendHandler} className=" button">
            0
          </button>
          <button data={"."} onClick={appendHandler} className=" button">
            .
          </button>
          <button data={"="} onClick={equalHandler} className=" button extra">
            =
          </button>
          <button
            onClick={chooseOperationHandler}
            data={"-"}
            className=" button extra"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
