import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import griffin from '../../assets/img/griffin.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img src={griffin} height="45" style={{ marginTop: -4 }} />
      <StyledText>GRIFFIN EXCHANGE</StyledText>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`
// font-family: 'Reem Kufi', sans-serif;

const StyledText = styled.span`
  color: ${(props) => props.theme.color.whiteDoff};
  font-family: 'Bebas Neue', cursive;
  font-size: 20px;
  letter-spacing: 0.03em;
  margin-left: ${(props) => props.theme.spacing[2]}px;
  @media (max-width: 400px) {
    display: none;
  }
`

// const MasterChefText = styled.span`
//   font-family: 'Kaushan Script', sans-serif;
// `

export default Logo
