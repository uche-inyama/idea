import styled from 'styled-components'


const StyledContryDetail = styled.div`
  position: relative;
  top: 100px;
  form {
    padding: 0px 20px 0px 20px;
  }
  .detail-description{
    padding: 20px 0 60px 0px;
    line-height: 2;
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
    span {
      font-weight: 600;
      font-size: 1rem;
      color: hsl(200, 15%, 8%);
    }
  }
  .d-flex {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .level-2 {
    padding: 20px 0;
  }
  .border-country {
    padding-top: 20px;
  }

  @media(min-width: 900px) {
    .country-card {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 100px;

      .d-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
      }
    }
 
  }
`

export default StyledContryDetail;