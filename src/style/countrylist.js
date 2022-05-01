import styled from "styled-components";

const StyledCountryList = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0 20px;

    li {
      padding: 20px 0;
      margin-bottom: 20px;
    }

    li:first-child {
      border-radius: 5px;
    }

    img {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      height: 177px;
    }
  }
`

export default StyledCountryList;