import React, { Component } from "react"

import Case from "./components/Case"
import Panel from "./components/Panel"
import Display from "./components/Display"
import Brand from "./components/Brand"

export default App

function App() {
  return (
    <div className="App">
      <Case>
        <Panel />
        <Display>
          <h4>43534543543258</h4>
        </Display>
        <Brand>Texas instruments</Brand>
      </Case>
    </div>
  )
}
