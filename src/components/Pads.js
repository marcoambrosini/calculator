import styled from "styled-components"

export default styled.div`
  display: grid;
  grid-template-columns: repeat(4, 72px);
  grid-template-rows: repeat(5, 72px);
  grid-template-areas:
    "r d m ."
    "t y u c"
    "g h j s"
    "v b n a"
    "z p e e";

  margin: 30px auto auto auto;
`
