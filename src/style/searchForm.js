import styled from 'styled-components'

const StyledSearchForm = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
  input {
    width: 45%;
    height: 36px;
    position: relative;
  }
  .fa-magnifying-glass {
    position: absolute;
    padding: 0 10px;
    z-index: 1;
    top: 71px;
  }
`;

export default StyledSearchForm;