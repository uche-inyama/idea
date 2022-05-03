import styled from "styled-components";

const StyledCountryList = styled.ul`
  padding: 0;
  position: relative;
  top: 200px;
  display: grid;
  li {
    list-style: none;
  }

  @media(min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    padding-left: 0px;
  }
`

export default StyledCountryList;