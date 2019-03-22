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
  const [value, setValue] = useState("0")
  const [memValue, setMemValue] = useState("0")
  const [operation, setOperation] = useState("")
  const [isResult, setIsResult] = useState(false)
  const [result, setResult] = useState("")
  const [isFloat, setIsFloat] = useState(false)

  const handleClick = e => {
    let key = e.target.innerHTML //maybe change this to IDs
    //checking that the displayed value is not a result, and if it's the case, clear it out
    if (isResult) {
      setValue("0")
      setIsResult(false)
    }
    //if it's an float or if it's equal to zero
    if (parseFloat(key) || key === "0") {
      if (value == 0) {
        setValue(key)
      } else if (value != 0) {
        setValue(value.concat(key)) //concatenate the new digit to the existing displayed value, parse it back to float
      }
    } else if (key === "C" || key === "CE") {
      setValue("0")
    } else if (key === "÷") {
      if (result) {
        setMemValue(result)
      } else {
        setMemValue(value)
      }
      setValue(0)
      setOperation("divide")
    } else if (key === "×") {
      if (result) {
        setMemValue(result)
      } else {
        setMemValue(value)
      }
      setValue(0)
      setOperation("multiply")
    } else if (key === "+") {
      if (result) {
        setMemValue(result)
      } else {
        setMemValue(value)
      }
      setValue(0)
      setOperation("add")
    } else if (key === "-") {
      if (result) {
        setMemValue(result)
      } else {
        setMemValue(value)
      }
      setValue(0)
      setOperation("subtract")
    } else if (key === ".") {
      setValue(value.concat(key))
    } else if (key === "=") {
      let floatValue = parseFloat(value)
      let floatMemValue = parseFloat(memValue)
      console.log(
        `floatValue is ${floatValue} ant it's type is ${typeof floatValue}`
      )
      console.log(
        `floatMemValue is ${floatMemValue} ant it's type is ${typeof floatMemValue}`
      )

      setValue(floatValue)
      setMemValue(floatMemValue)

      console.log(`floatValue is ${value} ant it's type is ${typeof value}`)
      console.log(
        `floatMemValue is ${memValue} ant it's type is ${typeof memValue}`
      )

      if (operation === "divide") {
        setResult((floatMemValue / floatValue).toString())
      } else if (operation === "multiply") {
        setResult((floatMemValue * floatValue).toString())
      } else if (operation === "add") {
        console.log("hello")
        setResult((floatMemValue + floatValue).toString())
      } else if (operation === "subtract") {
        setResult((floatMemValue - floatValue).toString())
      } else if (operation === "") {
        setIsResult(true)

        return 0
      }
      setMemValue(0)
      setValue(0)
      setOperation("")
      setIsResult(true)
    }
  }

  return (
    <div className="App">
      <Case>
        <Panel />
        <Display>
          <h4>{isResult ? result : value}</h4>
        </Display>
        <Brand>
          <span className="brand">Texas instruments</span>
          <span className="model">Datamath</span>
        </Brand>
        <Board>
          <Pads>
            <FunctionPad className="ce" onClick={handleClick}>
              CE
            </FunctionPad>
            <FunctionPad className="divide" onClick={handleClick}>
              ÷
            </FunctionPad>
            <FunctionPad className="multiply" onClick={handleClick}>
              ×
            </FunctionPad>
            <Pad className="seven" onClick={handleClick}>
              7
            </Pad>
            <Pad className="eight" onClick={handleClick}>
              8
            </Pad>
            <Pad className="nine" onClick={handleClick}>
              9
            </Pad>
            <FunctionPad className="c" onClick={handleClick}>
              C
            </FunctionPad>
            <Pad className="four" onClick={handleClick}>
              4
            </Pad>
            <Pad className="five" onClick={handleClick}>
              5
            </Pad>
            <Pad className="six" onClick={handleClick}>
              6
            </Pad>
            <FunctionPad className="subtract" onClick={handleClick}>
              -
            </FunctionPad>
            <Pad className="one" onClick={handleClick}>
              1
            </Pad>
            <Pad className="two" onClick={handleClick}>
              2
            </Pad>
            <Pad className="three" onClick={handleClick}>
              3
            </Pad>
            <FunctionPad className="add" onClick={handleClick}>
              +
            </FunctionPad>
            <Pad className="zero" onClick={handleClick}>
              0
            </Pad>
            <Pad className="point" onClick={handleClick}>
              .
            </Pad>
            <EqualPad className="equal" onClick={handleClick}>
              =
            </EqualPad>
          </Pads>
        </Board>
      </Case>
    </div>
  )
}
