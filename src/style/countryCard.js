import styled from 'styled-components'

const StyledCard = styled.div`
.country-card {
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
  img {
    width: 100%;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;

  }
  .description {
    padding: 20px 0 60px 20px;
    line-height: 2;
    background-color: hsl(0, 0%, 100%);
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
    span {
      font-weight: 600;
      font-size: 1rem;
      color: hsl(200, 15%, 8%);
    }
  }
  h2 {
    font-weight: 800;
    color: #000;
    font-size: 1.2rem;
  }
}
`

export default StyledCard;

