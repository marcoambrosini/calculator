import React, { Component } from "react"

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
  let handleClick = function() {
    return "hello"
  }

  return (
    <div className="App">
      <Case>
        <Panel />
        <Display>
          <h4>43534543543258</h4>
        </Display>
        <Brand>
          <span className="brand">Texas instruments</span>
          <span className="model">Datamath</span>
        </Brand>
        <Board>
          <Pads>
            <FunctionPad className="ce" onClick={handleClick}>
              ce
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
              c
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
