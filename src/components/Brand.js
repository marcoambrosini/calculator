import styled from "styled-components"

export default styled.div`
  position: absolute;
  width: 353px;
  height: 52px;
  left: calc(50% - 353px / 2);
  top: calc(50% - 52px / 2 - 126px);

  background: #344340;
  box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`
