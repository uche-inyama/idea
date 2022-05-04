import styled from 'styled-components'

const StyledContryDetail = styled.div`
  width: 95%;
  height: 80vh;
  margin: 0 auto;
  .country-detail-wrapper {
    padding-top: 40px;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-gap: 30px;
  }
    i {
      display: block;
      width: 127px;
      padding: 10px 20px;
      text-align: center;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      span {
        padding: 0 10px;
        font-size: 0.7em;
      } 
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
    .language-list {
      font-weight: 400;
      color: #fff;
    }
    .country-name {
      font-weight: 800;
      font-size: 1.2rem;
    }
  }

  .d-flex {
    display: flex;
    text-align: center;

    .item {
      margin-right: 5px;
      padding: 0 15px;
      border: solid 1px hsl(0, 0%, 80%);
      border-radius: 5%;
    }
  }
  .level-2 {
    padding: 20px 0;
  }
  .border-country {
    padding-top: 20px;
  }
 
  @media(min-width: 900px) {
    .country-detail-card {
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