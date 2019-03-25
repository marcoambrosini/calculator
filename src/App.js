import React, { useState } from "react"

import Case from "./components/Case"
import Panel from "./components/Panel"
import Display from "./components/Display"
import Brand from "./components/Brand"
import Board from "./components/Board"
import Pads from "./components/Pads"
import Pad from "./components/Pad"
import EqualPad from "./components/EqualPad"
import FunctionPad from "./components/FunctionPad"

export default function App() {
  const [expression, setExpression] = useState("")
  const [result, setResult] = useState("")

  let pushToString = e => {
    setExpression(expression.concat(e.target.value))
  }

  let handleOperator = e => {
    let last = expression[expression.length - 1]
    if (last === "+" || last === "-" || last === "*" || last === "/") {
      setExpression(expression.slice(0, -1).concat(e.target.value))
    } else {
      pushToString(e)
    }
  }

  let handleDecimal = e => {
    let expressionArr = expression.split(/\+|\-|\*|\//gi)
    let last = expressionArr[expressionArr.length - 1]
    console.log(last)
    if (last === "." || last.indexOf(".") !== -1) {
      return 0
    } else if (last === "+" || last === "-" || last === "*" || last === "/") {
      setExpression(expression.concat("0."))
    } else pushToString(e)
  }

  let handleEquals = () => {
    console.log(expression)
    setResult(eval(expression))
  }

  let handleClear = () => {
    setExpression("")
    setResult("")
  }

  return (
    <div className="App">
      <Case>
        <Panel />
        <Display id="display">
          <h4>{result ? result : expression}</h4>
        </Display>
        <Brand>
          <span className="brand">Texas instruments</span>
          <span className="model">Datamath</span>
        </Brand>
        <Board>
          <Pads>
            <FunctionPad
              className="ce"
              id="clear"
              value="CE"
              onClick={handleClear}
            >
              CE
            </FunctionPad>
            <FunctionPad
              className="divide"
              id="divide"
              value="/"
              onClick={handleOperator}
            >
              ÷
            </FunctionPad>
            <FunctionPad
              className="multiply"
              id="multiply"
              value="*"
              onClick={handleOperator}
            >
              ×
            </FunctionPad>
            <Pad className="seven" id="seven" value="7" onClick={pushToString}>
              7
            </Pad>
            <Pad className="eight" id="eight" value="8" onClick={pushToString}>
              8
            </Pad>
            <Pad className="nine" id="nine" value="9" onClick={pushToString}>
              9
            </Pad>
            <FunctionPad className="c" id="" value="C" onClick={handleClear}>
              C
            </FunctionPad>
            <Pad className="four" id="four" value="4" onClick={pushToString}>
              4
            </Pad>
            <Pad className="five" id="five" value="5" onClick={pushToString}>
              5
            </Pad>
            <Pad className="six" id="six" value="6" onClick={pushToString}>
              6
            </Pad>
            <FunctionPad
              className="subtract"
              id="subtract"
              onClick={handleOperator}
              value="-"
            >
              -
            </FunctionPad>
            <Pad className="one" id="one" value="1" onClick={pushToString}>
              1
            </Pad>
            <Pad className="two" id="two" value="2" onClick={pushToString}>
              2
            </Pad>
            <Pad className="three" id="three" value="3" onClick={pushToString}>
              3
            </Pad>
            <FunctionPad
              className="add"
              id="add"
              value="+"
              onClick={handleOperator}
            >
              +
            </FunctionPad>
            <Pad className="zero" id="zero" value="0" onClick={pushToString}>
              0
            </Pad>
            <Pad
              className="point"
              id="decimal"
              value="."
              onClick={handleDecimal}
            >
              .
            </Pad>
            <EqualPad
              className="equal"
              id="equals"
              value="="
              onClick={handleEquals}
            >
              =
            </EqualPad>
          </Pads>
        </Board>
      </Case>
    </div>
  )
}
