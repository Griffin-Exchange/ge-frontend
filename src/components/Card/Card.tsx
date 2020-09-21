import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  background: ${(props) => props.theme.color.blackDoff};
  border-radius: 12px;
  box-shadow: 17px 17px 34px #1b1b1b, -17px -17px 34px #353535;
  padding: 18px;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Card
