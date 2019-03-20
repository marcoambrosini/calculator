import React, { Component } from "react"

import Case from "./components/Case"
import Panel from "./components/Panel"
import Display from "./components/Display"
import Brand from "./components/Brand"
import Board from "./components/Board"
import Pads from "./components/Pads"
import Pad from "./components/Pad"

export default App

function App() {
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
            <Pad className="ce" onClick={handleClick}>
              ce
            </Pad>
            <Pad className="divide" onClick={handleClick}>
              ÷
            </Pad>
            <Pad className="multiply" onClick={handleClick}>
              ×
            </Pad>
            <Pad className="n" onClick={handleClick}>
              7
            </Pad>
            <Pad className="n" onClick={handleClick}>
              8
            </Pad>
            <Pad className="n" onClick={handleClick}>
              9
            </Pad>
            <Pad className="c" onClick={handleClick}>
              c
            </Pad>
            <Pad className="n" onClick={handleClick}>
              4
            </Pad>
            <Pad className="n" onClick={handleClick}>
              5
            </Pad>
            <Pad className="n" onClick={handleClick}>
              6
            </Pad>
            <Pad className="subtract" onClick={handleClick}>
              -
            </Pad>
            <Pad className="n" onClick={handleClick}>
              1
            </Pad>
            <Pad className="n" onClick={handleClick}>
              2
            </Pad>
            <Pad className="n" onClick={handleClick}>
              3
            </Pad>
            <Pad className="add" onClick={handleClick}>
              +
            </Pad>
            <Pad className="n" onClick={handleClick}>
              0
            </Pad>
            <Pad className="point" onClick={handleClick}>
              .
            </Pad>
            <Pad className="equal" onClick={handleClick}>
              =
            </Pad>
          </Pads>
        </Board>
      </Case>
    </div>
  )
}
