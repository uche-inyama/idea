import styled from 'styled-components'

const StyledCard = styled.div`
.country-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  // width: 95%;
  // margin: 20px auto;
  img {
    height: 100%;
    width: 100%;
  }

  .description {
    height: 13em;
  //   width: 100%;
    padding: 20px 0 60px 20px;
    line-height: 2;
    // background-color: hsl(0, 0%, 100%);
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
    span {
      font-weight: 600;
      font-size: 0.875rem;
      color: hsl(200, 15%, 8%);
    }
  }
  h2 {
    font-weight: 800;
    color: #000;
    font-size: 1.0rem;
  }
  .item {
    width: 50px;
    text-align: center;
    background-color: #fff;
  }
}

@media(min-width: 900px) {
  width: 100%;
  border-radius: 5px;
  .image-wrapper {
    width: 100%;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
 
  .description {
    height: 200px;
  }
}
`

export default StyledCard;

