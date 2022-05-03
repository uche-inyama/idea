import styled from 'styled-components'


const StyledContryDetail = styled.div`
  width: 95%;
  margin: 0 auto;
  .back-button {
  }
    i {
      padding: 15px 20px;
      text-align: center;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }

  .image-wrapper {
    width: 100%;
  }

  img {
    width: 100%;
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
    display: flex;
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
      grid-gap: 50px;

      .d-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
      }
    }
    .country-card.detail {
      box-shadow: 0; 
    }
    .image-wrapper{
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 20px;
    }
    .image-wrapper.detail {
      height: 300px;
    }
  }
`

export default StyledContryDetail;