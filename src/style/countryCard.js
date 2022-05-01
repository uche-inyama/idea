import styled from 'styled-components'

const StyledCard = styled.div`
.image-wrapper {
  border-radius: 50px;
  background-image: url(${props => props.img});
  height: 177px;
  background-repeat: no-repeat
  background-position: center; 
  background-size: cover;
}
`

export default StyledCard;

