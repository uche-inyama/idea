import styled from "styled-components";

const StyledCountryList = styled.ul`
  margin: 0 auto;
  width: 75%;
  padding: 0;
  position: relative;
  top: 250px;
  display: grid;
  li {
    list-style: none;
    margin-bottom: 40px;
  }

  @media(min-width: 900px) {
    width: 95%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    padding-left: 0px;
  }
`

export default StyledCountryList;