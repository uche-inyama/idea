import styled from 'styled-components'

const StyledSearchForm = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
  input {
    width: 45%;
    height: 36px;
    position: relative;
    border: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    ::placeholder {
      padding-left: 10px;
    }
  }
  .fa-magnifying-glass {
    position: absolute;
    padding: 0 10px;
    z-index: 1;
    top: 71px;
  }
  @media(min-width: 900px){
   min-width: 70%;
  }
`;

export default StyledSearchForm;