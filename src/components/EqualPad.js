import styled from "styled-components"

export default styled.button`
  background: #f8792d;
  box-shadow: 2px -2px 0px #686f6e;
  border-radius: 2px;
  width: 130px;
  height: 60px;
  border: 0px;
  margin: auto;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  &:active {
    background-color: #d25306;
    box-shadow: inset 2px -2px 0px #686f6e;
  }
  &:focus {
    outline: none;
  }
`
