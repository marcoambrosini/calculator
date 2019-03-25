import styled from "styled-components"

export default styled.button`
  background: #b2b1a4;
  box-shadow: 2px -2px 0px #686f6e;
  border-radius: 2px;
  width: 60px;
  height: 60px;
  border: 0px;
  margin: auto;
  color: white;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  &:active {
    background-color: #a5a494;
    box-shadow: inset 2px -2px 0px #686f6e;
  }
  &:focus {
    outline: none;
  }
`
