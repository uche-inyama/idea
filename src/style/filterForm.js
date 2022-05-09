import styled from 'styled-components';

const StyledFilterForm = styled.div`
  margin: 0 auto;
  width: 90%;
  padding-top: 20px;
  // display: flex;
  // justify-content: flex-end;
  select {
    width: 30%;
    height: 36px;
    border: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media(min-width: 900px){
    display: flex;
    justify-content: flex-end;
    select {
      width: 170px;
    }
  }
`
export default StyledFilterForm;