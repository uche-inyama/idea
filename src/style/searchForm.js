import styled from 'styled-components'

const StyledSearchForm = styled.div`
  padding: 20px 0;
  input {
    height: 30px;
    position: relative;
  }
  .fa-magnifying-glass {
    position: absolute;
    left: 180px;
    z-index: 1;
    top: 67px;
  }
`;

export default StyledSearchForm;