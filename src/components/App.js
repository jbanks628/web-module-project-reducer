import React, { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";
import reducer, { initialState } from "../reducers";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryAdd,
  memoryApply,
  memoryClear,
} from "../actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumbers = (num) => {
    dispatch(applyNumber(num));
  };

  const handleOperation = (operator) => {
    dispatch(changeOperation(operator));
  };

  const handleClear = () => {
    dispatch(clearDisplay());
  };

  const handleMemoryAdd = () => {
    dispatch(memoryAdd());
  };

  const handleMemoryApply = () => {
    dispatch(memoryApply());
  };

  const handleMemoryClear = () => {
    dispatch(memoryClear());
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b>
                {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemoryAdd} />
              <CalcButton value={"MR"} oncClick={handleMemoryApply} />
              <CalcButton value={"MC"} onClick={handleMemoryClear} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleNumbers(1)} />
              <CalcButton value={2} onClick={() => handleNumbers(2)} />
              <CalcButton value={3} onClick={() => handleNumbers(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumbers(4)} />
              <CalcButton value={5} onClick={() => handleNumbers(5)} />
              <CalcButton value={6} onClick={() => handleNumbers(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNumbers(7)} />
              <CalcButton value={8} onClick={() => handleNumbers(8)} />
              <CalcButton value={9} onClick={() => handleNumbers(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperation("+")} />
              <CalcButton value={"*"} onClick={() => handleOperation("*")} />
              <CalcButton value={"-"} onClick={() => handleOperation("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
